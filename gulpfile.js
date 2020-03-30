const gulp = require('gulp');
const sonarqubeScanner = require('sonarqube-scanner');

gulp.task('sonar', function(callback) {
    sonarqubeScanner({
        serverUrl : process.env.SONARQUBE_URL,
        token: process.env.SONARQUBE_TOKEN,
        options : {
            "sonar.organization": process.env.SONARQUBE_ORGANIZATION,
            "sonar.projectKey": process.env.SONARQUBE_PROJECTKEY,
            "sonar.javascript.lcov.reportPaths": "build/test-results/lcov.info",
            "sonar.exclusions": "test/**"
        }
    }, callback);
});