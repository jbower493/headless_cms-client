/*----------Base imports----------*/
import React, { Component } from 'react';

/*----------Components, sections, modules----------*/

/*----------Shared components----------*/

/*----------Actions----------*/

/*----------Component start----------*/
class Table extends Component {
  constructor(props) {
    super(props);
  }

  /*----------Lifecycle methods----------*/
  componentDidMount() {
    
  }

  componentDidUpdate(prevProps, prevState) {

  }

  render() {
    const { status, head, body } = this.props;

    const renderHead = () => {
      return head
        ? (
          <thead>
            <tr>
              {head.map((item, index) => {
                return (
                  <th key={index}>{item}</th>
                );
              })}
            </tr>
          </thead>
        )
        : ''
    };

    const renderBody = () => {
      return body.map((row, index) => {
        return (
          <tr key={index}>
            {
              Object.keys(row).map((key, index) => {
                return (
                  <td key={index} className={key}>{row[key]}</td>
                )
              })
            }
          </tr>
        )
      })
    };

    /*----------Render component----------*/
    return (
      <div className={`theTable`}>
        <table>
          {renderHead()}
          <tbody>
            {renderBody()}
          </tbody>
        </table>
      </div>
    );
  }
};

/*----------Component end----------*/

export default Table;