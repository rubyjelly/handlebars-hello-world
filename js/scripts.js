$(document).ready(function() {
		
	var namesData = {
			peeps: [
				{firstName:"Audrey", lastName:"Hepburn"},
				{firstName:"Michael J.", lastName:"Fox"},
				{firstName:"Robin", lastName:"Wright"},
				{firstName:"January", lastName:"Jones"},
				{firstName:"Tom", lastName:"Hardy"}
			]
		};
	
	var templateScript = $("#template").html();
	var template = Handlebars.compile(templateScript);
	
	$(document.body).append(template(namesData));
});
