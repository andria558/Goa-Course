import React from 'react'
import Goa from '../assets/image.png'

const handleclick = (prop) => {

  
  return (
    <div>
      <img src={Goa} alt="#.." onClick={prop.onHandle} />
    </div>
  )
}

export default handleclick;
