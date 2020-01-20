const slugify = require('slugify');

const makeAlbumId = path => taolagSlugWithoutLastSegment(path);

const makeParentAlbumId = path => taolagSlugWithoutTwoLastSegment(path);

const makePhotoId = path => taolagSlug(path);

/**
 * default slugify but allow '/'
 * 'Hello/World' => 'hello/world'
 */
const taolagSlug = input =>
  slugify(input, {
    lower: true,
    remove: /[^\w\s$*_+~.()'"!\-:@/]/g
  });

/**
 * remove last '/' and anything after
 * 'Hello/World' => 'hello'
 */
const getAlbumId = path => path.substring(0, path.lastIndexOf('/'));

const getAlbumParentId = path => {
  const first = getAlbumId(path);

  const second = first.substring(0, first.lastIndexOf('/'));

  return second ? second : '_';
};

/**
 * remove last '/' and anything after
 * 'Hello/World' => 'hello'
 */
const taolagSlugWithoutLastSegment = input =>
  removeSegments(taolagSlug(input), 1, '_');

/**
 * remove last 2 '/' and anything after
 * 'Leroy Jackson/Hello/World => 'leroy-jackson'
 */
const taolagSlugWithoutTwoLastSegment = input =>
  removeSegments(taolagSlug(input), 2, '_');

/**
 *
 * @param {*} input
 * @param {*} num
 * @param {*} ifEmpty
 *
 * If result is blank will return the ifEmpty
 */
const removeSegments = (input, num = 1, ifEmpty = '') => {
  const index = num - 1;
  //const lastIndex = input.lastIndexOf('/') - index;

  //const result = input.substring(0, input.nthLastIndexOf('/',num));

  secondLastIndex = input.lastIndexOf('/', input.lastIndexOf('/') - 1);

  // console.log(result);
  return result ? result : ifEmpty;
};

/**
 * https://stackoverflow.com/a/55679985/2057438
 * url.nthLastIndexOf('/', 2);
 * url.nthLastIndexOf('/', 3);
 * url.nthLastIndexOf('/');
 */
String.prototype.nthLastIndexOf = function(searchString, n) {
  var url = this;
  if (url === null) {
    return -1;
  }
  if (!n || isNaN(n) || n <= 1) {
    return url.lastIndexOf(searchString);
  }
  n--;
  return url.lastIndexOf(searchString, url.nthLastIndexOf(searchString, n) - 1);
};

module.exports = {
  makeAlbumId,
  makeParentAlbumId,
  makePhotoId,
  getAlbumId,
  getAlbumParentId
  
};
