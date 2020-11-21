import Layout from '../components/Layout'
import React,{useState} from 'react'
import {CategorySection} from './Money/CategorySection';
import styled from 'styled-components';
import { useRecords,RecordItem } from 'hooks/useRecords';
import {useTags} from '../hooks/useTags'
import day from 'dayjs'

const CategoryWrapper=styled.div`
  background:white;
`
const Item=styled.div`
  display:flex;
  justify-content:space-between;
  background:white;
  font-size:18px;
  line-height:20px;
  padding:10px 16;
  >.note{
    margin-right:auto;
    margin-left:16px;
    color:#999;
  }
`
const Header=styled.h3`
  font-size:18px;
  line-height:20px;
  padding:10px 16px;  
`

function Statics() {
    const [category,setCategory]=useState<'-'|'+'>('-');
    const {records}=useRecords();
    const {getName}=useTags();
    const hash:{[K:string]:RecordItem[]}={}
    const selectedRecords=records.filter(r=>r.category===category)
    
    selectedRecords.map(r=>{
      const key=day(r.createAt).format('YYYY年MM月DD日')
      if(!(key in hash)){
        hash[key]=[]
      }
      hash[key].push(r)
    })
    //  console.log(Object.entries(hash)) //Object.entries(hash)将对象转为数组
    const array=Object.entries(hash).sort((a,b)=>{
      if(a[0]===b[0]) return 0;
      if(a[0]>b[0]) return -1;
      if(a[0]<b[0]) return 1
      return 0
    })
    console.log(array)

    return (
       <Layout>
        <CategoryWrapper>
         <CategorySection value={category} onChange={value=>setCategory(value)}/>
        </CategoryWrapper>
        {array.map(([date,records])=><div>
          <Header>
          <h3>
            {date}
          </h3>
          </Header>
          <div>
          {records.map(r=>{
            return<Item>
             <div className="tags">
              {r.tagIds.map(tagId=><span key={tagId}>{getName(tagId)}</span>)}
             </div>
          {r.note&&<div className="note">{r.note}</div>}
            <div className="amount">
              ￥{r.amount}
            </div>  
            </Item>
          })}
          </div>
        </div>
        )}
        </Layout>
    )
  }
  export default Statics