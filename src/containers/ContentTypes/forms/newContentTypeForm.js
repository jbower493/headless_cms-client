/*----------Base imports----------*/
import React, { Component } from 'react';
import { Formik, Field, FieldArray, Form } from 'formik';

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
      name: 'Untitled'
    }

    this.setName = this.setName.bind(this);
    this.getFieldsMatrix = this.getFieldsMatrix.bind(this);
  }

  setName(e) {
    e.preventDefault();

    this.setState({
      ...this.state,
      name: e.target.value
    });
  }

  getFieldsMatrix(formProps, arrayHelpers) {
    return formProps.values.fields.map((item, index) => {
      return {
        fieldName: (
          <Field
            embedded={true}
            name={`fields.${index}.name`}
            // defaultValue={`Untitled${index === 0 ? '' : `(${index})`}`}
            component={TextField}
          />
        ),
        type: (
          <Field
            embedded={true}
            name={`fields.${index}.type`}
            placeholder="text"
            component={SelectField}
            options={supported_field_types}
          />
        ),
        required: (
          <Field
            embedded={true}
            name={`fields.${index}.required`}
            placeholder="true"
            component={CheckboxField}
          />
        ),
        actions: [
          {
            buttonStyle: 'icon',
            icon: trash,
            onClick: () => arrayHelpers.remove(index)
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

    const renderModal = (formProps, arrayHelpers) => {
      const { dirty, isValid, values: { fields } } = formProps;

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
                body={getFieldsMatrix(formProps, arrayHelpers)} />
            ),
            rest: <i onClick={() => arrayHelpers.push({
              name: `Untitled${fields.length > 0 ? `(${fields.length})` : ''}`,
              type: 'text',
              required: false
            })} className={`newCTForm__addFieldIcon ${plus}`} />
          }}
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
          fields: []
        }}
        onSubmit={(values) => console.log(values)} >
        {(formProps) => {
          return (
            <Form>
              <FieldArray
                name={`fields`}
                render={arrayHelpers => renderModal(formProps, arrayHelpers)} />
            </Form>
          );
        }}
      </Formik>
    );
  }
};

/*----------Component end----------*/
export default NewContentTypeForm;