import {
  addMinutes,
  differenceInSeconds,
  endOfHour,
  isBefore
} from 'date-fns';

import { sendNotification } from './notification';

function calcTime() {
  const now = new Date();
  const nextHour = endOfHour(now);
  const nextHalfHour = addMinutes(nextHour, -30);
  const isFirstHalfHour = isBefore(now, nextHalfHour);

  const totalSeconds = differenceInSeconds(
    isFirstHalfHour ? nextHalfHour : nextHour,
    now
  );

  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return { totalSeconds, minutes, seconds };
}

export const SET_TIME = 'clock/SET_TIME';
export const setTime = () => dispatch => {
  const time = calcTime();

  const { minutes, seconds } = time;

  dispatch({
    type: SET_TIME,
    payload: time,
  });

  if (minutes === 5 && !seconds) {
    dispatch(sendNotification('Break time!'));
  }

  if (!minutes && !seconds) {
    dispatch(sendNotification('Time to start working again!'));
  }
};

const initialState = calcTime();

export const getTime = state => state.clock;
export const getIsBreak = state => state.clock.minutes < 5;

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_TIME:
      return payload;
    default:
      return state;
  }
};