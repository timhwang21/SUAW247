import { shape, string, number } from 'prop-types';

export default shape({
  id: string,
  user_id: string,
  created_at: string,
  updated_at: string,
  goal: string.isRequired,
  accomplishment: string.isRequired,
  productivity: number.isRequired,
  focus: number.isRequired,
});
