Professors = new Mongo.Collection('professors');
/*
Meteor.startup(function () {
  if (Professors.find({schoolId:'tHqBhGQsAxaX2bvxG'}).count() === 0) {
    var data = JSON.parse(Assets.getText('u-catolica.json'));
   
      data.forEach(function (item, index, array) {
            Professors.insert(item);
        });
  }
});
*/

Professors.initEasySearch(['name', 'slug'], {
    'limit' : 5,
    'use' : 'mongo-db',
    'reactive': false
});
/*
EasySearch.createSearchIndex('ownProfessors', {
  'field' : ['name','slug'],
  'collection' : Professors,
  'reactive': false,
  'limit' : 5,
  'props' : {
    'onlyRateOwnProfessors' : true
  },
  'query' : function (searchString, opts) {
    var query = EasySearch.getSearcher(this.use).defaultQuery(this, searchString);

    if (this.props.onlyRateOwnProfessors) {
      var user = Meteor.user();
      var schoolId = user.university._id;
      query.schoolId = schoolId;
    }

    return query;
  }
});
*/
EasySearch.createSearchIndex('schoolProfessors', {
  'field' : ['name','slug'],
  'collection' : Professors,
  'reactive': false,
  'limit' : 4,
  'props' : {
    'schoolProfessor' : true
  },
  'query' : function (searchString, opts) {
    var query = EasySearch.getSearcher(this.use).defaultQuery(this, searchString);

    if (this.props.schoolProfessor) {
      var selected = Session.get('filterSchool');
      query.schoolName = selected;
    }

    return query;
  }
});

EasySearch.createSearchIndex('professorsReviews', {
  'field' : ['name','slug'],
  'collection' : Professors,
  'reactive': false,
  'limit' : 5,
  'props' : {
    'professorsReviews' : true,
    'sortVoted': true
  },
  'query' : function (searchString, opts) {
    var query = EasySearch.getSearcher(this.use).defaultQuery(this, searchString);

    if (this.props.professorsReviews) {
      var selected = Session.get('selectedSchool');
      query.schoolName = selected;
    }
    if (this.props.sortVoted) {
      query.voted = true;
    }
    return query;
  }
});

var Schemas = {};

Schemas.Professors = new SimpleSchema({
    name: {
        type: String,
        label: "Nombre",
        max: 20,
        min: 4
    },
    schoolId: {
        type: String,
        label: "University Id"
    },
    schoolName: {
        type: String,
        label: "University"
    },
    department: {
        type: String,
        label: "Department"
    },
    ratedBy: {
        type: [String],
        label: "Rated By"
    }
});

//Professors.attachSchema(Schemas.Professors);
