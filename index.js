const slugify = require('slugify');

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
const makeAlbumIds = path => {
  const albumId = taolagSlug(path.substring(0, path.lastIndexOf('/')));

  const parentAlbumId = albumId.substring(0, albumId.lastIndexOf('/'));
  console.log(parentAlbumId);

  return {
    albumId: albumId,
    parentAlbumId: parentAlbumId ? parentAlbumId : '_'
  };
};

module.exports = {
  taolagSlug,
  makePhotoId,
  makeAlbumIds
};
