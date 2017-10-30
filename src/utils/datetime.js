import format from 'date-fns/fp/format';

const DISPLAY_FORMAT = 'hh:mm:ss A';

export const formatDisplay = format(DISPLAY_FORMAT);
