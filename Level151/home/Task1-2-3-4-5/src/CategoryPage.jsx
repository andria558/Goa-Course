import React from 'react'

const CategoryPage = () => {
    const { categoryName } = useParams();
  
  return (
    <div>
      <h1>categoryName: {categoryName}</h1>
    </div>
  )
}

export default CategoryPage;