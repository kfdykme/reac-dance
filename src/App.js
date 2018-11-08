import React, { Component, Fragment,lazy } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Navbar from './component/Navbar'
const Forum=lazy(()=>import("./component/Forum"));

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Navbar/>
          <Route path="/socre" Component={Forum}/>
        </Fragment>
      </Router>
    );
  }
}

export default App;
