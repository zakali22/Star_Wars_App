const express = require('express');
const router = express.Router();
const ejs = require('ejs');
const { movies } = require('../movies.json');

// Home Route

router.get('/', (req, res) => {
	res.render('home', {
		title: "Star Wars Movies",
		movies: movies
	});
});

router.get('/star_wars_episode/:id?', (req, res) => {
	const { id } = req.params;
	if(id >= 1 && id <= 6){
		const title = movies[id - 1]['title'];
		const heroImage = movies[id - 1]['hero_image'];
		const description = movies[id - 1]['description'];
		const posterImage = movies[id - 1]['poster'];
		const mainCharacters = movies[id - 1]['main_characters'];
		res.render('movie_page', {
			title: title,
			heroImage: heroImage,
			description: description,
			posterImage: posterImage,
			mainCharacters: mainCharacters,
			movies: movies
		});
	} else {
		res.render('error', {
			title: 'This is not the page you seek',
			movies: movies
		});
	}
});

router.get('*', (req, res) => {
	res.render('error', {
		title: "Star Wars Movies"
	});
});

module.exports = router;