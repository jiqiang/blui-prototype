import React, { Component } from 'react';
import './App.css';
import Summary from './Summary';
import LendingRequest from './LendingRequest';
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Summary} />
          <Route path="/summary" component={Summary} />
          <Route path="/lending-request" component={LendingRequest} />
        </div>
      </Router>
    );
  }
}

export default App;
