const sut = require('../index');

function makePrettyUrl_IsValid() {
  const input = 'The Super Rad/Thing/With - Dash - AND.DOT';
  const expected = 'the-super-rad/thing/with-dash-and.dot';

  const actual = sut.makePrettyUrl(input);

  console.log(`makePrettyUrl_IsValid: ${actual === expected}: ${actual}`);
}

function makeTokenUrl_IsValid() {
  const input = 'The Super Rad/Thing/With - Dash - AND.DOT';
  const expected = 'the-super-rad:thing:with-dash-and.dot';

  const actual = sut.makeTokenUrl(input);

  console.log(`makeTokenUrl_IsValid: ${actual === expected}: ${actual}`);
}

function makePrettyUrlWithoutLastSegment_IsValid() {
  const input = 'The Super Rad/Thing/With - Dash - AND.DOT';
  const expected = 'the-super-rad/thing';

  const actual = sut.makePrettyUrlWithoutLastSegment(input);

  console.log(
    `  makePrettyUrlWithoutLastSegment_IsValid: ${actual ===
      expected}: ${actual}`
  );
}

makePrettyUrlWithoutLastSegment_IsValid();

makeTokenUrl_IsValid();

makePrettyUrl_IsValid();
