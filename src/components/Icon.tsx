import React from 'react';

// require('icons/money.svg')
// require('icons/tag.svg')
// require('icons/chart.svg')

let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('icons', true, /\.svg$/));} catch (error) {console.log(error);}

type Props={
    name:string//声明name的类型为 字符串
}

const Icon=(props:Props)=>{
  return (
      <svg className="icon">
          <use xlinkHref={'#'+props.name}/>
      </svg>
  )
}
export default Icon;