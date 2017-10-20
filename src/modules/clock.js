import {
  addSeconds,
  subMinutes,
  differenceInSeconds,
  endOfHour,
  isBefore,
  format,
} from 'date-fns';

import work_start_mp3 from '../static/audio/work_start.mp3';
import break_start_mp3 from '../static/audio/break_start.mp3';

import { sendNotification } from './notification';

const workStart = new Audio(work_start_mp3);
const breakStart = new Audio(break_start_mp3);

function calcTime(prevTime = {}) {
  const now = new Date();

  // Lazily calculate nextCutoff
  let nextCutoff;

  if (prevTime.nextCutoff && isBefore(now, prevTime.nextCutoff)) {
    nextCutoff = prevTime.nextCutoff;
  } else {
    const nextHour = addSeconds(endOfHour(now), 1);
    const nextHalfHour = subMinutes(nextHour, 30);
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
    dispatch(
      sendNotification(
        'Break time!',
        'Fill out your accomplishments!',
        breakStart,
      ),
    );
  }

  if (!minutes && !seconds) {
    dispatch(
      sendNotification(
        'Time to start working again!',
        'Pick a goal to focus on.',
        workStart,
      ),
    );
  }
};

export const getCurrentTime = state =>
  format(state.clock.currentTime, 'hh:mm:ss A');
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
