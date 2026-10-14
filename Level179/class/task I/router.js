import express from "express";
import user_route from "./user.route.js";

const router = express.Router();

router.use("/user", user_route);

export default router;