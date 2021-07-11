/*----------Base imports----------*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
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
    const { handleSubmit } = this.props;

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
          // validate={values => {
          //   const { username, password } = values;
          //   const errors = {};
          //   if (!username) {
          //     errors.username = 'Required';
          //   }
          //   if (!password) {
          //     errors.password = 'Required';
          //   }
          // }}
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
                valid={true}
                text={`Continue`}
                style={`solid`}
                color={`primary`}
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

})(AdminSetupForm));