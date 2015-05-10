angular.module('myApp',[])

	.controller('myCtrl',function($scope){

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

				//edit customer charges
				$scope.subtotal = ($scope.baseprice * $scope.taxrate);
				$scope.tip = $scope.tippercent *  ($scope.baseprice * $scope.taxrate);
				$scope.total = ($scope.baseprice * $scope.taxrate) + ($scope.tippercent *  ($scope.baseprice * $scope.taxrate));

				//add to my earnings
				$scope.totalTip = $scope.total + $scope.totalTip;
				$scope.totalMeals = 1 + $scope.totalMeals;
				$scope.totalAvgTip = $scope.totalTip / $scope.totalMeals;

			}else {
				console.log("The form is invalid and did not go through");
				return false;
			}
			
		};

		$scope.cancelForm = function() {
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
			$scope.totalMeals = "";
			$scope.totalAvgTip = "";

			$scope.myForm.$setPristine();

		};

	});
