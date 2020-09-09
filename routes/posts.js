const router = require('express').Router();
const isSigned = require('./verifyToken');
router.get('/', isSigned, (req, res) => {
	// res.json({
	// 	posts: {
	// 		title: 'My first post',
	// 		desc: "Some random data you should't access",
	// 	},
	// });
	res.send(req.user);
});

module.exports = router;
