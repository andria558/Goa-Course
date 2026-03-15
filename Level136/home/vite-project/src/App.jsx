import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [input, setInput] = useState([]);


    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(
        data => {
          setInput(data);
        }
      )
      .catch(err => console.error("Error:", err))

    let image = input.map(item => item.image).slice(0, 1)
    let info = input.map(item => item.title).slice(0, 1)
    let price = input.map(item => item.price).slice(0, 1)
    let discount = 400 - Number(price)


  return (
    <div className='box'>
      <div className='Hero'>

        <div>
          <img src={image} alt="" /><br /><br />

          <span className='black'></span>
          <span className='green'></span>

          <br /><br />
          <p>{info}</p>

          <br />
          <p className='price'><span className='old'>$400.00</span> {price} (-${discount})</p>

          <br />
          <button className='add'>+ Add</button>
        </div>

      </div>
    </div>
  )
}

export default App;