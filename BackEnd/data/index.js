(function (data) {
	var seedData = require("./seedData");


	data.getCoursesCategories = function (next) {
		next(null, seedData.initialCourse);
	};

	function compareCourses(order = 1, sortBy) {

		return function innerSort(a, b) {
			//console.log("arguments are: ", arguments);

			if (!a.hasOwnProperty(sortBy) || !b.hasOwnProperty(sortBy)) {
				console.log("one of the courses has no property. course1: ", a.hasOwnProperty(sortBy), "course2: ", b.hasOwnProperty(sortBy));
				return 0;
			};

			var course1 = typeof (a[sortBy]) == "string" ? a[sortBy].toLowerCase() : a[sortBy];
			var course2 = typeof (b[sortBy]) == "string" ? b[sortBy].toLowerCase() : b[sortBy];

			var comparison = 1;

			if (course1 > course2) {
				comparison = 1;
			} else {
				comparison = -1;
			}

			return comparison * order;
		}
	};

	//when filter will be generic the property will be sent
	function filterByFood(filterBy) {

		return function (currentElement) {
			return (currentElement['foodType'] === filterBy);
		};
	}

	function filterByDate(date) {

		return function (currentElement) {

			var filterDate = Date.parse(date);
			var currentDate =  Date.parse(currentElement['startDate']);

			return (currentDate >= filterDate);
		}
	}

	//can make a hash table with property name and a pointer to func
	function  filterCourses(foodTypes, date, text, courses) {

		var filteredCourses = courses;

		if (date != null) {

			filteredCourses = filteredCourses.filter(filterByDate(date));
		}
		if (foodTypes != null) {

			var filterByAllFood = new Array();

			for (var i = 0; i < foodTypes.length; ++i) {

				currentFood = filteredCourses.filter(filterByFood(foodTypes[i]));
				filterByAllFood = filterByAllFood.concat(currentFood);
			}

			filteredCourses = filterByAllFood;
		}
		if (text != null) {
			//call filter by text
		}

		return filteredCourses; 
	}

	//because it is an async action we need to define what to do next
	data.getCourses = function (nextFunc, limit = null, offset = null, sortBy = null, foodType = null, date = null, filterFunction = null) {

		var currentData = seedData.initialCourses;

		currentData = filterCourses(foodType, date, null, currentData);

		if (sortBy != null) {

			var orderBy = 1;
			var desc = sortBy.substring(0, 1);
			if (desc === '-') {
				orderBy = -1;
				sortBy = sortBy.split('-')[1];
			}

			currentData.sort(compareCourses(orderBy, sortBy));
		}

		var recordsAmount = parseInt(offset) + parseInt(limit);
		if (recordsAmount > currentData.length) {
			recordsAmount = currentData.length;
		}

		nextFunc(null, currentData.slice(offset, recordsAmount));
	};

})(module.exports);






