var express = require('express');
var router = express.Router();

var recipeModel = require('./../models/Recipe');

/**
 * Render list of recipes
 */
router.get('/all', (req, res, next) => {
	res.render('recipes', {
		title: 'Alle Opskrifter',
		recipes: [{ name: 'Lasagne' }, { name: 'Boller i Karry' }]
	});
});

/**
 * Render single Recipe
 */
router.get('/:id', function (req, res, next) {
	var userId = req.params.id;

	res.render('recipe', {
		title: 'Lasagne',
		name: 'Lasagne',
		id: userId
	});
});

module.exports = router;
