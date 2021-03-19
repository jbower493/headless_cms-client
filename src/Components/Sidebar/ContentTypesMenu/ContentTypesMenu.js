import React from 'react';
//import PropTypes from 'prop-types';
//import { AddCircleOutline } from '@material-ui/icons';

import { connect } from 'react-redux';
import { showContentTypes/*, showContent*/ } from '../../../redux/actions/mainWindowActions';
import { getContentTypes } from '../../../redux/actions/contentTypesActions';
import { showAllContent } from '../../../redux/actions/contentActions';

//const contentTypes = ['Posts', 'Titles', 'Articles'];

class ContentTypesMenu extends React.Component {
  constructor(props) {
    super(props);

    this.handleContentTypeClick = this.handleContentTypeClick.bind(this);
  }

  componentDidMount() {
    this.props.getContentTypes();
  }

  handleContentTypeClick(e) {
    const contentType = e.target.innerText.slice(0, e.target.innerText.length -1).toLowerCase();
    this.props.showAllContent(contentType);
  }

  render() {
    let title;

    if(this.props.user.role === 'admin') {
      title = <h4 className="ct-menu__title ct-menu__title--admin" onClick={this.props.showContentTypes}>Content Types</h4>;
    } else {
      title = <h4 className="ct-menu__title">Content Types</h4>
    }

    return (
      <div className="ct-menu">
        
        {title}
        
        {
          this.props.fetchingContentTypesData
            ? <p>Fetching data</p>
            : this.props.contentTypes.map(contentType => {
              return <p
                key={this.props.contentTypes.indexOf(contentType)}
                className="ct-menu__item"
                onClick={this.handleContentTypeClick}
              >
                {contentType.name}s
              </p>;
            })
        }
      </div>
    );
  }
}

ContentTypesMenu.propTypes = {};

const mapStateToProps = state => ({
  user: state.auth.user,
  contentTypes: state.contentTypes.contentTypes,
  fetchingContentTypesData: state.contentTypes.fetchingContentTypesData
});

export default connect(mapStateToProps, { showContentTypes, getContentTypes, showAllContent,  })(ContentTypesMenu);
