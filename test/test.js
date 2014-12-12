
var ObjectID = require('mongodb').ObjectID
var assert = require('assert')

var unique = require('..')

it('should create a unique list', function () {
  var oids = []
  var i = 0
  while (i++ < 10) oids.push(new ObjectID())
  i = 0
  while (i++ < 10) oids.push(oids[Math.floor(10 * Math.random())])
  var arr = unique(oids)
  assert.equal(10, arr.length)
})
