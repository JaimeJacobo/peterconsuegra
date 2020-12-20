const express = require('express');
const router = express.Router();

const User = require('../models/User');
const Travel = require('../models/Travel');
const File = require('../models/File');

/* GET home page */
router.get('/', (req, res, next) => {
	res.render('index');
});

router.get('/get-user/:id', (req, res) => {
	User.findById(req.params.id)
		.then((result) => {
			res.send(result);
		})
		.catch((err) => {
			console.log(err);
		});
});

router.get('/get-travel/:id', (req, res) => {
	Travel.findById(req.params.id)
		.then((result) => {
			res.send(result);
		})
		.catch((err) => {
			console.log(err);
		});
});

router.get('/get-file/:id', (req, res) => {
  console.log(req.params.id)
	if (req.params.id !== undefined) {
    console.log('DOS')
		File.findById(req.params.id)
			.then((result) => {
				res.send(result);
			})
			.catch((err) => {
				console.log(err);
			});
	}
});

module.exports = router;
