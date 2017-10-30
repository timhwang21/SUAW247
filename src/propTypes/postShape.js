import { oneOfType, shape, string, number, instanceOf } from 'prop-types';

export default shape({
  id: string,
  user_id: string,
  created_at: oneOfType([string, instanceOf(Date)]),
  updated_at: oneOfType([string, instanceOf(Date)]),
  goal: string,
  accomplishment: string,
  productivity: number,
  focus: number,
});
