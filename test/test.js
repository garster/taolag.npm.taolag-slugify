const sut = require('../index');

function taolagSlug_IsValid() {
  const input = 'The Super Rad/Thing/With - Dash - AND.DOT';
  const expected = 'the-super-rad/thing/with-dash-and.dot';

  const actual = sut.taolagSlug(input);

  console.log(`taolagSlug_IsValid: ${actual === expected}: ${actual}`);
}




function taolagSlugWithoutLastSegment_IsValid() {
  const input = 'The Super Rad/Thing/With - Dash - AND.DOT';
  const expected = 'the-super-rad/thing';

  const actual = sut.taolagSlugWithoutLastSegment(input);

  console.log(
    `taolagSlugWithoutLastSegment_IsValid: ${actual ===
      expected}: ${actual}`
  );
}

function taolagSlugWithoutTwoLastSegment_IsValid() {
  const input = 'The Super Rad/Thing/With - Dash - AND.DOT';
  const expected = 'the-super-rad';

  const actual = sut.taolagSlugWithoutLastSegment(input);

  console.log(
    `taolagSlugWithoutTwoLastSegment_IsValid: ${actual ===
      expected}: ${actual}`
  );
}

function taolagSlugWithoutTwoLastSegment_ReturnsUnderscore() {
  const input = 'The Super Rad/Thing.yaml';
  const expected = '_';

  const actual = sut.taolagSlugWithoutLastSegment(input);

  console.log(
    `taolagSlugWithoutTwoLastSegment_ReturnsUnderscore: ${actual ===
      expected}: ${actual}`
  );
}



function makeTokenUrl_IsValid() {
  const input = 'The Super Rad/Thing/With - Dash - AND.DOT';
  const expected = 'the-super-rad:thing:with-dash-and.dot';

  const actual = sut.makeTokenUrl(input);

  console.log(`makeTokenUrl_IsValid: ${actual === expected}: ${actual}`);
}



function alId1(){
  const input = 'The Super Rad/Thing/With - Dash - AND.DOT';
  const expected = 'The Super Rad/Thing';

  const actual = sut.getAlbumId(input);

  console.log(`alId1: ${actual === expected}: ${actual}`);

}

function alId2(){
  const input = 'The Super Rad/Thing/Again/With - Dash - AND.DOT';
  const expected = 'The Super Rad/Thing/Again';

  const actual = sut.getAlbumId(input);

  console.log(`alId2: ${actual === expected}: ${actual}`);

}

function alParId1(){
  const input = 'The Super Rad/Thing/Again/With - Dash - AND.DOT';
  const expected = 'The Super Rad/Thing';

  const actual = sut.getAlbumParentId(input);

  console.log(`alPId1: ${actual === expected}: ${actual}`);

}
function alParId2(){
  const input = 'The Super Rad/With - Dash - AND.DOT';
  const expected = '_';

  const actual = sut.getAlbumParentId(input);

  console.log(`alPId2: ${actual === expected}: ${actual}`);

}




alId1();
alId2();
alParId1();
alParId2();


//taolagSlug_IsValid();

//taolagSlugWithoutLastSegment_IsValid();
//taolagSlugWithoutTwoLastSegment_IsValid();
//taolagSlugWithoutTwoLastSegment_ReturnsUnderscore();

//makeTokenUrl_IsValid();


