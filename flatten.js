/**
 * Non object type check.
 *
 * @param  mixed   value The value to check.
 * @return Boolean
 */
function isNotObject(value) {
   return value === null || typeof value !== 'object';
}
/**
 * Flattens a object into a "hash".
 *
 * @param  Object   object The object to flatten.
 * @param  Function check  The checking handler (default: isNotObject).
 * @return Object          The flattened object.
 */
function flatten(object, check) {
  var i, j, value, result, flattened = {};
  check = check || isNotObject;

  for (i in object) {
    value = object[i]
    if (check(value)) {
      flattened[i] = value;
      continue;
    }
    result = flatten(value, check);

    if (Array.isArray(value)) {
      for (j in result) {
        flattened[i + '[' + j + ']'] = result[j];
      }
    } else {
      for (j in result) {
        flattened[i + '.' + j] = result[j];
      }
    }
  }
  return flattened;
}

module.exports = flatten;
