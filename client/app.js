/**
 * Created by briandaves on 10/2/15.
 */
var app = angular.module('todo', []);

app.controller('MainController', ['$scope', function($scope) {

    $scope.toDoList=[
    ];


    $scope.totalToDoList = function(){
        return $scope.toDoList.length;
        };


    $scope.addNewItem = function () {
        $scope.toDoList.push({text:$scope.newToDoItem, done:false});
        $scope.newToDoItem = '';
    };


    $scope


}]);
