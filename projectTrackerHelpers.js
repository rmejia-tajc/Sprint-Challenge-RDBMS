const knex = require('knex');
const knexConfig = require('./knexfile.js');

const db = knex(knexConfig.development);



module.exports = {
    
    addProject: (project) => {
        return db('projects').insert(project)
    },
    
    addAction: (action) => {
        return db('actions').insert(action)
    },  

	getActionsByProject: (id) => {

		const project = db('projects')
			.select()
			.where('id', id)
			.first()

		const actions = db('actions')
			.select()
			.where('project_id', id)

		return Promise.all([project, actions]).then(results => {
			let [project, actions] = results;
			return {
				id: project.id,
				name: project.name,
				description: project.description,
				completed: project.completed,
				actions: actions
			};
		});
	}
    

  
  }