import Layout from '../components/Layout'
import styled from "styled-components";
import React,{useState} from 'react'
import {TagsSection} from './Money/TagsSection';
import {CategorySection} from './Money/CategorySection';
import {NoteSection} from './Money/NoteSection';
import {NumberPadSection} from './Money/NumberPadSection';
import {useRecords} from '../hooks/useRecords';

const MyLayout=styled(Layout)`
  display:flex;
  flex-direction:column;
`
type Category='-'|'+'
const defaultFormDate={
  tagIds:[] as number[],
  note:'',
  category:'-' as Category,
  amount:0
}

const CategoryWrapper=styled.div`
  background:#c4c4c4;
`
function Money() {
  const [selected,setSelected]=useState(defaultFormDate)

   const {records,addRecord}=useRecords();
   console.log('records');
   console.log(records)
   const submit=()=>{
     if(addRecord(selected)){
      alert('保存成功')
      setSelected(defaultFormDate)
     }
   }

  type Selected=typeof selected;
  const onChange=(obj:Partial<Selected>)=>{
     setSelected({
       ...selected,
       ...obj
     })
  }
    return (
         <MyLayout>
           {/* react不支持直接显示对象 */}
          {JSON.stringify(selected)}
           {/* <TagsSection value={selected.tags} onChange={(tags)=>setSelected({
             ...selected,
             tags:tags
           })}/> */}
           <TagsSection value={selected.tagIds} onChange={tagIds=>onChange({tagIds})}/>
           <NoteSection value={selected.note} onChange={note=>onChange({note})}/>
           <CategoryWrapper>
           <CategorySection value={selected.category} onChange={category=>onChange({category})}/>
           </CategoryWrapper>
           <NumberPadSection value={selected.amount} onChange={(amount)=>{
             onChange({amount})
           }} onOk={submit}/>
        </MyLayout>
    )
  }
  export default Money