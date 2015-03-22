var test = require('tape');
var isub = require('./interval-subtract');

test('simple subtraction of components', function(t) {
  var r = isub([1, 2], [3, 4]);
  t.deepEqual(r, [-3, -1]);
  t.end();
});

test('same intervals result in 0, 0', function(t) {
  var r = isub([1, 3], [1, 3]);
  t.deepEqual(r, [0, 0]);
  t.end();
});

test('accepts out param', function(t) {
  var out = [0, 0];
  var r = isub([1, 2], [3, 4], out);

  t.equal(r, out);
  t.deepEqual(r, [-3, -1]);
  t.end();
});
