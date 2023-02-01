import React from 'react'

const Heading = ({text}) => {
  return (
    <div style={{ display:'flex', justifyContent:'flex-start',paddingLeft:'10px',paddingBottom:'20px'}}>
        <p style={{ fontWeight:'bold'}}>{text}</p>
      </div>
  )
}

export default Heading