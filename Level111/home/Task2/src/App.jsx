import React from 'react';
import './App.css';

//! Images 👇
import icon_sedans from './assets/images/icon-sedans.svg';
import icon_suvs from './assets/images/icon-suvs.svg';
import icon_luxury from './assets/images/icon-luxury.svg';

const App = () => {
  return (
    <div className='Card-box'>
      <div className='cards'>
        {/* Card I */}
        <div className="card-1 card">

          <img src={icon_sedans} alt="Sedans - icon" />

          <h1>SEDANS</h1>

          <p>Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.</p>

          <button>Learn More</button>

        </div>

        {/* Card II */}
        <div className="card-2 card">

          <img src={icon_suvs} alt="SVUs - icon" />

          <h1>SVUS</h1>

          <p>Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.</p>

          <button>Learn More</button>

        </div>

        {/* Card III */}
        <div className="card-3 card">

          <img src={icon_luxury} alt="Luxury - icon" />

          <h1>LUXURY</h1>

          <p>Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.</p>

          <button>Learn More</button>

        </div>
      </div>
    </div>

  )
}

export default App
// -- Sedans  -- Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.

// -- SUVs -- Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures. 

// -- Luxury -- Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.