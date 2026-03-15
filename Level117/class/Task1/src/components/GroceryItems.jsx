import React from 'react'

const GroceryItems = ({ name }) => {

  const handleClick = () => {
    alert(`${name} has been added to the cart!`);
  }

  return (
    <div>
      <button onClick={handleClick}>
        {name}
      </button>
    </div>
  )
}

export default GroceryItems;