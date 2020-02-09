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
 * Extract the AlbumTitle from the path of Album yaml file.
 * 'Top Level/Sub Level/_settings.yaml' => 'Sub Level'
 */
const getAlbumTitle = path => {
  const segments = path.split('/');

  return segments[segments.length - 2];
};

/**
 * Given S3 event obj key, return obj for db
 */
const makeTaolagAlbumItemRecord = (key, cover) => {
  const decodedKey = decodeS3Key(key);

  // remove file name to get AlbumId
  const albumId = taolagSlug(
    decodedKey.substring(0, decodedKey.lastIndexOf('/'))
  );

  // remove Album name to get ParentAlbumId
  const parentAlbumId = albumId.substring(0, albumId.lastIndexOf('/'));

  const albumTitle = getAlbumTitle(decodedKey);

  // return DynamoDB object
  let obj = {
    AlbumId: { S: albumId },
    ParentAlbumId: { S: parentAlbumId ? parentAlbumId : '_' },
    Title: { S: albumTitle ? albumTitle : '_' }
  };

  if (cover) {
    const coverKey = `${decodedKey.substring(
      0,
      decodedKey.lastIndexOf('/')
    )}/${cover}`;

    obj.Cover = { S: coverKey };
  }

  return obj;
};

/**
 * Given S3 event obj key, return obj for db
 */
const makeTaolagPhotoItemRecord = (key, width, height) => {
  const decodedKey = decodeS3Key(key);

  // slugify full path
  const photoId = taolagSlug(decodedKey);

  // remove file name to get AlBumId
  const albumId = photoId.substring(0, photoId.lastIndexOf('/'));

  // return DynamoDB object
  return {
    AlbumId: { S: albumId },
    PhotoId: { S: photoId },
    S3Key: { S: decodedKey },
    Width: { N: width },
    Height: { N: height }
  };
};

module.exports = {
  makeTaolagAlbumItemRecord,
  makeTaolagPhotoItemRecord,
  taolagSlug,
  decodeS3Key,
  getAlbumTitle
};
