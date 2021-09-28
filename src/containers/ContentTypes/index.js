/*----------Base imports----------*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

/*----------Components, sections, modules----------*/

/*----------Shared components----------*/
import Table from 'components/Table';

/*----------Actions----------*/

/*----------Component start----------*/
class ContentTypes extends Component {
  constructor(props) {
    super(props);

    this.getContentTypesMatrix = this.getContentTypesMatrix.bind(this);
  }

  getContentTypesMatrix(data) {
    if (data?.length <= 0) return [];

    return data.map(item => {


      return {
        hello: 'hello',
        actions: [
          {
            style: 'outline button',
            onClick: () => alert('Hey'),
            text: 'Say Hey'
          }
        ]
      }
    })
  }

  /*----------Lifecycle methods----------*/
  componentDidMount() {
    
  }

  componentDidUpdate(prevProps, prevState) {

  }

  render() {
    const { getContentTypesMatrix } = this;

    /*----------Render component----------*/
    return (
      <div className={`contentTypes`}>
        <h3 className={`contentTypes__heading`}>Content Types</h3>
        <section className={`contentTypes__container`}>
          <Table
            status={'success'}
            head={[
              { heading: 'Content Type Name' },
              { heading: '', type: 'actions' }
            ]}
            body={getContentTypesMatrix([1,2,3,4,5])}
           />
        </section>
      </div>
    );
  }
};

/*----------Component end----------*/
export default withRouter(connect((state) => {

},
{

})(ContentTypes));