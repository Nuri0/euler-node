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
		"templateUrl": "./app/components/problems/problemsView.html",
        "controller": "ProblemsController"
	}

	$stateProvider.state(homeState);
	$stateProvider.state(problemState);
})