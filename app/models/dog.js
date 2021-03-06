import DS from 'ember-data';

export default DS.Model.extend({
  type: DS.attr("string"),
  picture: DS.attr("string"),
  description: DS.attr("string"),
  show: DS.attr("boolean")
});
