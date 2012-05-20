var Person = Backbone.Model.extend({
  defaults: {
    name: 'Fernando',
    lastName: 'Alonso'
  },
  initialize: function() {
    console.log("I'm alive!");
  }//,
  //declarado en model
  /*fullName: function() {
    return this.get('name') + " " + this.get('lastName');
  }*/
});

var People = Backbone.Collection.extend({
  model: Person,
  url: '/people'
});

//var PersonViewModel = function(model) {
//  this.name = model.get('name');
//  this.lastName = model.get('lastName');
//  return this;
//}

PersonViewModel = kb.ViewModel.extend({
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
    //return this;
  }
});

//var person = new Person();

//var person_view_model = new PersonViewModel(person); // solamente es necesario instanciarlo si se lo va a bindear

var people_collection = new People();
people_collection.add([
  {name: 'Pepe', lastName: 'Iglesias'},
  {name: 'Ronaldinho', lastName: 'Gaullo'}
]
//  people_array
);

//Backbone.sync = function(method, model, options) {
//  alert(method + ": " + model);
//  options.error(model);
//};

var PeopleViewModel = kb.ViewModel.extend({
  constructor: function(collection) {
    this.people = kb.collectionObservable(collection, {
      view_model: PersonViewModel
    });
    return this;
  }
});

people_view_model = new PeopleViewModel(people_collection); // se lo instancia porq es el q se bindea

ko.applyBindings(people_view_model);

//kb.vmRelease(person_view_model);
