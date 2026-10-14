const express = require("express");
const app = express();

const port = 3000;

app.get("/movies/sport", (req, res) => {
  res.json({
    category: "Sport",
    movies: ["Rocky", "Creed", "Rush"]
  });
});

app.get("/movies/documentary", (req, res) => {
  res.json({
    category: "Documentary",
    movies: ["Planet Earth", "The Last Dance", "Free Solo"]
  });
});

app.get("/movies/science", (req, res) => {
  res.json({
    category: "Science",
    movies: ["Interstellar", "The Martian", "Arrival"]
  });
});

app.get("/movies/animation", (req, res) => {
  res.json({
    category: "Animation",
    movies: ["Toy Story", "Frozen", "Shrek"]
  });
});

app.get("/movies/comedy", (req, res) => {
  res.json({
    category: "Comedy",
    movies: ["The Mask", "Mr. Bean's Holiday", "Home Alone"]
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});