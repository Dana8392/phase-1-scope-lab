// Write your solution in this file!

var customerName = 'bob';


function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
  }

  function setBestCustomer() {
    window.bestCustomer = 'not bob';
  }
  
  var bestCustomer;

  function overwriteBestCustomer(newBestCustomer) {
    bestCustomer = newBestCustomer;
  }

  const leastFavoriteCustomer = 'initial least favorite';

  function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'new least favorite';
  }
