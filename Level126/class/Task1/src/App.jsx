import React from 'react'

const App = () => {
  return (
    <main className='m-30'>
      <div className='text-green-500 w-50 h-50 bg-red-600 flex justify-center    items-center hover:w-85.75 hover:bg-amber-500 hover:rounded-xl  duration-700 active:font-bold active:text-2xl active:text-blue-500 text-xl'> Container 1  &nbsp;&nbsp; <input type="text" className='bg-gray-300 w-10 focus:outline-3 focus:outline-violet-500 focus:rounded has-enabled:bg-emerald-500' required/></div>
      
      <div className='text-red-500 w-50 h-50 bg-yellow-600 flex justify-center items-center hover:w-85.75 hover:bg-amber-500 hover:rounded-xl duration-700 active:font-bold active:text-2xl active:text-blue-500 text-xl'>    Container 2 &nbsp;&nbsp; <input type="text" className='bg-gray-300 w-10 focus:outline-3 focus:outline-violet-500 focus:rounded has-enabled:bg-emerald-500' required/> </div>
      
      <div className='text-yellow-500 w-50 h-50 bg-green-600 flex justify-center items-center hover:w-85.75 hover:bg-amber-500 hover:rounded-xl duration-700 active:font-bold active:text-2xl active:text-blue-500 text-xl'>    Container 3 &nbsp;&nbsp; <input type="text" className='bg-gray-300 w-10 focus:outline-3 focus:outline-violet-500 focus:rounded has-enabled:bg-emerald-500' required/> </div>
    </main>
  )
}

export default App;