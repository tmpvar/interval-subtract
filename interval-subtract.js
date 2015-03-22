function interval_subtract(a, b, out) {
  var al = a[0];
  var au = a[1];
  var bl = b[0];
  var bu = b[1];

  out = out || [0, 0];
  if (al === bl && au === bu) {
    out[0] = 0;
    out[1] = 0;
  } else {
    out[0] = al - bu;
    out[1] = au - bl;
  }

  return out;
}

module.exports = interval_subtract;
