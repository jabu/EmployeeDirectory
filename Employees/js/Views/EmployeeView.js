define([
	'lib/jquery-min',
	'lib/underscore-min',
	'lib/backbone-min',	
	'Models/Employee',
	'Views/UpdateEmployeeView'], function($, _, Backbone, Employee, UpdateEmployeeView){
	
	var EmployeeView = Backbone.View.extend({
	tagName: "li",
    initialize: function(options){

        this.bus = options.bus;
        this.model.on("change", this.render, this);
        this.bind("venueSelected", this.model);
		this.bind("modelDeleted", this.model);
        this.updateButton = this.$("#employeeUpdate");
    },
    setup: function () {
        var self= this;
        this.get('data').on('change', function () {
            self.trigger("change");
        })},
    attributes : function () {
        // Return model data
        return {
            id : this.model.get("Id")
			}},
		events: {
			"click #employeeDelete": "onClickDelete",
			"click #employeeUpdate": "onClickUpdate",
			"click #employeeDetails": "onClickDetails"
		},
		onClickDetails: function(model){
			this.bus.trigger("venueSelected", this.model);
		},
		onClickUpdate: function(e, model){
			e.stopPropagation();
			this.$(e.currentTarget).attr("disabled", "true");
			//$('span[id*=updateBtn]').attr("disabled", "true");
			this.$("button.upd").attr("disabled", true);

			var updateEmployee = new UpdateEmployeeView({model: this.model, bus: this.bus});
			updateEmployee.render();
		},
		onClickDelete: function(){
			this.model.destroy();
			
			},
		render: function(){
			this.$el.attr("id", this.model.Id);
		
			this.$el.html("<div row style='width:100%;'><div class='col-sm-12 liRowMargin'>" +this.model.get("Name") + "<button id='employeeDetails' class='btn-primary btnFloat'>Details</button>" + "<button id='employeeDelete' class='btn-primary btnFloat'>Delete</button>" + "<button id='employeeUpdate' class='upd btn-primary btnFloat'>Update</button>" + "</div>");
			return this;
		}
	});
	return EmployeeView;
	
});



