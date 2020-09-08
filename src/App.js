import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Cards } from './screens/cards';
import {Layout} from "./components/Layout";


class App extends Component {
  render() {
    return (
        <React.Fragment>
          <Router>
              <Layout>
              <Switch>
                <Route exact path="/" component={Cards} />
              </Switch>
              </Layout>
          </Router>
        </React.Fragment>
    );
  }
}

export default App;

