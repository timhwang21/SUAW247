import {
  addMinutes,
  differenceInSeconds,
  endOfHour,
  isBefore,
  format,
} from 'date-fns';

import { sendNotification } from './notification';

function calcTime(prevTime = {}) {
  const now = new Date();

  // Lazily calculate nextCutoff
  let nextCutoff;

  if (prevTime.nextCutoff && isBefore(now, prevTime.nextCutoff)) {
    nextCutoff = prevTime.nextCutoff;
  } else {
    const nextHour = endOfHour(now);
    const nextHalfHour = addMinutes(nextHour, -30);
    const isFirstHalfHour = isBefore(now, nextHalfHour);
    nextCutoff = isFirstHalfHour ? nextHalfHour : nextHour;
  }

  const totalSeconds = differenceInSeconds(nextCutoff, now);

  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return { totalSeconds, minutes, seconds, currentTime: now, nextCutoff };
}

export const SET_TIME = 'clock/SET_TIME';
export const setTime = () => (dispatch, getState) => {
  const prevTime = getTime(getState());
  const time = calcTime(prevTime);

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

export const getCurrentTime = state =>
  format(state.clock.currentTime, 'hh:mm:ss');
export const getTime = state => state.clock;
export const getNextCutoff = state => state.clock.nextCutoff;
export const getIsBreak = state => state.clock.minutes < 5;
export const getBreakEnding = state => state.clock.minutes < 1;

const initialState = calcTime();

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_TIME:
      return payload;
    default:
      return state;
  }
};
