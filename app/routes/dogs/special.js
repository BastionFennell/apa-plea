import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    this.filter = params.filter;
    if(this.controller){
      this.controller.set("type", this.filter);
    }
    return this.store.find("dog");
  },
  setupController: function(controller, model){
    console.log(model);
    controller.set("content", model);
    controller.set("type", this.filter);
    return controller;
  }
});
