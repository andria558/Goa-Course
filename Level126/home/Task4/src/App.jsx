import React from 'react'

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center space-y-10 p-10">

      {/* Header */}
      <h1 className="text-4xl font-bold text-blue-600 hover:text-blue-800">
        Mini Tailwind Demo Site
      </h1>

      {/* Buttons showcase */}
      <div className="flex space-x-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded active:bg-blue-700 hover:bg-blue-600 focus:ring-2 focus:ring-blue-400">
          Click Me
        </button>
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 active:scale-95 transform focus:outline-none focus:ring-2 focus:ring-green-400">
          Action
        </button>
      </div>

      {/* Input showcase */}
      <div className="flex flex-col space-y-2">
        <label className="text-gray-700">Your Name:</label>
        <input type="text" placeholder="Type here..." className="border border-gray-400 px-3 py-2 rounded focus:border-blue-500 focus:ring-2 focus:ring-blue-300" />
      </div>

      {/* Card with group-hover */}
      <div className="group bg-white shadow-md rounded-lg p-6 w-64 cursor-pointer hover:shadow-xl transition">
        <h2 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600">
          Hover Card
        </h2>
        <p className="text-gray-600 group-hover:text-gray-900">
          When you hover the card, text changes color.
        </p>
        <button className="mt-4 bg-purple-500 text-white px-3 py-1 rounded group-hover:bg-purple-700 active:scale-95 transform">
          Learn More
        </button>
      </div>

      {/* Footer */}
      <footer className="text-gray-500 hover:text-black focus:text-blue-500">
        © 2026 Tailwind Demo
      </footer>
    </div>
  )
}

export default App;