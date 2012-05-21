require.config({
  paths: {
    jquery: 'libs/jquery/jquery-min',
    underscore: 'libs/underscore/underscore-min',
    backbone: 'libs/backbone/backbone-min',
    knockback: 'libs/knockback/knockback',
    knockout: 'libs/knockout/knockout'
  }
});

require ([
  'app'
], function(App) {
  return App.initialize();
});
