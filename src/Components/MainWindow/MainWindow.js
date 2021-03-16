import React from 'react';
//import PropTypes from 'prop-types';
import ContentTypesHome from './ContentTypes/ContentTypesHome';
import Dashboard from './Dashboard/Dashboard';
import Users from './Users/Users';

import { connect } from 'react-redux';

class MainWindow extends React.Component {
  render() {
    let content;

    if(this.props.view === 'dashboard') {
      content = <Dashboard />;
    } else if(this.props.view === 'content types') {
      content = <ContentTypesHome />;
    } else {
      content = <Users />;
    }

    return (
      <div className="main-window">
        {content}
      </div>
    );
  }
}

MainWindow.propTypes = {};

const mapStateToProps = state => ({
  view: state.mainWindow.view,
  user: state.auth.user
});

export default connect(mapStateToProps)(MainWindow);
