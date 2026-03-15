import React from 'react'

const App = () => {
  return (

    <div className='w-full h-screen flex justify-center items-center p-[2%]'>
      <div className='grid gap-[1em] max-[925px]:grid-cols-[150px_150px_150px_150px] max-[925px]:grid-rows-[150px_150px] grid-cols-[200px_200px_200px_200px] grid-rows-[200px_200px] max-[730px]:grid-cols-[110px_110px_110px] max-[730px]:grid-rows-[110px_110px_110px] max-[416px]:grid-cols-[100px_100px] max-[416px]:grid-rows-[100px_100px_100px_100px]'>
        <div className="bg-[steelblue] max-[925px]:row-span-2 max-[925px]:col-span-2 row-span-2 max-[416px]:col-span-1 max-[416px]:row-span-1"></div>
        <div className="bg-[steelblue] max-[416px]:row-span-2 max-[925px]:col-span-1 col-span-2"></div>
        <div className="bg-[steelblue] max-[416px]:row-span-2" ></div>
        <div className="bg-[steelblue] max-[416px]:row-span-2"></div>
        <div className="bg-[steelblue] max-[416px]:col-span-1 max-[730px]:col-span-2 max-[925px]:col-span-1 col-span-2"></div>
      </div>

    </div>
  )
} 

export default App;