# ffprobe-bin-electron [![travis][travis-image]][travis-url] [![npm][npm-image]][npm-url] [![downloads][downloads-image]][downloads-url] [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

[travis-image]: https://travis-ci.org/Kamicast/ffprobe-bin-electron.svg?branch=master
[travis-url]: https://travis-ci.org/Kamicast/ffprobe-bin-electron
[npm-image]: https://img.shields.io/npm/v/oconnorct1/ffprobe-bin-electron.svg
[npm-url]: https://npmjs.org/package/oconnorct1/ffprobe-bin-electron
[downloads-image]: https://img.shields.io/npm/dm/oconnorct1/ffprobe-bin-electron.svg
[downloads-url]: https://npmjs.org/package/oconnorct1/ffprobe-bin-electron

## About

This is a modified module from [here](https://github.com/eugeneware/ffprobe-bin-electron)

**[ffprobe](https://ffmpeg.org/ffprobe.html) static binaries for Mac OSX, Linux, and Windows.**

*Note:* This version of `ffprobe-bin-electron` follows [SemVer](http://semver.org). When releasing new versions, **we do *not* consider breaking changes in `ffprobe` itself**, but only the JS interface (see below). To stop `ffprobe-bin-electron` from breaking your code by getting updated, [lock the version down](https://docs.npmjs.com/files/package.json#dependencies) or use a [lockfile](https://docs.npmjs.com/files/package-lock.json).


## Developer
In order to download all the binaries in preparation
```sh
yarn run build-bin
```

## Install
```sh
npm install --save ffprobe-bin-electron
# or
yarn add ffprobe-bin-electron
```

## How to use
```js
// ES6
import ffprobePath from 'ffprobe-bin-electron';
// ES5
const ffprobePath = require('ffprobe-bin-electron').default;


console.log(ffprobePath);
// /Users/craigoconnor/Projects/ffprobe-test/ffprobe-bin-electron/bin/darwin/x64/ffprobe
```


## The binaries sources
All binaries came from [here](https://ffbinaries.com)

---

## ISC License (ISC)

Copyright 2019 <Kamicast>
Copyright (c) 2004-2010 by Internet Systems Consortium, Inc. ("ISC")
Copyright (c) 1995-2003 by Internet Software Consortium


Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
