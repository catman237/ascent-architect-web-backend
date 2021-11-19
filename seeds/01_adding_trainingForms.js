exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("trainingForms")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("trainingForms").insert([
        {
          type: "Value1",
          reps: 5,
          sets: 10,
          weight: -1,
          trainingNotes: "iso because -1",
        },
        {
          type: "Value2",
          reps: 7,
          sets: 10,
          weight: 10,
          trainingNotes: "notes",
        },
        {
          type: "Value3",
          reps: 3,
          sets: 10,
          weight: 30,
          trainingNotes: "notes",
        },
      ]);
    });
};
