
var app = angular.module('environmentalModule');

app.factory("EnvironmentalService", function ($http, $q) {
    return {
        getData: function () {
            // Get the deferred object
            var deferred = $q.defer();
            // Initiates the AJAX call
            $http({ method: 'GET', url: '/Environmental/GetEnvironmentalData' }).success(deferred.resolve).error(deferred.reject);
            // Returns the promise - Contains result once request completes
            return deferred.promise;
        }

    }
});