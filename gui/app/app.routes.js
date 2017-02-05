angular.module("eulernodeFrontend").config(function($stateProvider,$urlRouterProvider) {
    var homeState = {
		"name": "home",
		"url": "/home",
		"templateUrl": "./app/components/home/homeView.html",
        "controller": "HomeController"
	}
	var problemListState = {
		"name": "problemList",
		"url": "/problems",
		"templateUrl": "./app/components/problemList/problemListView.html",
        "controller": "ProblemListController"
	}
	var problemState = {
		"name": "problem",
		"url": "/problems/:problemId",
		"templateUrl": "./app/components/problem/problemView.html",
		"controller": "ProblemController"
	}

	$stateProvider.state(homeState);
	$stateProvider.state(problemListState);
	$stateProvider.state(problemState);
	
	$urlRouterProvider.otherwise("/home");
})