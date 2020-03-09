
exports.min = function min (array = []) {
  return array.reduce(
    (acc, item) => item < acc ? item : acc,
    array[0] || 0,
  );
}

exports.max = function max (array = []) {
  return array.reduce(
    (acc, item) => item > acc ? item : acc,
    array[0] || 0,
  );
}

exports.avg = function avg (array = []) {
  return array.reduce(
    (acc, item, _, arr) => (acc * 10 + +((item / arr.length) * 10)) / 10,
    0,
  );
}

