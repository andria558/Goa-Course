import React from 'react'

const App = () => {

  let msg;
  let isLogged = Math.random() < 0.5;
  let ticket;
  let isMember = Math.random() < 0.5;
  let vip = Math.random() < 0.5;

  if (isLogged) {
    msg = <h2>Hello Bro 👊!</h2>;
  } else {
    msg = <h2>Please Register First 🐰!</h2>;
  }

  if (isLogged) {
    ticket = <p> {isMember? '5$' : '10$'} </p>
  } else {
    ticket = <p>''</p>
  }
  return (
    <div>
      {msg} <br />
      ticket Price: 👇{ticket} <br />
      VIP: {vip && <h1>Please Enter</h1>} {!vip && <h1>Go get vip!!!</h1>}
    </div>
  )
}

export default App;