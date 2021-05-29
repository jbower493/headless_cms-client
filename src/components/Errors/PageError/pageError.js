/*----------Base imports----------*/
import React, { Component } from 'react';

/*----------Components, sections, modules----------*/

/*----------Shared components----------*/
import Table from 'components/Table/table';

/*----------Actions----------*/

/*----------Component start----------*/
class PageError extends Component {
  constructor(props) {
    super(props);
  }

  /*----------Lifecycle methods----------*/
  componentDidMount() {
    
  }

  componentDidUpdate(prevProps, prevState) {

  }

  render() {

    const getTableHead = () => {
      return [
        'Column 1',
        'Column 2',
        'Column 3',
        'Actions'
      ];
    };

    const getTableBody = () => {
      const arr = [];
      for(let i = 0; i < 5; i++) {
        arr.push({
          columnOne: (
            <div>
              <div>Top of cell, row {i + 1}</div>
              <div>Bottom of cell, row {i + 1}</div>
            </div>
          ),
          columnTwo: 'Something in column 2',
          column3: 'Something in column 3',
          action: [
            {
              style: 'solid button',
              text: 'Save',
              onClick: () => console.log('clicked')
            },
            {
              style: 'outline button',
              text: 'Delete',
              onClick: () => console.log('clicked')
            }
          ]
        })
      }
      return arr;
    };

    /*----------Render component----------*/
    return (
      <div>
        Page Error
        <Table
          status={'loading'}
          head={getTableHead()}
          body={getTableBody()} />
      </div>
    );
  }
};

/*----------Component end----------*/

export default PageError;