import DS from "ember-data";

export default DS.JSONSerializer.extend({
  normalizePayload: function(payload) {
    var locations = payload.resultSet.location;

    locations.forEach(function(location) {
      location.id = location.locid;
    });

    return locations;
  }
});
