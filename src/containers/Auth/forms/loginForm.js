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
          }) => (
            <Form>
              <Field
                label="Username"
                id="username"
                name="username"
                placeholder="Username"
                component={TextField}
                validate={requiredField}
              />
              <Field
                label="Password"
                id="password"
                name="password"
                placeholder="Password"
                component={PasswordField}
                validate={requiredField}
              />

              <SubmitButton
                text={`Continue`}
                style={`solid`}
                color={`primary`}
                loading={'loading'}
                disabled={false} />
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