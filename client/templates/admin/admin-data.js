Template.adminData.helpers({
	'professors': function(){
		return Professors.find({});
	},

	'schools': function(){
		return Schools.find({});
	},
	'schoolProfessors': function(){
		var schoolId = this._id;
		return Professors.find({schoolId:schoolId});
	},
	'departments': function(){
		var schoolId = this._id;
		return Departments.find({schoolId:schoolId});
	}
});