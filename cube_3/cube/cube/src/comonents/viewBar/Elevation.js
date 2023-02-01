import React from 'react'
import CubeView from '../../communComponents/CubeView'
import Heading from '../../communComponents/Heading'

const Elevation = ({unit,inputText}) => {
  return (
    <div style={{paddingBottom:'80px', background:'red',  width:'100%'}}>
      < Heading text={'Elevation View'} />
      < CubeView hv={30} wv={180} wname={"Height"} length={inputText["Length"]} width={inputText["Height"]} unit={unit}/>
      </div>
  )
}

export default Elevation