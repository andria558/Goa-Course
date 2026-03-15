import './App.css';

export default function App() {
  const animals = [
    {
      name: 'Elephant',
      description: 'Elephants are the largest land animals on Earth. They are known for their intelligence, strong social bonds, and iconic trunks used for communication and grabbing objects.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/3/37/African_Bush_Elephant.jpg',
      wiki: 'https://en.wikipedia.org/wiki/Elephant'
    },
    {
      name: 'Lion',
      description: 'Lions are powerful carnivores and are often called the "king of the jungle." They live in prides and are known for their majestic manes and loud roars.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Lion_waiting_in_Namibia.jpg',
      wiki: 'https://en.wikipedia.org/wiki/Lion'
    },
    {
      name: 'Giraffe',
      description: 'Giraffes are the tallest mammals on Earth, with necks that allow them to reach leaves high up in trees. They are gentle and social animals found in African savannas.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/9/9f/Giraffe_standing.jpg',
      wiki: 'https://en.wikipedia.org/wiki/Giraffe'
    },
    {
      name: 'Zebra',
      description: 'Zebras are known for their striking black-and-white striped coats. Each zebra’s stripe pattern is unique, and they use it for camouflage and social bonding.',
      image: 'image.png',
      wiki: 'https://en.wikipedia.org/wiki/Zebra'
    }
  ];

  return (
    <div className="app">
      <h1>🌍 Animal Gallery</h1>
      <div className="animal-list">
        {animals.map((animal, index) => (
          <div key={index} className="animal-card">
            <img src={animal.image} alt={animal.name} />
            <h2>{animal.name}</h2>
            <p>{animal.description}</p>
            <a href={animal.wiki} target="_blank" rel="noopener noreferrer">
              <button>Learn More</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

