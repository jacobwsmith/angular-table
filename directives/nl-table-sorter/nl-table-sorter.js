// ==============================================
// TABLE SORTER MODULE
// created by: Jacob Smith
// This module object is part of the controller scope
// allowing you sort the table headers
// The directive is an "Attribute" only
// Css _forms.css
//
//  FRONTEND - Example (use orderBy): 
//    <tr ng-repeat="item in data | orderBy:order:reverse>
//
//  BACKEND - Example (use $watch):
//    $scope.$watchCollection('[campaignsVm.status, campaignsVm.order, campaignsVm.reverse]', function(newValues, oldValues){
//        for(var i = 0; i < newValues.length; i++){
//            if(newValues[i] !== oldValues[i]){
//                // call ajax method
//               break;
//            }
//        }
//    });
//
// TESTING:
// Coming soon...
//
// ==============================================
angular.module('nlTableSorter', [])
    .directive('nlTableSorter', function() {
        return {
            restrict: 'A',
            transclude: true,
            scope: {
              order: '=',
              by: '=',
              reverse: '='
            },
            replace: true,
            link: function(scope, element, attrs) {
                
                // Click of the table column to sort
                scope.click = function() {
                    if (scope.order === scope.by) {
                        scope.reverse = !scope.reverse;
                    } else {
                        scope.by = scope.order;
                        scope.reverse = false;
                    }
                };

            },
            templateUrl: '/directives/nl-table-sorter/nl-table-sorter.htm'
        };
    });