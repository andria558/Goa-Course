import React from 'react'

const App = () => {
  return (
    <div className='h-screen w-full flex justify-center items-center flex-col gap-7'>
      <h1 className='text-3xl text-red-600 shadow-lg bg-red-400 shadow-red-500'>Text</h1>
      <p className='max-w-45'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus veniam labore ipsa totam ratione culpa aspernatur.</p>
      <img src="https://imgs.search.brave.com/vg0rLy4NLBVAfhkLKVBr6BTlv6qxRIQZQ2d8x1V4_PA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvYmFy/dC1zYWQtY3J1c2gt/cXVvdGUtdWdtbm42/aDJ0a3ZvcGpveS5q/cGc" alt="#" className='w-56 h-79'/>
    </div>
  )
}

export default App;