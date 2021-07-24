/*----------Base imports----------*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { success, error, question, close } from 'utilities/icons';

/*----------Components, sections, modules----------*/

/*----------Shared components----------*/

/*----------Actions----------*/
import { dismissNotification } from './actions';

/*----------Component start----------*/
class Notification extends Component {
  constructor(props) {
    super(props);

    this.notificationTimer = null;
  }

  /*----------Lifecycle methods----------*/
  componentDidMount() {
    const { dismissNotification } = this.props;
    this.notificationTimer = setTimeout(dismissNotification, 5000);
  }

  componentDidUpdate(prevProps, prevState) {
    const { notification_data, dismissNotification } = this.props;

    if (notification_data !== prevProps.notification_data) {
      clearTimeout(this.notificationTimer);
      this.notificationTimer = null;
      this.notificationTimer = setTimeout(dismissNotification, 5000);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.notificationTimer);
  }

  render() {
    const { notification_data, dismissNotification } = this.props;
    const { type, text } = notification_data;

    const getIcon = () => {
      switch (type) {
        case 'success': return success;
        case 'error': return error;
        case 'info':
        default: return question;
      }
    };

    /*----------Render component----------*/
    return (
      <div className={`Notification Notification--${type || 'info'}`}>
        <div className={`Notification__iconContainer`}>
          <i className={`${getIcon()} Notification__icon`} />
        </div>
        <p className={`Notification__text`}>{text || 'Something went wrong'}</p>
        <i
          className={`${close} Notification__dismiss`}
          onClick={dismissNotification} />
      </div>
    );
  }
};

/*----------Component end----------*/

export default connect(state => ({
  notification_data: state.notification.notification_data
}), {
  dismissNotification
})(Notification);