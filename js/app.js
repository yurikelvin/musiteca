var module = angular.module("musiteca", ["ngMessages", "ngRoute"]);

module.directive('starRating', function() {
    return {
        restrict: 'A',
        require: 'ng-model',
        link: function(scope, element, attrs, ngModel) {
            $(element).rating(scope.$eval(attrs.starRating));
            
            // get value from ng-model
            ngModel.$render = function() {
                $(element).rating('update', ngModel.$viewValue || '');
                console.log(scope.rate);
            };

            // update ng-model on clicking star
            $(element).on('rating.change', function(event, value, caption) {
                ngModel.$setViewValue(value);
                console.log(scope.rate);                
            });

            // empty ng-model value on clearing rating
            $(element).on('rating.clear', function(event) {
                ngModel.$setViewValue('');
                console.log(scope.rate);
            }); 
        }
    };
});