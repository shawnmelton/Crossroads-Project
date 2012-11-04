/**
 * @desc Users Controller
 * @author Shawn Melton
 */
var model = "../models/users.js";

module.exports = function (app) {
	app.get('/users/authenticate', function (req, res, next) {
		model.authenticate(function (result) {
			res.send(JSON.stringify(result));
		});
	});
}