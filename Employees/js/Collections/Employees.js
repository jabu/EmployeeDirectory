define([	
	'lib/underscore-min',
	'lib/backbone-min',
	'Models/Employee',
	'Collections/Employees'],function( _, Backbone, Employee,Employees){
	
	var Employees = Backbone.Collection.extend({
	model: Employee,
	url: "http://localhost:50131/api/Employee"
});

return Employees;
});



