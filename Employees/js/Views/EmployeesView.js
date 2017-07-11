define([
	'lib/jquery-min',
	'lib/underscore-min',
	'lib/backbone-min',
	'Models/employee',
	'Views/employeeView',
	'Collections/Employees',
	'Views/SelectedEmployee'
	], function($, _, Backbone, Employee, EmployeeView, Employees, SelectedEmployee){
	
	var EmployeesView = Backbone.View.extend({

    id: "employees",
    el: "#employeeList",

    initialize: function(options){
        this.options = options;
        if (!(options && options.model))
            throw new Error("model is not specified.");

        this.bus = options.bus;
        this.model.on("add", this.onAddEmployee, this);
        this.model.on("remove", this.onRemoveEmployee, this);
		
		this.bus.on("onAddEmployee", this.onAddEmployee, this);
		this.bus.on("modelDeleted", this.onRemoveEmployee, this);
		
    },	
    onRemoveEmployee: function(employee){
		
        this.$("li#" + employee.get("Id")).remove();
	},
    onAddEmployee: function(employee){

		employee.save();
		
		 var view = new EmployeeView({model: employee, bus: this.bus});
				this.$el.append(view.render().$el);
				var selectedEmployee = new SelectedEmployee({model: employee, bus: this.bus});
		selectedEmployee.render();
       
	   
		
    },	
    render: function(){
        var self = this;

       	this.model.each(function(employee){
       	var view = new EmployeeView({ model: employee, bus: self.bus });
        self.$el.append(view.render().$el);
        });
		
        return this;
    }
});
	return EmployeesView;
});