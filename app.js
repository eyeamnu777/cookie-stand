'use strict';


//strict defitions
const salmonPage = document.getElementById('salmon-Page')
const tabElem = document.createElement('table');
salmonPage.appendChild(tabElem);

// why about statement? because salmon page is what doesnt change? and why salmon-Page, where'd the hyphen in the middle come from? *credit to Zoe's code review*

//for this lab, the variable or object we are measuring by place/city (From Lab instructions- "Each location will be responsible for generating sales data")

//1. Store the min/max hourly customers, and the average cookies per customer, in object properties.
//2. Use a method of that object to generate a random number of customers per hour. --> Math.random( , ) 
  // return 

// Cities Storage
let cities = [];
let hoursstore = [];
for (let i = 0; i < hours.length; i++) {
  hoursstore.push(0);
}

//Seattle
let City1 = {
  name: 'Seattle'
  minCust: 23,
  maxCust: 65,
  avgCookiesPerCust: 6.3,
  total: 0,
//storage for total logic
  hours:[]

function getRandom(min, max) {
  return Math.random() * (max - min) + min;

  for (var i = 0; i < 10; i++) {
    console.log(randomNumber(0, 10))
  }}


//Tokyo

let city = {
  name: 'Tokyo'
  minCust: 3,
  maxCust: 24,
  avgCookiesPerCust: 1.2,
  hours:[]
}

//Dubai
let city = {
  name: 'Dubai'
  minCust: 11,
  maxCust: 38,
  avgCookiesPerCust: 2.3,
  hours:[]
}

//Paris
let city = {
  name: 'Paris'
  min: 20,
  maxCust: 38,
  avgCookiesPerCust: 2.3,
  hours:[]
}

//Lima
let city = {
  name: 'Lima'
  minCust: 2,
  maxCust: 16,
  avgCookiesPerCustg: 4.6,
  hours:[]
}

//3. Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated.
//4. Store the results for each location in a separate array… perhaps as a property of the object representing that location.
//5. Display the values of each array as unordered lists in the browser.
