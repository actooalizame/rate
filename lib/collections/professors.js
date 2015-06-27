Professors = new Mongo.Collection('professors');

Professors.initEasySearch(['name'], {
    'limit' : 20,
    'use' : 'mongo-db'
});

EasySearch.createSearchIndex('ownProfessors', {
  'field' : ['name'],
  'collection' : Professors,
  'limit' : 20,
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
    },
    help: {
        type: [Number],
        label: "Help"
    },
    clarity: {
        type: [Number],
        label: "Clarity"
    },
    easy: {
        type: [Number],
        label: "Easy"
    },
    createdAt: {
        type: Date,
        label: "Date",
        
    }
});

Professors.attachSchema(Schemas.Professors);