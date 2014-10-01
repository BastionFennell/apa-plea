import Ember from 'ember';

export default Ember.Controller.extend({
  edittedId: function(){
    return this.get("model.id");
  }.property("model.id"),
  edittedPicture: function(){
    return this.get("model.picture");
  }.property("model.picture"),
  edittedDescription: function(){
    return this.get("model.description");
  }.property("model.description"),
  actions: {
    submit: function(){
      var self = this;
      this.store.find("dog", this.get("model.id")).then(function(result){
        result.destroyRecord().then(function(){
          self.store.createRecord("dog", {
            id: self.get("edittedId"),
            picture: self.get("edittedPicture"),
            description: self.get("edittedDescription")
          }).save();

          self.transitionToRoute("admin.dogs");
        });
      });
    },
    delete: function(){
      var self = this;
      this.store.find("dog", this.get("model.id")).then(function(result){
        result.destroyRecord().then(function(){
          self.transitionToRoute("admin.dogs");
        });
      });
    }
  }
});
