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
      title: { heading, subheading },
      body,
      actions: { primary, secondary }
    } = this.props;

    const renderContent = () => {
      return (
        <div className={`Modal__content`}>
          <div className={`Modal__header`}>
            {heading}
            {subheading && ':'}
            {subheading && <span className={`Modal__subHeading`}>{subheading}</span>}
          </div>
          <div className={`Modal__body`}>{body}</div>
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