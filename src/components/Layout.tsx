import Nav from './Nav';
import React from 'react'
import styled from "styled-components";

const Wrapper=styled.div`
  /* border:5px solid red; */
  height:100vh;
  display:flex;
  flex-direction:column;
`;
const Main=styled.div`
 overflow:auto;
  /* border:5px solid green; */
  flex-grow:1;
`

const Layout=(props:any)=>{
    return (
        <Wrapper>
         <Main className={props.className}>
          {props.children}
         </Main>
        <Nav/>
      </Wrapper>
    )
}
export default Layout;