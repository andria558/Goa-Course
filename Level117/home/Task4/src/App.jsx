import React from 'react'
import WorkoutItem from './components/WorkoutItem';

const App = () => {
  return (
    <div>
      <WorkoutItem Nwork={["Push-ups", "Squats", "Plank", "Burpees"]} />
    </div>
  )
}

export default App;