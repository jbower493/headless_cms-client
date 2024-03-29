/*----------Base imports----------*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
import { product_name } from 'config/config';

/*----------Shared components----------*/
import { TextField, PasswordField, renderSubmitButton } from 'utilities/form/inputs';

/*----------Actions----------*/
import {
  requiredField,
  minLengthEight,
  multipleValidations
} from 'utilities/form/validation';

/*----------Component start----------*/
class AdminSetupForm extends Component {
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
            isValid,
            dirty,
            errors,
            touched
          }) => {
            return (
              <Form>
                <Field
                  label="Username"
                  name="username"
                  placeholder="Username"
                  component={TextField}
                  validate={requiredField}
                  error={touched.username && errors.username}
                />
                <Field
                  label="Password"
                  name="password"
                  placeholder="Password"
                  component={PasswordField}
                  validate={value => multipleValidations(value, [requiredField, minLengthEight])}
                  error={touched.password && errors.password}
                />
                {renderSubmitButton(auth_admin_setup_status, dirty, isValid, 'Continue')}
              </Form>
            );
          }}
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