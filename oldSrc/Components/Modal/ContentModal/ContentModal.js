import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createNewContent } from '../../../redux/actions/contentActions';


const ContentModal = (props) => {
  const initialInputValues = props.currentContentTypeFields.map(field => '');

  const [inputValues, setInputValues] = useState(initialInputValues);

  // useEffect(() => {

  // }, []);

  const handleValueChange = (newValue, index) => {
    const newStateInputValues = [...inputValues];
    newStateInputValues[index] = newValue;

    setInputValues(newStateInputValues);
  };

  const handlePublish = e => {
    const itemToSend = {};
    props.currentContentTypeFields.forEach((field, index) => {
      itemToSend[field.name] = inputValues[index];
    });

    props.createNewContent(itemToSend, props.currentContentType);
  };

  const handleCancel = e => {
    console.log('It cancelled');
  };

  return (
    <div className="modal">
      <div className="modal__header">
        <h2 className="modal__title">New {props.currentContentType}</h2>
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
            props.currentContentTypeFields.map((field, index) => (
              <li className="content-modal__list-item" key={index}>
                <p className="content-modal__data">{field.name}</p>
                <p className="content-modal__data">{field.type}</p>
                <input
                  className="content-modal__data--value"
                  type="text"
                  value={inputValues[index]}
                  onChange={e => handleValueChange(e.target.value, index)} />
              </li>
            ))
          }
        </ul>
      </div>

      <div className="modal__footer">
        {
          props.modalSending
            ? <p>Sending...</p>
            : <button
                className="btn btn--primary"
                onClick={handlePublish} >
                Publish
              </button>
        }
        <button
          className="btn btn--outlined"
          onClick={handleCancel} >
          Cancel
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentContentType: state.content.currentContentType,
    currentContentTypeFields: state.content.currentContentTypeFields,
    modalSending: state.modal.sending
  };
};

export default connect(mapStateToProps, { createNewContent })(ContentModal);