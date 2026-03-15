import React from 'react'

const CurlyBraces = () => {

  const name = "Andria";
  const age = 25;


  return (
    <div>
      {/* მაგალითი 1: ცვლადის გამოყვანა */}
      <h1>Hello, {name}</h1>

      {/* მაგალითი 2: გამოთვლა */}
      <p>Next year you'll be {age + 1}</p>

      {/* მაგალითი 3: მეთოდის გამოძახება */}
      <p>{name.toUpperCase}</p>

      {/* მაგალითი 4: პირობა */}
      <p>{age > 18 ? "Adult" : "Minor"}</p>

      {/* მაგალითი 5: მასივის */}
      {[1, 2, 3]}
    </div>
  )
}

export default CurlyBraces
