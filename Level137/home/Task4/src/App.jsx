import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const App = () => {
  const [post, setPost] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setPost(data.slice(0, 5))
      })
  }, [])

  return (
    <div>
      <ul>
        {post.map(item => {
          return <li key={item.id}>{item.title}</li>
          }
        )}
      </ul>
    </div>
  )
}

export default App;