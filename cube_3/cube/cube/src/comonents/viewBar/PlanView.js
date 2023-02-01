import React from 'react'
import CubeView from '../../communComponents/CubeView'
import Heading from '../../communComponents/Heading'

const PlanView = ({unit,inputText}) => {
  console.log("=====inputText",inputText);
  return (
    <div style={{height:'45%', background:'yellow', marginBottom:'10px', width:'100%'}}>
      < Heading text={'Plan View'} />
      < CubeView hv={180} wv={180} wname={"Width"} length={inputText['Length']} width={inputText["Width"]} unit={unit}/>
      </div>
  )
}

export default PlanView