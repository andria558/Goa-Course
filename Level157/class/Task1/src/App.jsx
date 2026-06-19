import React, { createContext, useContext } from "react";

const ThemeContext = createContext("light");

const ChildComponent = () => {
  const theme = useContext(ThemeContext);
  return <p>Current theme: {theme}</p>;
}

const App = () => {
  return (
    <ThemeContext.Provider value="dark">
      <ChildComponent />
    </ThemeContext.Provider>
  );
}

export default App;
