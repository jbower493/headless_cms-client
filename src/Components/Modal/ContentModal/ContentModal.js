import React, { useEffect } from 'react';
import { connect } from 'react-redux';

const ContentModal = (props) => {
  // useEffect(() => {

  // }, []);

  return (
    <div className="modal"></div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentContentType: state.content.currentContentType
  };
};

export default connect(mapStateToProps)(ContentModal);