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


    $scope.removeItem = function () {
        $scope.class = "red";
        //We want to change the value of the $scope variable ($scope.toDoList)
        //So the view is updated with the desired result

        for(var it = 0; it < $scope.toDoList.length; it++){
        	//If it is checked done
        	if($scope.toDoList[it].done) {
        		//Remove it
                $scope.class = "red";
        		$scope.toDoList.splice(it,1);



        	}
        }
    };

}]);
