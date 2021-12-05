/*----------Base imports----------*/
import React, { Component, createRef } from 'react';
import ClickAwayListener from 'react-click-away-listener';
import PropTypes from 'prop-types';

/*----------Shared components----------*/
import { edit } from 'utilities/icons';

/*----------Component start----------*/
class EditableTitle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false
    }

    this.toggleRef = createRef();

    this.toggleEditing = this.toggleEditing.bind(this);
  }

  toggleEditing() {
    this.setState({
      ...this.state,
      editing: !this.state.editing
    });
  }

  render() {
    const { editing } = this.state;
    const { name, onChange } = this.props;
    const { toggleEditing } = this;

    /*----------Render component----------*/
    return (
      <div className={`EditableTitle`}>
        {
          editing
            ? (
              <ClickAwayListener onClickAway={(e) => {
                if (e.target !== this.toggleRef.current) {
                  toggleEditing();
                }
              }}>
                <input
                  type="text"
                  value={name}
                  onChange={onChange}
                  onKeyUp={(e) => { if (e.code === 'Enter') toggleEditing() }}
                  autoFocus />
              </ClickAwayListener>
            )
            : <h3 className={`EditableTitle__name`}>{name}</h3>
        }
        {!editing && <i ref={this.toggleRef} onClick={toggleEditing} className={'EditableTitle__editNameIcon ' + edit} />}
      </div>
    );
  }
};

/*----------Component end----------*/
export default EditableTitle;

EditableTitle.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func
};