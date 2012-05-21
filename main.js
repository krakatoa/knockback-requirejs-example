require.config({
  paths: {
    jquery: 'libs/jquery/jquery-min',
    underscore: 'libs/underscore/underscore-min',
    backbone: 'libs/backbone/backbone-min',
    knockout: 'libs/knockout/knockout-min',
    knockback: 'libs/knockback/knockback'
  }
});

require ([
  'app'
], function(App) {
  return App.initialize();
});
