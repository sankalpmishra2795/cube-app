import React, { useEffect, useState } from 'react';
import { convertFeetToMeter, convertMeterToFeet } from '../utils';

const ToggleButton = ({type,inputText,setOutputValue,setInputText,unitInMeter, unitInFeet,changeUnit}) => {
  const [isToggled, setIsToggled] = useState(false);
  const getCurrent = () => {
    return isToggled ? unitInFeet : unitInMeter;
  }
  const handleToggle = () => {
    setIsToggled(!isToggled);
  }
  useEffect(()=>{
    if(type === 'input')
    {
    if(isToggled)
    {
      setInputText(convertMeterToFeet(inputText));
    }
    else
    {
      setInputText(convertFeetToMeter(inputText));
    }
  }
  changeUnit(type,getCurrent());
  },[isToggled]);
 
  return (
    <button onClick={handleToggle}>
      {getCurrent()}
    </button>
  );
};

export default ToggleButton;
