var flatten = require('..').flatten;

describe(".flatten()", function() {

  it("flattens an object", function() {

    var actual = flatten({ some: { very: { deep: { prop: true } } } });

    var expected = { 'some.very.deep.prop': true };

    expect(expected).toEqual(actual);

  });

  it("supports multiple keys", function() {

    var actual = flatten({ ab: { cd: { e:'foo', f:'bar' }, g: 'baz'} });

    var expected = { 'ab.cd.e': 'foo', 'ab.cd.f': 'bar', 'ab.g': 'baz'};

    expect(expected).toEqual(actual);

  });

  it("supports arrays", function() {

    var actual = flatten({ some: { very: { deep: { prop: [true, false] } } } });

    var expected = { 'some.very.deep.prop[0]': true, 'some.very.deep.prop[1]': false };

    expect(expected).toEqual(actual);

  });

});
