import express from "express";

const port = 3000;

const app = express();

app.get("/admin", (req, res) => {
  const hcck = {
    name: "AdMiN",
    password: "sF,Om"
  }
  res.status(200).send(hcck)
});

app.listen(port, () => {
  console.log(`Server is Started at port: ${port}`);
});