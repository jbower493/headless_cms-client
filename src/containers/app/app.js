import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { API } from '../../utilities/api/auth';
console.log(API)
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    API.auth.GET.adminExists().then(res => console.log(res))
  }

  componentDidUpdate(prevProps, prevState) {

  }

  render() {
    return (
      <div className={`app`}>App</div>
    );
  }
};


// export default withRouter(connect({

// }, {

// })(App));
export default App;