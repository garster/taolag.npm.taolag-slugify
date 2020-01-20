const slugify = require('slugify');

/**
 * default slugify but allow '/'
 * 'Hello/World' => 'hello/world'
 */
const taolagSlug = input =>
  slugify(input, {
    lower: true,
    remove: /[^\w\s$*_+~.()'"!\-:@/]/g
  });

const decodeS3Key = key => decodeURIComponent(key.replace(/\+/g, ' '));

/**
 * Given S3 event obj key, return obj for db
 */
const makeAlbumRecord = key => {
  const decodedKey = decodeS3Key(key);

  // remove file name to get AlbumId
  const albumId = taolagSlug(path.substring(0, path.lastIndexOf('/')));

  // remove Album name to get ParentAlbumId
  const parentAlbumId = albumId.substring(0, albumId.lastIndexOf('/'));

  // return DynamoDB object
  return {
    AlbumId: albumId,
    ParentAlbumId: parentAlbumId ? parentAlbumId : '_',
    S3Key: decodedKey
  };
};

/**
 * Given S3 event obj key, return obj for db
 */
const makePhotoRecord = key => {
  const decodedKey = decodeS3Key(key);

  // slugify full path
  const photoId = taolagSlug(decodedKey);

  // remove file name to get AlBumId
  const albumId = photoId.substring(0, photoId.lastIndexOf('/'));

  // return DynamoDB object
  return {
    AlbumId: albumId,
    PhotoId: photoId
  };
};

module.exports = {
  makeAlbumRecord,
  makePhotoRecord,
  taolagSlug,
  decodeS3Key
};
