const express = require("express");
const app = express();
const cors = require("cors");
const knex = require("knex");
const port = 9001;
const databaseConfig = require("./knexfile").development;
const database = knex(databaseConfig);

app.use(cors());
app.use(express.json());

const index = (_, res) => {
  database("trainingForms").then((trainingForms) =>
    res.status(200).send(trainingForms)
  );
};

const show = (req, res) => {
  const id = req.params.id;
  database("trainingForms")
    .where("id", id)
    .then((form) => res.status(200).send(form[0]));
};

const post = (req, res) => {
  const { form } = req.body
  database("trainingForms")
  .insert(form, ["*"])
  .then(newForm => res.status(201).send(newForm[0]))
};

const destroy = (req, res) => {
  const id = req.params.id
  database("trainingForms")
    .where('id', id)
    .delete()
    .then(deletedItem => res.status(202).send({ 'message': 'item deleted'}))
}

app.get("/trainingForms", index);
app.get("/trainingForms/:id", show);
app.post("/trainingForms", post);
app.delete('/trainingForms/:id', destroy)

app.listen(port, () => console.log(`listening on ${port}`));
