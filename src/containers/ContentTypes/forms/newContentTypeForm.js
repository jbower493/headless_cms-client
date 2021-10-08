/*----------Base imports----------*/
import React, { Component } from 'react';

import { trash } from 'utilities/icons';

/*----------Components, sections, modules----------*/

/*----------Shared components----------*/
import Table from 'components/Table';
import RequestLoader from 'components/Loaders/RequestLoader';
import Modal from 'components/Modal';

/*----------Actions----------*/

/*----------Component start----------*/
class NewContentTypeForm extends Component {
  constructor(props) {
    super(props);

    this.getFieldsMatrix = this.getFieldsMatrix.bind(this);
  }

  getFieldsMatrix(data) {
    if (data?.length <= 0) return [];

    return data.map(item => {

      return {
        fieldName: `The field name`,
        actions: [
          {
            buttonStyle: 'icon',
            icon: trash,
            onClick: () => alert('Hey')
          }
        ]
      }
    })
  }

  /*----------Lifecycle methods----------*/
  componentDidMount() {
    
  }

  componentDidUpdate(prevProps, prevState) {

  }

  render() {
    const { getFieldsMatrix } = this;

    /*----------Render component----------*/
    return (
        <Modal
          className={`contentTypesForm`}
          status={`success`}
          title={{
            heading: 'Edit Content Type',
            subheading: 'Posts'
          }}
          body={
            <Table
              status={'success'}
              head={[
                { heading: 'Field Name' },
                { heading: 'Type' },
                { heading: 'Required' },
                { heading: '', type: 'actions' }
              ]}
              body={getFieldsMatrix([1,2,3,4])}
            />
          }
          actions={{
            primary: {
              type: 'onClick',
              text: 'Save Data',
              onClick: () => alert('Clicked')
            },
            secondary: {
              type: 'onClick',
              text: 'Cancel',
              onClick: () => alert('Cancelled')
            }
          }} />
    );
  }
};

/*----------Component end----------*/
export default NewContentTypeForm; 