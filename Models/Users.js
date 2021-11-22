const { Model } = require("objection"); // bring in model from objection
const database = require("../db"); // bring in our database
Model.knex(database); //call model and pass out database to knex

const { TrainingForms } = require("./TrainingForms");

class User extends Model {
  static tableName = "users";

  static relationMappings = {
    trainingForms: {
      relation: Model.HasManyRelation,
      modelClass: TrainingForms,
      join: {
        from: "users.id",
        to: "trainingForms.user_id",
      },
    },
  };
}

module.exports = { User }