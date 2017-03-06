/**
 * Expands a "hash" object an object.
 *
 * @param  Object object   The object to expand.
 * @param  Object options  The options.
 * @return Object          The expanded object.
 */
function expand(object, options) {
  var expanded = {};
  var options = options || {};
  var separator = options.separator || '.';
  var affix = options.affix ? separator + options.affix + separator : separator;

  for (var path in object) {
    var value = object[path];
    var pointer = expanded;

    if (path.indexOf('[') >= 0) {
      path = path.replace(/\[/g, '[.').replace(/]/g, '');
    }
    var parts = path.split(separator).join(affix).split('.');

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
