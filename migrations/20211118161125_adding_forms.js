
exports.up = function(knex) {
    return knex.schema.createTable('trainingForms', t => {
        t.increments()
        t.string('type')
        t.integer('reps')
        t.integer('sets')
        t.integer('weight')
        t.string('trainingNotes')
        t.timestamp('created_at').defaultTo(knex.fn.now())
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('trainingForms')
  };
