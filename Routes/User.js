require("dotenv").config();
const express = require("express");
const router = express.Router();
const { User } = require("../Models/Users");
const config = require("../knexfile")[process.env.NODE_ENV || "development"];
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.get("/users", (req, res) => {
  User.query()
    .withGraphFetched("trainingForms")
    .then((users) => res.status(200).json(users));
});

router.get("/users/:id", (req, res) => {
  const id = req.params.id;
  User.query()
    .where("id", id)
    .then((user) => res.status(200).json(user));
});

router.delete("/users/:id", (req, res) => {
  const id = req.params.id;
  User.query()
    .where("id", id)
    .delete()
    .then((deletedUser) => res.json({ message: "user deleted" }));
});

router.get("/profile/:id", (req, res) => {
  const id = req.params.id;
  User.query()
    .where("id", id)
    .withGraphFetched("trainingForms")
    .then((user) => res.send(user));
});

router.post("/users", (req, res) => {
  const { user } = req.body;
  saltRounds = 11;
  bcrypt.hash(user.password_digest, saltRounds).then((hashedPassword) => {
    User.query()
      .insert({
        username: user.userName,
        password_digest: hashedPassword,
        firstName: user.firstName,
        lastName: user.lastName,
        height: user.height,
        apeIndex: user.apeIndex,
        weight: user.weight,
        age: user.age,
        home: user.home
      })
      .then((newUser) => {
        const secret = process.env.AUTH_SECRET;
        const payload = { user_id: newUser.id };
        const token = jwt.sign(payload, secret);
        res.status(201).json({ ...newUser, token });
      });
  });
});

module.exports = { usersRouter: router };
