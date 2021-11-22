exports.up = (knex) => {
  return knex.schema.createTable("usersTable", (t) => {
    t.string("firstName");
    t.string("lastName");
    t.integer("height");
    t.integer("apeIndex");
    t.integer("weight");
    t.integer("age");
    t.string("home");
  });
};

exports.down = (knex) => {
  return knex.schema.dropTableIfExists("usersTable");
};
