import "./App.css";

function App() {
  return (
    <div className="product-page">
      {/* LEFT IMAGES */}
      <div className="image-section">
        <div className="small-images">
          <img src="product1.png" alt="front" />
          <img src="product2.png" alt="back" />
          <img src="model.png" alt="model" />
        </div>
        <div className="main-image">
          <img src="product1.png" alt="main" />
        </div>
      </div>

      {/* RIGHT DETAILS */}
      <div className="details">
        <h1>ONE LIFE GRAPHIC T-SHIRT</h1>
        <div className="rating">
          ⭐⭐⭐⭐½ <span className="rating-text">4.5/5</span>
        </div>

        <div className="price">
          <span className="new">$260</span>
          <span className="old">$300</span>
          <span className="discount">-40%</span>
        </div>

        <p className="description">
          This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.
        </p>

        <hr />

        <div className="color-section">
          <p className="section-title">Select Colors</p>
          <div className="color-options">
            <button className="color olive"></button>
            <button className="color green"></button>
            <button className="color purple"></button>
          </div>
        </div>

        <hr />

        <div className="size-section">
          <p className="section-title">Choose Size</p>
          <div className="size-buttons">
            <button>Small</button>
            <button>Medium</button>
            <button className="active">Large</button>
            <button>X-Large</button>
          </div>
        </div>

        <hr />

        <div className="cart-controls">
          <div className="quantity">
            <button>−</button>
            <span>1</span>
            <button>+</button>
          </div>
          <button className="add-to-cart">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default App;
