// Note to remember: Each routes will have a callback function that will handle the routes.
// Like: checking user passwords, finding users from the DB, saving the users, updating, and etc.

import express from "express";
const router = express.Router();

// controllers
import { register } from "../controllers/auth";

router.post("/register", register);

// Each file created in nodejs is created
// as a module, this module has a exports
// object by default, that would be empty
// where we can pass properties, functions
module.exports = router;
