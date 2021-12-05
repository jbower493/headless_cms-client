/*----------Base imports----------*/
import React, { Component } from 'react';
import { connect } from 'react-redux';

/*----------Components, sections, modules----------*/

/*----------Shared components----------*/
import Table from 'components/Table';
import Modal from 'components/Modal';

/*----------Actions----------*/

/*----------Component start----------*/
class ViewContentType extends Component {
  render() {
    const { setModalTemplate, content_types_one_status, content_types_one_data } = this.props;

    const getTableBody = () => {
      if (!content_types_one_data) return [];

      return content_types_one_data.contentType.fields.map(field => (
        { ...field, required: field.required ? 'true' : 'false' }
      ));
    };

    /*----------Render component----------*/
    return (
      <Modal
        className={`viewCT`}
        status={content_types_one_status}
        title={`View Content Type`}
        body={{
          heading: content_types_one_data?.contentType.name,
          table: (
            <Table
              status={'success'}
              head={[
                { heading: 'Field Name' },
                { heading: 'Type' },
                { heading: 'Required' }
              ]}
              body={getTableBody()} />
          )
        }}
        actions={{
          secondary: {
            type: 'onClick',
            text: 'Close',
            onClick: (e) => setModalTemplate()
          }
        }}
        closeModal={setModalTemplate} />
    );
  }
};

/*----------Component end----------*/
export default connect(state => ({
  content_types_one_status: state.contentTypes.content_types_one_status,
  content_types_one_data: state.contentTypes.content_types_one_data
}))(ViewContentType);