var App = angular.module("App", ['ngDragDrop']);
App.controller('OverviewCtrl', function ($scope) {
    $scope.list1 = { title: 'good' };
    $scope.list2 = { title: 'fat' };
    $scope.list3 = { title: 'fluffy' };
    $scope.list4 = {};
});
