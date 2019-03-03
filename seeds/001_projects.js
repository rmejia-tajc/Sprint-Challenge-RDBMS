
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { name: 'mow lawn', description: 'mow front and back yards', completed: false},
        { name: 'paint room', description: 'paint the boys room light grey', completed: false},
        { name: 'clean garage', description: 'de-clutter and organize garage', completed: false}
      ]);
    });
};