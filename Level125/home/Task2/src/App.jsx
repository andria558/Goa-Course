import React from 'react'

const App = () => {
  return (
    <div className='h-screen flex flex-col'>
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-xl font-bold">ჩემი ვებსაიტი</h1>
      </header>
      <nav className="bg-gray-100 p-4 flex flex-wrap gap-4 justify-center">
        <a href="#" className="hover:text-blue-600">მთავარი</a>
        <a href="#" className="hover:text-blue-600">ჩვენ შესახებ</a>
        <a href="#" className="hover:text-blue-600">სერვისები</a>
        <a href="#" className="hover:text-blue-600">კონტაქტი</a>
      </nav>
      <main className="flex-1 p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white shadow rounded-lg p-4">📱 ბლოკი 1</div>
        <div className="bg-white shadow rounded-lg p-4">💻 ბლოკი 2</div>
        <div className="bg-white shadow rounded-lg p-4">🖥️ ბლოკი 3</div>
        <div className="bg-white shadow rounded-lg p-4">📱 ბლოკი 4</div>
        <div className="bg-white shadow rounded-lg p-4">💻 ბლოკი 5</div>
        <div className="bg-white shadow rounded-lg p-4">🖥️ ბლოკი 6</div>
      </main>
      <footer className="bg-blue-600 text-white text-center p-4">
        <p>© 2026 ჩემი ვებსაიტი</p>
      </footer>
    </div>
  )
}

export default App;