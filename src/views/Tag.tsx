import React from 'react'
import { useParams } from 'react-router-dom'
import {useTags} from '../useTags'
import Layout from 'components/Layout'
import {Button} from 'components/Button'
import Icon from 'components/Icon'
import styled from 'styled-components';

const Topbar=styled.header`
  display:flex;
  justify-content:space-between;
  align-items:center;
  line-height:20px;
  padding:14px;
  background:white;
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
      <div>
          <label>
              <span>备注</span>
              <input type="text" placeholder="标签名"/>
          </label>
      </div>
    <div>
      <Button>删除标签</Button>
    </div>
    </Layout>
    )
}
export {Tag}