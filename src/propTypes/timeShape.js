import { shape, number } from 'prop-types';

export default shape({
  minutes: number.isRequired,
  seconds: number.isRequired,
});