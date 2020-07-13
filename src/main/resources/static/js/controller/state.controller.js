
var module = angular.module('StateController', []);


module.controller("StateController", ["$scope", "StateService",
    function($scope, StateService) {

	
	$scope.newState = {};
	$scope.stateSelected = {};
	$scope.states = []; 
	
	 
   $scope.getAllStates = function() {
		
	   StateService.getAllStates().then(function(response) {
			  $scope.states = response.data;
			});
	   $scope.newState = {};
		
//			$http.get(url, config).then(function(response) {
//
//				if (response.data.status == "Done") {
//					$scope.allcustomers = response.data;
//					$scope.showAllCustomers = true;
//
//				} else {
//					$scope.getResultMessage = "get All Customers Data Error!";
//				}
//
//			}, function(response) {
//				$scope.getResultMessage = "Fail!";
//			});
		
	}
   
   $scope.save = function () {
	   
	   
	   $scope.states.push($scope.newState);
	   
	   StateService.save($scope.newState).then(function (response) {

		   if (response.data)
				console.log(response.data);
//				$scope.newState.id = response.data.id;
//				$scope.newState.abbreviation = response.data.abbreviation;
//				$scope.newState.name = response.data.name;
//				$scope.newState.lastUpdate = response.data.lastUpdate;
//				
//				$scope.msg = "Post Data Submitted Successfully!";
				
				StateService.getAllStates().then(function(response) {
					  $scope.states = response.data;
					});
			   $scope.newState = {};

			}, function (response) {
				console.log(response);
			});
   };
   
   $scope.updateState = function () {
	   
	   
	   StateService.update($scope.selectedState).then(function (response) {

		   if (response.data)
				console.log(response.data);
//				$scope.newState.id = response.data.id;
//				$scope.newState.abbreviation = response.data.abbreviation;
//				$scope.newState.name = response.data.name;
//				$scope.newState.lastUpdate = response.data.lastUpdate;
//				
//				$scope.msg = "Post Data Submitted Successfully!";
				
				StateService.getAllStates().then(function(response) {
					  $scope.states = response.data;
					});

			}, function (response) {
				console.log(response);
			});
   };
   
   $scope.deleteState = function () {
	   
	   $scope.states.splice($scope.states.indexOf($scope.selectedState), 1);
	   
	   StateService.delete($scope.selectedState.id).then(function (response) {

		   if (response.data)
				console.log(response.data);
				
			   $scope.selectedState = {};

			}, function (response) {
				console.log(response);
			});
        
   };
   
  
   $scope.selectState = function (state) {
        $scope.selectedState = state;
   };
   
   
}]);
