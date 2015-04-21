// ==============================================
// TABLE SEARCH MODULE
//
// Description:
// This module object is part of the controller scope
// allowing you one nlTableSearch per controller
// or multiple nlTableSearches will synced to the same data
// The directive of this an element
// Css location _tables.css
//
// Example: 
//      <nl-table-search></nl-table-search>
//      ng-repeat="item in items | filter: nlTableSearch.value"
//
// Testing:
// Coming soon...
//
// ==============================================
angular.module('nlTableSearch', [])

.directive('nlTableSearch', function($timeout) {
    return {
        restrict: 'E',
        transclude: true,
        replace: true,
        scope: false,
        link: function($scope) {
            $scope.nlTableSearch = {

                // Close Search Box
                // Css Animation Class
                close: function() {
                    
                    // Remove Class
                    $scope.nlTableSearch.closeBtn = '';

                    // Reset Value and the text of the input
                    $scope.nlTableSearch.value = '';
                    $scope.nlTableSearch.text = '';
                    
                },
                value: '', // filter value
                openBtn: '',
                closeBtn: '',
                text: '', // input text
                timer: null // timer used to wait
            };

            // Search Text Changed
            // We don't update the value right away
            // This allows us to wait half a second
            // and wait for the user to type before
            // processing the input text
            // Move to the first page of the table pager if it exists
            $scope.$watch('nlTableSearch.text', function (newValue, oldValue) {
                
                if(oldValue !== newValue){

                    $timeout.cancel($scope.nlTableSearch.timer);

                    if(newValue !== ''){
                        $scope.nlTableSearch.closeBtn = 'table-search-close-on';
                    }else{
                        $scope.nlTableSearch.closeBtn = '';
                    }
                    
                    // Value is different than input
                    if($scope.nlTableSearch.value !== newValue){
                        
                        // Set the timer
                        $scope.nlTableSearch.timer = $timeout(function() {
                            
                            // clear out timer
                            $timeout.cancel($scope.nlTableSearch.timer);
                            
                            // Update the search value
                            //console.log('update model now: ' + new Date().getTime().toString());
                            $scope.nlTableSearch.value = newValue;

                            if(typeof $scope.nlTablePager === 'object'){
                                // Reset the nlTablePager to first page
                                $scope.nlTablePager.setPage(0);
                            }

                        }, 250);
                    }
                }
            });
        },
        templateUrl: '/directives/nl-table-search/nl-table-search.htm'
    };
});