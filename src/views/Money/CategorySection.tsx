import React,{useState} from 'react'
import styled from 'styled-components';
const Wrapper=styled.section`
  font-size:24px;
  >ul{
    display:flex;
    background:#c4c4c4;
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

const CategorySection:React.FC=()=>{
  const categoryMap={'-':'支出','+':'收入'};
  const [categoryList]=useState<('+'|'-')[]>(['-','+'])
  const [category,setCategory]=useState('-')
  return (
    <Wrapper>
      <ul>
  {categoryList.map(c=><li key={c} className={category===c?'selected':''} onClick={()=>{setCategory(c)}}>{categoryMap[c]}</li>)}
      </ul>
    </Wrapper>
  )
}

export {CategorySection}