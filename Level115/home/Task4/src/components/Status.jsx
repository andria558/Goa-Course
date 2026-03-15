import React from 'react'

const Status = ({ isOnline }) => {
  return (
    <div>
      {isOnline && <h1>Online</h1>}
      {!isOnline && <h1>Offline</h1>}
    </div>
  )
}

export default Status;