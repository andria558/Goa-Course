import React from 'react'
import ProductCard from './Components/ProductCard';
import ProductContainer from './Components/ProductContainer';
import ThemeContainer from './Components/ThemeContainer';
import UserListContainer from './Components/UserListContainer';
import UserList from './Components/UserList';

const App = () => {
  return (
    <div>
      <ProductCard />
      <ProductContainer />
      <ThemeContainer />
      <UserListContainer />
      <UserList />
    </div>
  )
}

export default App;
