import React from 'react'

const VariablesInJSX = () => {
  const title = "Welcome!";
  const subtitle = "This is your dashboard";
  const isLoggedIn = true;
  const items = ["React", "Vite", "JSX"];
  const user = { name: "Andria", role: "Student" };

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
    </div>
  )
}

export default VariablesInJSX
