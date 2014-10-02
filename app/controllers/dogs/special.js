import Ember from 'ember';

export default Ember.ArrayController.extend({
  dogs: function(){
    return this.get("model").filterBy("type", this.get("type")).filterBy("show", true);
  }.property("model", "type")
});
