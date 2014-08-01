import DS from "ember-data";

var APP_ID = "DCCA6AA121EA73D2C622BAB79";

export default DS.RESTAdapter.extend({
  findAll: function(store, type) {
    var self = this;

    return this.getLocation().then(function(position) {
      return self.ajax(self.buildURL(type.typeKey, null, position), 'GET');
    });
  },

  buildURL: function(type, id, position) {
    var latlong = [position.latitude, position.longitude];
    return "http://developer.trimet.org/ws/V1/stops?appID="+APP_ID+"&json=true&ll="+latlong.join(',');
  },

  getLocation: function() {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      navigator.geolocation.getCurrentPosition(function(position) {
        resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
      });
    });
  }
});