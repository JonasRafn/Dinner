'use strict';

/**
 * Class used for CRUD operations on recipes
 */

var db = require('./../DB/pgsql');

var getAllRecipes = function () {
    var client = db.GetClient();

    client.query('SELECT * FROM recipes', function (err, result) {
        try {
            if (err) {
                console.log(err);
                return null;
            }

            return result.rows;
        } finally {
            client.end();
        }
    });
};


/**
 * Get recipes based on params
 * @param {Object} params 
 */
var getRecipes = function (params) {
    var client = db.GetClient();

    client.query('SELECT * FROM recipes', function (err, result) {
        try {
            if (err) {
                console.log(err);
                return null;
            }

            return result.rows;
        } finally {
            client.end();
        }
    });
};

exports.All = getAllRecipes;
exports.Recipes = getRecipes;