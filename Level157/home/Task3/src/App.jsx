import React, { createContext, useContext } from "react";

const ThemeContext = createContext();

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  const theme = useContext(ThemeContext);

  return <div>Current theme is: {theme}</div>;
}
//  ------------------------------
import React, { createContext, useContext } from "react";

const UserContext = createContext();

function App() {
  const user = { name: "Andria", age: 17 };

  return (
    <UserContext.Provider value={user}>
      <Profile />
    </UserContext.Provider>
  );
}

function Profile() {
  const user = useContext(UserContext);

  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
    </div>
  );
}
// -----------------------------

import React, { createContext, useContext } from "react";

const LanguageContext = createContext();

function App() {
  return (
    <LanguageContext.Provider value="geo">
      <Header />
    </LanguageContext.Provider>
  );
}

function Header() {
  const lang = useContext(LanguageContext);

  return (
    <h1>
      {lang === "geo" ? "გამარჯობა!" : "Hello!"}
    </h1>
  );
}
