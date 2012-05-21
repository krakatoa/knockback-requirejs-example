define([
  'jquery',
  'underscore',
  'backbone',
  'knockback',
  'models/person'
], function($, _, Backbone, Knockback, personModel) {
  var personViewModel = kb.ViewModel.extend({
    constructor: function(model) {
      this.name = kb.observable(model, {
        key: 'name'
      }, this);
      this.lastName = kb.observable(model, {
        key: 'lastName'
      }, this);
      this.fullName = ko.computed(function() {
        return this.name() + " " + this.lastName();
      }, this);
    }
  });

  return personViewModel;
});
