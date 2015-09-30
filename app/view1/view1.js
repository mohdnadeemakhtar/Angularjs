/*globals, Handlebars  */

'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('myAPP.View1Ctrl', [function() {
        debugger;
        console.log($('#datepicker1').length + "-------------------------");
        //jQuery('#datepicker1').datepicker();
}]);