import { useState } from 'react'
import './App.css'
import Home from './components/Home'

export default function App() {
  const [Count, setCount] = useState(0)

  return (
    <>
      <Home value={"Project"} setCount = {setCount} > 
        {Count}
      </Home>
    </>
  )
}


