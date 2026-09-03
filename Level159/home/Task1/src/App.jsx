import React from "react";
import ReactDOM from "react-dom";
import WeatherWidget from "./WeatherWidget";
import ErrorBoundary from "./ErrorBoundary ";

function App() {
  return (
    <div>
      <h1>Async Crash დემო</h1>
      <ErrorBoundary>
        <WeatherWidget />
      </ErrorBoundary>
    </div>
  );
}

export default App;


