App.EditUserController = Ember.ObjectController.extend({
  needs: ['users'],

  save: function() {
    var model = this.get('model');
    this.get('controllers.users').pushObject(model);
    this.get('store').commit();
    this.redirectToModel();
  },

  redirectToModel: function() {
    var router = this.get('target');
    var model = this.get('model');
    router.transitionTo('user', model);
  }

});
