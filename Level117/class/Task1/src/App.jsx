import React from 'react'
import GroceryItem from './components/GroceryItems';

const App = () => {


  return (
    <div>
      <h1>Simple Grocery Store</h1>
      <GroceryItem name="Eggs" />
      <GroceryItem name="Banana" />
      <GroceryItem name="Strawberry" />
      <GroceryItem name="Bread" />
    </div>
  )
}

export default App;