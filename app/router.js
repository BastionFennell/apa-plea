import Ember from 'ember';

var Router = Ember.Router.extend({
  //location: config.locationType
});

Router.map(function() {
  this.resource('dogs', function(){
    this.route('index', {path: "/"});
    this.route('special', {path: "/:filter"});
  });
  this.resource('admin', function(){
    this.route('index', {path: "/"});
    this.route('new');
    this.route('dogs', function(){
      this.route('index', {path: "/"});
      this.route('edit', {path: "/:id"});
    });
  });
});

export default Router;
