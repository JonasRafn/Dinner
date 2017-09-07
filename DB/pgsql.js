'use strict';

var pg = require('pg');

/**
 * Returns client with open connection to db
 */
var getClient = function () {
    var client = new pg.Client(process.env.DATABASE_URL);
    client.connect();
    return client;
};

exports.GetClient = getClient;