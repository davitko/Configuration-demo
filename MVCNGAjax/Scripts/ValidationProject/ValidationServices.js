var app = angular.module("validationModule");

app.factory("ValidationServices", function ($http, $q) {
    return {
        getData: function () {
            // Get the deferred object
            var deferred = $q.defer();
            // Initiates the AJAX call
            $http({ method: 'GET', url: "/Environmental/GetEnvironmentalData" }).success(deferred.resolve).error(deferred.reject);
            // Returns the promise - Contains result once request completes
            return deferred.promise;
        },
        getHealtCareData: function () {
            // Get the deferred object
            var deferred = $q.defer();
            // Initiates the AJAX call
            $http({ method: 'GET', url: "/HealtCare/GetHealtCareData" }).success(deferred.resolve).error(deferred.reject);
            // Returns the promise - Contains result once request completes
            return deferred.promise;
        }

    }
});