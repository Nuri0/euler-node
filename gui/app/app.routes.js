angular.module("eulernodeFrontend").config(function($stateProvider) {
    var homeState = {
		"name": "home",
		"url": "/home",
		"templateUrl": "./app/components/home/homeView.html",
        "controller": "HomeController"
	}
	var problemState = {
		"name": "problems",
		"url": "/problems",
		"templateUrl": "./app/components/problemList/problemListView.html",
        "controller": "ProblemListController"
	}

	$stateProvider.state(homeState);
	$stateProvider.state(problemState);
})