var expand = require('..').expand;

describe(".expand()", function() {

  it("expands an object", function() {

    var actual = expand({ 'some.very.deep.prop': true });

    var expected = { some: { very: { deep: { prop: true } } } };

    expect(expected).toEqual(actual);

  });

  it("supports multiple keys", function() {

    var actual = expand({ 'ab.cd.e': 'foo', 'ab.cd.f': 'bar', 'ab.g': 'baz' });

    var expected = { ab: { cd: { e:'foo', f:'bar' }, g: 'baz'} };

    expect(expected).toEqual(actual);

  });

  it("supports arrays", function() {

    var actual = expand({ 'some.very.deep.prop[0]': true, 'some.very.deep.prop[1]': false });

    var expected = { some: { very: { deep: { prop: [true, false] } } } };

    expect(expected).toEqual(actual);

  });

});