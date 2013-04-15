var App = Ember.Application.create();

// Router
App.Router.map(function() {
  this.resource('tables', function() {
    this.resource('table', { path: ':table_id' });
  });
  // this.resource('table', { path: 'table/:table_id' });  // /table/2
});

App.TablesRoute = Ember.Route.extend({
  model: function() {
    return App.Table.find();
  }
});

App.TableRoute = Ember.Route.extend({
  model: function(params) {
    return App.Table.find(params.table_id);
  }
});

App.Store = DS.Store.extend({
  revision: 11,
  adapter: 'DS.FixtureAdapter'
});

App.TablesController = Ember.ArrayController.extend({});
App.TableController = Ember.ObjectController.extend({});

// Models
App.Table = DS.Model.extend();

App.Table.FIXTURES = [
  {
    id: 1
  },
  {
    id: 2
  },
  {
    id: 3
  },
  {
    id: 4
  },
  {
    id: 5
  },
  {
    id: 6
  },
];