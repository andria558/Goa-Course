import React from "react";
import ErrorBoundary from "./ErrorBoundary";
import MessageList from "./MessageList";

function App() {
  return (
    <ErrorBoundary>
      <MessageList />
    </ErrorBoundary>
  );
}

export default App;
