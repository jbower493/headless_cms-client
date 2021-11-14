/*----------Base imports----------*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { eye, edit, trash, plus } from 'utilities/icons';

/*----------Components, sections, modules----------*/
import NewContentTypeForm from 'containers/contentTypes/forms/newContentTypeForm';
import ViewContentType from 'containers/contentTypes/modules/viewContentType';

/*----------Shared components----------*/
import Table from 'components/Table';
import RequestLoader from 'components/Loaders/RequestLoader';

/*----------Actions----------*/
import {
  getAllcontentTypes,
  createNewContentType,
  getOneContentType
} from 'containers/contentTypes/actions';

/*----------Component start----------*/
class ContentTypes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalTemplate: null
    }

    this.submitNewContentType = this.submitNewContentType.bind(this);
    this.setModalTemplate = this.setModalTemplate.bind(this);
    this.getContentTypesMatrix = this.getContentTypesMatrix.bind(this);
  }

  submitNewContentType(attributes) {
    const { createNewContentType } = this.props;

    createNewContentType(attributes);
  }

  setModalTemplate(template = null, cb) {
    this.setState({
      ...this.state,
      modalTemplate: template
    }, () => { if (cb) cb() });
  }

  getContentTypesMatrix(data) {
    const { getOneContentType } = this.props;
    const { setModalTemplate } = this;

    if (data?.length <= 0) return [];

    return data.map(item => {
      const { name } = item;

      return {
        contentTypeName: `${name}s`,
        actions: [
          {
            buttonStyle: 'icon',
            icon: eye,
            onClick: () => setModalTemplate('view', () => getOneContentType(name))
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
    const { setModalTemplate } = this;
    const { content_types_new_status, getAllcontentTypes } = this.props;

    if (content_types_new_status === 'success' && prevProps.content_types_new_status === 'loading') setModalTemplate(null, getAllcontentTypes);
  }

  render() {
    const { content_types_all_status, content_types_all_data } = this.props;
    const { modalTemplate } = this.state;
    const { submitNewContentType, setModalTemplate, getContentTypesMatrix } = this;

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
            <i onClick={() => setModalTemplate('new')} className={`contentTypes__addNewIcon ${plus}`} />
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
        {modalTemplate === 'new' && <NewContentTypeForm setModalTemplate={setModalTemplate} handleSubmit={submitNewContentType} />}
        {modalTemplate === 'view' && <ViewContentType setModalTemplate={setModalTemplate} />}
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
  createNewContentType,
  getOneContentType
})(ContentTypes));