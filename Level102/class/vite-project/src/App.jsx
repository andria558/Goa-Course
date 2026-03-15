import React from 'react'
import './App.css'

const App = () => {
  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <h1>⚡ THE FLASH ⚡</h1>
        <p>Fastest Man Alive</p>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <img
          src="image.png"
          alt="Flash"
          className="hero-img"
        />
        <h2>Barry Allen</h2>
        <p>A forensic scientist who gained superhuman speed after a lightning strike. He fights crime as The Flash!</p>
      </section>

      {/* Powers */}
      <section className="powers">
        <h3>Powers</h3>
        <div className="powers-grid">
          <div className="power-card">
            <p className="icon">⚡</p>
            <p>Super Speed</p>
          </div>
          <div className="power-card">
            <p className="icon">🔥</p>
            <p>Speed Force</p>
          </div>
          <div className="power-card">
            <p className="icon">💨</p>
            <p>Time Travel</p>
          </div>
        </div>
      </section>

      {/* Button */}
      <section className="button-section">
        <button className="btn">Learn More</button>
      </section>
    </div>
  )
}

export default App;