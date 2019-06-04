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