/*----------Base imports----------*/
import React, { Component } from 'react';

/*----------Components, sections, modules----------*/

/*----------Shared components----------*/

/*----------Actions----------*/

/*----------Component start----------*/
class Button extends Component {
  constructor(props) {
    super(props);
  }

  /*----------Lifecycle methods----------*/
  componentDidMount() {
    
  }

  componentDidUpdate(prevProps, prevState) {

  }

  render() {
    const { type, text, style, color, onClick } = this.props;

    const getClassName = () => {
      switch (style) {
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
      case 'submit': return <button type={type} className={`${getClassName()}${addColorModifier()}`}>{text}</button>;
      case 'onClick': return <button onClick={onClick} className={`${getClassName()}${addColorModifier()}`}>{text}</button>;
      default: return <button className={`${getClassName()}${addColorModifier()}`}>{text}</button>;
    }
  }
};

/*----------Component end----------*/

export default Button;