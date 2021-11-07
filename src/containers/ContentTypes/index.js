/*----------Base imports----------*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { eye, edit, trash, plus } from 'utilities/icons';

/*----------Components, sections, modules----------*/
import NewContentTypeForm from 'containers/contentTypes/forms/newContentTypeForm';

/*----------Shared components----------*/
import Table from 'components/Table';
import RequestLoader from 'components/Loaders/RequestLoader';

/*----------Actions----------*/
import { getAllcontentTypes, createNewContentType } from 'containers/contentTypes/actions';

/*----------Component start----------*/
class ContentTypes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false
    }

    this.submitNewContentType = this.submitNewContentType.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.getContentTypesMatrix = this.getContentTypesMatrix.bind(this);
  }

  submitNewContentType(attributes) {
    const { createNewContentType } = this.props;

    createNewContentType(attributes);
  }

  toggleModal(cb) {
    this.setState({
      ...this.state,
      showModal: !this.state.showModal
    }, () => { if (cb) cb() });
  }

  getContentTypesMatrix(data) {
    if (data?.length <= 0) return [];

    return data.map(item => {
      const { name } = item;

      return {
        contentTypeName: `${name}s`,
        actions: [
          {
            buttonStyle: 'icon',
            icon: eye,
            onClick: () => alert('Hey')
          },
          {
            buttonStyle: 'icon',
            icon: edit,
            onClick: () => alert('Hey')
          },
          {
            buttonStyle: 'icon',
            icon: trash,
            onClick: () => alert('Hey')
          }
        ]
      }
    })
  }

  /*----------Lifecycle methods----------*/
  componentDidMount() {
    const { getAllcontentTypes } = this.props;

    getAllcontentTypes();
  }

  componentDidUpdate(prevProps, prevState) {
    const { toggleModal } = this;
    const { content_types_new_status, getAllcontentTypes } = this.props;

    if (content_types_new_status === 'success' && prevProps.content_types_new_status === 'loading') toggleModal(getAllcontentTypes);
  }

  render() {
    const { content_types_all_status, content_types_all_data } = this.props;
    const { showModal } = this.state;
    const { submitNewContentType, toggleModal, getContentTypesMatrix } = this;

    const renderMainContent = () => {
      return (
        <>
          <h3 className={`contentTypes__heading`}>Content Types</h3>
          <section className={`contentTypes__container`}>
            <Table
              status={'success'}
              head={[
                { heading: 'Content Type Name' },
                { heading: '', type: 'actions' }
              ]}
              body={getContentTypesMatrix(content_types_all_data?.contentTypes)}
            />
            <i onClick={() => toggleModal()} className={`contentTypes__addNewIcon ${plus}`} />
          </section>
        </>
      );
    };

    const renderPage = () => {
      switch (content_types_all_status) {
        case 'success': return renderMainContent();
        case 'error':
        case 'loading':
        default: return <RequestLoader />;
      }
    };

    /*----------Render component----------*/
    return (
      <div className={`contentTypes`}>
        {renderPage()}
        {showModal && <NewContentTypeForm toggleModal={toggleModal} handleSubmit={submitNewContentType} />}
      </div>
    );
  }
};

/*----------Component end----------*/
export default withRouter(connect((state) => ({
  content_types_all_status: state.contentTypes.content_types_all_status,
  content_types_all_data: state.contentTypes.content_types_all_data,
  content_types_new_status: state.contentTypes.content_types_new_status
}), {
  getAllcontentTypes,
  createNewContentType
})(ContentTypes));