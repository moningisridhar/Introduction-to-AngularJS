'use strict';

/**
 * @ngdoc function
 * @name yeomanScafoldingProjectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yeomanScafoldingProjectApp
 */
angular.module('yeomanScafoldingProjectApp')
    .controller('ContactCtrl', function($scope, $http) {

        $scope.contact = {};
        $scope.contact.name;
        $scope.contact.email;
        $scope.contact.comments;

        $scope.events= {};

        $http.get('/properties/events.json').success(function(respond) {
        	$scope.events = respond;
        });


        console.log("Hiiii...I am in contact controller!!!");

        $scope.submit = function() {
            console.log($scope.contact.name + ' ' + $scope.contact.email);
        };
    });
