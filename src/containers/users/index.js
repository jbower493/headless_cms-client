/*----------Base imports----------*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { eye, edit, trash, plus } from 'utilities/icons';

/*----------Components, sections, modules----------*/
import NewUserForm from 'containers/users/forms/newUserForm';
import ViewUser from 'containers/users/modules/viewUser';

/*----------Shared components----------*/
import Table from 'components/Table';
import RequestLoader from 'components/Loaders/RequestLoader';
import ConfirmModal from 'components/Modal/ConfirmModal';

/*----------Actions----------*/
import {
    getAllUsers,
    createNewUser,
    getOneUser,
    deleteUser
} from 'containers/users/actions';

/*----------Component start----------*/
class Users extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modalTemplate: null,
            modalMeta: null
        }

        this.submitNewUser = this.submitNewUser.bind(this);
        this.setModalTemplate = this.setModalTemplate.bind(this);
        this.getUsersMatrix = this.getUsersMatrix.bind(this);
    }

    submitNewUser(attributes) {
        console.log(attributes)
    }

    setModalTemplate(template = null, cb, modalMeta = null) {
        this.setState({
            ...this.state,
            modalTemplate: template,
            modalMeta
        }, () => { if (cb) cb() });
    }

    getUsersMatrix(data) {
        const { getOneUser } = this.props;
        const { setModalTemplate } = this;

        if (data?.length <= 0) return [];

        return data.map(item => {
            const { name } = item;

            return {
                userName: name,
                actions: [
                    {
                        buttonStyle: 'icon',
                        icon: eye,
                        onClick: () => setModalTemplate('view', () => getOneUser(name))
                    },
                    {
                        buttonStyle: 'icon',
                        icon: edit,
                        onClick: () => alert('Hey')
                    },
                    {
                        buttonStyle: 'icon',
                        icon: trash,
                        onClick: () => setModalTemplate('delete', null, { userName: name })
                    }
                ]
            }
        })
    }

    /*----------Lifecycle methods----------*/
    componentDidMount() {
        const { getAllUsers } = this.props;

        getAllUsers();
    }

    componentDidUpdate(prevProps, prevState) {
        const { setModalTemplate } = this;
        const { users_new_status, users_delete_status, getAllUsers } = this.props;

        if (users_new_status === 'success' && prevProps.users_new_status === 'loading') setModalTemplate(null, getAllUsers);

        if (users_delete_status === 'success' && prevProps.cusers_delete_status === 'loading') setModalTemplate(null, getAllUsers);
    }

    render() {
        const {
            users_all_status,
            users_all_data,
            users_delete_status,
            deleteUser
        } = this.props;
        const { modalTemplate, modalMeta } = this.state;
        const { submitNewUser, setModalTemplate, getUsersMatrix } = this;

        const renderMainContent = () => {
            return (
                <>
                    <h3 className={`users__heading`}>Users</h3>
                    <section className={`users__container`}>
                        <Table
                            status={'success'}
                            head={[
                                { heading: 'User Name' },
                                { heading: '', type: 'actions' }
                            ]}
                            body={getUsersMatrix(users_all_data?.users)}
                        />
                        <i onClick={() => setModalTemplate('new')} className={`users__addNewIcon ${plus}`} />
                    </section>
                </>
            );
        };

        const renderPage = () => {
            switch (users_all_status) {
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
                {modalTemplate === 'new' && <NewUserForm setModalTemplate={setModalTemplate} handleSubmit={submitNewUser} />}
                {modalTemplate === 'view' && <ViewUser setModalTemplate={setModalTemplate} />}
                {modalTemplate === 'delete' &&
                    <ConfirmModal
                        title={`Confirm Delete User`}
                        desc={`Are you sure you want to delete user: ${modalMeta.userName}?`}
                        status={users_delete_status}
                        close={setModalTemplate}
                        onConfirm={() => deleteUser(modalMeta.userName)}
                        onBack={setModalTemplate} />
                }
            </div>
        );
    }
};

/*----------Component end----------*/
export default withRouter(connect((state) => ({
    users_all_status: state.users.users_all_status,
    users_all_data: state.users.users_all_data,
    users_new_status: state.users.users_new_status,
    users_delete_status: state.users.users_delete_status
}), {
    getAllUsers,
    createNewUser,
    getOneUser,
    deleteUser
})(Users));