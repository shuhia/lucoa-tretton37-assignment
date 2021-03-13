'use strict';

const svc = require('../services');

const getColleagues = (req, res) => {
    svc.scrapeColleagues('https://tretton37.com/meet', (colleagues) => {
        res.send(colleagues);
    });
}

module.exports = {
    getColleagues
};