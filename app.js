'use strict';



//strict definitions
const salmonLi = document.getElementById('listSection')

// const tabElem = document.createElement('table');
// tabElem.setAttribute('id', 'tabElm');
// salmonPage.appendChild(tabElem);

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm','7pm' ];

// 'Total Cookies'

// why about statement? because salmon page is what doesnt change? and why salmon-Page, where'd the hyphen in the middle come from? *credit to Zoe's code review*

//for this lab, the variable or object we are measuring by place/city (From Lab instructions- "Each location will be responsible for generating sales data")

//1. Store the min/max hourly customers, and the average cookies per customer, in object properties.


//// HELPER FUNCTION
// random customer
function randCustom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function cookiesPerHr(avgCookie, numOfCusto) {
  return Math.round(avgCookie * numOfCusto)
}
  

//2. Use a method of that object to generate a random number of customers per hour. --> 


// // ************ OBJECT LITERALS **********
// let cities = [];
// let hoursstore = [];
// // for (let i = 0; i < hours.length; i++) {
// //   hoursstore.push(0);
// }

//Seattle
let city1 = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookiesPerCust: 6.3,
  numberOfCustomers: [],
  numOfCookies: [],
  getNum: function() {
    for (let i = 0; i < hours.length; i++) {
       this.numberOfCustomers.push(randCustom(this.minCust, this.maxCust));
    }
  },

  getNumOfCookies: function() {
    for (let i = 0; i < numberOfCustomer.length; i++) {
      this.numOfCookies.push(cookiesPerHr(this.avgCookiesPerCust,this.numberOfCustomers[i])); 
    }

  },
  render: function () {
    let ulElement = document.createElement('ul');
    salmonLi.appendChild(ulElement);
    for (let i = 0; i < hours.length; i++) {
      let liElement = document.createElement('li');
      liElement.textContent = hours[i] + ":" + this.numOfCookies[i] 
      ulElement.appendChild(liElement);
    }


  }
};

  city1.getNum();
  city1.getNumOfCookies();
  city1.render();

  // total: 0,
  //storage for total logic
//Tokyo

// let city2 = {
//   name: 'Tokyo'
//   minCust: 3,
//   maxCust: 24,
//   avgCookiesPerCust: 1.2,
//   hours:[]
// }

// //Dubai
// let city3 = {
//   name: 'Dubai'
//   minCust: 11,
//   maxCust: 38,
//   avgCookiesPerCust: 2.3,
//   hours:[]
// }

// //Paris
// let city4 = {
//   name: 'Paris'
//   min: 20,
//   maxCust: 38,
//   avgCookiesPerCust: 2.3,
//   hours:[]
// }

// //Lima
// let city5 = {
//   name: 'Lima'
//   minCust: 2,
//   maxCust: 16,
//   avgCookiesPerCustg: 4.6,
//   hours:[]
// }

// //3. Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated.


// //4. Store the results for each location in a separate array… perhaps as a property of the object representing that location.



// //5. Display the values of each array as unordered lists in the browser.
