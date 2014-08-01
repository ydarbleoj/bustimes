import Ember from 'ember';

var Router = Ember.Router.extend({
  location: BustimesENV.locationType
});

Router.map(function() {
  this.resource('locations', { path: '/' }, function() {
    this.resource('location', { path: '/location/:location_id' });
  });
});

export default Router;
