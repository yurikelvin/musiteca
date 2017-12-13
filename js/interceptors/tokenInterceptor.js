angular.module("musiteca").factory("tokenInterceptor", function($q, $location) {
    return {
        request: function(config) {
            config.headers.Authorization = "Bearer " + localStorage.getItem("userToken");
            return config;
        },

        responseError: function(rejection) {

            if(rejection.status == 401) {
                $location.path("/login");
                console.log("interceptada");
            }

            return $q.reject(rejection);
        }
    };
});