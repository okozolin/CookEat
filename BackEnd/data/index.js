(function (data) {
	var seedData = require("./seedData");

	
	data.getCoursesCategories = function(next) {
		next(null, seedData.initialCourse);

		//seed data will be filtered according to query string parameters
		//init all arguments to null, if not null-->filter

	};

	//why const?
	//check if property exists
	//order comes from parsing the property and checking fo the - sign
	//why course1[sortBy].hasOwnProperty() returns false?

	//need to create a func within a func!!!!!!!!!!!!! not running!
	function compareCourses(order = 1, sortBy) {
		console.log("outer arguments are: ", arguments);

		return function innerSort(a, b)
		{
			console.log("arguments are: ", arguments);

			console.log("typeof(a[soetBy]) is", typeof (a[sortBy]));

			//if (!course1[sortBy].hasOwnProperty() || !course2[sortBy].hasOwnProperty()) {
			//	console.log("course1 val: ", course1[sortBy].hasOwnProperty(), "course2 val: ", course2[sortBy].hasOwnProperty());
			//	return 0;
			//};


			var course1Val = typeof (a[sortBy]) == "string" ? a[sortBy].toLowerCase() : a[sortBy];
			var course2Val = typeof (b[sortBy]) == "string" ? b[sortBy].toLowerCase() : b[sortBy];
			console.log("course1Val is", course1Val, "course2Val is", course2Val);
			console.log("----------course1 is", a["owner"]);

			var comparison = 0;

			if (course1Val > course2Val) {
				comparison = 1;
			} else {
				comparison = -1;
			}

			console.log("-----------------------");

			return comparison * order;

		}
		};


	//because it is an async action we need to define what to do next
	data.getCourses = function (nextFunc, limit = null, offset = null, sortBy = null, filterFunction = null) {

		//check for null arguments
		//var filteredData = filterFunction(seedData.initialCourses);
		//next(null, filteredData.slice(offset, limit).sort(sortFunc));
		

		var currentData = seedData.initialCourses;
		

		if (sortBy != null) {
			//compareCourses(currentData[0], currentData[1],  -1, sortBy);
			currentData.sort(compareCourses(-1, sortBy));

			//call sort on the array and insert to a new sorted array?
			//parse the minus to get direction
			//sort the array 
			//if property is string do to lower
			//check if the property exists in the new objects
			//inset to sortedData or filteredData- check if sort func sorts the data and returns
			//it in a different array
			//compare(a,b,asc){return asc * (a-b)}
			//when querystring is empty an empty array is returned
		}

		nextFunc(null, seedData.initialCourses.slice(offset, limit));  


		//nextFunc(null, currentData);

	};

})(module.exports);






