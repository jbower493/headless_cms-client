/*----------Base imports----------*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
import { product_name } from 'config/config';

/*----------Components, sections, modules----------*/

/*----------Shared components----------*/
import { TextField, PasswordField, SubmitButton } from 'utilities/formInputs';

/*----------Actions----------*/

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
    /*----------Render component----------*/
    return (
      <div className={`adminSetupForm`}>
        <h2 className={`adminSetupForm__heading`}>Admin Setup</h2>
        <p className={`adminSetupForm__intro`}>Welcome to {product_name}. Please create an admin account for this intance.</p>
        <Formik
          initialValues={{
            username: 'John Doe',
            password: 'password'
          }}
          onSubmit={(values) => {
            console.log('Values');
          }} >
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
                placeholder="Your Username"
                component={TextField}
              />
              <Field
                label="Password"
                id="password"
                name="password"
                placeholder="Your password"
                component={PasswordField}
              />

              <SubmitButton
                valid={true}
                text={`Continue`}
                style={`solid`}
                color={`primary`} />
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