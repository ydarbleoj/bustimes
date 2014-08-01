import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({
  desc: attr(),
  dir: attr(),
  lat: attr(),
  lng: attr(),
  locid: attr()  
});
