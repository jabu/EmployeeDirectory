

require.config({
  paths: {
    jquery: 'lib/jquery-min',
    underscore: 'lib/underscore-min',
    backbone: 'lib/backbone-min',
	Employee: 'Models/Employee',
	Employees: 'Collections/Employees',
	EmployeeView: 'Views/EmployeeView',
	EmployeesView: 'Views/EmployeesView',
	AddRender: 'Views/AddRender',
	AddNewEmployee: 'Views/AddNewEmployee',
	SelectedEmployee: 'Views/SelectedEmployee',
	UpdateEmployeeView: 'Views/UpdateEmployeeView',
	UpdateEmployeeRender: 'Views/UpdateEmployeeRender',
	 underscoreTemplateSettings: {
      interpolate: /\{\{\s*([^#\{]+?)\s*\}\}/g,  // {{ title }} 
      evaluate:    /\{\{#([\s\S]+?)\}\}/g,       // {{# console.log("stuff") }} 
      escape:      /\{\{\{([\s\S]+?)\}\}\}/g     // {{{ title }}} 
    }
  },
  waitSeconds: 30,	
   shim: {	
		'jquery': {
			export: '$'
		},
		'underscore': {
            export: '_'
        },
        'backbone': {
            deps: ['jquery','underscore'],
            export: 'Backbone'
        }		 	
   }
});


define(['App'], function(App){
	App.initialize();
});
