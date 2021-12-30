/*----------Base imports----------*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';

/*----------Components, sections, modules----------*/
import { TextField, renderSubmitButton } from 'utilities/form/inputs';

/*----------Shared components----------*/
import Modal from 'components/Modal';

/*----------Actions----------*/
import { getOneContentType } from 'containers/contentTypes/actions';

/*----------Component start----------*/
class NewContentForm extends Component {
    constructor(props) {
        super(props);

        this.mapFieldToComponent = this.mapFieldToComponent.bind(this);
    }

    mapFieldToComponent(field) {

        switch (field.type) {
            case 'int': return TextField;
            case 'text':
            case 'json':
            default: return TextField;
        }
    }

    /*----------Lifecycle methods----------*/
    componentDidMount() {
        const { getOneContentType, contentTypeName } = this.props;

        getOneContentType(contentTypeName);
    }

    render() {
        const { handleSubmit, setModalTemplate, content_types_one_status, content_types_one_data } = this.props;
        const { mapFieldToComponent } = this;

        const renderModal = ({ dirty, isValid, values }) => {

            return (
                <Modal
                    className={`newContentForm`}
                    status={content_types_one_status}
                    title={`New Content`}
                    body={{
                        heading: 'Blog Post',
                        rest: 'Hey'
                    }}
                    actions={{
                        primary: {
                            type: 'submit',
                            submitButton: renderSubmitButton('content_new_data', dirty, isValid, 'Create')
                        },
                        secondary: {
                            type: 'onClick',
                            text: 'Cancel',
                            onClick: setModalTemplate
                        }
                    }}
                    closeModal={setModalTemplate} />
            );
        };

        /*----------Render component----------*/
        return (
            <Formik
                initialValues={{}}
                onSubmit={handleSubmit}
            >
                {(formProps) => {
                    return renderModal(formProps);
                }}
            </Formik>
        );
    }
};

export default connect(state => ({
    content_types_one_status: state.contentTypes.content_types_one_status,
    content_types_one_data: state.contentTypes.content_types_one_data
}), {
    getOneContentType
})(NewContentForm);