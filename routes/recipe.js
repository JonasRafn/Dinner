var express = require('express');
var router = express.Router();

var recipeModel = require('./../models/recipe');

/* GET users listing. */
router.get('/', (req, res, next) => {
	res.render('recipes', {
		title: 'Recipes',
		recipes: [{ name: 'Lasagne' }, { name: 'Boller i Karry' }]
	});
});

module.exports = router;
