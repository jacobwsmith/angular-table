/*

Table Example - several angularjs directives to add search, sort and pagination to existing tables
by: Jacob Smith

Terminal python -m SimpleHTTPServer 8000

*/

// App
angular.module('app', ['nlTablePager', 'nlTableSearch', 'nlTableSorter']).config(function() {});

// App controller
// should be in a different file but for the sake of this
// simple example it is just fine
angular.module('app').controller('AppCtrl', function($scope, $timeout) {

	// define the view/model
	var vm = this;

	vm.loaded = false;
	vm.reverse = false;			// Sort direction
    vm.order = 'name';			// Sort value
	vm.list = getList();		// List of table data

	// TODO: should use ng-cloak
	// and preload the directives
	// this works ok for now
	$timeout(function(){
		vm.loaded = true;
	}, 100);

	///////

	// We like hoisting in this case
	// allows us to seperate code
	// this usually would be it's own service
	// but keeping it simple for the sake of this demo
	function getList(){
		return [{
		name: 'Lorina Cefalu',
		type: 'Client',
		status: 'Active'
	},
	{
		name: 'Cheyenne Huskins',
		type: 'User',
		status: 'Active'
	},
	{
		name: 'Bob Domenico',
		type: 'Admin',
		status: 'Inactive'
	},
	{
		name: 'Laurine Harbour',
		type: 'Client',
		status: 'Active'
	},
	{
		name: 'Fred Blake',
		type: 'User',
		status: 'Active'
	},
	{
		name: 'Lucila Kuykendall',
		type: 'Admin',
		status: 'Active'
	},
	{
		name: 'Winnifred Huneycutt',
		type: 'Client',
		status: 'Active'
	},
	{
		name: 'Antonetta Rick',
		type: 'Client',
		status: 'Active'
	},
	{
		name: 'Mercy Cary',
		type: 'Admin',
		status: 'Active'
	},
	{
		name: 'Marlene Ehlert',
		type: 'Client',
		status: 'Active'
	},
	{
		name: 'Toi Toro',
		type: 'Client',
		status: 'Active'
	},
	{
		name: 'Ouida Millikan',
		type: 'Admin',
		status: 'Active'
	},
	{
		name: 'Jamie Souders',
		type: 'Client',
		status: 'Inactive'
	},
	{
		name: 'Rocio Hymes',
		type: 'User',
		status: 'Active'
	},
	{
		name: 'Candance Moorefield',
		type: 'Admin',
		status: 'Active'
	},
	{
		name: 'Margorie Swarey',
		type: 'Client',
		status: 'Active'
	},
	{
		name: 'Cristie Fitchett',
		type: 'Client',
		status: 'Active'
	},
	{
		name: 'Mendy Schauer',
		type: 'Admin',
		status: 'Active'
	},
	{
		name: 'Princess Gandara',
		type: 'Client',
		status: 'Active'
	},
	{
		name: 'Shery Mozee',
		type: 'Client',
		status: 'Active'
	},
	{
		name: 'Anissa Tyus',
		type: 'Admin',
		status: 'Active'
	},
	{
		name: 'Marcell Saine',
		type: 'Client',
		status: 'Active'
	},
	{
		name: 'Willette Halle',
		type: 'Client',
		status: 'Active'
	},
	{
		name: 'Quinn Cotnoir',
		type: 'Admin',
		status: 'Active'
	},
	{
		name: 'Nathanial Borquez',
		type: 'Client',
		status: 'Active'
	},
	{
		name: 'Jesusa Steller',
		type: 'Client',
		status: 'Active'
	},
	{
		name: 'Migdalia Steel',
		type: 'Admin',
		status: 'Active'
	},
	{
		name: 'Kasie Liebel',
		type: 'Client',
		status: 'Active'
	},
	{
		name: 'Sherron Scarpelli',
		type: 'Client',
		status: 'Active'
	},
	{
		name: 'Signe Mulvihill',
		type: 'Client',
		status: 'Active'
	},
	{
		name: 'Bertha Boss',
		type: 'Client',
		status: 'Active'
	},
	{
		name: 'Kelly Pontious',
		type: 'Client',
		status: 'Active'
	},
	{
		name: 'Elsa Malcom',
		type: 'Client',
		status: 'Inactive'
	},
	{
		name: 'Abbie Moscoso',
		type: 'Client',
		status: 'Active'
	},
	{
		name: 'Nicki Knobel',
		type: 'Client',
		status: 'Active'
	},
	{
		name: 'Wilda Brackins',
		type: 'Client',
		status: 'Active'
	},
	{
		name: 'Frederic Alejos',
		type: 'Client',
		status: 'Active'
	},
	{
		name: 'Elenor Kramp',
		type: 'Client',
		status: 'Active'
	},
	{
		name: 'Dede Nicely',
		type: 'Client',
		status: 'Active'
	},
	{
		name: 'Mario Barger',
		type: 'Client',
		status: 'Active'
	},
	{
		name: 'Ed Arel',
		type: 'Client',
		status: 'Active'
	},
	{
		name: 'Liana Mooneyham',
		type: 'Client',
		status: 'Active'
	},
	{
		name: 'Shanti Hannah',
		type: 'Client',
		status: 'Active'
	},
	{
		name: 'Brandee Finkel',
		type: 'Client',
		status: 'Active'
	},
	{
		name: 'Enola Phifer',
		type: 'Client',
		status: 'Inactive'
	},
	{
		name: 'Tien Tannenbaum',
		type: 'User',
		status: 'Active'
	},
	{
		name: 'Elfrieda Rossi',
		type: 'Client',
		status: 'Active'
	},
	{
		name: 'Wally Crigler',
		type: 'User',
		status: 'Active'
	},
	{
		name: 'Desirae Mackson',
		type: 'Client',
		status: 'Active'
	},
	{
		name: 'Marceline Milliken',
		type: 'Client',
		status: 'Active'
	}];
	}
    
});