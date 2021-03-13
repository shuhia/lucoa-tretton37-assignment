'use strict';

const scrapeIt = require('scrape-it');
const Colleague = require('../models');

const scrapeColleagues = (url, callback) => {
    scrapeIt(url, {
        colleagues: {
            listItem: '.ninja-summary',
            data: {
                name: {
                    selector: 'img.portrait',
                    attr: 'alt'
                },
                office: {
                    selector: 'h1 > a > span',
                    convert: x => x.slice(5)
                },
                image: {
                    selector: 'img.portrait',
                    attr: 'src'
                }
            }
        }
    }).then(({data, response}) => {
        if (response.statusCode === 200) {
            let result = [];

            data.colleagues.forEach(c => {
                result.push(new Colleague(c.name, c.office, c.image));
            });

            callback(result);
        }
    });
};

module.exports = {
    scrapeColleagues
};