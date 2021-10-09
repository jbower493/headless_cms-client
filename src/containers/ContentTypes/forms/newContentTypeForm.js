/*----------Base imports----------*/
import React, { Component } from 'react';
import { Formik, Field, Form } from 'formik';

import { trash, plus } from 'utilities/icons';
import { supported_field_types } from 'config/config';

/*----------Components, sections, modules----------*/
import { TextField, SelectField, CheckboxField, renderSubmitButton } from 'utilities/form/inputs';

/*----------Shared components----------*/
import Table from 'components/Table';
import RequestLoader from 'components/Loaders/RequestLoader';
import Modal from 'components/Modal';
import EditableTitle from 'components/EditableTitle';

/*----------Actions----------*/
import {
  requiredField,
  multipleValidations
} from 'utilities/form/validation';


/*----------Component start----------*/
class NewContentTypeForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Untitled',
      newFields: []
    }

    this.setName = this.setName.bind(this);
    this.genFieldId = this.genFieldId.bind(this);
    this.registerFieldId = this.registerFieldId.bind(this);
    this.unregisterFieldId = this.unregisterFieldId.bind(this);
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

  genFieldId() {
    return 1;
  }

  registerFieldId(id) {

  }

  unregisterFieldId() {

  }

  addNewField() {
    const field = {
      name: 'Default',
      type: 'text',
      required: true
    };

    this.setState({
      ...this.state,
      newFields: [...this.state.newFields, field]
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
      const fieldId = 1;

      return {
        fieldName: (
          <Field
            embedded={true}
            name={`name::${fieldId}`}
            defaultValue={`Untitled${index === 0 ? '' : `(${index})`}`}
            component={TextField}
          />
        ),
        type: (
          <Field
            embedded={true}
            name={`type::${fieldId}`}
            placeholder="text"
            component={SelectField}
            options={supported_field_types}
          />
        ),
        required: (
          <Field
            embedded={true}
            name={`required::${fieldId}`}
            placeholder="true"
            component={CheckboxField}
          />
        ),
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

    const renderModal = (formProps) => {
      const { dirty, isValid } = formProps;

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
              type: 'submit',
              submitButton: renderSubmitButton(null, dirty, isValid, 'Save Data')
            },
            secondary: {
              type: 'onClick',
              text: 'Cancel',
              onClick: () => alert('Cancelled')
            }
          }} />
      );
    };

    /*----------Render component----------*/
    return (

      <Formik
        initialValues={{

        }}
        onSubmit={(values) => console.log(values)} >
        {(formProps) => {
          return (
            <Form>
              {renderModal(formProps)}
            </Form>
          );
        }}
      </Formik>
    );
  }
};

/*----------Component end----------*/
export default NewContentTypeForm;