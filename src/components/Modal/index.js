/*----------Base imports----------*/
import React, { Component } from 'react';

import { close } from 'utilities/icons';

/*----------Components, sections, modules----------*/

/*----------Shared components----------*/
import Button from 'components/Buttons/Button';
import ComponentError from 'components/Errors/ComponentError';
import RequestLoader from 'components/Loaders/RequestLoader';

/*----------Actions----------*/

/*----------Component start----------*/
class Modal extends Component {
  /*----------Lifecycle methods----------*/
  componentDidMount() {

  }

  componentDidUpdate(prevProps, prevState) {

  }

  render() {
    const {
      className,
      status,
      title,
      body: { heading, table, rest },
      actions: { primary, secondary },
      closeModal
    } = this.props;

    const renderContent = () => {
      return (
        <div className={`Modal__content`}>
          <h2 className={`Modal__header`}>{title}</h2>
          <div className={`Modal__body`}>
            <h3 className={`Modal__bodyHeading`}>{heading}</h3>
            <div className={`Modal__bodyTable`}>{table}</div>
            {rest}
          </div>
          <div className={`Modal__footer`}>
            {
              primary &&
                <div className={`Modal__buttonContainer`}>
                  {
                    primary.type === 'submit'
                      ? primary.submitButton
                      : (
                        <Button
                          type='onClick'
                          buttonStyle='solid'
                          onClick={primary.onClick}
                          text={primary.text} />
                      )
                  }
                </div>
            }
            {
              secondary &&
                <div className={`Modal__buttonContainer`}>
                  <Button
                    type='onClick'
                    buttonStyle='outline'
                    onClick={secondary.onClick}
                    text={secondary.text} />
                </div>
            }
          </div>
        </div>
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
        <div className={`Modal${className ? ' ' + className : ''}`}>
          <i className={`Modal__close ${close}`} onClick={closeModal} />
          {renderModalContents()}
        </div>
      </div>
    );
  }
};

/*----------Component end----------*/

export default Modal;