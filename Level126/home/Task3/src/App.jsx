import React from 'react'

const App = () => {
  return (
    <div>
      <button className="bg-sky-600 hover:bg-sky-700 active:text-7xl font-extrabold text-4xl rounded p-4">
        Save changes
      </button>
      <div className="mt-6">
        <label htmlFor="example">Name:</label>
        <input
          type="text"
          id="example"
          className="focus:bg-red-600 border-solid border-black border-2"
        />
      </div>
    </div>
  )
}

export default App;