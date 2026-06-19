import React from 'react'

const UserPage = () => {
  const { id } = useParams();
  return (
    <h2>User ID: {id}</h2>
  )
}

export default UserPage
