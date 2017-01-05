angular.module("eulernodeFrontend").controller("HomeController", function($scope) {
    $scope.test = "Home";

    $scope.nodeVersion = process.versions.node;
    $scope.chromeVersion = process.versions.chrome;
    $scope.electronVersion = process.versions.electron;
});