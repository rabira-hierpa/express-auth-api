const router = require('express').Router();

router.get('/', (req, res) => {
	res.end('Hello from Express API!!!');
});

module.exports = router;
