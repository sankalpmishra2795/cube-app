import React from 'react'
import Elevation from './Elevation'
import PlanView from './PlanView'

const LeftViewPannel = ({unit,inputText}) => {
  return (
    <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
      < PlanView unit={unit} inputText={inputText}/>
      < Elevation unit={unit} inputText={inputText}/>
    </div>
  )
}

export default LeftViewPannel