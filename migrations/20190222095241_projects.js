// what changes are to be applied to the database
exports.up = function(knex, Promise) {
    return knex.schema.createTable('projects', function(tbl) {
        // primary key called id, integer, auto-increment
        tbl
            .increments();

        tbl
            .string('name', 128)
            .notNullable()
            .unique();

        tbl
            .text('description');

        tbl
            .boolean('completed')
            .notNullable();
    });
  };
  
// how can I undo the changes
exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('projects');
};