define([
  'underscore',
  'backbone',
  'models/person'
], function(_, Backbone, personModel) {
  var peopleCollection = Backbone.Collection.extend({
    model: personModel,
    url: '/people'
  });

  return new peopleCollection();
});
