# taolag-slugify

Reusable slugify presets for use with my personal project.

You should not use it. You're have a bad time.

# Usage

```js
const leroy = require('@tikicat/taolag-slugify');

const jackson = leroy.taolagSlug('Leroy/Jackson');

// jackson == leroy/jackson
```

## taolagSlug(str)

Default slugify but allow '/'.

'Leroy Jackson/was/here' => 'leroy-jackson/was/here'

## decodeS3Key(str)

URI Decode plus turn + in space.

## makeTaolagAlbumItemRecord(str)

Reads in the Lambda S3 event key propery and makes a DynomoDB Item object.

## makeTaolagPhotoItemRecord(str)

Reads in the Lambda S3 event key propery and makes a DynomoDB Item object.

# Publishing to npmjs.com

`npm login`

`npm publish --access public`
