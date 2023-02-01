import React from 'react'
import InputForm from './InputForm'
import OutputForm from './OutputForm'

const InputPannel = ({width,unit,setOutputValue,changeUnit,inputText,setInputText}) => {
  return (
    <div style={{ height: '100vh', width: `${width}` }} >
      < InputForm inputText={inputText} setInputText={setInputText} unit={unit}/>
      < OutputForm setOutputValue={setOutputValue} inputText={inputText} setInputText={setInputText} changeUnit={changeUnit} />
      </div>
  )
}

export default InputPannel;