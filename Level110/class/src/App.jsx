import React from 'react'
import CurlyBraces from './components/CurlyBraces'
import ClassVSclassName from './components/classVSclassName'
import SelfClosingTag from './components/self-closing tag'
import VariablesInJSX from './components/VariablesInJSX'


const App = () => {
  return (
    <>
      <h1 style={{ color: 'red' }}>class VS className</h1>
      <ClassVSclassName />
      <h1 style={{ color: 'red' }}>Curly Braces</h1>
      <CurlyBraces />
      <h1 style={{ color: 'red' }}>self Closing Tag</h1>
      <SelfClosingTag />
      <h1 style={{ color: 'red' }}>Varianle in JSX</h1>
      <VariablesInJSX />
    </>
  )
}

export default App
