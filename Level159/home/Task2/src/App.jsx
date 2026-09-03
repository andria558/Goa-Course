import React from "react";
import ReactDOM from "react-dom";
import UserProfile from "./UserProfile";
import FormErrorBoundary from "./FormErrorBoundary";

function App() {
  return (
    <div>
      <h1>პროფილის რედაქტირება</h1>
      <FormErrorBoundary>
        <UserProfile />
      </FormErrorBoundary>
    </div>
  );
}

export default App;