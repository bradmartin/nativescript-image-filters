describe('imagefilters class', function() {
  it('can be instantiated', function() {
    var testImageFilters;
    var ImageFilters = require('nativescript-image-filters').ImageFilters;
    if (ImageFilters) {
      testImageFilters = new ImageFilters();
      console.log('ImageFilters instance: ' + testImageFilters);
    }

    expect(function() {
      return new ImageFilters();
    }).not.toThrow();

    expect(new ImageFilters()).toBeDefined();
  });
});
