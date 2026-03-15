import React from 'react'

const SongItem = ({ Nsong }) => {
  return (
    <div>
      {
        Nsong.map((e, i) => {
          return <button
            onClick={() => alert(`Now playing: ${e}`)}
            key={i}
          >
            {e}
          </button>
        })
      }
    </div>
  )
}

export default SongItem;