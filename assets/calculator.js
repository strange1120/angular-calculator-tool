(function() {

	var app = angular.module('myCalculator', []);

	app.controller('CalculatorController', ['$scope', function($scope){

		$scope.lumen_options = [375, 600, 900, 1125, 1600];
		$scope.current_lumens = 600;
		$scope.current_cost = 13;
		$scope.current_hours = 4;
		$scope.total_days = 365;


	}]);







}) ();


