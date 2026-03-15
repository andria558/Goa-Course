import './App.css';

export default function App() {
  const technologies = [
    {
      name: 'Artificial Intelligence',
      description: 'AI enables machines to learn from data and make decisions. It powers virtual assistants, recommendation systems, and more.',
      image: 'image1.png',
      wiki: 'https://en.wikipedia.org/wiki/Artificial_intelligence'
    },
    {
      name: 'Blockchain',
      description: 'Blockchain is a decentralized ledger technology used for secure and transparent transactions, especially in cryptocurrencies.',
      image: 'image2.png',
      wiki: 'https://en.wikipedia.org/wiki/Blockchain'
    },
    {
      name: 'Cloud Computing',
      description: 'Cloud computing allows users to store and access data and applications over the internet instead of local servers.',
      image: 'image3.png',
      wiki: 'https://en.wikipedia.org/wiki/Cloud_computing'
    },
    {
      name: 'Internet of Things (IoT)',
      description: 'IoT connects everyday devices to the internet, enabling smart homes, wearable tech, and industrial automation.',
      image: 'image4.png',
      wiki: 'https://en.wikipedia.org/wiki/Internet_of_things'
    }
  ];

  return (
    <div className="app">
      <h1>🔧 Technology Explorer</h1>
      <div className="tech-list">
        {technologies.map((tech, index) => (
          <div key={index} className="tech-card">
            <img src={tech.image} alt={tech.name} />
            <h2>{tech.name}</h2>
            <p>{tech.description}</p>
            <a href={tech.wiki} target="_blank" rel="noopener noreferrer">
              <button>Learn More</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}


