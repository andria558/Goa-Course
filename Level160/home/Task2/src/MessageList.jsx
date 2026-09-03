import React from "react";
import Message from "./Message";

function MessageList({ messages }) {
  return (
    <div>
      {messages.map((msg) => (
        <Message key={msg.id} user={msg.user} text={msg.text} />
      ))}
    </div>
  );
}

export default MessageList;
