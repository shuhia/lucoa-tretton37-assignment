'use strict';

const colleagueController = require('../controllers');

module.exports = (server) => {
    server.route('/get/colleagues').get(colleagueController.getColleagues);

    server.use((req, res) => {
        res.status(404).send({url: `URL ${req.originalUrl} is not found`});
    });
}