import { oneOfType, shape, string, number } from 'prop-types';

const firebaseTimestamp = shape({
  nanoseconds: number,
  seconds: number,
});

export default shape({
  id: string,
  user_id: string,
  created_at: oneOfType([string, firebaseTimestamp]),
  updated_at: oneOfType([string, firebaseTimestamp]),
  goal: string,
  accomplishment: string,
  productivity: number,
  focus: number,
});
