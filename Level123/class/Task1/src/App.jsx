import React from 'react'

const App = () => {
  return (
    <div className="p-10 space-y-6">
      {/* ღილაკი */}
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"> Click Me </button>
      {/* ბარათი */}
      <div className="border border-gray-300 shadow-md p-6 rounded-xl bg-white hover:shadow-lg">
        <h2 className="text-xl font-bold text-gray-800 mb-2">React + Vite</h2>
        <p className="text-gray-600"> ეს არის ბარათის კომპონენტი TailwindCSS-ით. </p>
      </div>
      {/* ალერტი */}
      <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
        <p>გაფრთხილება: ეს არის ალერტის კომპონენტი!</p>
      </div>
    </div>
  )
}

export default App;