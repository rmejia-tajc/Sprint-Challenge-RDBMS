
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        { project_id: '1', description: 'tune-up lawn mower', notes: 'buy gas', completed: false},
        { project_id: '1', description: 'cut lawns', notes: 'check for toys on grass', completed: false},
        { project_id: '1', description: 'compost yard waste', notes: 'mix with older compost', completed: false},
        { project_id: '2', description: 'mask and prep room', notes: 'buy tarps', completed: false},
        { project_id: '2', description: 'paint walls', notes: 'even coverage', completed: false},
        { project_id: '2', description: 'clean brushes', notes: 'let dry before storing', completed: false}
      ]);
    });
};