define([
	'lib/jquery-min',
	'lib/underscore-min',
	'lib/backbone-min',
	'Views/UpdateEmployeeRender'], function($, _, Backbone, UpdateEmployeeRender){
	var UpdateEmployeeView = Backbone.View.extend({

    initialize: function(options){
        this.options = options;
        this.bus = options.bus;
        if (!(options && options.model))
            throw new Error("model is not specified.");
    },
    render: function(){
        var updateEmployeeRender = new UpdateEmployeeRender({model: this.model, bus: this.bus});
        updateEmployeeRender.render();

        return this;
    }
});
return UpdateEmployeeView;
});