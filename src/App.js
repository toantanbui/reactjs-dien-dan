
import './App.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter as Router } from 'connected-react-router';
import { history } from './redux';
import { path } from './constant/constant';
import Home from './Home/Home';
import Menu from './Menu/Menu';
import Footer from './Footer/Footer';



// import { userIsAuthenticated, userIsNotAuthenticated } from './authentication/authentication'

const App = () => {

  return (
    <>
      <Router history={history}>
        <Switch>
          {/* <Route path={path.HOME} exact component={userIsAuthenticated(Home)} /> */}
          <Route path={path.HOME} exact component={(Home)} />
          <Route path={path.MENU} component={(Menu)} />
          <Route path={path.FOOTER} component={(Footer)} />






        </Switch>
      </Router>

    </>
  );
}

export default App;

