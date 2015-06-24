Professors = new Mongo.Collection('professors');


Schools = new Mongo.Collection('schools');

Departments = new Mongo.Collection('departments');

Profreviews = new Mongo.Collection('profreviews');

Professors.initEasySearch(['name'], {
    'limit' : 20,
    'use' : 'mongo-db'
});

Schools.initEasySearch(['name', 'state'], {
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