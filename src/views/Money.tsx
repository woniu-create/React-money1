import Layout from '../components/Layout'
import styled from "styled-components";
import React,{useState} from 'react'
import {TagsSection} from './Money/TagsSection';
import {CategorySection} from './Money/CategorySection';
import {NoteSection} from './Money/NoteSection';
import {NumberPadSection} from './Money/NumberPadSection';

const MyLayout=styled(Layout)`
  display:flex;
  flex-direction:column;
`
type Category='-'|'+'

function Money() {
  const [selected,setSelected]=useState({
    tagIds:[] as number[],
    note:'',
    category:'-' as Category,
    amount:0
  })
  type Selected=typeof selected;
  const onChange=(obj:Partial<Selected>)=>{
     setSelected({
       ...selected,
       ...obj
     })
  }
    return (
         <MyLayout>
           {selected.tagIds.join(',')}
           <hr/>
           {selected.note}
           <hr/>
           {selected.category}
           <hr/>
           {selected.amount}
           {/* <TagsSection value={selected.tags} onChange={(tags)=>setSelected({
             ...selected,
             tags:tags
           })}/> */}
           <TagsSection value={selected.tagIds} onChange={tagIds=>onChange({tagIds})}/>
           <NoteSection value={selected.note} onChange={note=>onChange({note})}/>
           <CategorySection value={selected.category} onChange={category=>onChange({category})}/>
           <NumberPadSection value={selected.amount} onChange={(amount)=>{
             onChange({amount})
           }} onOk={()=>{}}/>
        </MyLayout>
    )
  }
  export default Money