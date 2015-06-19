Template.addDepartment.helpers({
	'schools': function(){
		return Schools.find({done:false});
	},
	'departments': function(){
		var schoolId = this._id;
		return Departments.find({schoolId: schoolId });
	}
});

Template.addDepartment.events({
	'submit .add-department': function(event){
		event.preventDefault();
		var schoolId = this._id;
		var department = event.target.department.value;
		Meteor.call('insertDepartment',schoolId,department);
		event.target.department.value = "";
	},
	'click .set-done': function(){
		var schoolId = this._id;
		Meteor.call('setDone', schoolId);
	}
});