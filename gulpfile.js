var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    gulpMocha = require('gulp-mocha'),
    env = require('gulp-env');
    
gulp.task('default', function () {
    nodemon({
        script: 'app.js',
        ext: 'js',
        env: {
            PORT: process.env.PORT
        },
        ignore: ['./node_modules/**']
    })
    .on('restart', function () {
         console.log('Restarting...');
    });
});

gulp.task('test', function () {
    env({ vars: { ENV: 'Test' }});
    gulp.src('tests/*.js', { read: false })
        .pipe(gulpMocha({ report: 'nyan' }));
});