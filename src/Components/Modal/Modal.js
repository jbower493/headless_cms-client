import React from 'react';
import { connect } from 'react-redux';

import ContentModal from './ContentModal/ContentModal';

const Modal = ({ fetchingModalData }) => {
  return (
    fetchingModalData
      ? <h1>Loading</h1>
      : <ContentModal />
  );
};

const mapStateToProps = state => ({
  fetchingModalData: state.modal.fetchingModalData
});

export default connect(mapStateToProps)(Modal);