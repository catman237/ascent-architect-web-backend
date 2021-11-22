const express = require("express");
const app = express();
const cors = require("cors");
const port = 9001;
const { trainingFormsRouter } = require("./Routes/TrainingForms")
const { usersRouter } = require("./Routes/User")
app.listen(port, () => console.log(`listening on ${port}`));

app.use(cors());
app.use(express.json());
app.use(trainingFormsRouter, usersRouter)

