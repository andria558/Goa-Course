import React from 'react'

const App = () => {
  return (
    <div className='flex gap-4 p-16 max-[1020px]:block'>
      <div>
        <img src="vite.svg" alt="~ ~ ~" className='w-76 block '/>
      </div>
      <div>
        <button className='border-0 rounded bg-[steelblue] p-1.5 cursor-pointer hover:shadow-[5px_5px_7px_steelblue] hover:scale-103 duration-[.2s  text-white'>Change Color</button>
        <br />
        <p className='max-[375px]:w-full'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi error laboriosam, explicabo sapiente odio dolores soluta vero, deserunt necessitatibus at consequuntur molestiae expedita, aut facilis culpa? Commodi officia debitis libero, tempore necessitatibus, culpa harum mollitia facere excepturi cum minima quasi incidunt alias illo corrupti? Eius, facilis? Maxime hic delectus asperiores soluta molestias, odio voluptatum corrupti. Architecto facere asperiores quidem.</p>
      </div>
    </div>
  )
}

export default App;