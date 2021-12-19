/*----------Base imports----------*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
// import { plus } from 'utilities/icons';

/*----------Components, sections, modules----------*/

/*----------Shared components----------*/

/*----------Actions----------*/
import { getAllcontentTypes } from 'containers/contentTypes/actions';


// const contentTypes = [
//   {name: 'Posts'},
//   {name: 'Tites'},
//   {name: 'Articles'}
// ];

// const users = [
//   {username: 'John', id: '13'},
//   {username: 'Sally', id: '14'},
//   {username: 'Kenny', id: '15'}
// ];

/*----------Component start----------*/
class Sidebar extends Component {

    /*----------Lifecycle methods----------*/
    componentDidMount() {
        const { getAllcontentTypes } = this.props;

        getAllcontentTypes();
    }

    componentDidUpdate(prevProps, prevState) {

    }

    render() {
        const { content_types_all_data } = this.props;

        const renderContentTypes = () => {
            return (
                <div className={`sidebar__section`}>
                    <Link className={`sidebar__sectionHeading`} to={`/content-types`}>Content Types</Link>
                    {/* <Link className={`sidebar__sectionAddNew`} to={`/content-types/new`}>
            <small className={`sidebar__sectionAddNewText`}>Add New</small>
            <i className={`sidebar__sectionAddNewIcon ${plus}`} />
          </Link> */}
                    {content_types_all_data && <div className={`sidebar__sectionList`}>
                        {content_types_all_data.contentTypes.map((type, index) => (
                            <Link key={index} className={`sidebar__sectionItem`} to={`/content/${type.name}`}>{type.name}</Link>
                        ))}
                    </div>}
                </div>
            );
        };

        const renderUsers = () => {
            return (
                <div className={`sidebar__section`}>
                    <Link className={`sidebar__sectionHeading`} to={`/users`}>Users</Link>
                    {/* <Link className={`sidebar__sectionAddNew`} to={`/users/new`}>
            <small className={`sidebar__sectionAddNewText`}>Add New</small>
            <i className={`sidebar__sectionAddNewIcon ${plus}`} />
          </Link> */}
                    {/* <div className={`sidebar__sectionList`}>
            {users.map((user, index) => (
              <Link key={index} className={`sidebar__sectionItem`} to={`/content/${user.id}`}>{user.username}</Link>
            ))}
          </div> */}
                </div>
            );
        };

        /*----------Render component----------*/
        return (
            <div className={`sidebar`}>
                {renderUsers()}
                {renderContentTypes()}
            </div>
        );
    }
};

/*----------Component end----------*/
export default withRouter(connect((state) => ({
    content_types_all_status: state.contentTypes.content_types_all_status,
    content_types_all_data: state.contentTypes.content_types_all_data,
}),
    {
        getAllcontentTypes
    })(Sidebar));