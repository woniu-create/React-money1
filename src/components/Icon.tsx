import React from 'react';

// require('icons/money.svg')
// require('icons/tag.svg')
// require('icons/chart.svg')

let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('icons', true, /\.svg$/));} catch (error) {console.log(error);}

type Props={
    name?:string//声明name的类型为 字符串 ?表示name可以没有
}

const Icon=(props:Props)=>{
  return (
      <svg className="icon">
          {props.name&&<use xlinkHref={'#'+props.name}/>}
          {/* 如果props.name存在，则返回后面，否则什么也不做 */}
      </svg>
  )
}
export default Icon;