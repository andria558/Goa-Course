import React from 'react'

const App = () => {
  return (
    <div className='bg-neutral-900 w-full h-screen grid place-content-center'>
      
      <div className='w-76 h-120 border-0 rounded-lg bg-neutral-800'>

        <img src="avatar-jessica.jpeg" alt="Jessica Randal" className='rounded-full w-19 h-19 mx-auto mt-7' />

        <h1 className='text-white text-3xl text-center'>Jessica Randall</h1>

        <p className='text-green-500 text-1 text-center -mt-.5'>London, United Kingdom</p>

        <p className='text-gray-500 text-.5 text-center py-2 '>"Front-end developer and avid reader."</p>


        {
          ["GitHub", "Frontend Mentor", "LinkedIn", "Twitter", "Instagram"].map((item, index) => {
            return (
              <button 
              key={index}
              className='text-white w-[80%] mx-[10%] h-10 my-1.5 bg-neutral-600 border-0 rounded-lg font-semibold hover:bg-lime-400'
              >{item}</button>
            )
          })
        }
      </div>

    </div>
  )
}

export default App;