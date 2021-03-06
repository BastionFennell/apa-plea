import Ember from 'ember';

export default Ember.Controller.extend({
  name: "",
  description: "",
  type: "daily",
  picture: "",
  show: true,
  types: [
  {type: 'attention', value: 'attn'},
  {type: 'medical', value: 'medical'},
  {type: 'behavior', value: 'behavior'},
  {type: 'daily', value: 'daily'},
  {type: 'sitter', value: 'sitter'}],
  actions: {
    newDog: function(){
      var self = this;
      this.store.createRecord("dog", {
        id: self.get("name"),
        description: self.get("description"),
        picture: self.get("picture"),
        type: self.get("type"),
        show: self.get("show")
      }).save();

      this.set("name", "");
      this.set("description", "");
      this.set("picture", "");
    }
  }
});
