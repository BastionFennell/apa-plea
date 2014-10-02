import Ember from 'ember';

export default Ember.Controller.extend({
  dogs: function(){
    return this.get("model").filterBy("show", true);
  }.property("model.@each", "type")
});
