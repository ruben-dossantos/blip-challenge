'use strict';

describe('Service: season', function () {

  // load the service's module
  beforeEach(module('blipApp'));

  // instantiate service
  var season;
  beforeEach(inject(function (_season_) {
    season = _season_;
  }));

  it('should do something', function () {
    expect(!!season).toBe(true);
  });

});
