const slugify = require('slugify');

/*******************************************/
/* Hi there NPM user. Nothing to see here. */
/* This junk is for a personal project.    */
/* It will useless to everyone.            */
/*******************************************/

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
const makeAlbumItemRecord = key => {
  const decodedKey = decodeS3Key(key);

  // remove file name to get AlbumId
  const albumId = taolagSlug(
    decodedKey.substring(0, decodedKey.lastIndexOf('/'))
  );

  // remove Album name to get ParentAlbumId
  const parentAlbumId = albumId.substring(0, albumId.lastIndexOf('/'));

  // return DynamoDB object
  return {
    AlbumId: { S: albumId },
    ParentAlbumId: { S: parentAlbumId ? parentAlbumId : '_' }
  };
};

/**
 * Given S3 event obj key, return obj for db
 */
const makePhotoItemRecord = key => {
  const decodedKey = decodeS3Key(key);

  // slugify full path
  const photoId = taolagSlug(decodedKey);

  // remove file name to get AlBumId
  const albumId = photoId.substring(0, photoId.lastIndexOf('/'));

  // return DynamoDB object
  return {
    AlbumId: { S: albumId },
    PhotoId: { S: photoId },
    S3Key: { S: decodedKey }
  };
};

module.exports = {
  makeAlbumItemRecord,
  makePhotoItemRecord,
  taolagSlug,
  decodeS3Key
};
