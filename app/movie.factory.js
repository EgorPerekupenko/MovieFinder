(function() {
    'use strict';

    angular
        .module('app')
        .factory('movieFactory', movieFactory);

    movieFactory.$inject = ['$http','$q'];

    /* @ngInject */
    function movieFactory($http,$q) {
        var service = {
             getMovie: getMovie,
             getMovieDetails:getMovieDetails
        };
        
        return service

        ////////////////
        //  pulling data from api   
        function getMovie(search) {	

        	     var defer = $q.defer();

        	return  $http({
                    method: 'GET',
                    url: 'http://www.omdbapi.com/', 
                    params: {
                      s: search                                                   
                    }
                })
                        .then(
                        function(response){                 // Resolve function
                             if (typeof response.data === 'object') {
                            return(response.data.Search);


                        } else {
                            defer.reject('Error');
                        }

                        },
                        function(err){
                                        defer.reject('Error'); // Reject Function
                                      }
                        )
                        return defer.promise;
        }
    // pulling data from API

        function getMovieDetails(details)   {

                 var defer = $q.defer();

            return  $http({
                    method: 'GET',
                    url: 'http://www.omdbapi.com/', 
                    params: {
                      i: details                                                   
                    }
                })
                        .then(
                        function(description){                 // Resolve function
                             if (typeof description.data === 'object') {
                            return(description.data);


                        } else {
                            defer.reject('Error');
                        }

                        },
                        function(err){
                                        defer.reject('Error'); // Reject Function
                                      }
                        )
                        return defer.promise;
        }
}
})();
// CW, EP, BS, VZ