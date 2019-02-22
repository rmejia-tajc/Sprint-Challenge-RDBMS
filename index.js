const express = require('express');
const helmet = require('helmet');

const db = require('./projectTrackerHelpers.js')

const server = express();

server.use(helmet());
server.use(express.json());






const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`\n*** running on ${port} ***\n`));