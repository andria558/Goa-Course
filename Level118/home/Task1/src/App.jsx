import React from "react";
import Card from "./components/Card";
import { comments } from "./components/commentData";

function App() {
  return (
    <div>
      {comments.map((comment, index) => (
        <Card key={index} commentObject={comment} />
      ))}
    </div>
  );
}

export default App;
