const sumAll = function(num1, num2) {
  if (!Number.isInteger(num1) || !Number.isInteger(num2) || num1 < 0 || num2 < 0) return 'ERROR';
  let arr = [num1, num2];
  arr.sort( (a, b) => a - b );
  let start = arr[0], last = arr[1]; result = 0;
  for (let i = start; i <= last; i++){
    result+=i;
  }
  return result;
};

// Do not edit below this line
module.exports = sumAll;
