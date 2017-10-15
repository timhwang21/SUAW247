export default function notify(message, body) {
  const options = {
    body,
  };

  if (!('Notification' in window)) {
    alert(message);
  } else if (Notification.permission === 'granted') {
    new Notification(message, options);
  } else if (Notification.permission !== 'denied') {
    Notification.requestPermission(
      permission =>
        permission === 'granted' && new Notification(message, options),
    );
  }
}
