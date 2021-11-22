exports.seed = knex => {
  return knex("users").del()
  .then(() => {
    return knex('users').insert([
      {
        firstName: 'jon',
        lastName: 'doe',
        height: 72,
        apeIndex: 6,
        weight: 168,
        age: 36,
        home: 'Boulder, CO'
      },
      {
        firstName: 'Tom',
        lastName: 'John',
        height: 77,
        apeIndex: 1,
        weight: 190,
        age: 30,
        home: 'Denver, CO'
      },
      {
        firstName: 'Alex',
        lastName: 'Mcgee',
        height: 67,
        apeIndex: 3,
        weight: 170,
        age: 36,
        home: 'Longmont, CO'
      }
    ])
  })
}
