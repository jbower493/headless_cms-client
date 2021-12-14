/*----------Base imports----------*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
// import { plus } from 'utilities/icons';

/*----------Components, sections, modules----------*/

/*----------Shared components----------*/

/*----------Actions----------*/



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
    
  }

  componentDidUpdate(prevProps, prevState) {

  }

  render() {

    const renderContentTypes = () => {
      return (
        <div className={`sidebar__contentTypes`}>
          <Link className={`sidebar__sectionHeading`} to={`/content-types`}>Content Types</Link>
          {/* <Link className={`sidebar__sectionAddNew`} to={`/content-types/new`}>
            <small className={`sidebar__sectionAddNewText`}>Add New</small>
            <i className={`sidebar__sectionAddNewIcon ${plus}`} />
          </Link> */}
          {/* <div className={`sidebar__sectionList`}>
            {contentTypes.map((type, index) => (
              <Link key={index} className={`sidebar__sectionItem`} to={`/content/${type.name}`}>{type.name}</Link>
            ))}
          </div> */}
        </div>
      );
    };

    const renderUsers = () => {
      return (
        <div className={`sidebar__users`}>
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
        {renderContentTypes()}
        {renderUsers()}
      </div>
    );
  }
};

/*----------Component end----------*/
export default withRouter(connect((state) => ({

}),
{

})(Sidebar));