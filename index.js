var gulp = require('gulp')
var through = require('through2')
var duplex = require('duplexer2')
var stream = require('stream')

module.exports = function resrc(glob, opts) {
	return duplex(
		{objectMode: true},
		through.obj(function(){}),
		gulp.src(glob, opts)
	)
}