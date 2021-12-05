/*----------Base imports----------*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/*----------Component start----------*/
class Button extends Component {
  render() {
    const { type, text, buttonStyle, color, onClick } = this.props;

    const getClassName = () => {
      switch (buttonStyle) {
        case 'outline': return 'OutlineButton';
        case 'solid':
        default: return 'SolidButton';
      }
    };

    const addColorModifier = () => {
      return color && color !== 'primary' ? ` ${getClassName()}--${color}` : '';
    };

    /*----------Render component----------*/
    switch (type) {
      case 'submit': return (
        <button
          className={`${getClassName()}${addColorModifier()}`}
          type={'submit'}
        >{text}</button>
      );
      case 'onClick': return (
        <button
          type="button"
          onClick={onClick}
          className={`${getClassName()}${addColorModifier()}`} >
            {text}
        </button>
      );
      default: return <button className={`${getClassName()}${addColorModifier()}`}>{text}</button>;
    }
  }
};

/*----------Component end----------*/
export default Button;

Button.propTypes = {
  type: PropTypes.oneOf([
    'submit',
    'onClick'
  ]),
  text: PropTypes.string.isRequired,
  buttonStyle: PropTypes.oneOf([
    'solid',
    'outline'
  ]),
  color: PropTypes.string,
  onClick: (props, propName) => {
    if (props.type !== 'onClick') return;
    if (!props[propName] || typeof props[propName] !== 'function') return new Error('When button type is onClick, a funtion must be provded as the "onClick" prop.')
  }
};