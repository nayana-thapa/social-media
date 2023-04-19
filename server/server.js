import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const morgan = require("morgan");
require("dotenv").config();

const app = express();

// DB connection
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB connection failed", err));

// Middlewares; anytime we want to use middleware
// use() function is being used.

app.use(
  express.json({
    limit: "5mb",
  })
);

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(
  cors({
    origins: ["http://localhost:3000"],
  })
);

app.post("/api/register", (req, res) => {
  console.log("Register Endpoint: ", req.body);
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server running in port ${port}`));
