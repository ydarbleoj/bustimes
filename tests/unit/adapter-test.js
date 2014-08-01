import { test, moduleFor } from 'ember-qunit';
import Ember from 'ember';

var App;

moduleFor('adapter:application', 'Unit - Geo Location Stub');

test("it exists", function() {
  ok(this.subject());
});

test("location returned from getLocation is passed to buildURL", function() {
  var adapter = this.subject();

  adapter.buildURL = function(type, id, location) {
    deepEqual(location, { latitude: 123, longitude: 456 }, "location is passed to buildURL");
  };

  adapter.getLocation = function() {
    return Ember.RSVP.resolve({
      latitude: 123,
      longitude: 456
    });
  };

  adapter.findAll(null, { typeKey: 'location' });
});

test("buildURL builds a URL using the passed in coordinates", function() {
  var adapter = this.subject();
  debugger;

  var coordinates = {
    latitude: 123,
    longitude: 456
  };

  var expectedURL = "http://developer.trimet.org/ws/V1/stops?ll=123,456";

  equal(adapter.buildURL('location', null, coordinates), expectedURL);
});