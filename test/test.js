const test = require('tape')
const fs = require('fs')
const ffprobePath = require('../lib').default

test('should find ffprobe', function (t) {
  t.plan(1)

  t.ok(fs.existsSync(ffprobePath))
})
