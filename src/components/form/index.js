import { formControl } from '../decorators';
import _Scale from '../Scale';

export default formControl;

export const Input = formControl('input');
export const Scale = formControl(_Scale);
export const TextArea = formControl('textarea');
