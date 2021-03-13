const express = require('express');
const server = express();
const port = 3000;
const cors = require('cors');

server.use(express.json());
server.use(cors());

const routes = require('./routes');
routes(server);

server.listen(port, () => console.log(`Node API application running on port ${port}`));