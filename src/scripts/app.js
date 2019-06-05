var app = require('ampersand-app');
// //Extends our main app singleton
// var api = require('./fakeApi');
// app.get('/api/people', api.list);
// app.get('/api/people/:id', api.get);
// app.delete('/api/people/:id', api.delete);
// app.put('/api/people/:id', api.update);
// app.post('/api/people', api.add);


app.extend({
    me: new Me(),
    message: new MessageChannel(),
    router: new Router(),
    // This is where it all starts
    init: function() {
        //Create and attach our main view
        this.mainView = new MainView({
            model: this.message,
            el: document.body
        });

         // this kicks off our backbutton tracking (browser history)
        // and will cause the first matching handler in the router
        // to fire.
        this.router.history.start({ pushState: true });
    },
     // This is a helper for navigating around the app.
    // this gets called by a global click handler that handles
    // all the <a> tags in the app.
    // it expects a url pathname for example: "/costello/settings"
    navigate: function(page) {
        var url = (page.charAt(0) === '/') ? page.slice(1) : page;
        this.router.history.navigate(url, {
            trigger: true
        });
    }
})

// run it on domReady
domReady(_.bind(app.init, app));


/*

const helperModule =  require('./my-helper-module');
import * as _ from 'lodash';
import './../styles/app.css';
import './../styles/appStyles.scss';
var squareNumbers = require('./square-numbers');

console.log("Welcome from app.js. Let's learn Webpack4!!!!!!");
console.log(helperModule.greetings);

var arr= [ 1, 2, 3];
_.each(arr, function(val) {
    console.log('Output from Lodash _.each for Element ' + val);
});

const input = [1,2,3,4];
console.log('Input is:', input);
console.log('Squared is:', squareNumbers(input));
*/