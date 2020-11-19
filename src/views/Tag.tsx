import React from 'react'
import { useParams } from 'react-router-dom'
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
    const {findTag}=useTags()
    const {id}=useParams<Params>()

    // const tag=tags.filter(tag=>tag.id===parseInt(id))[0]
    const tag=findTag(parseInt(id))
    return (
    <Layout>
      <Topbar>
        <Icon name="left"/>
            <span>编辑标签</span>
        <Icon/>
      </Topbar>
      <InputWrapper>
         <Input label="标签名" type="text" placeholder="标签名" value={tag.name}/>
      </InputWrapper>
    <Center>
      <Space/>
      <Button>删除标签</Button>
    </Center>
    </Layout>
    )
}
export {Tag}