/**
 * Created by kevinhuron on 01/06/2016.
 */
angular.module('UsersService', []).factory('user', ['$http', function($http) {
    return {
        get : function(mail) {
            return $http.get('/api/profile' + mail);
        },

        log : function(logData) {
            return $http.post('/api/login', logData);
        },

        create : function(userData) {
            return $http.post('/api/inscription', userData);
        },

        delete : function(id) {
            return $http.delete('/api/nerds/' + id);
        }
    }
}]);