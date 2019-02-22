// what changes are to be applied to the database
exports.up = function(knex, Promise) {
    return knex.schema.createTable('actions', function(tbl) {
        // primary key called id, integer, auto-increment
        tbl
            .increments();

        tbl
            .integer('project_id')
            .unsigned()
            .references('id')
            .inTable('projects')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
            .notNullable();

        tbl
            .text('description')
            .notNullable();

        tbl
            .text('notes');

        tbl
            .boolean('completed')
            .notNullable();
    });
  };
  
// how can I undo the changes
exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('actions');
};