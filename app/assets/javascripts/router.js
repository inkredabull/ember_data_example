App.Router.map(function() {
  this.resource('contacts', function() {
    this.route('new');
    this.resource('contact', {path: ':contact_id'});
  });
  this.resource('users');
  this.resource('user', {path: '/users/:user_id'});
  this.route('edit_user', {path: '/users/:user_id/edit'});
  this.route('new_user', {path: '/users/new'});
});
