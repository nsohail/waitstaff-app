angular.module('myApp',['ngRoute', 'ngAnimate'])
	.config(['$routeProvider', function($routeProvider){
		$routeProvider.when('/', {
			templateUrl: 'views/home.html'
		})
		.when('/new-meal', {
			templateUrl: 'views/newmeal.html',
			controller: 'appCtrl'
		})
		.when('/my-earnings', {
			templateUrl: 'views/earnings.html',
			controller: 'appCtrl'
		})
		.otherwise('/');
	}])

	.controller('appCtrl',function($scope){

		//starting values
		$scope.myForm = {};
		$scope.subtotal = 0;
		$scope.tip = 0;
		$scope.total = 0;

		$scope.totalTip = 0;
		$scope.totalMeals = 0;
		$scope.totalAvgTip = 0;


		$scope.submitForm = function(){
			console.log("Test");
			if($scope.myForm.$valid) {
				console.log("The form went through");

				//converting to percentages or decimals
				$scope.taxrateConverted = $scope.taxrate / 100;
				console.log($scope.taxrateConverted);
				$scope.tippercentConverted = $scope.tippercent / 100;
				console.log($scope.tippercentConverted);
				

				//edit customer charges
				$scope.subtotal = ($scope.baseprice * $scope.taxrateConverted) + $scope.baseprice;
				$scope.tip = $scope.tippercentConverted *  ($scope.subtotal);
				$scope.total = $scope.subtotal + $scope.tip;

				//add to my earnings
				$scope.totalTip = $scope.tip + $scope.totalTip;
				$scope.totalMeals = 1 + $scope.totalMeals;
				$scope.totalAvgTip = $scope.totalTip / $scope.totalMeals;

			}else {
				console.log("The form is invalid and did not go through");
				return false;
			}
			
		};

		$scope.cancelForm = function() {
			console.log("cancel");
			//reset input values
			$scope.baseprice = "";
			$scope.taxrate = "";
			$scope.tippercent = "";

		};

		$scope.resetApp = function() {
			//reset all values
			$scope.baseprice = "";
			$scope.taxrate = "";
			$scope.tippercent = "";

			$scope.subtotal = "";
			$scope.tip = "";
			$scope.total = "";

			$scope.totalTip = "";
			$scope.totalMeals = "0";
			$scope.totalAvgTip = "";

		};

	});