import React from 'react'
import ToggleButton from './ToggleButton';

const OutputBox = ({box,inputText,setOutputValue,setInputText,changeUnit}) => {
  const {unitInFeet, unitInMeter, lable,type} = box;
  return (
    <div style={{display:'flex', justifyContent:'center', marginBottom:'10px', alignItems:'center'}}>
      <p style={{width:'23%', paddingRight:'10px'}}>{lable}</p>
      < ToggleButton setOutputValue={setOutputValue} inputText={inputText} setInputText={setInputText} type={type} changeUnit={changeUnit} unitInFeet={unitInFeet} unitInMeter={unitInMeter} />
    </div>
  )
}

export default OutputBox;