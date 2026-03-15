import React from 'react'
import { useState } from 'react'

const App = () => {
  let [toggle, setToggle] = useState('');
  let style = toggle === 'off' ? 'none' : '0px 0px 15px yellow'

  let spanStyle = {boxShadow: style}

return (
  <div>
    <button onClick={() => setToggle('on')}>on</button>
    <span style={spanStyle}>{toggle}</span>
    <button onClick={() => setToggle('off')}>off</button>
  </div>
)
}

export default App
