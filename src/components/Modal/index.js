/*----------Base imports----------*/
import React, { Component } from 'react';

/*----------Components, sections, modules----------*/

/*----------Shared components----------*/
import Button from 'components/Buttons/Button';
import ComponentError from 'components/Errors/ComponentError';
import RequestLoader from 'components/Loaders/RequestLoader';

/*----------Actions----------*/

/*----------Component start----------*/
class Modal extends Component {
  constructor(props) {
    super(props);
  }

  /*----------Lifecycle methods----------*/
  componentDidMount() {
    
  }

  componentDidUpdate(prevProps, prevState) {

  }

  render() {
    const { status, children } = this.props;

    const renderContent = () => {
      return (
        <div className={`Modal__content`}>{children}</div>
      )
    };

    const renderModalContents = () => {
      switch (status) {
        case 'success': return renderContent();
        case 'error': return <ComponentError />;
        case 'loading':
        default: return <RequestLoader />;
      }
    };

    /*----------Render component----------*/
    return (
      <div className={`Modal__container`}>
        <div className={`Modal__backdrop`}></div>
        <div className={`Modal`}>
          {renderModalContents()}
        </div>
      </div>
    );
  }
};

/*----------Component end----------*/

export default Modal;