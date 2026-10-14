
import express from "express";
import { createUserController } from "./user.controller.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send("User list");
});

router.get("/profile", (req, res) => {
  res.status(200).send("User profile");
});

router.post("/create", createUserController);

export default router;