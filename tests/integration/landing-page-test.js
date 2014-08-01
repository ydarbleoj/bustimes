import startApp from 'bustimes/tests/helpers/start-app';
import Ember from 'ember';

var App;

module('Integration - Landing Page', {
  setup: function() {
    App = startApp();
  }, 
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('Should display welcome', function() {
  visit('/').then(function() {
    equal(find('h2#title').text(), 'Welcome to Ember');
  });
});

test('Should display header Locations', function() {
  visit('/').then(function() {
    equal(find('h1').text(), 'Locations');
  });
});
