define([
  'jquery',
  'underscore',
  'backbone',
  'knockout',
  'knockback',
  'views/person'//,
  //'collections/people'
], function($, _, Backbone, ko, kb, personViewModel) {
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
