import React from 'react'
import Heading from '../../communComponents/Heading'
import OutputBox from '../../communComponents/OutputBox'
import InputFormData from '../../customData/input-form.json';
import unitList from "../../customData/unit.json";
const OutputForm = ({inputText,setInputText,setOutputValue,changeUnit}) => {
  return (
    <div style={{ height: '35vh', width: '90%', background:'#f7f7f7' }} >
      < Heading text='Localisation - Option' />
      {unitList?.units?.map(box => {
        return(< OutputBox setOutputValue={setOutputValue} inputText={inputText} setInputText={setInputText} changeUnit={changeUnit} key={box.id} box={box} />)
      })}
      
    </div>
  )
}

export default OutputForm