import React, { useEffect } from 'react';
import { connect } from 'react-redux';

const fields = [
  {
    name: 'title',
    type: 'text',
    value: 'this is the title'
  },
  {
    name: 'body text',
    type: 'text',
    value: 'this is the body text'
  },
  {
    name: 'image_ref',
    type: 'number',
    value: '34'
  }
];

const ContentModal = (props) => {
  // useEffect(() => {

  // }, []);

  return (
    <div className="modal">
      <div className="modal__header">
        <h2 className="modal__title">New Article</h2>
      </div>

      <div className="modal__body">
        <h3 className="content-modal__title">Fields</h3>
        <div className="content-modal__headings">
          <h4 className="content-modal__heading">Field</h4>
          <h4 className="content-modal__heading">Type</h4>
          <h4 className="content-modal__heading">Value</h4>
        </div>

        <ul className="content-modal__list">
          {
            fields.map(field => (
              <li className="content-modal__list-item">A field</li>
            ))
          }
        </ul>
      </div>

      <div className="modal__footer">
        <button className="btn btn--primary">Publish</button>
        <button className="btn btn--outlined">Cancel</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentContentType: state.content.currentContentType
  };
};

export default connect(mapStateToProps)(ContentModal);