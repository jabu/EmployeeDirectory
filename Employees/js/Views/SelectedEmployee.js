define([
	'lib/jquery-min',
	'lib/underscore-min',
	'lib/Backbone-min',
	'Models/Employee'], function($, _, Backbone, Employee){
		
	var SelectedEmployee = Backbone.View.extend({

    el: "#selectedEmployee",
    initialize: function(options) {
        this.options = options;
		 if (!(options))
            throw new Error("model is not specified.");
		
        this.bus = options.bus;
        this.bus.on("venueSelected", this.onVenueSelected, this);
    },
    onVenueSelected: function(venue){
        this.model = venue;

        this.render();
    },
    render: function(){
        if(this.model) {
            this.$el.html("<h3>Name: <lable style='float: right;'>" + this.model.get("Name") + " </h3>");
            this.$el.append("<h3>KnownAs: <lable style='float: right;'>" + this.model.get("KnownAs") + " </h3>");
            this.$el.append("<h3>Surname: <lable style='float: right;'>" + this.model.get("Surname") + " </h3>");
            this.$el.append("<h3>Contact Number: <lable style='float: right;'>" + this.model.get("ContactNumber") + " </h3>");
            this.$el.append("<h3>Position: <lable style='float: right;'>" + this.model.get("Position") + " </h3>");
        }
        return this;
    }

});

return SelectedEmployee;
	
});