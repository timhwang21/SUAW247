import notify from '../utils/notify';

export const SEND_NOTIFICATION = 'notification/SEND_NOTIFICATION';
export const sendNotification = (message, body, audio) => dispatch => {
  audio && audio.play();
  notify(message, body);

  dispatch({
    type: SEND_NOTIFICATION,
    payload: {
      message,
      body,
    },
  });
};
