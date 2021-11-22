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


//test user seed
// "user": {
//   "userName": "greg000",
//   "password_digest": "test",
//   "firstName": "greg",
//   "lastName": "hughes",
//   "height": 72,
//   "apeIndex": 6,
//   "weight": 168,
//   "age": 27,
//    "home": "golden"
// }