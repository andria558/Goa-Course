import React from 'react'

const BlogPage = () => {
  const { slug } = useParams();
  
  return (
    <h2>Reading post: {slug}</h2>
  )
}

export default BlogPage;