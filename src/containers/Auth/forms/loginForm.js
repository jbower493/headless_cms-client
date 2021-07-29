/*----------Base imports----------*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';

/*----------Components, sections, modules----------*/

/*----------Shared components----------*/
import {
  TextField,
  PasswordField,
  SelectField,
  SubmitButton
} from 'utilities/form/inputs';

/*----------Actions----------*/
import { requiredField } from 'utilities/form/validation';

/*----------Component start----------*/
class LoginForm extends Component {
  constructor(props) {
    super(props);
  }

  /*----------Lifecycle methods----------*/
  componentDidMount() {
    
  }

  componentDidUpdate(prevProps, prevState) {

  }

  render() {
    const { handleSubmit } = this.props;

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
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            isValid
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

              <SubmitButton
                text={`Continue`}
                color={`primary`}
                loading={false/* login request status */}
                disabled={false/* figure out if form is valid */} />
            </Form>
          )}
        </Formik>
      </div>
    );
  }
};

/*----------Component end----------*/

export default withRouter(connect((state) => ({
  
}),
{

})(LoginForm));