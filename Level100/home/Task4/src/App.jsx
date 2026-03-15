import './App.css'

export default function App() {
  return (
    <>
      <body>

        <main>

          <article class="card">
            <div class="card__img-holder">
              <img src="illustration-hero.png" alt="Illustration of a person listening to music."/>
            </div>
            <div class="card__body">
              <h1 class="title">Order Summary</h1>
              <p class="text">You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you
                like!</p>
              <div class="plan-box">
                <div class="plan-box-left">
                  <img src="icon-music.png" alt="" aria-hidden="true"/>
                    <div class="plan-details">
                      <h2>Annual Plan</h2>
                      <p>$59.99/year</p>
                    </div>
                </div>
                <div class="plan-box-right">
                  <a href="#">Change</a>
                </div>
              </div>
            </div>
            <div class="button-holder">
              <button class="btn payment-btn">Proceed to Payment</button>
              <button class="btn cancel-btn">Cancel Order</button>
            </div>
          </article>
        </main>

      </body>
    </>
  )
}