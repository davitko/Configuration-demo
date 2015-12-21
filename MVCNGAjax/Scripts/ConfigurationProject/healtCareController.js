var app = angular.module('validationModule');

app.controller("healtCareController", function ($scope, ValidationServices) {
    ValidationServices.getHealtCareData().then(function (healtCareData) { $scope.healtCareData = healtCareData }, function () {
        alert('error while fetching talks from server')
    });
});