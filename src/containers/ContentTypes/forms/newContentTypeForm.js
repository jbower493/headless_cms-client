/*----------Base imports----------*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Formik, Field, FieldArray, Form } from 'formik';

import { trash, plus } from 'utilities/icons';
import { supported_field_types } from 'config/config';

/*----------Components, sections, modules----------*/
import { TextField, SelectField, CheckboxField, renderSubmitButton } from 'utilities/form/inputs';

/*----------Shared components----------*/
import Table from 'components/Table';
import Modal from 'components/Modal';
import EditableTitle from 'components/EditableTitle';

/*----------Actions----------*/
import { requiredField } from 'utilities/form/validation';


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

    getFieldsMatrix({ values, errors, touched }, arrayHelpers) {
        return values.fields.map((item, index) => {
            return {
                fieldName: (
                    <Field
                        embedded={true}
                        name={`fields.${index}.name`}
                        component={TextField}
                        validate={requiredField}
                        error={touched.fields && touched.fields[index]?.name && errors.fields && errors.fields[index]?.name}
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
        const { handleSubmit, content_types_new_status, setModalTemplate } = this.props;
        const { name } = this.state;
        const { setName, getFieldsMatrix } = this;

        const renderModal = (formProps, arrayHelpers) => {
            const { dirty, isValid, values } = formProps;

            // invalidate form if any field has an empty name
            const formIsValid = isValid && !values.fields?.find(field => !field.name);

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
                            name: '',
                            type: 'text',
                            required: false
                        })} className={`newCTForm__addFieldIcon ${plus}`} />
                    }}
                    actions={{
                        primary: {
                            type: 'submit',
                            submitButton: renderSubmitButton(content_types_new_status, dirty, formIsValid, 'Create')
                        },
                        secondary: {
                            type: 'onClick',
                            text: 'Cancel',
                            onClick: (e) => setModalTemplate()
                        }
                    }}
                    closeModal={setModalTemplate} />
            );
        };

        /*----------Render component----------*/
        return (

            <Formik
                initialValues={{
                    fields: []
                }}
                onSubmit={(values) => handleSubmit({ ...values, name })} >
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
export default connect(state => ({
    content_types_new_status: state.contentTypes.content_types_new_status
}))(NewContentTypeForm);