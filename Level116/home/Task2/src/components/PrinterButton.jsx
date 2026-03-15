import React from 'react'

const PrinterButton = (prop) => {
  return (
    <div>
      <button onClick={prop.onButtonClick}>massage</button>
    </div>
  )
}

export default PrinterButton;