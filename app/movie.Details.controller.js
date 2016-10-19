(function() {
    'use strict';

    angular
        .module('app')
        .controller('MovieDetailController', MovieDetailController);

    MovieDetailController.$inject = ['movieFactory','$stateParams'];

    /* @ngInject */
    function MovieDetailController(movieFactory,$stateParams) {
        var detail = this;
        detail.title = 'MovieDetailController';
        detail.getMovieDescription=getMovieDescription;
        
		
		var imdbId = $stateParams.movieDetails;

		activate();
        ////////////////
        	// grabing data from second service
        function activate(){
        	getMovieDescription(imdbId);
        }

        function getMovieDescription(imdbId) {

           
        	movieFactory.getMovieDetails(imdbId).then(
                       // Resolve function
        				function(response){ 				
        					
                            detail.results = response;

        				},
                        // Reject Func
                            function(error){
                            console.log('Error'); 
                            }
                        )
        		
        }
    }
        
    
})();
// CW, EP, BS, VZ