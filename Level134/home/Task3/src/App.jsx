import React from 'react'
import QuizController from './components/QuizController';

const App = () => {
  return (
    <div>
      <QuizController questions={['task1', 'task2', 'task3', 'task4']}/>
    </div>
  )
}

export default App;