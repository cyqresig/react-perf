/**
 * @since 2017-05-02 15:37
 * @author chenyiqin
 */
var webpackConfig = require('./scripts/webpack.config');
require('phantomjs-prebuilt').path = './node_modules/.bin/phantomjs';

module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['mocha', 'fixture'],
        files: [
            'test/**/*',
            // {
            //     pattern: 'test/**/*html',
            // },
        ],

        preprocessors: {
            // add webpack as preprocessor
            'src/**/*.js': ['webpack', 'sourcemap'],
            'test/**/*.js': ['webpack', 'sourcemap'],
            'test/fixtures/**/*.html'   : ['html2js'],
            'test/fixtures/**/*.json'   : ['json_fixtures']
        },

        webpack: { //kind of a copy of your webpack config
            devtool: 'inline-source-map', //just do inline source maps instead of the default
            module: webpackConfig.module,
            resolve: webpackConfig.resolve,
            externals: webpackConfig.externals
        },

        webpackServer: {
            noInfo: true //please don't spam the console when running in karma!
        },

        plugins: [
            'karma-webpack',
            'karma-mocha',
            'karma-sourcemap-loader',
            'karma-chrome-launcher',
            'karma-phantomjs-launcher',
            'karma-fixture',
            'karma-html2js-preprocessor',
            'karma-json-fixtures-preprocessor',
        ],


        babelPreprocessor: {
            options: {
                presets: [
                    "es2015",
                    "react",
                    "stage-0"
                ]
            }
        },
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers:  ['Chrome'], // ['PhantomJS'],
        singleRun: false,

        phantomjsLauncher: {
            // Have phantomjs exit if a ResourceError is encountered (useful if karma exits without killing phantom)
            exitOnResourceError: true
        },
        jsonfixturePreprocessor: {
            variableName: '__json__'
        },
    })
};
