const slugify = require('slugify');

module.exports = {
  makePrettyUrl: function(input) {
    // default slugify but allow '/'
    // 'Hello/World' => 'hello/world'
    return slugify(input, {
      lower: true,
      remove: /[^\w\s$*_+~.()'"!\-:@/]/g
    });
  },
  makePrettyUrlWithoutLastSegment: function(input) {
    // remove last '/' and anything after
    // 'Hello/World' => 'hello'
    const temp = this.makePrettyUrl(input);

    return temp.substring(0, temp.lastIndexOf('/'));
  },
  makeTokenUrl: function(input) {
    // replace '/' with ':'
    // 'Hello/World' => 'hello:world'
    return slugify(input.replace(/\//g, ':'), {
      lower: true
    });
  }
};
