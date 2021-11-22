exports.seed = knex => {
  return knex("usersTable").del()
  .then(() => {
    return knex('usersTable').insert([
      {
        firstName: 'jon',
        lastName: 'doe',
        height: 72,
        apeIndex: 6,
        weight: 168,
        age: 36,
        home: 'Boulder, CO'
      }
    ])
  })
}

// t.string("firstName");
// t.string("lastName");
// t.integer("height");
// t.integer("apeIndex");
// t.integer("weight");
// t.integer("age");
// t.string("home");

// exports.seed = function(knex) {
//   // Deletes ALL existing entries
//   return knex('table_name').del()
//     .then(function () {
//       // Inserts seed entries
//       return knex('table_name').insert([
//         {id: 1, colName: 'rowValue1'},
//         {id: 2, colName: 'rowValue2'},
//         {id: 3, colName: 'rowValue3'}
//       ]);
//     });
// };