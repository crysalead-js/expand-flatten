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
function flatten(object, options) {
  var i, j, value, result, flattened = {};
  options = options || {};
  var check = options.check || isNotObject;
  var separator = options.separator || '.';
  var affix = options.affix ? separator + options.affix + separator : separator;

  for (i in object) {
    value = object[i]
    if (check(value)) {
      flattened[i] = value;
      continue;
    }
    result = flatten(value, check);

    if (Array.isArray(value)) {
      for (j in result) {
        flattened[(i + '[' + j + ']').split(affix).join(separator)] = result[j];
      }
    } else {
      for (j in result) {
        flattened[(i + separator + j).split(affix).join(separator)] = result[j];
      }
    }
  }
  return flattened;
}

module.exports = flatten;
