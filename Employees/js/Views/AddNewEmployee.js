define([
	'lib/jquery-min',
	'lib/underscore-min',
	'lib/backbone-min',
	'Models/Employee',
	], function($, _, Backbone, Employee){
	var AddNewEmployee = Backbone.View.extend({

    id: "addingNewEmployee",
    el: "#newEmployeeAdd",

    initialize: function(options){
        this.options = options;
        this.bus = options.bus;
    },
    events: {
        "click #addNewEmployeeClick": "onClickAddNewEmployee"
    },
    onClickAddNewEmployee: function(){

		
		
        var employee = new Employee();
        employee.set('Name', this.$('#name').val());
        employee.set('KnownAs', this.$('#knownas').val());
        employee.set('Surname', this.$('#surname').val());
        employee.set('ContactNumber', this.$('#contactNumber').val());
        employee.set('Position', this.$('#position').val());

        this.bus.trigger("onAddEmployee", employee);

        this.$("#name").val("");
        this.$("#knownAs").val("");
        this.$("#surname").val("");
        this.$("#contactNumber").val("");
        this.$("#position").val("");
        this.$("#name").focus();

        this.$el.unbind();
        this.$el.empty();
		
		
    },
    render: function() {
		
		this.$el.append("<label>Name:<input type='text' autofocus class='form-control' id='name'></input></label></br>");
		this.$el.append("<label>KnownAs:<input type='text' class='form-control' id='knownas'></input></label></br>");
		this.$el.append("<label>Surname:<input type='text' class='form-control' id='surname'></input></label></br>");
		this.$el.append("<label>Cellphone:<input type='text' class='form-control' id='contactNumber'></input></label></br>");
		this.$el.append("<label>Position:<input type='text' class='form-control' id='position'></input></label></br>");
		this.$el.append("<button id='addNewEmployeeClick' class='upd btn-primary btnFloat'>Add</button>");
       
        return this;
    }
});

return AddNewEmployee;
});



