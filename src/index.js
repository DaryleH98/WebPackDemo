const helperModule =  require('./my-helper-module');
import * as _ from 'lodash';
import './../styles/app.css'; //we want to import app.css as a module dependency by webpack
import './../styles/appStyles.scss';

console.log("Welcome from app.js. Let's learn Webpack4!!!!!!");
console.log(helperModule.greetings);

var arr= [ 1, 2, 3];
_.each(arr, function(val) {
    console.log('Output from Lodash _.each for Element ' + val);
});