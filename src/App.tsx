import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import styled from "styled-components";

const Wrapper=styled.div`
  border:1px solid red;
  min-height:100vh;
  display:flex;
  flex-direction:column;
`;
const Main=styled.div`
 overflow:auto;
  border:1px solid green;
  flex-grow:1;
`
const Nav=styled.nav`
  border:1px solid blue;
  >ul{
    display:flex;
    >li{
      width:33.333%;
      text-align:center;
      padding:16px;
    }
  }
`

function App() {
  return (
    <Router>
      <Wrapper>
        <Main>
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
        </Main>
        <Nav>
          <ul>
            <li>
              <Link to="/tags">标签页</Link>
            </li>
            <li>
              <Link to="/money">记帐页</Link>
            </li>
            <li>
              <Link to="/statics">统计页</Link>
            </li>
          </ul>
        </Nav>
      </Wrapper>
    </Router>
  );
}

function Statics() {
  return <h2>统计页面</h2>;
}

function Tags() {
  return <h2>标签页面</h2>;
}

function Money() {
  return <h2>记账页面</h2>;
}
function NoMatch(){
  return <h1>你访问的页面不存在</h1>
}

export default App;
