exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("trainingForms")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("trainingForms").insert([
        {
          type: "Value1",
          timeOn: 10,
          timeOff: 90,
          reps: 5,
          sets: 10,
          weight: -1,
          trainingNotes: "iso because -1",
          completed: false,
          user_id: 1
        },
        {
          type: "Value2",
          timeOn: 7,
          timeOff: 10,
          reps: 7,
          sets: 10,
          weight: 10,
          trainingNotes: "notes",
          completed: false,
          user_id: 2
        },
        {
          type: "Value3",
          timeOn: 30,
          timeOff: 60,
          reps: 3,
          sets: 10,
          weight: 30,
          trainingNotes: "notes",
          completed: false,
          user_id: 3
        },
      ]);
    });
};

