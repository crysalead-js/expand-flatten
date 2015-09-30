/**
 * Expands a "hash" object an object.
 *
 * @param  Object object The object to expand.
 * @return Object        The expanded object.
 */
function expand(object) {
  var path, key, parts, pointer, expanded = {};
  for (path in object) {
    value = object[path];
    pointer = expanded;

    if (path.indexOf('[') >= 0) {
      path = path.replace(/\[/g, '[.').replace(/]/g, '');
    }
    parts = path.split('.');

    while (parts.length - 1) {
      key = parts.shift();
      if (key.slice(-1) === '[') {
        key = key.slice(0, - 1);
        pointer[key] = pointer[key] || [];
      } else {
        pointer[key] = pointer[key] || {};
      }
      pointer = pointer[key];
    }
    pointer[parts.shift()] = value;
  }
  return expanded;
};

module.exports = expand;
