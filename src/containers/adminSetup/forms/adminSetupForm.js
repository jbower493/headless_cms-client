/*----------Base imports----------*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
import { product_name } from 'config/config';

/*----------Components, sections, modules----------*/

/*----------Shared components----------*/
import { TextField, PasswordField, SubmitButton } from 'utilities/form/inputs';

/*----------Actions----------*/
import { requiredField } from 'utilities/form/validation';

/*----------Component start----------*/
class AdminSetupForm extends Component {
  constructor(props) {
    super(props);
  }

  /*----------Lifecycle methods----------*/
  componentDidMount() {
    
  }

  componentDidUpdate(prevProps, prevState) {

  }

  render() {
    const { handleSubmit, auth_admin_setup_status } = this.props;

    /*----------Render component----------*/
    return (
      <div className={`adminSetupForm`}>
        <h2 className={`adminSetupForm__heading`}>Admin Setup</h2>
        <p className={`adminSetupForm__intro`}>Welcome to {product_name}. Please create an admin account to begin.</p>
        <Formik
          initialValues={{
            username: '',
            password: ''
          }}
          onSubmit={handleSubmit} >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <Form>
              <Field
                label="Username"
                name="username"
                placeholder="Username"
                component={TextField}
                validate={requiredField}
              />
              <Field
                label="Password"
                name="password"
                placeholder="Password"
                component={PasswordField}
                validate={requiredField}
              />

              <SubmitButton
                text={`Continue`}
                color={`primary`}
                loading={auth_admin_setup_status === 'loading'}
                disabled={false/* form is valid and not submitting */} />
            </Form>
          )}
        </Formik>
      </div>
    );
  }
};

/*----------Component end----------*/

export default withRouter(connect((state) => ({
  auth_admin_setup_status: state.auth.auth_admin_setup_status
}),
{

})(AdminSetupForm));