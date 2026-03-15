import './App.css';

export default function App() {
  const missions = [
    {
      name: 'Apollo 11',
      description: 'First manned mission to land on the Moon in 1969. Neil Armstrong became the first human to walk on the lunar surface.',
      image: 'image.png',
      wiki: 'https://en.wikipedia.org/wiki/Apollo_11'
    },
    {
      name: 'Voyager 1',
      description: 'Launched in 1977, Voyager 1 is the farthest human-made object from Earth, exploring interstellar space.',
      image: 'image1.png',
      wiki: 'https://en.wikipedia.org/wiki/Voyager_1'
    },
    {
      name: 'James Webb Telescope',
      description: 'Launched in 2021, JWST is a powerful space telescope that observes distant galaxies and exoplanets.',
      image: 'image2.png',
      wiki: 'https://en.wikipedia.org/wiki/James_Webb_Space_Telescope'
    },
    {
      name: 'Mars Perseverance',
      description: "NASA's rover landed on Mars in 2021 to search for signs of ancient life and collect rock samples.",
      image: 'image3.png',
      wiki: 'https://en.wikipedia.org/wiki/Perseverance_(rover)'
    }
  ];

  return (
    <div className="app">
      <h1>🌌 Space Missions</h1>
      <div className="mission-list">
        {missions.map((mission, index) => (
          <div key={index} className="mission-card">
            <img src={mission.image} alt={mission.name} />
            <h2>{mission.name}</h2>
            <p>{mission.description}</p>
            <a href={mission.wiki} target="_blank" rel="noopener noreferrer">
              <button>Learn More</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}


