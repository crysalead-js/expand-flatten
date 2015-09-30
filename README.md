# expand-flatten

[![Build Status](https://travis-ci.org/crysalead-js/expand-flatten.svg?branch=master)](https://travis-ci.org/crysalead-js/expand-flatten)

Conversion functions between hash objects and objects.

## API

List of methods:

### expand(object)

**Arguments:**

  * `object` *Object* The hash object to expand.

**Return value:** The expanded object.

**Syntax:**

```js
expand({ 'some.very.deep.prop': true });
// => result: { some: { very: { deep: { prop: true } } } }
```

### flatten(object, check)

**Arguments:**

  * `object` *Object*   The object to flatten.
  * `check`  *Function* The checking handler (default: isNotObject).

**Return value:** The flattened hash object.

**Syntax:**

```js
flatten({ some: { very: { deep: { prop: true } } } });
// => result: { 'some.very.deep.prop': true }
```

## Acknowledgement

Sorry I don't remember from where I copy pasted this code from. Don't hesitate to let me know.
