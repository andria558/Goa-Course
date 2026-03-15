import './App.css';

export default function App() {
  const cars = [
    {
      brand: 'Tesla',
      model: 'Model S',
      year: 2023,
      image: 'image0.png' // Tesla image source
    },
    {
      brand: 'BMW',
      model: 'M3',
      year: 2022,
      image: 'image1.png' // BMW image source
    },
    {
      brand: 'Toyota',
      model: 'Supra',
      year: 2021,
      image: 'image2.png' // Supra image source
    },
    {
      brand: 'Ford',
      model: 'Mustang',
      year: 2020,
      image: 'image3.png' // Mustang image source
    }
  ];

  return (
    <div class="app">
      <h1>🚗 Car Gallery</h1>
      <div className="car-list">
        {cars.map((car, index) => (
          <div key={index} class="car-card">
            <img src={car.image} alt={`${car.brand} ${car.model}`} />
            <h2>{car.brand}</h2>
            <p>Model: {car.model}</p>
            <p>Year: {car.year}</p>
          </div>
        ))}
      </div>
      <div class="footer">
        Privacy Policy &nbsp;&nbsp; Terms of Use &nbsp;&nbsp; Security  
      </div>
    </div>
  );
}


