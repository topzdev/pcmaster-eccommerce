const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = function(req, res, next) {
	const token = req.header('x-auth-token');

	if (!token)
		return res
			.status(401)
			.json({ msg: '[WARNING] You are not authorize to access this page' });

	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		req.user = decoded.user;
		next();
	} catch (err) {
		res.status(401).json({ type: 'error', msg: '[WARNING] Not Authorize' });
	}
};
