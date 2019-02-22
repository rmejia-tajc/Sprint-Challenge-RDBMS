const express = require('express');
const helmet = require('helmet');

const dbAccess = require('./projectTrackerHelpers.js')

const server = express();

server.use(helmet());
server.use(express.json());




// error responses
const errors = {
    '19': 'Another record with that value exists',
};


// endpoints


server.post('/api/projects', (req,res) => {
    const project = req.body;
    dbAccess.addProject(project)
        .then(id => {
        res
            .status(201)
            .json(id)
        })
        .catch(err => {
        res
            .status(500)
            .json({message: 'Failed to add project'})
        })
})

server.post('/api/actions', (req,res) => {
    const action = req.body;
    dbAccess.addAction(action)
        .then(id => {
        res
            .status(201)
            .json(id)
        })
        .catch(err => {
        res
            .status(500)
            .json({message: 'Failed to add action'})
        })
})

server.get('/api/projects/:id/actions', async (req, res) => {

    try {
        const {id} = req.params;  
        const project = await dbAccess.getActionsByProject(id);

        if (project) {
            res.status(200).json(project);
        } else {
            res.status(404).json({ message : 'The entry with that specified ID does not exist'});
        }

    } catch (error) {
    res.status(500).json(error);
    }
});

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`\n*** running on ${port} ***\n`));