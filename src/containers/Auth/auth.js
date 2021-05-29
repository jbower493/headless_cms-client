/*----------Base imports----------*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

/*----------Components, sections, modules----------*/

/*----------Shared components----------*/
import Button from 'components/Button/button';

/*----------Actions----------*/

/*----------Component start----------*/
class Auth extends Component {
  constructor(props) {
    super(props);
  }

  /*----------Lifecycle methods----------*/
  componentDidMount() {
    
  }

  componentDidUpdate(prevProps, prevState) {

  }

  render() {

    /*----------Render component----------*/
    return (
      <div className={`auth`}>
        <Button
          type='onClick'
          onClick={() => console.log('Clicked')}
          text='Hello' />
      </div>
    );
  }
};

/*----------Component end----------*/

export default withRouter(connect((state) => ({

}),
{

})(Auth));