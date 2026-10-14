import express from "express";

const port = 3000;
const app = express();

app.use(express.json());

app.get("/admin", (req, res) => {
  const hcck = {
    name: "AdMiN",
    password: "sF,Om"
  };

  res.status(200).send(hcck);
});

app.post("/admin", (req, res) => {
  const { name, age } = req.body;

  const user = {
    name,
    age
  };

  console.log(user);

  res.status(201).send(user);
});

app.put("/admin/:id", (req, res) => {
  const { id } = req.params;

  const ID = "123";

  if (id === ID) {
    const updatedUser = req.body;

    console.log("Updated User:", updatedUser);

    res.status(202).send(updatedUser);
  } else {
    res.status(404).send({
      message: "User not found"
    });
  }
});

app.delete("/admin/:id", (req, res) => {
  const { id } = req.params;

  const ID = "123";

  if (id === ID) {
    console.log(`User with ID ${id} deleted`);

    res.status(202).send({
      message: "User deleted successfully"
    });
  } else {
    res.status(404).send({
      message: "User not found"
    });
  }
});

app.listen(port, () => {
  console.log(`Server is Started at port: ${port}`);
});