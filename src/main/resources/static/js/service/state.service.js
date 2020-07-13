angular.module('StateService', []).factory('StateService', ["$http", "$location", function( $http, $location) {
 
    var service = {};
    
    service.getAllStates = function(){
    	
    	var url = $location.absUrl() + "state";
		var config = {
			headers : {
				'Content-Type' : 'application/json;charset=utf-8;'
			}
		}
		return $http.get(url, config);
    }
    
    service.save = function(newState){
    	var url = $location.absUrl()+"state";
		var config = {
			headers : {
				'Content-Type' : 'application/json;charset=utf-8;'
			}
		}
		return $http.post(url, JSON.stringify(newState), config);
    }
    
    service.update = function(state){
    	var url = $location.absUrl()+"state";
		var config = {
			headers : {
				'Content-Type' : 'application/json;charset=utf-8;'
			}
		}
		return $http.put(url, JSON.stringify(state), config);
    }
    
    service.delete = function(id){
    	var url = $location.absUrl()+"state/"+id;
		
		return $http.delete(url);
    }
    
     return service;
}]);
