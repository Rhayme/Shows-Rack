'use strict';

describe('Service: movieget', function () {

  // load the service's module
  beforeEach(module('showsRackApp'));

  // instantiate service
  var movieget;
  beforeEach(inject(function (_movieget_) {
    movieget = _movieget_;
  }));

  it('should do something', function () {
    expect(!!movieget).toBe(true);
  });

});
