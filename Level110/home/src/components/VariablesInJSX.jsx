import React from 'react'

const VariablesInJSX = () => {
  const title = "Welcome!";
  const subtitle = "This is your dashboard";
  const isLoggedIn = true;
  const items = ["React", "Vite", "JSX"];
  const user = { name: "Andria", role: "Student" };
  const color = "blue";
  const fruits = ["apple", "banana", "cherry"];
  const greeting = () => "Welcome!";
  const style = { fontSize: "20px", color: "green" };
  const today = new Date().toDateString();

  return (
    <div>
      {/* მაგალითი 1 */}
      <h1>{title}</h1>

      {/* მაგალითი 2 */}
      <h2>{subtitle}</h2>

      {/* მაგალითი 3 */}
      <p>{isLoggedIn ? "Logged In" : "Guest"}</p>

      {/* მაგალითი 4 */}
      <ul>
        {...items}
      </ul>

      {/* მაგალითი 5 */}
      <p>{user.name} is a {user.role}</p>

      {/* მაგალითი 6 */}
      <p style={{ color }}>{color} text</p>

      {/* მაგალითი 7 */}
      <ul>{fruits.map((item, i) => <li key={i}>{item}</li>)}</ul>

      {/* მაგალითი 8 */}
      <p>{greeting()}</p>

      {/* მაგალითი 9 */}
      <p style={style}>Styled paragraph</p>

      {/* მაგალითი 10 */}
      <p>Today is: {today}</p>
    </div>
  )
}

export default VariablesInJSX
