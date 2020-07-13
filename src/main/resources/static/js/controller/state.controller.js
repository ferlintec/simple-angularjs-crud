
var module = angular.module('StateController', []);


module.controller("StateController", ["$scope", "$timeout", "StateService",
    function($scope, $timeout, StateService) {

	
	$scope.newState = {};
	$scope.stateSelected = {};
	$scope.states = []; 
	
	 
   $scope.getAllStates = function() {
		
	   StateService.getAllStates().then(function(response) {
			  $scope.states = response.data;
			});
	   $scope.newState = {};
		
	}
   
   $scope.save = function () {
	   
	   StateService.save($scope.newState).then(function (response) {

		   if (response.data)
				
				StateService.getAllStates().then(function(response) {
					  $scope.states = response.data;
					});
		   	
		   	   $scope.states.push(response.data);
		   
			   $scope.newState = {};
			   
			   $scope.successMessage = "Registro criado com sucesso!";
               $scope.success = true;
               $timeout(function () {
                   $scope.success = false;
               }, 5000);

			}, function (response) {
				$scope.errorMessage = "Não foi possível salvar. Preencha todos os dados.";
	               $scope.error = true;
	               $timeout(function () {
	                   $scope.error = false;
	               }, 5000);
			});
   };
   
   $scope.updateState = function () {
	   
	   
	   StateService.update($scope.selectedState).then(function (response) {

		   if (response.data)
			   $scope.successMessage = "Registro alterado com sucesso!";
	           $scope.success = true;
	           $timeout(function () {
	               $scope.success = false;
	           }, 5000);
	           
	           StateService.getAllStates().then(function(response) {
					  $scope.states = response.data;
					});

			}, function (response) {
				$scope.errorMessage = "Não foi possível salvar. Preencha todos os dados.";
               $scope.error = true;
               $timeout(function () {
                   $scope.error = false;
               }, 5000);
               
               StateService.getAllStates().then(function(response) {
 				  $scope.states = response.data;
 				});
               
			});
	   
		   
   };
   
   $scope.deleteState = function () {
	   
	   $scope.states.splice($scope.states.indexOf($scope.selectedState), 1);
	   
	   StateService.delete($scope.selectedState.id).then(function (response) {

		   if (response.data)
			   $scope.selectedState = {};
			   
			   $scope.successMessage = "Registro excluído com sucesso!";
	           $scope.success = true;
	           $timeout(function () {
	               $scope.success = false;
	           }, 5000);

			}, function (response) {
				$scope.errorMessage = "Não foi possível excluir o registro. Entre em contato com o suporte.";
	               $scope.error = true;
	               $timeout(function () {
	                   $scope.error = false;
	               }, 5000);
			});
        
   };
   
  
   $scope.selectState = function (state) {
        $scope.selectedState = state;
   };
   
   
}]);
