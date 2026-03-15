import React from 'react'
import RandomButton from './RandomButton';

const Generator = () => {

  const GenerateRandomNumbers = () => {
    let numbers;

    let i = 1;
    while (i <= 100) {
      numbers += String(Math.floor(Math.random() * 101) + ' ');
      i++;
    }
    alert(numbers);
  }
  return (
    <div>
      <RandomButton GenerateRandom={GenerateRandomNumbers}/>
    </div>
  )
}

export default Generator;