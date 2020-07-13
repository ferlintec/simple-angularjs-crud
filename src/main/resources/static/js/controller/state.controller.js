
var module = angular.module('StateController', []);


module.controller("StateController", ["$scope", "StateService",
    function($scope, StateService) {

	
	$scope.newState = {};
	$scope.states = []; 
	
	 
   $scope.getAllStates = function() {
		
	   StateService.getAllStates().then(function(response) {
			  $scope.states = response.data;
			});
		
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
   
   $scope.salvar = function () {
	   
	   $scope.states.push($scope.newState);
	   
	   StateService.salvar($scope.newState).then(function (response) {

		   if (response.data)
				console.log(response.data);
				$scope.newState.id = response.data.id;
				$scope.newState.lastUpdate = response.data.lastUpdate;
				
				$scope.msg = "Post Data Submitted Successfully!";

			}, function (response) {
				console.log(response);
			});
		
		$scope.newState = {};
   };
   
   $scope.selecionaCliente = function (cliente) {
        $scope.clienteSelecionado = cliente;
   };
   
   
   //--------------------------------------------------
	
  $scope.showTime = function(){
    var time = $filter('date')(new Date(),'yyyy-MM-dd HH:mm:ss Z');
    $scope.welcome = "Time = " + time;    
  }
  
  $scope.saveRecord = function () {
	  
	  if ($scope.newStudent.id == null) {
		  $scope.newStudent.id = empid++;
		  $scope.students.push($scope.newStudent);
	  } else {
		  for (i in $scope.students) {
			  if ($scope.students[i].id == $scope.newStudent.id) {
				  $scope.students[i] = $scope.newStudent;
			  }
	   
		  }
	  }
	   
  $scope.newStudent = {};
   
  }
  
}]);
