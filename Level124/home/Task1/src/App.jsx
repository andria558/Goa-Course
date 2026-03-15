import React from 'react'

const App = () => {
  return (
      <div className="space-y-8 p-6">
        {/* 1. Flex Row */}
        <div className="flex space-x-4 p-4 bg-gray-100">
          <div className="bg-blue-500 text-white p-2">Box 1</div>
          <div className="bg-green-500 text-white p-2">Box 2</div>
          <div className="bg-red-500 text-white p-2">Box 3</div>
        </div>

        {/* 2. Flex Column Center */}
        <div className="flex flex-col items-center justify-center h-64 bg-gray-200">
          <div className="bg-purple-500 text-white p-2">Item A</div>
          <div className="bg-pink-500 text-white p-2">Item B</div>
        </div>

        {/* 3. Grid Two Columns */}
        <div className="grid grid-cols-2 gap-4 p-4 bg-gray-100">
          <div className="bg-blue-400 text-white p-2">Left</div>
          <div className="bg-green-400 text-white p-2">Right</div>
        </div>

        {/* 4. Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-gray-200">
          <div className="bg-yellow-500 text-white p-2">Card 1</div>
          <div className="bg-yellow-600 text-white p-2">Card 2</div>
          <div className="bg-yellow-700 text-white p-2">Card 3</div>
        </div>

        {/* 5. Flex + Grid Combo */}
        <div className="flex justify-center p-4 bg-gray-100">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-indigo-500 text-white p-2">Item 1</div>
            <div className="bg-indigo-600 text-white p-2">Item 2</div>
            <div className="bg-indigo-700 text-white p-2">Item 3</div>
            <div className="bg-indigo-800 text-white p-2">Item 4</div>
          </div>
        </div>
      </div>
  )
}

export default App;