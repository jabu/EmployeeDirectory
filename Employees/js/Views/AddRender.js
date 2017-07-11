define([
	'lib/jquery-min',
	'lib/underscore-min',
	'lib/backbone-min',
	'Views/addNewEmployee'], function($, _, Backbone, AddNewEmployee){
	var AddRender = Backbone.View.extend({
    el: "#newEmployee",
    id: "addRender",

    initialize: function(options){
        this.options = options;
        this.bus = options.bus;
    },
    events: {
        "click #btnNewEmployee": "OnClickNewEmployee"
    },
    OnClickNewEmployee: function(){
		
        var addEmployee = new AddNewEmployee({ bus : this.bus});
        addEmployee.render();
        event.preventDefault();
    },
    render: function(){
        this.$el.append("<button id='btnNewEmployee' class='btnAddRender btn btn-primary'>Add Employee</button>");
    }
});

return AddRender;
});




