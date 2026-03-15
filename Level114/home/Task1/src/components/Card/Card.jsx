import React from 'react'
import './Card.css'

const Card = () => {
  return (
    <div className='Card'>
      <div>
        <img src="illustration-hero.svg" alt="#" />
      </div>
      <div>
        <h2>Order Summary</h2>
        <p>You can now listen to millions of songs, audioBooks, and podcasts on any device anywhere you like!</p>
        <div>
          <span>#</span>
          <h4>Annual Plan <br /> <span>$59.99/year</span></h4>
          <a href="#">Change</a>
        </div>
        <br />
        <button>Proceed to Payment </button><br />
        <a href="#">Cancel Order</a>
      </div>
    </div>
  )
}

export default Card;