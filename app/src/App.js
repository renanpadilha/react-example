import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Tarefa from './containers/Tarefa';
import IndexPage from './containers/IndexPage';

class App extends Component {
  render() {
    return (
      <div store={this.context.store}>
        <Router>
          <div>
            <Route exact path="/" component={IndexPage} />
            <Route path="/tarefa/:id" component={Tarefa} />
          </div>
        </Router>
      </div>
    );
  }
}

App.contextTypes = {
  store: PropTypes.object.isRequired
};

export default App;
