import image from './assets/images/image.png'
import React, { useState } from 'react';


export default function App() {
  const Greeting = 'Welcome to React!';

  const [name, setName] = useState('');

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('შეყვანილი სახელი:', name);
    setName('');
  };


  const calculateDifference = (a, b) => {
    return Math.abs(a - b);
  };


  // let NumFirst = Number(prompt("Enter Number 1: "))

  // let NumSecond = Number(prompt("Enter Number 2: "))

  const handleClick = () => {
    const num1 = 15;
    const num2 = 5;
    const result = calculateDifference(num1, num2);
    console.log(`რიცხვების სხვაობა: ${result}`);
    alert(`რიცხვების სხვაობა არის: ${result}`);
  };








  const getCurrentTime = () => {
    const now = new Date();
    const hours = String(now.getHours());
    const minutes = String(now.getMinutes());
    const seconds = String(now.getSeconds());
    return `${hours}:${minutes}:${seconds}`;
  };

    const interval = setInterval(() => {
      const time = getCurrentTime();
      console.log("მიმდინარე დროა:", time);
    }, 1000);

  
  return (
    <>
      <h2>{Greeting}</h2>
      <img src={image} alt="img" width="450px" height="300px" />
      <form>
        <label>
          შეიყვანეთ სახელი:
          <input type="text" value={name} onChange={handleChange} placeholder="მაგ: ანდრია" />
        </label>&nbsp;
        <button type="submit" disabled={!name.trim()} onClick={handleSubmit}>
          გაგზავნა
        </button><br /><br />

        <button onClick={handleClick}>გამოთვალე.. / </button>
      </form>
    </>
  )
}




