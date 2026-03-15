import React from 'react'

const App = () => {
  return (
    <div>
      // Padding
      <div className="p-4 bg-gray-200">Padding 1rem</div>
      <div className="px-8 bg-gray-300">Horizontal Padding 2rem</div>
      <div className="py-6 bg-gray-400">Vertical Padding 1.5rem</div>



// Margin
      <div className="m-4 bg-blue-200">Margin 1rem</div>
      <div className="mt-8 bg-blue-300">Margin Top 2rem</div>
      <div className="mb-2 bg-blue-400">Margin Bottom 0.5rem</div>



// Colors
      <div className="bg-red-500 text-white p-2">Red Background</div>
      <p className="text-green-600">Green Text</p>
      <button className="bg-indigo-500 hover:bg-indigo-700 text-white px-4 py-2">Hover Indigo</button>



// Typography
      <h1 className="text-3xl font-bold">Large Title</h1>
      <p className="font-light">Light Text</p>
      <p className="leading-relaxed">Relaxed Line Height</p>



// Borders & Radius
      <div className="border border-gray-400 p-2">Border Example</div>
      <div className="rounded-lg bg-yellow-200 p-4">Rounded Corners</div>
      <img className="rounded-full w-16 h-16" src="avatar.png" alt="avatar" />



// Shadows
      <div className="shadow-sm p-4 bg-white">Small Shadow</div>
      <div className="shadow-md p-4 bg-white">Medium Shadow</div>
      <div className="shadow-lg p-4 bg-white">Large Shadow</div>



// Flex
      <div className="flex justify-center items-center h-32 bg-gray-100">Centered</div>
      <div className="flex justify-between bg-gray-200 p-4"><span>Left</span><span>Right</span></div>
      <div className="flex flex-col gap-2"><div>Item 1</div><div>Item 2</div><div>Item 3</div></div>



// Grid
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-red-200">1</div>
        <div className="bg-green-200">2</div>
      </div>

      <div className="grid grid-cols-3 gap-2">
        <div className="bg-blue-200">A</div>
        <div className="bg-blue-300">B</div>
        <div className="bg-blue-400">C</div>
      </div>

      <div className="grid grid-cols-4 gap-1">
        <div className="bg-purple-200">X</div>
        <div className="bg-purple-300">Y</div>
        <div className="bg-purple-400">Z</div>
        <div className="bg-purple-500">W</div>
      </div>



// Responsive
      <p className="text-sm md:text-lg lg:text-xl">Responsive Text</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-gray-200">Block 1</div>
        <div className="bg-gray-300">Block 2</div>
        <div className="bg-gray-400">Block 3</div>
      </div>

      <button className="px-2 py-1 sm:px-4 sm:py-2 md:px-6 md:py-3 bg-indigo-500 text-white">
        Responsive Button
      </button>

    </div>
  )
}

export default App;