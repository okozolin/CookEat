(function(homeController) {

	var data = require("../data");

	homeController.init = function(app) {
		//Home route
		app.get("/", function (req, res) {

			//var { limit, offset } = req;

			data.getCourses(
				function (err, courses) {
					res.set("Content-Type", "application/json");

					if (err) {
						res.send(400, err);
					} else {
						
						res.send(courses);
					}
				});
			//add try catch to send errors


		});
	};
})(module.exports); 


//res.send("<html><body><h1>Express</h1></body></html>");


