import { shape, string, object, number } from 'prop-types';

export default shape({
  id: string,
  user_id: string,
  created_at: object,
  updated_at: object,
  goal: string.isRequired,
  accomplishment: string.isRequired,
  productivity: number.isRequired,
  focus: number.isRequired,
});
