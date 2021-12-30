/*----------Base imports----------*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { eye, edit, trash, plus } from 'utilities/icons';

/*----------Components, sections, modules----------*/
import NewContentForm from 'containers/content/forms/newContentForm';

/*----------Shared components----------*/
import Table from 'components/Table';
import RequestLoader from 'components/Loaders/RequestLoader';
import PageError from 'components/Errors/PageError';

/*----------Actions----------*/
import { getAllContent } from 'containers/content/actions';

/*----------Component start----------*/
class Content extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modalTemplate: null,
            modalMeta: null
        };

        this.setModalTemplate = this.setModalTemplate.bind(this);
        this.getContentMatrix = this.getContentMatrix.bind(this);
    }

    setModalTemplate(template = null, cb, modalMeta = null) {
        this.setState({
            ...this.state,
            modalTemplate: template,
            modalMeta
        }, () => { if (cb) cb() });
    }

    getContentMatrix(data) {
        const {  } = this.props;
        const { setModalTemplate } = this;

        if (!data || data.length <= 0) return [];

        return data.map(item => {
            const { id } = item;

            return {
                id: id,
                fieldOne: 'Field One',
                fieldTwo: 'Field Two',
                actions: [
                    {
                        buttonStyle: 'icon',
                        icon: eye,
                        onClick: () => setModalTemplate('view', () => alert('Still need to build this'))
                    },
                    {
                        buttonStyle: 'icon',
                        icon: edit,
                        onClick: () => alert('Still need to build this')
                    },
                    {
                        buttonStyle: 'icon',
                        icon: trash,
                        onClick: () => setModalTemplate('delete', null, { contentId: id })
                    }
                ]
            }
        })
    }

    /*----------Lifecycle methods----------*/
    componentDidMount() {
        const { getAllContent, computedMatch: { params: { type } } } = this.props;

        getAllContent(type);
    }

    componentDidUpdate(prevProps, prevState) {
        const { getAllContent, computedMatch: { params: { type } } } = this.props;

        if (type !== prevProps.computedMatch.params.type) getAllContent(type);
    }

    render() {
        const {
            content_all_status,
            content_all_data,
            computedMatch: { params: { type } }
        } = this.props;
        const { modalTemplate, modalMeta } = this.state;
        const { setModalTemplate, getContentMatrix } = this;

        const renderMainContent = () => {
            return (
                <>
                    <h3 className={`content__heading`}>Content: {type}</h3>
                    <section className={`content__container`}>
                        <Table
                            className={`contentList`}
                            status={'success'}
                            head={[
                                { heading: 'ID' },
                                { heading: 'Field One' },
                                { heading: 'Field Two' },
                                { heading: '', type: 'actions' }
                            ]}
                            body={getContentMatrix(content_all_data?.content)}
                        />
                        <i onClick={() => setModalTemplate('new', false, { contentTypeName: 'blog_post' })} className={`content__addNewIcon ${plus}`} />
                    </section>
                </>
            );
        };

        const renderPage = () => {
            switch (content_all_status) {
                case 'success': return renderMainContent();
                case 'error': return <PageError />;
                case 'loading':
                default: return <RequestLoader />;
            }
        };

        /*----------Render component----------*/
        return (
            <div className={`content`}>
                {renderPage()}
                {modalTemplate === 'new' && 
                    <NewContentForm
                        contentTypeName={modalMeta?.contentTypeName}
                        setModalTemplate={setModalTemplate}
                        handleSubmit={() => console.log('submitted new content form')} />
                }
            </div>
        );
    }
};

/*----------Component end----------*/
export default withRouter(connect((state) => ({
    content_all_status: state.content.content_all_status,
    content_all_data: state.content.content_all_data
}),
{
    getAllContent
})(Content));