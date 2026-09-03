import React from "react";
import MessageList from "./MessageList";

function App() {
  const messages = [
    { id: 1, user: { name: "Andria", avatarUrl: null }, text: "Hello world!" },
    { id: 2, user: null, text: "This one is broken" }, // broken user
    { id: 3, user: { name: "Nino", avatarUrl: "/images/nino.png" }, text: "How are you?" },
    { id: 4, user: { name: null, avatarUrl: null }, text: "Missing name" }, // broken name
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Messages Panel</h2>
      <MessageList messages={messages} />
    </div>
  );
}

export default App;
