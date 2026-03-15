import './App.css'


export default function App() {


  return (
    <body>
      <div id='main'>
        <div id='image-hero'><img src="image-product-mobile.jpg" alt="" /></div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div id='hero'>
          <p>P E R F U M E</p> <br />
          <h1>Gabrielle <br /> Essence Eau <br /> De Parfum</h1><br />
          <p id='text-about'>A floral, solar and voluptuous <br />
            interpretation composed by <br />
            Olivier Polge. Perfumer-creator <br />
            for the House of CHANEL.</p>
          <p id='Price'>$149.99 &nbsp;&nbsp;<span>$169.99</span></p><br />
          <button><img src="icon-cart.svg" alt="" id='Cart-icon' /> Add to Cart</button>
        </div>
      </div>      
    </body>


  )
}