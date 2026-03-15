import React from 'react'
import Reverser from './Reverser';

const ReverseButton = () => {

  const reverser = () => {
    let msg = "";

    for (let i = 0; i < 1000; i++) {
      msg += "React is fun! ";
    }

    alert(msg.split("").reverse().join(""));
  }

  return (
    <div>
      <Reverser ReverseWord={reverser}/>
    </div>
  )
}

export default ReverseButton;
