(function (controllers) {

	//init each controller 
	var homeController = require("./homeController");
	var coursesController = require("./coursesController");

	controllers.init = function(app) {
		homeController.init(app);
		coursesController.init(app);
	}
})(module.exports);