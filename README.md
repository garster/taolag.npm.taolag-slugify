# taolag-slugify

Reusable slugify presets for use with my personal project.

You should not use it. You're gonna have a bad time.

# Usage

```js
const leroy = require('@tikicat/taolag-slugify');

const jackson = leroy.makeTokenUrl('Leroy/Jackson');

// jackson == leroy:jackson

```

## makePrettyUrl(str)

Default slugify but allow '/'.

'Leroy/Jackson' => 'leroy/jackson'

## makePrettyUrlWithoutLastSegment(str)

Remove last '/' and anything after.

'Leroy/Jackson' => 'leroy'

## makeTokenUrl(str)

Replace '/' with ':'.

'Leroy/Jackson' => 'leroy:jackson'

## Publishing to npmjs.com

`npm publish --access public`
