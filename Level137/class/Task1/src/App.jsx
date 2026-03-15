import React, { useEffect, useState } from 'react'

const App = () => {
  const [input, setInput] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(
        data => {
          setInput(data);
        }
      )
      .catch(err => console.error("Errori:", err))
  }, [])

  return (
    <div>
      <ul>
        {input.map((item) => {
          return <li key={item.id}>{item.name}</li>
        })}
      </ul>
    </div>
  )
}

export default App;