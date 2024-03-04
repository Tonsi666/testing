function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

function max(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

module.exports.min = min;
module.exports.max = max;
