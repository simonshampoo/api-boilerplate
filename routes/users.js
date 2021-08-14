import express from "express";
import {
  getAllUsers,
  postUser,
  getSpecificUser,
  deleteUser,
  patchUser,
} from "../controllers/users.js";

const router = express.Router();

let users = [];

router.get("/", getAllUsers);

router.post("/", postUser);

router.get("/:id", getSpecificUser);

router.delete("/:id", deleteUser);

router.patch("/:id", patchUser);

export default router;
