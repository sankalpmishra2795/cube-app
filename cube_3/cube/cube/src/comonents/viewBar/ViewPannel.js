import React from 'react'
import LeftViewPannel from './LeftViewPannel'
import RightViewPannel from './RightViewPannel'

const ViewPannel = ({width,unit,inputText}) => {
  return (
    <div style={{ height: '95vh', width: `${width}`}}>
      < LeftViewPannel inputText={inputText} unit={unit} />
    </div>
  )
}

export default ViewPannel