// Before we save anything in DB, we need to define a schema.
// Schema will tell what are the fields that one can save in DB.
// With schema, we can create models for example User model,that
// allows us to query the DB to find the user, and do CRUD op.
// Technically, MONGODB is schemaless but mongoose requires us
// to create schema that allows us to easily interact with DB.

import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
      min: 6,
      max: 64,
    },

    secret: {
      type: String,
      required: true,
    },

    about: {},
    photo: String,
    following: [{ type: Schema.ObjectId, ref: "User" }],
    followers: [{ type: Schema.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
