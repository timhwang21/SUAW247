import { shape, string } from 'prop-types';

export default shape({
  displayName: string.isRequired,
  email: string.isRequired,
  photoURL: string,
});