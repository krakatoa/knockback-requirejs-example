define([
  'underscore',
  'backbone'
], function(_, Backbone) {
  var personModel = Backbone.Model.extend({
    defaults: {
      name: 'Fernando',
      lastName: 'Alonso'
    },
    initialize: function() {
      console.log("I'm alive!");
    }
  });

  return personModel;
});
