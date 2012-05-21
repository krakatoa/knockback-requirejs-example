define([
  'jquery',
  'underscore',
  'backbone',
  'knockout',
  'knockback',
  'collections/people',
  'views/people'
], function($, _, Backbone, ko, kb, peopleCollection, peopleViewModel) {
  var initialize = function() {
    //peopleCollection.add([
    //  {name: 'Pepe', lastName: 'Iglesias'},
    //  {name: 'Ronaldinho', lastName: 'Gaullo'}
    //]);
    peopleCollection.add(people_array);
    people_view_model = new peopleViewModel(peopleCollection);

    ko.applyBindings(people_view_model);
  }
  return {
    initialize: initialize
  }
});
