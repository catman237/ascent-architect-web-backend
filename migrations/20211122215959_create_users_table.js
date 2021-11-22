exports.up = (knex) => {
  return knex.schema.createTable("users", (t) => {
    t.increments();
    t.string("username");
    t.string("password_digest");
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
  return knex.schema.dropTableIfExists("users");
};
