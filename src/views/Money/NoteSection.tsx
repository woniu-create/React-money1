// import React,{ChangeEventHandler}from 'react'
// import styled from "styled-components";
// import {Input} from "../../components/Input"

// const Wrapper = styled.section`
//   background: #f5f5f5;
//   padding: 0 16px;
//   font-size: 14px;
//   /* > label {
//     display:flex;
//     align-items: center;
//     > span { margin-right: 16px; white-space: nowrap; }
//     > input {
//       display:block;
//       width: 100%;
//       height: 72px;
//       background: none;
//       border: none;
//     }
//   } */
// `;

// type Props={
//   value:string;
//   onChange:(value:string)=>void
// }
// const NotesSection:React.FC<Props>=(props)=>{
//   const note=props.value
//   // const refInput=useRef<HTMLInputElement>(null)
//   const onChange:ChangeEventHandler<HTMLInputElement>=(e)=>{
//       props.onChange(e.target.value);
//     }
//   }
//   console.log(note)
//   return (
//     <Wrapper>
//       <Input label="备注" type="text" value={note} onChange={onChange}/>
//        {/* <label>
//          <span>备注</span>
//          <input type="text" placeholder="请添加备注" ref={refInput} defaultValue={note} onBlur={onBlur}/>
//        </label> */}
      
//     </Wrapper>
//   )
// }
// export {NotesSection}

import styled from 'styled-components';
import React, {ChangeEventHandler} from 'react';
import {Input} from '../../components/Input';

const Wrapper = styled.section`
  background: #f5f5f5;
  padding: 14px 16px;
  font-size: 14px;
`;

type Props = {
  value: string;
  onChange: (value: string) => void;
}
const NoteSection: React.FC<Props> = (props) => {
  const note = props.value;
  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    props.onChange(e.target.value);
  };
  return (
    <Wrapper>
      <Input label="备注" type="text" value={note} onChange={onChange}
      placeholder="请填写备注"/>
    </Wrapper>
  );
};

export {NoteSection};