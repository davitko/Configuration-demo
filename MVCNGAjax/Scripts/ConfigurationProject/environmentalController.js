var app = angular.module('configurationModule');

app.controller("environmentalController", function ($scope, ValidationServices) {
    ValidationServices.getData().then(function (environmentalData) { $scope.environmentalData = environmentalData }, function () {
        alert('error while fetching talks from server')
    });

    $scope.seeDetails = function (id) {
        $scope.detail = id;
        $scope.oneEnvironmentalData = $scope.environmentalData[id];
    }
});





//app.controller('environmentalController', ['$scope', '$rootScope', , 'EnvironmentalService', environmentalCtrl]);

//function environmentalCtrl($scope, $rootScope, ValidationService) {
//    ValidationService.getData().then(function (environmentalData) {
//        $scope.environmentalData = environmentalData;
//    }, function () {
//        alert('error while fetching talks from server');
//    });
//}

//app.controller("environmentalController", function ($scope, EnvironmentalService) {
//    EnvironmentalService.getData().then(function (environmentalData) {
//        $scope.environmentalData = environmentalData;
//    }, function () {
//        alert('error while fetching talks from server');
//    });
//});