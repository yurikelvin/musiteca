angular.module("musiteca").factory("tokenInterceptor", function($q, $location) {
    return {
        request: function(config) {
            config.headers.Authorization = "Bearer " + localStorage.getItem("userToken");
            return config;
        },

        responseError: function(rejection) {
            return $q.reject(rejection);
        }
    };
});