import React, { useState } from 'react'

const QuizController = ({ questions }) => {
  let [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div>
      <button onClick={() => setCurrentIndex(prev => prev - 1)}
      disabled={currentIndex === 0}>Previous</button>
      <div>{questions[currentIndex]}</div>
      <button onClick={() => setCurrentIndex(prev => prev + 1)}
      disabled={currentIndex === questions.length - 1}>Next</button>
    </div>
  )
}

export default QuizController;