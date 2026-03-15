import React, { useEffect, useState } from 'react'

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let active = true;

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => {
        if (active) {
          setPosts(data.slice(0, 5));
        }
      })
      .catch(err => console.error("Errori:", err));

    return () => {
      active = false;
    };
  }, []);

  return (
    <div>
      <h3>Posts:</h3>
      <ul>
        {posts.map(p => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

