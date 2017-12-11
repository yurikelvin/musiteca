angular.module("musiteca").directive('restrict', function(usuariosAPI){
    return{
        restrict: 'A',
        prioriry: 100000,
        scope: false,
        link: function(scope){
            // alert('ergo sum!');
        },
        compile:  function(element, attr, linker){
            var accessDenied = true;
            var user = usuariosAPI.getUser();


            var attributes = attr.access.split(" ");
            for(var i in attributes){
                if(user.role == attributes[i]){
                    accessDenied = false;
                }
            }


            if(accessDenied){
                element.children().remove();
                element.remove();
            }

        }
    }
});