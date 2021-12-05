/*----------Base imports----------*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { close } from 'utilities/icons';

/*----------Components, sections, modules----------*/

/*----------Shared components----------*/
import Button from 'components/Buttons/Button';
import ComponentError from 'components/Errors/ComponentError';
import RequestLoader from 'components/Loaders/RequestLoader';
import Table from 'components/Table';

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

Modal.propTypes = {
  className: PropTypes.string,
  status: PropTypes.oneOf([
    null,
    'loading',
    'error',
    'success'
  ]),
  title: PropTypes.string.isRequired,
  body: PropTypes.exact({
    heading: PropTypes.string,
    table: PropTypes.instanceOf(Table),
    rest: PropTypes.node
  }).isRequired,
  actions: PropTypes.instanceOf({
    primary: PropTypes.instanceOf({
      type: 'submit',
      submitButton: (props, propName, componentName) => {
        if (props.type !== 'submit') return;
        if (!props[propName]) return new Error('If actions.primary.type = "submit", you must pass a submit button as actions.primary.submitButton');
      },
      onClick: (props, propName, componentName) => {
        if (props.type === 'submit') return;
        if (!props[propName] || typeof props[propName] !== 'function') return new Error('If actions.primary.type is not "submit", you must pass a function as actions.primary.onClick');
      },
      text: (props, propName, componentName) => {
        if (props.type === 'submit') return;
        if (!props[propName] || typeof props[propName] !== 'string') return new Error('If actions.primary.type is not "submit", you must pass a string as actions.primary.text');
      }
    }),
    secondary: PropTypes.instanceOf({
      text: PropTypes.string,
      onClick: PropTypes.func
    })
  }).isRequired,
  closeModal: PropTypes.func.isRequired
};