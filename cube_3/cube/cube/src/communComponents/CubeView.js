import React from 'react'

const CubeView = ({hv, wv,unit,length,wname,width}) => {
  return <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
      <p style={{writingMode: "vertical-rl" }}>length = {length} {unit}</p>
      <div style={{display:'flex', flexDirection:"column",alignItems:'center'}}>
      <div style={{width:`${wv}px`,height:`${hv}px`,background:'gray'}}>
      </div>
      <p>{wname} = {width} {unit}</p>
      </div>
  </div>
  </div>;
}

export default CubeView