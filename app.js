var Person = Backbone.Model.extend({
  defaults: {
    name: 'Fernando',
    lastName: 'Alonso'
  },
  initialize: function() {
    console.log("I'm alive!");
  }//,
  //declarado en model
  //fullName: function() {
  //  return this.get('name') + " " + this.get('lastName');
  //}
});

//var People = Backbone.Collection.extend({
//  model: Person
//});

//var PersonViewModel = function(model) {
//  this.name = model.get('name');
//  this.lastName = model.get('lastName');
//  return this;
//}

PersonViewModel = kb.ViewModel.extend({
  constructor: function(model) {
    kb.observables(model, {
      name: {
        key: 'name',
        write: true
      },
      lastName: {
        key: 'lastName',
        write: true
      },
    }, this);
    this.fullName = ko.computed(function() {
      return this.name() + " " + this.lastName();
    }, this);
    return this;
  }
});

var person = new Person();

var person_view_model = new PersonViewModel(person);

ko.applyBindings(person_view_model);

//kb.vmRelease(person_view_model);
