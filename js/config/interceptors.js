angular.module("musiteca").config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push("tokenInterceptor");
}]);