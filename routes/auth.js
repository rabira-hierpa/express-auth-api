const router = require('express').Router();
const User = require('../model/User');

// VALIDATION
const Joi = require('@hapi/joi');

const schema = Joi.object({
	name: Joi.string().min(4).required(),
	email: Joi.string().min(6).required().email(),
	password: Joi.string().min(6).required(),
});

router.post('/register', async (req, res) => {
	// validate data

	try {
		const value = await schema.validate(req.body);
		// console.log('Errro Message' + value.error.details[0].message);
		res.send(value);
	} catch (error) {
		console.error(error);
	}

	// const user = new User({
	// 	name: req.body.name,
	// 	email: req.body.email,
	// 	password: req.body.password,
	// });
	// try {
	// 	// console.log(req);
	// 	const savedUser = await user.save();
	// 	res.send(savedUser);
	// } catch (err) {
	// 	res.status(400).send(err);
	// }
});

// router.post('/login')

module.exports = router;
