import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, {Component, Suspense, lazy } from 'react';

import Navbar from './component/Navbar'
import Forum from './component/Forum'

class App extends Component {
  render() {
    return (
      <Router>
      <Suspense fallback={<div>Loading...</div>}>
          <Navbar/>

          <Route path="/score" component={Forum}/>
         </Suspense>
    </Router>
    );
  }
}

export default App;
