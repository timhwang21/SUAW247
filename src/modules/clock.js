import {
  addMinutes,
  differenceInSeconds,
  endOfHour,
  isBefore
} from 'date-fns';

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
export const setTime = () => ({
  type: SET_TIME,
  payload: calcTime(),
});

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