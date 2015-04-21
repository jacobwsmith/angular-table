// ==============================================
// TABLE PAGER MODULE
// created by: Jacob Smith
// This module object is part of the controller scope
// allowing you one nlTablePager per controller
// or multiple nlTablePagers synced to the same data
// The directive of this an element
// Css location _tables.css
//
// Example: 
//      <nl-table-pager></nl-table-pager>
//      ng-repeat="item in items | nlTablePagerFilter:nlTablePager.rowsPerPage"
//
// Testing:
// Coming soon...
//
// ==============================================
angular.module('nlTablePager', [])

// Filter
.filter('nlTablePagerFilter', function() {
    return function(input, rowsPerPage) {
        
        //console.log(input);
        //console.log(rowsPerPage);
        
        if (!input || typeof this.nlTablePager === 'undefined') {
            return input;
        }
        if (rowsPerPage) {
            this.nlTablePager.rowsPerPage = rowsPerPage;
        }
        //console.log(input.length);
        this.nlTablePager.itemCount = input.length;
        return input.slice(
            parseInt(this.nlTablePager.page * this.nlTablePager.rowsPerPage, 10),
            parseInt((this.nlTablePager.page + 1) * this.nlTablePager.rowsPerPage + 1, 10) - 1
        );
    };
})

// Directive
.directive('nlTablePager', function () {
    return {
        restrict: 'E',
        transclude: true,
        scope: false,
        link: function($scope, element, attrs) {

            $scope.nlTablePager = {
                page: 0,
                rowsPerPage: 10,
                itemCount: 0
            };

            $scope.nlTablePager.disablePager = function(n) {
                if (n === undefined) {
                    return $scope.nlTablePager.itemCount <= 10;
                }
                return ($scope.nlTablePager.itemCount <= n);
            };

            $scope.nlTablePager.setPage = function(page) {
                if (page > $scope.nlTablePager.pageCount()) {
                    return;
                }
                $scope.nlTablePager.page = page;
            };

            $scope.nlTablePager.nextPage = function() {
                if ($scope.nlTablePager.isLastPage()) {
                    return;
                }
                $scope.nlTablePager.page++;
            };

            $scope.nlTablePager.perviousPage = function() {
                if ($scope.nlTablePager.isFirstPage()) {
                    return;
                }
                $scope.nlTablePager.page--;
            };

            $scope.nlTablePager.firstPage = function() {
                $scope.nlTablePager.page = 0;
            };

            $scope.nlTablePager.lastPage = function() {
                $scope.nlTablePager.page = $scope.nlTablePager.pageCount() - 1;
            };

            $scope.nlTablePager.isFirstPage = function() {
                return $scope.nlTablePager.page === 0;
            };

            $scope.nlTablePager.isLastPage = function() {
                return $scope.nlTablePager.page === $scope.nlTablePager.pageCount() - 1;
            };

            $scope.nlTablePager.pageCount = function() {
                return Math.ceil(parseInt($scope.nlTablePager.itemCount, 10) / parseInt($scope.nlTablePager.rowsPerPage, 10));
            };

        },
        templateUrl: '/directives/nl-table-pager/nl-table-pager.htm'
    };
});