questans = new ReactiveVar({ statements: [] });

Meteor.call('questans', function (error, result) {
  questans.set(result);
});
