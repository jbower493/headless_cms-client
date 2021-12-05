/*----------Base imports----------*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/*----------Components, sections, modules----------*/

/*----------Shared components----------*/
import Modal from 'components/Modal';

/*----------Actions----------*/

/*----------Component start----------*/
class ConfirmModal extends Component {
  /*----------Lifecycle methods----------*/
  componentDidMount() {

  }

  componentDidUpdate(prevProps, prevState) {

  }

  render() {
    const {
      onConfirm,
      onBack,
      close,
      status,
      title,
      desc
    } = this.props;

    const handleStatus = () => {
      switch (status) {
        case 'success':
        case 'error':
        case 'loading': return status;
        case null:
        default: return 'success';
      }
    };

    /*----------Render component----------*/
    return (
      <Modal
        className={`Modal--confirm`}
        status={handleStatus()}
        title={title}
        body={{
          rest: desc
        }}
        actions={{
          primary: {
            type: 'onClick',
            text: 'Confirm',
            onClick: onConfirm
          },
          secondary: {
            type: 'onClick',
            text: 'Go Back',
            onClick: onBack
          }
        }}
        closeModal={close} />
    );
  }
};

/*----------Component end----------*/

export default ConfirmModal;

ConfirmModal.propTypes = {
  onConfirm: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
  status: PropTypes.oneOf([
    null,
    'loading',
    'error',
    'success'
  ]),
  title: PropTypes.string.isRequired,
  desc: PropTypes.node
};