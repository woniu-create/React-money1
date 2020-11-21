import React,{useState} from 'react'
import styled from 'styled-components';
const Wrapper=styled.section`
  font-size:24px;
  >ul{
    display:flex;
    >li{
      width:50%;
      text-align:center;
      padding:16px 0;
      position:relative;
      &.selected::after{
        content:'';
        display:block;
        height:3px;
        background:#333;
        position:absolute;
        bottom:0;
        width:100%;
        left:0;
      }
    }
  }
`
// const CategorySection:React.FC=()=>{
//   const [category,setCategory]=useState('-')//'-'表支出,'+'表收入
//   return (
//     <Wrapper>
//       <ul>
  
//         <li className={category==='-' ? 'selected':''} onClick={()=>{setCategory('-')}}>支出</li>
//         <li className={category==='+' ? 'selected':''} onClick={()=>{setCategory('+')}}>收入</li>
//       </ul>      
//     </Wrapper>
//   )
// }
type Props={
  value:'-'|'+',
  onChange:(value:'-'|'+')=>void;
}

const CategorySection:React.FC<Props>=(props)=>{
  const categoryMap={'-':'支出','+':'收入'};
  const [categoryList]=useState<('+'|'-')[]>(['-','+'])
  const category=props.value
  return (
    <Wrapper>
      <ul>
  {categoryList.map(c=><li key={c} className={category===c?'selected':''} onClick={()=>{props.onChange(c)}}>{categoryMap[c]}</li>)}
      </ul>
    </Wrapper>
  )
}

export {CategorySection}