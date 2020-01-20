const sut = require('../index');

// Slug

function taolagSlug_IsValid() {
  const input = 'The Super Rad/Thing/With - Dash - AND.DOT';
  const expected = 'the-super-rad/thing/with-dash-and.dot';

  const actual = sut.taolagSlug(input);

  console.log(`taolagSlug_IsValid: ${actual === expected}: ${actual}`);
}

// Album ID

function makeAlbumRecord_IsValid1() {
  const input = 'The Super Rad/With+-+Dash+-+AND.DOT';
  const expected = {
    AlbumId: 'the-super-rad',
    ParentAlbumId: '_'
  };

  const actual = sut.makeAlbumRecord(input);

  console.log(
    `makeAlbumRecord_IsValid1: ${JSON.stringify(actual) ===
      JSON.stringify(expected)} : ${JSON.stringify(actual)}`
  );
}

function makeAlbumRecord_IsValid2() {
  const input = 'The Super Rad/Thing+-+1/With+-+Dash+-+AND.DOT';
  const expected = {
    AlbumId: 'the-super-rad/thing-1',
    ParentAlbumId: 'the-super-rad'
  };

  const actual = sut.makeAlbumRecord(input);

  console.log(
    `makeAlbumRecord_IsValid2: ${JSON.stringify(actual) ===
      JSON.stringify(expected)} : ${JSON.stringify(actual)}`
  );
}

// Photo ID
//S3Key: 'The Super Rad/With - Dash - AND.DOT'
// Convert URL
function decodeS3Key_IsValid1() {
  const input =
    'Evil%20is%20evil,+greater,+lesser,+middling,%20it%20makes%20no%20difference.';
  const expected =
    'Evil is evil, greater, lesser, middling, it makes no difference.';

  const actual = sut.decodeS3Key(input);

  console.log(
    `decodeS3Key_IsValid1: ${JSON.stringify(actual) ===
      JSON.stringify(expected)} : ${JSON.stringify(actual)}`
  );
}

// Runners
taolagSlug_IsValid();

makeAlbumRecord_IsValid1();
makeAlbumRecord_IsValid2();

decodeS3Key_IsValid1();
