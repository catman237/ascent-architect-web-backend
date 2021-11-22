const { Model } = require('objection')
const database = require('../db.js')
Model.knex(database)

class TrainingForms extends Model {
    static tableName = 'trainingForms'
}

module.exports = { TrainingForms }