(function() {
    'use strict';

    angular
        .module('app')
        .controller('MovieController', MovieController);

    MovieController.$inject = ['movieFactory'];

    // injecting factory into a controller
    function MovieController(movieFactory) {					
        var vm = this;
        vm.title='MovieController'; 
        vm.getInfo=getInfo;
        
        vm.searchTerm=[];         


        // getMovie function
        function getInfo(search){                                              
           // grabing data from factory
        	movieFactory.getMovie(vm.searchTerm).then(
                       // Resolve function
        				function(response){ 				
        					
                            vm.results = response;

        				},
                        // Reject Func
                            function(error){
                            console.log('Error'); 
                            }
                        )
        		
        }
    }
})();	
//CW,BS,EP,VZ