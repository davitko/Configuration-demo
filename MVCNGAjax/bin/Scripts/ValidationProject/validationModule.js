var validationModule = angular.module("validationModule", []).config(function ($routeProvider, $locationProvider) {
    //Path - it should be same as href link
    $routeProvider.when("/", { templateUrl: "/Templates/welcome.html", controller: "welcomeController", css: "Content/myCss/welcome.css" });
    $routeProvider.when("/Configuration/index", { templateUrl: "/Templates/welcome.html", controller: "welcomeController", css: "Content/myCss/welcome.css" });
    $routeProvider.when("/logIn", { templateUrl: "Templates/logIn.html", controller: "welcomeController", css: "Content/myCss/logIn.css" });
    $routeProvider.when("/registration", { templateUrl: "Templates/register.html", controller: "welcomeController", css: "Content/myCss/register.css" });
    $routeProvider.when("/userOverview", { templateUrl: "Templates/user-overview.html", controller: "welcomeController", css: "Content/myCss/user-overview.css" });
    $routeProvider.when("/editConfiguration", { templateUrl: "Templates/edit-configuration.html", controller: "welcomeController", css: "Content/myCss/edit-configuration.css" });
    $routeProvider.when("/createConfiguration", { templateUrl: "Templates/create-configuration.html", controller: "welcomeController", css: "Content/myCss/edit-configuration.css" });

    $locationProvider.html5Mode(true);
});