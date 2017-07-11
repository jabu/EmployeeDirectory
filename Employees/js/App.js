define([
	'lib/jquery-min',
	'lib/underscore-min',
	'lib/backbone-min',
	'Collections/Employees',
	'Views/EmployeesView',
	'Views/SelectedEmployee',
	'Views/AddRender'], function($, _, Backbone, Employees, EmployeesView, SelectedEmployee, AddRender){
	
		var initialize = function(){
			
			

	var employees = new Employees();
	employees.fetch(
	{
		success: function(){
			var underscore = this._;
			
			var bus = underscore.extend({}, Backbone.Events);
            var employeesView = new EmployeesView({ model: employees, bus: bus });
            this.$("#employeesList").append(employeesView.render().$el);
            //employeesView.render();
            var selectedEmployee = new SelectedEmployee({model: employees.at(0), bus: bus});
            //$("#selectedEmployee").append(selectedEmployee.render().$el);
			selectedEmployee.render();
            var addRender = new AddRender({model: employees.at(0), bus: bus});
            addRender.render();


		},
		error: function(){
			alert("Error");
		}

	});
			
		}
		
		return {
			initialize: initialize
		};
});