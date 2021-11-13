/*----------Base imports----------*/
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { supported_field_types } from 'config/config';

/*----------Components, sections, modules----------*/

/*----------Shared components----------*/
import Table from 'components/Table';
import RequestLoader from 'components/Loaders/RequestLoader';
import Modal from 'components/Modal';

/*----------Actions----------*/
import {
  requiredField,
  multipleValidations
} from 'utilities/form/validation';


/*----------Component start----------*/
class ViewContentType extends Component {
  /*----------Lifecycle methods----------*/
  componentDidMount() {

  }

  componentDidUpdate(prevProps, prevState) {

  }

  render() {
    const { handleSubmit, content_types_new_status, toggleModal } = this.props;
    const { name } = this.state;
    const { setName, getFieldsMatrix } = this;

    

    /*----------Render component----------*/
    return (
      <Modal
        className={`newCTForm`}
        status={`success`}
        title={`New Content Type`}
        body={{
          heading: 'The Name of the CT',
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
            submitButton: renderSubmitButton(content_types_new_status, dirty, isValid, 'Create')
          },
          secondary: {
            type: 'onClick',
            text: 'Cancel',
            onClick: (e) => toggleModal()
          }
        }} />
    );
  }
};

/*----------Component end----------*/
export default connect(state => ({
  content_types_new_status: state.contentTypes.content_types_new_status
}))(ViewContentType);