/*----------Base imports----------*/
import React, { Component } from 'react';

import { trash, plus } from 'utilities/icons';

/*----------Components, sections, modules----------*/

/*----------Shared components----------*/
import Table from 'components/Table';
import RequestLoader from 'components/Loaders/RequestLoader';
import Modal from 'components/Modal';
import EditableTitle from 'components/EditableTitle';

/*----------Actions----------*/

/*----------Component start----------*/
class NewContentTypeForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Untitled',
      newFields: []
    }

    this.setName = this.setName.bind(this);
    this.addNewField = this.addNewField.bind(this);
    this.removeField = this.removeField.bind(this);
    this.getFieldsMatrix = this.getFieldsMatrix.bind(this);
  }

  setName(e) {
    e.preventDefault();

    this.setState({
      ...this.state,
      name: e.target.value
    });
  }

  addNewField() {
    const field = {
      name: 'Default',
      type: 'text',
      required: true
    };

    this.setState({
      ...this.state,
      newFields: [ ...this.state.newFields, field ]
    });
  }

  removeField(fieldIndex) {
    this.setState({
      ...this.state,
      newFields: [...this.state.newFields].filter((field, index) => index !== fieldIndex)
    });
  }

  getFieldsMatrix() {
    const { newFields } = this.state;
    const { removeField } = this;

    return newFields.map((item, index) => {

      return {
        fieldName: `The field name`,
        type: 'text',
        required: 'no',
        actions: [
          {
            buttonStyle: 'icon',
            icon: trash,
            onClick: () => removeField(index)
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
    const { name } = this.state;
    const { setName, addNewField, getFieldsMatrix } = this;

    /*----------Render component----------*/
    return (
      <Modal
        className={`newCTForm`}
        status={`success`}
        title={`New Content Type`}
        body={{
          heading: <EditableTitle name={name} onChange={setName} />,
          table: (
            <Table
              status={'success'}
              head={[
                { heading: 'Field Name' },
                { heading: 'Type' },
                { heading: 'Required' },
                { heading: '', type: 'actions' }
              ]}
              body={getFieldsMatrix()} />
          ),
          rest: <i onClick={addNewField} className={`newCTForm__addFieldIcon ${plus}`} />
        }
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