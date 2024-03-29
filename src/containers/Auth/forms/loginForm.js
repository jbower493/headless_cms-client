/*----------Base imports----------*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';

/*----------Shared components----------*/
import {
  TextField,
  PasswordField,
  SelectField,
  renderSubmitButton
} from 'utilities/form/inputs';

/*----------Actions----------*/
import { requiredField } from 'utilities/form/validation';

/*----------Component start----------*/
class LoginForm extends Component {
  render() {
    const { auth_login_status, handleSubmit } = this.props;

    /*----------Render component----------*/
    return (
      <div className={`loginForm`}>
        <h2 className={`loginForm__heading`}>Login</h2>
        <p className={`loginForm__intro`}>Enter your credentials to login and start managing your content.</p>
        <Formik
          initialValues={{
            username: '',
            password: '',
            role: 'user'
          }}
          onSubmit={handleSubmit} >
          {({
            dirty,
            isValid,
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
                  validate={requiredField}
                  error={touched.password && errors.password}
                />
                <Field
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
                {renderSubmitButton(auth_login_status, dirty, isValid, 'Continue')}
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
  auth_login_status: state.auth.auth_login_status
}),
{

})(LoginForm));