/**
 * Expands a "hash" object an object.
 *
 * @param  Object object The object to expand.
 * @return Object        The expanded object.
 */
function expand(object) {
  var expanded = {};
  for (var path in object) {
    var value = object[path];
    var pointer = expanded;

    if (path.indexOf('[') >= 0) {
      path = path.replace(/\[/g, '[.').replace(/]/g, '');
    }
    var parts = path.split('.');

    while (parts.length - 1) {
      var key = parts.shift();
      if (key.slice(-1) === '[') {
        key = key.slice(0, - 1);
        pointer[key] = Array.isArray(pointer[key]) ? pointer[key] : [];
      } else {
        pointer[key] = (pointer[key] !== null && typeof pointer[key] === 'object' && pointer[key].constructor === Object) ? pointer[key] : {};
      }
      pointer = pointer[key];
    }
    pointer[parts.shift()] = value;
  }
  return expanded;
};

module.exports = expand;
