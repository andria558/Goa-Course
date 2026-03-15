import React from 'react'
import QuizTopic from './components/QuizTopic';

const App = () => {
  return (
    <div>
      <QuizTopic Nwork={["Physics", "Biology", "Chemistry", "Astronomy"]} />
    </div>
  )
}

export default App;