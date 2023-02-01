import React from 'react'

const InputFormBox = ({box,unit,inputText,setInputText}) => {
  const {label, inputValue, type} = box;
  const handleInputChange = (e) => {
    let copyInputText = {...inputText};
    copyInputText[label] = e?.target?.value;
    setInputText(copyInputText);
  }
  return (
    <div style={{display:'flex', justifyContent:'center', marginBottom:'10px', alignItems:'center'}}>
      <p style={{width:'23%', paddingRight:'10px'}}>{label}</p>
      <input onChange={handleInputChange} value={inputText[label]} style={{width:'33%', marginRight:'10px', height:'20px'}} type={type} value={inputValue} />
      <p style={{width:'33%'}}>{unit}</p>
    </div>
  )
}

export default InputFormBox