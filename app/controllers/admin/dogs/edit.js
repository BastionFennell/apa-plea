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
  edittedType: function(){
    return this.get("model.type");
  }.property("model.type"),
  edittedShow: function(){
    return this.get("model.show");
  }.property("model.show"),
  types: [
  {type: 'attention', value: 'attn'},
  {type: 'medical', value: 'medical'},
  {type: 'behavior', value: 'behavior'},
  {type: 'daily', value: 'daily'},
  {type: 'sitter', value: 'sitter'}],
  actions: {
    submit: function(){
      var self = this;
      var emptyValue = Ember.isEmpty(this.get("edittedId")) || Ember.isEmpty(this.get("edittedDescription")) || Ember.isEmpty(this.get("edittedType"));
      if(emptyValue){
        alert("You have an empty value");
        return;
      }

      this.store.find("dog", this.get("model.id")).then(function(result){
        result.destroyRecord().then(function(){
          self.store.createRecord("dog", {
            id: self.get("edittedId"),
            picture: self.get("edittedPicture"),
            description: self.get("edittedDescription"),
            type: self.get("edittedType"),
            show: self.get("edittedShow")
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
