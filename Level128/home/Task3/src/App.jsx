import React from 'react'

const App = () => {
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        {/* Navigation */}
        <nav className="bg-slate-900 border-b border-slate-700 sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-blue-400">Xstone</h1>
            <div className="hidden md:flex gap-8">
              <a href="#home" className="hover:text-blue-400">Home</a>
              <a href="#skills" className="hover:text-blue-400">Skills</a>
              <a href="#about" className="hover:text-blue-400">About</a>
            </div>
          </div>
        </nav>

        {/* Hero */}
        <section className="py-32 px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="text-6xl mb-6">⚡</div>
            <h2 className="text-5xl font-bold mb-4">Hey, I'm Xstone</h2>
            <p className="text-xl text-slate-300 mb-8">Frontend Developer & Karate Enthusiast from Batumi 🥋</p>
            <button className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-lg font-bold">
              Explore My Work
            </button>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-20 px-6 bg-slate-800/50">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-4xl font-bold mb-12 text-center">Skills</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {['React', 'Tailwind CSS', 'JavaScript', 'HTML/CSS'].map(skill => (
                <div key={skill} className="bg-slate-700 p-6 rounded-lg text-center hover:bg-slate-600 transition">
                  <p className="text-lg font-semibold">{skill}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-4xl font-bold mb-6">About Me</h3>
            <p className="text-slate-300 text-lg leading-relaxed mb-4">
              I'm 13 years old and passionate about frontend development. I mentor others in React and love building beautiful websites with Tailwind CSS.
            </p>
            <p className="text-slate-300 text-lg">
              When I'm not coding, I train in Karate Shotokan 🥋
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-900 border-t border-slate-700 py-8 px-6 text-center text-slate-400">
          <p>© 2026 Xstone. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}

export default App;