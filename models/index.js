const db = require('mongoose');
db.set('debug', false);
db.Promise = Promise;
db.connect(process.env.DATABASEURL, {
	keepAlive: true,
	useNewUrlParser: true
})

module.exports.User = require('./user');
module.exports.Message = require('./message');