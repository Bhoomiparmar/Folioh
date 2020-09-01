import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './screens/Home';
import { AboutUs } from './screens/AboutUs';
import {accordion} from './screens/accordion';
import { NoMatch } from './screens/NoMatch';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';



class App extends Component {
  render() {
    return (
        <React.Fragment>
          <Router>
            <NavigationBar />
            <Layout>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about-us" component={AboutUs} />
                  <Route path="/pricing" component={accordion} />
                <Route component={NoMatch} />
              </Switch>
            </Layout>
          </Router>
        </React.Fragment>
    );
  }
}

export default App;
