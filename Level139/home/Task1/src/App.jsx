import React, { useEffect, useState } from 'react'

const App = () => {
  let [post, setPosts] = useState([]);

  useEffect(() => {
    let Active = true;

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => {
        if (Active) {
          setPosts(data.slice(0, 1));
        }

      })
      .catch(err => console.error("Errore:", err))

    return () => {
      Active = false
    }
  }, [])


  return (
    <div>
      <h2>User:</h2>
      <ul>
        {post.map((item) => {
          return <li key={item.id}>{item.userId}</li>
        })}
      </ul>


      <br />


      <h3>title:</h3>
      <ul>
        {post.map((item) => {
          return <li key={item.id}>{item.title}</li>
        })}
      </ul>


      <br />


      <h3>text:</h3>
      <ul>
        {post.map((item) => {
          return <li key={item.id}>{item.body}</li>
        })}
      </ul>
    </div>
  )
}

export default App;