import React from 'react'

const QuizTopic = ({ Nwork }) => {
  return (
    <div>
      {
        Nwork.map((e, i) => {
          return <button
            onClick={() => alert(`Quiz topic selected: ${e}`)}
            key={i}
          >
            {e}
          </button>
        })
      }
    </div>
  )
}

export default QuizTopic;