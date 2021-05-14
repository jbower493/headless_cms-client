import React from 'react';
//import PropTypes from 'prop-types';
import ContentTypesHome from './ContentTypes/ContentTypesHome';
import Dashboard from './Dashboard/Dashboard';
import Users from './Users/Users';
import Content from './Content/Content';

import { connect } from 'react-redux';

class MainWindow extends React.Component {
  render() {
    let content;

    switch(this.props.view) {
      case 'content types':
        content = <ContentTypesHome />;
        break;
      case 'users':
        content = <Users />;
        break;
      case 'content':
        content = <Content />;
        break;
      default:
        content = <Dashboard />;
    };

    return (
      <div className="main-window">
        {content}
      </div>
    );
  }
};

MainWindow.propTypes = {};

const mapStateToProps = state => ({
  view: state.mainWindow.view,
  user: state.auth.user
});

export default connect(mapStateToProps)(MainWindow);
