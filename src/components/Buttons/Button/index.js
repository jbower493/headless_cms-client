/*----------Base imports----------*/
import React, { Component } from 'react';

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
        <input
          className={`${getClassName()}${addColorModifier()}`}
          type={type}
          value={text} />
      );
      case 'onClick': return (
        <button
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