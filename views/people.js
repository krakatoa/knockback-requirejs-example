define([
  'jquery',
  'underscore',
  'backbone',
  'knockback',
  'views/person'
], function($, _, Backbone, Knockback, personViewModel) {
  var peopleViewModel = kb.ViewModel.extend({
    constructor: function(collection) {
      this.people = kb.collectionObservable(collection, {
        view_model: personViewModel
      });
      return this;
    }
  });

  return peopleViewModel;
});
