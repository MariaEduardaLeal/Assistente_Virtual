
var app = new Framework7({
    // App root element
    el: '#app',
    // App Name
    name: 'Betha Assistente',
    // Enable swipe panel
    panel: {
      swipe: true,
    },
    // Add default routes
    routes: [
      {
        path: '/index/',
        url: 'index.html',
        
      },
      {
        path: '/memorias/',
        url: 'memorias.html',
      },
    ],
  });
  
  var mainView = app.views.create('.view-main');