const express = require("express");
const router = express.Router();
const { TrainingForms } = require("../Models/TrainingForms");
const trainingFormsUrl = "/trainingForms";

router.get("/trainingForms/", (req, res) => {
  TrainingForms.query().then((forms) => res.json(forms));
});

router.get("/trainingForms/:id", (req, res) => {
  const id = req.params.id;
  TrainingForms.query()
    .where("id", id)
    .then((trainingForm) => res.status(200).send(trainingForm));
});

router.get("/trainingForms/timeOn/:time", (req, res) => {
  const timeOn = req.params.time;
  TrainingForms.query()
    .where("timeOn", timeOn)
    .then((filteredClimbs) => res.send(filteredClimbs));
});

router.get("/trainingForms/timeoff/:time", (req, res) => {
  const timeOff = req.params.time;
  TrainingForms.query()
    .where("timeOff", timeOff)
    .then((filteredClimbs) => res.send(filteredClimbs));
});

router.post("/trainingForms", (req, res) => {
  const { form } = req.body;
  TrainingForms.query()
    .insert(form)
    .returning("*")
    .then((newTrainingForm) => res.send(newTrainingForm));
});

router.patch("/trainingForms/:id", (req, res) => {
  const id = req.params.id;
  const { form } = req.body;
  TrainingForms.query()
    .where("id", id)
    .update(form)
    .returning("*")
    .then((updatedForm) => res.status(200).send(updatedForm));
});

router.delete("/trainingForms/:id", (req, res) => {
  const id = req.params.id;
  TrainingForms.query()
    .where("id", id)
    .delete()
    .returning("*")
    .then((updatedTrainingForms) =>
      res.status(204).send(updatedTrainingForms[0])
    );
});

module.exports = { trainingFormsRouter: router };
