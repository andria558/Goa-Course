import React from 'react'

const App = () => {
  return (
    // elem - 1
    <div className='h-screen w-full'>
      {/* elem - 2 */}
      <nav className='h-16 bg-[steelblue] w-full max-w-full flex justify-center items-center'>
        {/* elem - 3 */}
        <ul className='flex gap-7 text-white'>
          {/* elem - 4 */}
          <li><a href="#">Simpsons</a></li>
          {/* elems - 5 */}
          {
            [1, 2, 3, 4].map(i => {
              return (
                <li key={i}>
                  <a href="#">Text</a>
                </li>
              )

            })
          }
        </ul>
      </nav>
      {/* elem - 6 */}
      <div className='mt-20 mx-25 flex max-[1023px]:block justify-between gap-15 '>
        {/* elem - 7 */}
        <section>
          {/* elem - 8 */}
          <h1 className='text-3xl font-bold'>Simpson family</h1>
          {/* elem - 9 */}
          <p className='max-w-3xs max-[425px]:my-5 my-14 max-[425px]:text-[14px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti asperiores deserunt quo perferendis numquam est, saepe praesentium porro unde minus perspiciatis? Repellendus, beatae voluptate?</p>
        </section>
        {/* elem - 10 */}
        <aside>
          <img src="image.png" alt="bart KLINTON" className='border rounded    max-[485px]:shrink-0' />
        </aside>
      </div>

    </div>
  )
}

export default App;