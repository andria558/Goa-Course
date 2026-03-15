import React from 'react'

const GameItem = ({ Ngame }) => {
  return (
    <div>
      {
      Ngame.map((e, i) => {
        return <button key={i} onClick={() => alert(e)}>{e}</button>
      })
      }
    </div>
  )
}

export default GameItem;