import React from 'react';
//import PropTypes from 'prop-types';

class ContentItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <li className="content__item">
        <p className="content__field">{this.props.item[Object.keys(this.props.item)[0]]}</p>
        <p className="content__field">{this.props.item.author.username}</p>
        <p className="content__field">View, Edit, Delete</p>
      </li>
    );
  }
}

ContentItem.propTypes = {};

export default ContentItem;
