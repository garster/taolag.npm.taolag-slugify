const sut = require('../index');

// Slug

function taolagSlug_IsValid() {
  const input = 'The Super Rad/Thing/With - Dash - AND.DOT';
  const expected = 'the-super-rad/thing/with-dash-and.dot';

  const actual = sut.taolagSlug(input);

  console.log(`taolagSlug_IsValid: ${actual === expected}: ${actual}`);
}

// Album ID

function makeAlbumIds_IsValid1() {
  const input = 'The Super Rad/With - Dash - AND.DOT';
  const expected = { albumId: 'the-super-rad', parentAlbumId: '_' };

  const actual = sut.makeAlbumIds(input);

  console.log(
    `alObj: ${JSON.stringify(actual) ===
      JSON.stringify(expected)} : ${JSON.stringify(actual)}`
  );
}

function makeAlbumIds_IsValid2() {
  const input = 'The Super Rad/Thing - 1/With - Dash - AND.DOT';
  const expected = {
    albumId: 'the-super-rad/thing-1',
    parentAlbumId: 'the-super-rad'
  };

  const actual = sut.makeAlbumIds(input);

  console.log(
    `alObj: ${JSON.stringify(actual) ===
      JSON.stringify(expected)} : ${JSON.stringify(actual)}`
  );
}

// Photo ID

// Convert URL

// Runners
taolagSlug_IsValid();
makeAlbumIds_IsValid1();
makeAlbumIds_IsValid2();
