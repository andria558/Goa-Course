import React from 'react'
import PrinterButton from './PrinterButton';

const Printer = () => {

  const handleMassage = () => {
    let massage;

    let i = 1;
    while (i <= 5000) {
      massage += 'Hello '
      i++;
    }
    alert(massage);
  }

  return (
    <div>
      <PrinterButton onButtonClick={handleMassage}/>
    </div>
  )
}

export default Printer;