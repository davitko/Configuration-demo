var environmentalModule = angular.module("environmentalModule", []).config(function ($routeProvider, $locationProvider) {
    //Path - it should be same as href link
    $routeProvider.
        when('/', {
            title: 'Environmental',
            templateUrl: '/Templates/environmental.html',
            controller: 'environmentalController'
        })
    $routeProvide.when('/Environmental/environmental', { templateUrl: '/Templates/environmental.html', controller: 'environmentalController' });
    $routeProvider.when('/Environmental/enviromentalDetails', { templateUrl: '/Templates/environmental-details.html', controller: 'enviromentalDetailsController' });

    $routeProvide.otherwise({
        redirectTo: '/'
    });
    $locationProvider.html5Mode(true);
});