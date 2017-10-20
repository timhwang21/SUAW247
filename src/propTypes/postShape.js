import { shape, string, number } from 'prop-types';

export default shape({
  id: string,
  user_id: string,
  created_at: string,
  updated_at: string,
  goal: string,
  accomplishment: string,
  productivity: number,
  focus: number,
});
