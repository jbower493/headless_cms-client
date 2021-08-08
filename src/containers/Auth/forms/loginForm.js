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
            password: ''
          }}
          onSubmit={handleSubmit} >
          {({
            touched,
            isSubmitting,
            isValid
          }) => {
            return (
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
                <Field
                  label="Role"
                  name="role"
                  component={SelectField}
                  validate={requiredField}
                  options={[
                    {
                      label: 'Option 1',
                      value: 'one',
                    },
                    {
                      label: 'Option 2',
                      value: 'two',
                    }
                  ]}
                />
                {renderSubmitButton(auth_login_status, touched, isSubmitting, isValid, 'Continue')}
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