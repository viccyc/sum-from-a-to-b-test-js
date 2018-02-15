
function sum(fromN, toN) {
  // Sum all the values from fromN up to toN
  if (fromN === toN) {
    return fromN;
  } 

  if (fromN < toN) {
    let sum = fromN + 1;
    fromN++
    sum(fromN, toN);
    return sum;
  }
}

module.exports = sum;
