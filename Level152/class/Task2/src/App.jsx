import React from "react";
import { NavLink } from "react-router-dom";

function App() {
  const baseStyle = {
    textDecoration: "none",
    color: "#333",
    fontWeight: 500,
    marginRight: "20px",
  };

  const activeStyle = {
    color: "#ff6600",
    borderBottom: "2px solid #ff6600",
  };

  return (
    <nav style={{ backgroundColor: "#f0f0f0", padding: "10px" }}>
      <NavLink
        to="/"
        style={({ isActive }) =>
          isActive ? { ...baseStyle, ...activeStyle } : baseStyle
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/about"
        style={({ isActive }) =>
          isActive ? { ...baseStyle, ...activeStyle } : baseStyle
        }
      >
        About
      </NavLink>

      <NavLink
        to="/contact"
        style={({ isActive }) =>
          isActive ? { ...baseStyle, ...activeStyle } : baseStyle
        }
      >
        Contact
      </NavLink>
    </nav>
  );
}

export default App;
