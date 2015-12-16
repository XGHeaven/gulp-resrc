Introduce
---

a small tool to pipeful, looks like pretty.

Example
---

```javascript
var resrc = require('gulp-resrc')
var gulp = require('gulp')

gulp.task('example', () => {
	gulp.src('file1.js').pipe(gulp.dest('dist1'))
	gulp.src('file2.js').pipe(gulp.dest('dist2'))
})

// the same as follow
gulp.task('exampleWithResrc', () => {
	gulp.src('file1.js')
	.pipe(gulp.dest('dist1'))
	.pipe(resrc('file2.js'))
	.pipe(gulp.dest('dist2'))
})
```