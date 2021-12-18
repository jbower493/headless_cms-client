/*----------Base imports----------*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Formik, Field, Form } from 'formik';

/*----------Components, sections, modules----------*/
import { TextField, SelectField, CheckboxField, renderSubmitButton } from 'utilities/form/inputs';

/*----------Shared components----------*/
import Table from 'components/Table';
import Modal from 'components/Modal';

/*----------Actions----------*/
import { requiredField } from 'utilities/form/validation';


/*----------Component start----------*/
class NewUserForm extends Component {
    /*----------Lifecycle methods----------*/
    componentDidMount() {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    render() {
        const { handleSubmit, users_new_status, setModalTemplate } = this.props;

        const renderModal = ({ dirty, isValid, touched, errors }) => {

            return (
                <Modal
                    className={`newUserForm`}
                    status={`success`}
                    title={`New User`}
                    body={{
                        table: (
                            <Table
                                status={'success'}
                                head={[
                                    { heading: 'Username' },
                                    { heading: 'New Password' },
                                    { heading: 'Role' },
                                    { heading: 'Privileges' }
                                ]}
                                body={[
                                    {
                                        username: (
                                            <Field
                                                embedded={true}
                                                name="username"
                                                placeholder="Username"
                                                component={TextField}
                                                validate={requiredField}
                                                error={touched.username && errors.username}
                                            />
                                        ),
                                        password: (
                                            <Field
                                                embedded={true}
                                                name="password"
                                                placeholder="New Password"
                                                component={TextField}
                                                validate={requiredField}
                                                error={touched.username && errors.username}
                                            />
                                        ),
                                        role: (
                                            <Field
                                                embedded={true}
                                                label="Role"
                                                name="role"
                                                component={SelectField}
                                                validate={requiredField}
                                                error={touched.role && errors.role}
                                                options={[
                                                    {
                                                        label: 'User',
                                                        value: 'user',
                                                    },
                                                    {
                                                        label: 'Admin',
                                                        value: 'admin',
                                                    }
                                                ]}
                                            />
                                        ),
                                        privileges: <div>
                                            <Field
                                                label="Create"
                                                name="create"
                                                placeholder="true"
                                                component={CheckboxField}
                                            />
                                            <Field
                                                label="Read Own"
                                                name="read own"
                                                placeholder="true"
                                                component={CheckboxField}
                                            />
                                            <Field
                                                label="Read Any"
                                                name="read any"
                                                placeholder="true"
                                                component={CheckboxField}
                                            />
                                            <Field
                                                label="Update Own"
                                                name="update own"
                                                placeholder="true"
                                                component={CheckboxField}
                                            />
                                            <Field
                                                label="Update Any"
                                                name="update any"
                                                placeholder="true"
                                                component={CheckboxField}
                                            />
                                            <Field
                                                label="Delete Own"
                                                name="delete own"
                                                placeholder="true"
                                                component={CheckboxField}
                                            />
                                            <Field
                                                label="Delete Any"
                                                name="delete any"
                                                placeholder="true"
                                                component={CheckboxField}
                                            />
                                        </div>
                                    }
                                ]}
                            />
                        )
                    }}
                    actions={{
                        primary: {
                            type: 'submit',
                            submitButton: renderSubmitButton(users_new_status, dirty, isValid, 'Create')
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
                    username: '',
                    role: 'user',
                    "create": true,
                    "read own": true,
                    "read any": true,
                    "update own": true,
                    "update any": false,
                    "delete own": true,
                    "delete any": false
                }}
                onSubmit={(values) => handleSubmit({ ...values })} >
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
export default connect(state => ({
    users_new_status: state.users.users_new_status
}))(NewUserForm);