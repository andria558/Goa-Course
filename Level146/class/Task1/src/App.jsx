import React, { useState } from 'react'

const App = () => {
  const [name, setName] = useState('')
  const [lastname, setLastname] = useState('')
  const [coode, setCoode] = useState('')
  const [email, setEmail] = useState('')
  const [passcode, setPasscode] = useState('')

  const handleName = (e) => {
    setName(e.target.value)
  }
  const handleLastName = (e) => {
    setLastname(e.target.value)
  }
  const handleCode = (e) => {
    setCoode(e.target.value)
  }
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handlePassword = (e) => {
    setPasscode(e.target.value)
  }

  return (
    <div>
      <label htmlFor="">
        <input type="text" placeholder='Name../' onChange={handleName} value={name}/> <br />
        {name}
      </label>
      <br /><br />
      <label htmlFor="">
        <input type="text" placeholder='LastName../' onChange={handleLastName} value={lastname} /><br />
        {lastname}
      </label>
      <br /><br />
      <label htmlFor="">
        <input type="text" placeholder='Code../' onChange={handleCode} value={coode} /><br />
        {coode}
      </label>
      <br /><br />
      <label htmlFor="">
        <input type="email" placeholder='Email../' onChange={handleEmail} value={email} /><br />
        {email}
      </label>
      <br /><br />
      <label htmlFor="">
        <input type="password" placeholder='Password../' onChange={handlePassword} value={passcode} /><br />
        {passcode}
      </label>
    </div>
  )
}

export default App;