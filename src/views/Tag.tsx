import React from 'react'
import { useParams,useHistory } from 'react-router-dom'
import {useTags} from '../useTags'
import Layout from 'components/Layout'
import {Button} from 'components/Button'
import Icon from 'components/Icon'
import styled from 'styled-components';
import {Input} from '../components/Input';
import {Center} from 'components/Center'
import {Space} from 'components/Space'

const Topbar=styled.header`
  display:flex;
  justify-content:space-between;
  align-items:center;
  line-height:20px;
  padding:14px;
  background:white;
`
const InputWrapper=styled.div`
  background:white;
  padding:0 16px;
  margin-top:8px;
`

type Params={
    id:string
}
const Tag:React.FC=()=>{
    // const {tags}=useTags()
    const {findTag,updataTag,deleteTag}=useTags()
    const {id}=useParams<Params>()

    // const tag=tags.filter(tag=>tag.id===parseInt(id))[0]
    const tag=findTag(parseInt(id))

    const tagContent=(tag:{id:number;name:string})=>(
       <div>
       <InputWrapper>
           <Input label="标签名" type="text" placeholder="标签名"
          value={tag.name}
          onChange={(e)=>{
            // tag.name=e.target.value
            // console.log(tag.name)
          updataTag(tag.id,{name:e.target.value}
          )}}/>
       </InputWrapper>
     <Center>
      <Space/>
      <Button onClick={()=>{deleteTag(tag.id);}}>
        删除标签
      </Button>
     </Center>
     </div>
    )
    const history=useHistory()
    const onClickBack=()=>{
      // window.history.back()
      history.goBack()
    }
    return (
    <Layout>
      <Topbar>
      <Icon name="left" className="jack" onClick={onClickBack}/>
            <span>编辑标签</span>
        <Icon/>
      </Topbar>
      {tag ? tagContent(tag) : <Center>tag 不存在</Center>}
     </Layout>
    )
}
export {Tag}