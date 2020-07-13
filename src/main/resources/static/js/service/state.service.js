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
    
    //-----------------------------------------------------
    service.getUserById = function(userId) {
        var url = CONSTANTS.getUserByIdUrl + userId;
        return $http.get(url);
    }
    service.getAllUsers = function() {
        return $http.get(CONSTANTS.getAllUsers);
    }
    service.saveUser = function(userDto) {
        return $http.post(CONSTANTS.saveUser, userDto);
    }
    return service;
}]);