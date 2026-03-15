import React from 'react'
import './App.css'

const App = () => {
  return (
    <div className="container">
      <div className="card">
        {/* Left Section */}
        <div className="left-section">
          <h1>Join free<br />for 7 days</h1>
          <button className="app-store-btn">
            <span className="apple-icon">🍎</span>
            App Store
          </button>
        </div>

        {/* Right Section */}
        <div className="right-section">
          <div className="date-header">Today, 14 January</div>

          <div className="calories-display">
            <span className="calories-number">1,297</span>
            <span className="calories-label">kcal</span>
          </div>

          <div className="stats-container">
            <div className="stat-box intake">
              <div className="stat-label">Intake</div>
              <div className="stat-value">928</div>
              <div className="stat-unit">kcal</div>
            </div>

            <div className="stat-box burned">
              <div className="stat-label">Burned</div>
              <div className="stat-value">1298</div>
              <div className="stat-unit">kcal</div>
            </div>
          </div>

          <button className="watch-btn">Watch ›</button>

          <div className="food-image">🍔🍕🥗</div>
          <p className="banned-text">No banned foods.</p>
        </div>
      </div>
    </div>
  )
}

export default App;