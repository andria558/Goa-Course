import React from 'react'

const App = () => {
  return (
    <div>
      {/* Active */}
      
      <button className="bg-blue-500 active:bg-blue-700 text-white px-4 py-2">
        Click me
      </button>

      <a href="#" className="text-gray-600 active:text-red-600">
        Active link
      </a>

      <button className="bg-green-500 active:shadow-lg px-4 py-2">
        Press me
      </button>

      <button className="bg-purple-500 active:scale-95 transform px-4 py-2">
        Shrink on click
      </button>

      <button className="border border-gray-400 active:border-black px-4 py-2">
        Border change
      </button>

      {/* hover */}

      <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2">
        Hover me
      </button>

      <a href="#" className="text-gray-600 hover:underline">
        Hover link
      </a>

      <div className="p-4 bg-gray-200 hover:shadow-xl">
        Hover card
      </div>

      <button className="bg-pink-500 hover:scale-110 transform px-4 py-2">
        Zoom on hover
      </button>

      <p className="text-black hover:text-green-500">Hover text</p>

      {/* focus */}

      <input
        type="text"
        className="border border-gray-400 focus:border-blue-500 px-2 py-1"
      />

      <input
        type="text"
        className="focus:outline-none focus:ring-2 focus:ring-green-500 px-2 py-1"
      />

      <textarea
        className="border border-gray-300 focus:shadow-lg px-2 py-1"
      />

      <input
        type="text"
        className="text-gray-600 focus:text-black px-2 py-1"
      />

      <button className="focus-visible:ring-2 focus-visible:ring-purple-500 px-4 py-2">
        Focus visible
      </button>



    </div>
  )
}

export default App;