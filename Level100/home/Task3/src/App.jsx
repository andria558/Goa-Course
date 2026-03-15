import './App.css'

export default function App() {
  return (
    <body>
      <main class="card">
        <div class="card-image">
          <img src="image-equilibrium.jpg" alt="Equilibrium #3429" />
          <div class="overlay">
            <img src="icon-view.png" alt="View icon" />
          </div>
        </div>
        <h1>Equilibrium #3429</h1>
        <p class="description">Our Equilibrium collection promotes balance and calm.</p>
        <div class="card-info">
          <div class="price">
            <img src="icon-ethereum.png" alt="ETH" />
            <span>0.041 ETH</span>
          </div>
          <div class="time-left">
            <img src="icon-clock.png" alt="Clock" />
            <span>3 days left</span>
          </div>
        </div>
        <hr />
        <div class="creator">
          <img src="image-avatar.png" alt="Avatar" class="avatar" />
          <span>Creation of <strong>Jules Wyvern</strong></span>
        </div>
      </main>
    </body>
  )
}