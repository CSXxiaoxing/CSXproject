

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('csxSass',function(){
    gulp.src('./src/sass/home.scss')
        .pipe(sass())
        .pipe(gulp.dest('./src/css/'));
})
