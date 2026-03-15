import React from 'react'
import Comp2 from '../components/Comp2'

const Comp1 = () => {
  return (
    <div>
      <h1>I'm from third component 'Comp1'</h1>
      <span>❤️😍🖱️👊😁😎</span>
      <br />
      <hr />
      <br />
      <Comp2 />
    </div>
  )
}

export default Comp1;
