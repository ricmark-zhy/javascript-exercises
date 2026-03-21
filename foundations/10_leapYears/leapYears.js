const leapYears = function(year) {
  if ( year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0 ) ){
    return true;
  } else {
    return false;
  }
};

// Do not edit below this ine
module.exports = leapYears;
