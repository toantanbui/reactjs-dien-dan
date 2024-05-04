
import { Audio } from 'react-loader-spinner'
import React, { Component } from 'react';
import './App.css';
//import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter as Router } from 'connected-react-router';
import { history } from './redux';
import { path } from './constant/constant';
import Home from './Home/Home';
import Menu from './Menu/Menu';
import Footer from './Footer/Footer';
import MenuLogged from './MenuLogged/MenuLogged';
import Posting from './Posting/Posting';
import Discussion from './Discussion/Discussion';
import Comment from './Comment/Comment';
import PersonalPage from './PersonalPage/PersonalPage';
import Posts from './Posts/Posts';
import Infor from './Infor/Infor';
import SearchKey from './SearchKey/SearchKey';
import { useSelector, useDispatch } from 'react-redux';
const _ = require('lodash');



// import { userIsAuthenticated, userIsNotAuthenticated } from './authentication/authentication'

const App = () => {
  const dispatch = useDispatch()

  let allPostsRedux = useSelector(state => state.admin.allPosts)
  let allPostsLikeRedux = useSelector(state => state.admin.allPostsLike)


  return (
    <>
      <Router history={history}>
        <Switch>
          {/* <Route path={path.HOME} exact component={userIsAuthenticated(Home)} /> */}
          <Route path={path.HOME} exact component={(Home)} />



          <Route path={path.MENU} component={(Menu)} />
          <Route path={path.FOOTER} component={(Footer)} />
          <Route path={path.MENULOGGED} component={(MenuLogged)} />
          <Route path={path.POSTING} component={(Posting)} />
          <Route path={path.DISCUSSION} component={(Discussion)} />
          <Route path={path.COMMENT} component={(Comment)} />
          <Route path={path.PERSONALPAGE} component={(PersonalPage)} />
          <Route path={path.POSTS} component={(Posts)} />
          <Route path={path.INFOR} component={(Infor)} />
          <Route path={path.SEARCHKEY} component={(SearchKey)} />







        </Switch>
      </Router>

    </>
  );
}

export default App;

