import React from 'react'

const WorkoutItem = ({ Nwork }) => {
  return (
    <div>
      {
        Nwork.map((e, i) => {
          return <button
            onClick={() => alert(`Workout added: ${e}`)}
            key={i}
          >
            {e}
          </button>
        })
      }
    </div>
  )
}

export default WorkoutItem;