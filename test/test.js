const sut = require('../index');

// Slug

function taolagSlug_IsValid() {
  const input = 'The Super Rad/Thing/With - Dash - AND.DOT';
  const expected = 'the-super-rad/thing/with-dash-and.dot';

  const actual = sut.taolagSlug(input);
  const result = actual === expected;
  console.log(`taolagSlug_IsValid: ${result} : ${actual}`);
  return result;
}

// Album ID

function makeAlbumRecord_IsValid1() {
  const input = 'The Super Rad/With+-+Dash+-+AND.DOT';
  const expected = {
    AlbumId: { S: 'the-super-rad' },
    ParentAlbumId: { S: '_' },
    Title: { S: 'The Super Rad' }
  };

  const actual = sut.makeTaolagAlbumItemRecord(input);
  const result = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(
    `makeTaolagAlbumItemRecord_IsValid1: ${result} : ${JSON.stringify(actual)}`
  );
  return result;
}

function makeAlbumRecord_IsValid2() {
  const input = 'The Super Rad/Thing+-+1/With+-+Dash+-+AND.DOT';
  const expected = {
    AlbumId: { S: 'the-super-rad/thing-1' },
    ParentAlbumId: { S: 'the-super-rad' },
    Title: { S: 'Thing - 1' }
  };

  const actual = sut.makeTaolagAlbumItemRecord(input);
  const result = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(
    `makeTaolagAlbumItemRecord_IsValid2: ${result} : ${JSON.stringify(actual)}`
  );
  return result;
}

// Photo ID

function makePhotoRecord_IsValid1() {
  const input = 'The Super Rad/With+-+Dash+-+AND.DOT';
  const expected = {
    AlbumId: { S: 'the-super-rad' },
    PhotoId: { S: 'the-super-rad/with-dash-and.dot' },
    S3Key: { S: 'The Super Rad/With - Dash - AND.DOT' }
  };

  const actual = sut.makeTaolagPhotoItemRecord(input);
  const result = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(
    `makeTaolagPhotoItemRecord_IsValid1: ${result} : ${JSON.stringify(actual)}`
  );
  return result;
}

// Convert URL
function decodeS3Key_IsValid1() {
  const input =
    'Evil%20is%20evil,+greater,+lesser,+middling,%20it%20makes%20no%20difference.';
  const expected =
    'Evil is evil, greater, lesser, middling, it makes no difference.';

  const actual = sut.decodeS3Key(input);

  const result = JSON.stringify(actual) === JSON.stringify(expected);

  console.log(`decodeS3Key_IsValid1: ${result} : ${JSON.stringify(actual)}`);

  return result;
}

// Runners
taolagSlug_IsValid();

makeAlbumRecord_IsValid1();
makeAlbumRecord_IsValid2();

makePhotoRecord_IsValid1();

decodeS3Key_IsValid1();

if (
  taolagSlug_IsValid() &&
  makeAlbumRecord_IsValid1() &&
  makeAlbumRecord_IsValid2() &&
  makePhotoRecord_IsValid1() &&
  decodeS3Key_IsValid1()
) {
  console.log('ALL PASS');
} else {
  console.log('Something failed');
}
