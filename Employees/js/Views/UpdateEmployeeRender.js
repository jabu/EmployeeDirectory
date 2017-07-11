define([
	'lib/jquery-min',
	'lib/underscore-min',
	'lib/backbone-min'
	], function($, _, Backbone){
	var UpdateEmployeeRender = Backbone.View.extend({
    id: "updateEmployee",

    el: "#updateEmployee",

    initialize: function(options){
        this.options = options;
        this.bus = options.bus;
        if (!(options && options.model))
            throw new Error("model is not specified.");
        this.bind("venueSelected", this.model);
    },
    events: {
        "click #Update": "onClickUpdate"
    },
    onClickUpdate: function(){
        this.model.set("Name", this.$("#name").val());
        this.model.set("KnownAs", this.$("#knownAs").val())
        this.model.set("Surname", this.$("#Surname").val());
        this.model.set("ContactNumber", this.$("#contact").val());
        this.model.set("Position", this.$("#position").val());
        this.model.save();
        this.$el.unbind();
        this.$el.empty();

        this.$("button.upd").attr("disabled", false);

        this.bus.trigger("venueSelected", this.model);
    },	
    render: function(){
				
        this.bus.trigger("venueSelected", this.model);
	
		this.$el.append("<label>Name:<input type='text' autofocus class='form-control' id='name' value='" + this.model.get('Name') + "'></input></label></br>");
		this.$el.append("<label>KnownAs:<input type='text' class='form-control' id='knownAs' value='" + this.model.get('KnownAs') + "'></input></label></br>");
		this.$el.append("<label>Surname:<input type='text' class='form-control' id='Surname' value='" + this.model.get('Surname') + "'></input></label></br>");
		this.$el.append("<label>Cellphone:<input type='text' class='form-control' id='contact' value='" + this.model.get('ContactNumber') + "'></input></label></br>");
		this.$el.append("<label>Position:<input type='text' class='form-control' id='position' value='" + this.model.get('Position') + "'></input></label></br>");
		this.$el.append("<button id='Update' class='upd btn-primary btnFloat'>Update</button>");
		
        return this;
    }

});
return UpdateEmployeeRender;
});