// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/projectTracker.sqlite3'
    },
    useNullAsDefault: true, // needed for sqlite        
    pool: {
      afterCreate: (conn, done) => {
          conn.run('PRAGMA foreign_keys = ON', done);
      }, // make things like `onDelete("RESTRAIN")` and `onUpdate("CASCADE")` work on API calls
  },
  },

};
