import React from 'react'
import { convertFeetToMeter, convertMeterToFeet } from '../../utils';

const RightViewPannel = ({width,unit,outputUnit,outputValue,inputText}) => {
  return (
    <div style={{height: '55vh',  width: `${width}`}}>
      <div style={{width:'100%',paddingBottom:'8px'}}>Output-panel</div>
      <div style={{width:'100%',height:'100%',display:'flex',flexDirection:'column',background:'#f7f7f7'}}>
          <p>output-field-group</p>
          <div style={{display:"flex",alignItems:'center',marginLeft:'20px',gap:"10px"}}>
            <div>
            <label>label</label>
            </div>
            <div>
            <input style={{height:'20px',width:"140px"}} type="text" value={`${outputValue[`${outputUnit === "unitInMeter"?"meter":"feet"}`]}`} disabled/>   
            </div>
            <div>
              {unit}
            </div>
          </div>
      </div>
    </div>
  )
}

export default RightViewPannel