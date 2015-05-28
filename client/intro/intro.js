Template.intro.helpers({
  lines: function() {
    return questans.get().intro
  }
});

Template.intro.events({
  'click button': function (event) {
    Session.set('actual', 1);
    Router.go('/questans');
  }
});
