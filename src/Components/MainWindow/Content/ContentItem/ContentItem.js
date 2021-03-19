import React from 'react';
//import PropTypes from 'prop-types';

class ContentItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <li>
        {this.props.item[Object.keys(this.props.item)[0]]}
      </li>
    );
  }
}

ContentItem.propTypes = {};

export default ContentItem;
