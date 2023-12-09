document.addEventListener('deviceready', onDeviceReady, false);
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
      on: {
        pageInit: function (e, page) {
          $.getScript('js/index.js');
        }
      }

    },
    {
      path: '/memorias/',
      url: 'memorias.html',
      on: {
        pageInit: function (e, page) {
          $.getScript('js/index.js');
        }
      }
    },
  ],
});
//Quando o dispositivo estiver pronto ele irá chamar o framework7, é necessário que o cordova inicialize antes do framework por causa dos plugins de voz
function onDeviceReady() {
  let mainView = app.views.create('.view-main', {url: '/index/'});
}