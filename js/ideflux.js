// Telling Vue to use the router
Vue.use(VueRouter)

// Initializing the router with options
var router = new VueRouter({
  history: false
});

// Redirect certain routes to other routes
router.redirect({
  '/': '/about'
})

// Define your routes here.  
// NOTE: You'd normally do something
// like require('./home/index.vue') for the component
router.map({
  // Not found handler
  '*': {
    component: {
      template: 
        '<div>' +
          '<h1>Not Found</h1>' +
        '</div>'
    }
  },
  '/devices': { 
    component: {
      template: '<div>' + 
          '<h1>Devices</h1><p>{{ test }}</p>' +
        '</div>',
      data: function() {
        return {
          test: 'Hello I am a data variable from Vue.JS'
        }
      }
    }
  },
  '/apps': { 
    component: {
      template: '<div>' + 
          '<h1>Applications</h1><p>{{ test }}</p>' +
        '</div>',
      data: function() {
        return {
          test: 'Hello I am a data variable from Vue.JS'
        }
      }
    }
  },
  '/dashboards': { 
    component: {
      template: '<div>' + 
          '<h1>Dashboards</h1><p>{{ test }}</p>' +
        '</div>',
      data: function() {
        return {
          test: 'Hello I am a data variable from Vue.JS'
        }
      }
    }
  },
  '/about': { 
    component: {
      template: 
        '<div>' +
          '<h1>About</h1>' +
          '<p>' +
            'Well my father was a gambler down in Georgia,<br>' + 
            'He wound up on the wrong end of a gun.<br>' +
            'And I was born in the back seat of a Greyhound bus<br>' +
            'Rollin\' down highway 41.<br><br>' +
            'Lord, I was born a ramblin\' man,<br>' +
            'Tryin\' to make a livin\' and doin\' the best I can.<br>' +
            'And when it\'s time for leavin\',<br>' +
            'I hope you\'ll understand,<br>' +
            'That I was born a ramblin\' man.' +
          '</p>' +
        '</div>'
    }
  }
});

// Declaring the app itself
var App = Vue.extend()

// Initializing the whole thing together
router.start(App, '#app')

