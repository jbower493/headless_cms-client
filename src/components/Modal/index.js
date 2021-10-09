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
    const {
      className,
      status,
      title,
      body: { heading, table, rest },
      actions: { primary, secondary }
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
            <Button
              type='onClick'
              buttonStyle='outline'
              onClick={secondary.onClick}
              text={secondary.text} />
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
          {renderModalContents()}
        </div>
      </div>
    );
  }
};

/*----------Component end----------*/

export default Modal;