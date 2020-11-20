import {useState} from 'react';
import {createId} from 'lib/createId'
import { threadId } from 'worker_threads';

const defaultTags=[
    {id:createId(),name:'衣'},
    {id:createId(),name:'食'},
    {id:createId(),name:'住'},
    {id:createId(),name:'行'}
]
const useTags=()=>{
    const [tags,setTags]=useState<{id:number;name:string}[]>(defaultTags)
    const findTag=(id:number)=>tags.filter(tag=>tag.id===id)[0];
    const findTagIndex=(id:number)=>{
        let result=-1;
        for(let i=0;i<tags.length;i++){
            if(tags[i].id===id){
                result=i;
                break;
            }
        }
        return result;
    }
    const updataTag=(id:number,obj:{name:string})=>{
          setTags(tags.map(tag=>tag.id===id? {id, name:obj.name}:tag))

        //   setTags(tags.map(tag=>{
        //       if(tag.id===id){
        //           return {id:id,name:obj.name}
        //       }else{
        //           return tag
        //       }
        //   }))

        // //获取要修改tag的下标
        // const index=findTagIndex(id);
        // //深拷贝tags到tagsClone
        // const tagsClone=JSON.parse(JSON.stringify(tags));
        // // const newTags=tagsClone.splice(index,1,{id:IDBCursor,name:obj.name});
        // // setTags(newTags)

        // //把tagsClone的第index删掉,换成{id:id,name:obj.name}
        // tagsClone.splice(index,1,{id:id,name:obj.name});
        // setTags(tagsClone)
    }
    const deleteTag=(id:number)=>{
        setTags(tags.filter(tag=>tag.id!==id))
  

        // //获取要删除tag的下标
        // const index=findTagIndex(id);
        // //深拷贝tags到tagsClone
        // const tagsClone=JSON.parse(JSON.stringify(tags));  
        // tagsClone.splice(index,1);
        // setTags(tagsClone)
    }
    return {
        // tags:tags,
        // setTags:setTags,
        // findTag:findTag,
        tags,setTags,useTags,findTag,updataTag,findTagIndex,deleteTag
    }
}
export {useTags}