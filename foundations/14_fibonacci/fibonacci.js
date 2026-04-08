const fibonacci = function(n) {
  // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
  n = parseInt(n);
  if (n < 0) return 'OOPS';

  let first = 0;
  let second = 1;
  for (let i = 0; i < n; i++){
    let temp = first + second;
    first = second;
    second = temp;
  }
  return first;
};

// Do not edit below this line
module.exports = fibonacci;
