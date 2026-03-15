import React from 'react'

const CurlyBraces = () => {

  const name = "Andria";
  const age = 25;
  const isLoggedIn = true;
  const items = ['item', 'hey', 12, 50, 'True']
  const style = { color: "blue", fontSize: "20px" };
  function getGreeting(name) {
    return `Welcome, ${name}`;
  }
  function handleClick() {
    alert("Button clicked!");
  }

  const isDisabled = true

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

      {/* მაგალითი 5 */}
      <div>{isLoggedIn ? "Welcome back!" : "Please log in."}</div>

      {/* მაგალითი 6 */}
      <ul>
        {items.map(item => <li key={item}>{item}</li>)}
      </ul>

      {/* მაგალითი 7 */}
      <h2 style={style}>Styled Text</h2>

      {/* მაგალითი 8 */}
      <h2>{getGreeting("Andria")}</h2>

      {/* მაგალითი 9 */}
      <button onClick={handleClick}>Click Me</button>

      {/* მაგალითი 10 */}
      <button disabled={isDisabled}>im Disabled click button next me</button>
    </div>
  )
}

export default CurlyBraces
