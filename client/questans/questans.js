
Template.questans.helpers({
  intro: function() {
    return questans.get().intro
  },
  actual : function () {
    var actual = questans.get().statements[Session.get('actual')];
    return actual;
  }
});

Template.questans.events({
  'click .answer': function (event) {
    var next = event.target.value;
    if(next) {
      Session.set('actual', next);
    } else {
      Session.set('actual', 1);
      Router.go('/');
    }
  }
});

