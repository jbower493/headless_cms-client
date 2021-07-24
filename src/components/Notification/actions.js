export const NOTIFICATION_SET = 'notification/NOTIFICATION_SET';
export const NOTIFICATION_DISMISS = 'notification/NOTIFICATION_DISMISS';

/********** NOTIFICATIONS **********/

export const setNotification = (type, text) => {
  return dispatch => {
    dispatch({
      type: NOTIFICATION_SET,
      notification_data: {
        type,
        text
      }
    })
  }
}

export const dismissNotification = () => {
  return dispatch => {
    dispatch({
      type: NOTIFICATION_DISMISS
    })
  }
}