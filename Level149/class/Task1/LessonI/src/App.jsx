import React, { useEffect, useState } from 'react'

const App = () => {
  const [user, setUser] = useState([]);


    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => {
        setUser(data.slice(5))
      })



  return (
    <div>
      <ul>
        {user.map((item) => {
          return <li key={item.id}>{item.name}</li>
        })}
      </ul>
    </div>
  )
}

export default App;