import styled from "styled-components";
import React from 'react';
import {useTags} from 'useTags'

const Wrapper=styled.section`
  background:#fff;
  padding:12px 16px;
  display:flex;
  flex-grow:1;
  flex-direction:column;
  justify-content:flex-end;
  align-items:flex-start;
  >ol{
    margin:0 -12px;
    >li{
      background:#D9D9D9;
      border-radius:18px;
      display:inline-block;
      padding:3px 18px;
      font-size:14px;
      margin:8px 12px;
      &.selected{
        background:red;
      }
    }
  } 
  >button{
    background:none;
    border:none;
    padding:2px 4px;
    border-bottom:1px solid #333;
    color:#666;
    margin-top:8px;
  }
`
  type Props={
    value:number[];
    onChange:(selected:number[])=>void
  }

  const TagsSection:React.FC<Props>=(props)=>{
  // const [tags,setTags]=useState<string[]>(['衣','食','住','行']);//等价下面的这句话
  const {tags,setTags}=useTags();
  const selectedTagIds=props.value
  // console.log(selectedTags)

  const onAddTag=()=>{
   const tagName=window.prompt('新标签的名称为:')
   if(tagName!==null){
      setTags([...tags,{id:Math.random(),name:tagName}])
   }
  }
  //疑惑开始
  const onToggleTag=(tagId:number)=>{
    const index=selectedTagIds.indexOf(tagId);
    console.log(index)
    if(index>=0){
      props.onChange(selectedTagIds.filter(t=>t!==tagId))//如果tag已被选中，就复制所有的没有被选中的tag,作为新的selectedTag
      // console.log('被选中了'+tag)
    }else{
      props.onChange([...selectedTagIds,tagId])
      // console.log('没被选中'+tag)
    }
  }
  const X=(tagId:number)=>selectedTagIds.indexOf(tagId)>=0 ? 'selected':''
  return (
  <Wrapper>
     <ol>
       {tags.map(tag=>
         <li key={tag.id} onClick={()=>{onToggleTag(tag.id)}} className={X(tag.id)}>{tag.name}</li>
    //疑惑结束
       )}
     </ol>
     <button onClick={onAddTag}>新增标签</button>
  </Wrapper>
  )
}

export {TagsSection}