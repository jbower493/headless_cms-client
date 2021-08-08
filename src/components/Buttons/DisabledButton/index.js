/*----------Base imports----------*/
import React, { Component } from 'react';

/*----------Component start----------*/
class DisabledButton extends Component {
  render() {
    const { text } = this.props;

    /*----------Render component----------*/
    return (
      <div className="DisabledButton">{text}</div>
    );
  }
};

/*----------Component end----------*/
export default DisabledButton;