import React from 'react';
//import PropTypes from 'prop-types';
import { AddCircleOutline } from '@material-ui/icons';

const contentTypes = ['Posts', 'Titles', 'Articles'];

class ContentTypesMenu extends React.Component {
  render() {
    return (
      <div className="ct-menu">
        <div class="ct-menu__title-container">
          <h4 class="ct-menu__title-text">Content Types</h4>
          <AddCircleOutline className="ct-menu__add-button" />
        </div>

        {
          contentTypes.map(type => <p className="ct-menu__item">{type}</p>)
        }
      </div>
    );
  }
}

ContentTypesMenu.propTypes = {};

export default ContentTypesMenu;
