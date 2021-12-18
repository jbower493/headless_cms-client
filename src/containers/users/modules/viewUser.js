/*----------Base imports----------*/
import React, { Component } from 'react';
import { connect } from 'react-redux';

/*----------Components, sections, modules----------*/

/*----------Shared components----------*/
import Table from 'components/Table';
import Modal from 'components/Modal';

/*----------Actions----------*/

/*----------Component start----------*/
class ViewUser extends Component {
    render() {
        const { setModalTemplate, users_one_status, users_one_data } = this.props;

        /*----------Render component----------*/
        return (
            <Modal
                className={`viewUser`}
                status={users_one_status}
                title={`View User`}
                body={{
                    heading: users_one_data?.user.username,
                    table: (
                        <Table
                            status={'success'}
                            head={[
                                { heading: 'Username' },
                                { heading: 'ID' },
                                { heading: 'Role' },
                                { heading: 'Privileges' }
                            ]}
                            body={[
                                {
                                    userName: users_one_data?.user.username,
                                    id: users_one_data?.user.id,
                                    role: users_one_data?.user.role,
                                    privileges: <ul>
                                        {users_one_data && Object.entries(users_one_data?.user.privileges).map(([key, value]) => (
                                            <li>{key}: <span className={value ? 'true' : 'false'}>{value ? 'true' : 'false'}</span></li>
                                        ))}
                                    </ul>
                                }
                            ]} />
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
    users_one_status: state.users.users_one_status,
    users_one_data: state.users.users_one_data
}))(ViewUser);