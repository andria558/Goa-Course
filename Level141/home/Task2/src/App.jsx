import React, { useState } from "react";
import LikeView from "./components/LikeView";

const App = () => {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(l => l + 1);
  };

  return <LikeView likes={likes} onLike={handleLike} />;
};

export default App;
