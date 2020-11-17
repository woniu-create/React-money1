import React from 'react';
import {HashRouter as Router,Switch,Route,Redirect} from "react-router-dom";
// import styled from "styled-components";
// import Nav from "components/Nav"
// import Layout from 'components/Layout'//绝对路径

import Money from './views/Money'
import Statics from './views/Statistics'
import Tags from './views/Tags'
import NoMatch from './views/NoMatch'

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/tags">
            <Tags />
          </Route>
          <Route path="/money">
            <Money />
          </Route>
          <Route path="/statics">
            <Statics/>
          </Route>
          <Redirect exact from="/" to="/money"/> 
          <Route path="*">
            <NoMatch/>
          </Route>
        </Switch>
    </Router>
  );
}
export default App;
