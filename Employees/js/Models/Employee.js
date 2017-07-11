define([
'lib/require',
	'lib/jquery-min',
	'lib/underscore-min',
	'lib/backbone-min'], function(require ,$, _, Backbone){
		
	var Employee = Backbone.Model.extend({

    urlRoot: "http://localhost:50131/api/Employee",

		validate: function(attrs){
			if (!attrs.Name)
				return "Name is required.";
		},
		idAttribute: "Id",
		setup: function () {
			var self= this;
			this.get('data').on('change', function () {
            self.trigger("change");
			})}
	});
	
	return Employee;
});