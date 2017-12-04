'use strict';

describe('Service: standing', function () {

  // load the service's module
  beforeEach(module('blipApp'));

  // instantiate service
  var standing;
  beforeEach(inject(function (_standing_) {
    standing = _standing_;
  }));

  it('should do something', function () {
    expect(!!standing).toBe(true);
  });

});
