/**
 * Created by Róger Rezende on 14/06/2017.
 */

var crud = angular.module("crud", []);

crud.controller("controller", function ($scope, $filter, $location, $http) {

   $scope.novoCliente = {};
   $scope.clienteSelecionado = {};

   $scope.clientes = [
       {nome: "Romário Ratto", telefone: 53991000000, email: "rr@gmail.com"},
       {nome: "Celia Hanna", telefone: 53999111111, email: "ch@gmail.com"},
       {nome: "Pedro Prietsh", telefone: 53991222222, email: "pp@gmail.com"},
   ];
   
   $scope.states = []; 
   
   $scope.salvar = function () {
       $scope.clientes.push($scope.novoCliente);
       $scope.novoCliente = {};
   };
   
   $scope.selecionaCliente = function (cliente) {
        $scope.clienteSelecionado = cliente;
   };

   $scope.alterarCliente = function () {
       
   };

   $scope.excluirCliente = function(){
        $scope.clientes.splice($scope.clientes.indexOf($scope.clienteSelecionado), 1);
   };
   
   $scope.getAllStates = function() {
		
	   var url = $location.absUrl() + "/state";

		var config = {
			headers : {
				'Content-Type' : 'application/json;charset=utf-8;'
			}
		}
		
		$http.get('state').then(function(response) {
			  console.log(response.data);
			  $scope.states = response.data;
			});
		
		$http.get(url, config).then(function(response) {

			if (response.data.status == "Done") {
				$scope.allcustomers = response.data;
				$scope.showAllCustomers = true;

			} else {
				$scope.getResultMessage = "get All Customers Data Error!";
			}

		}, function(response) {
			$scope.getResultMessage = "Fail!";
		});
		
	}
   
   
});