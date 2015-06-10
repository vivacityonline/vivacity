'use strict';

require.config({
    baseUrl: 'static/scripts',

    map: {
    },

    paths: {
        'jquery': '../lib/jquery/dist/jquery.min',
        'easing': '../lib/jquery.easing/js/jquery.easing.min',
        'Modernizr': '../lib/modernizr/modernizr',
        'Isotope': '../lib/isotope/dist/isotope.pkgd.min',
        'imagesLoaded': '../lib/imagesloaded/imagesloaded.pkgd.min',
        'Hammer': '../lib/hammerjs/hammer.min',
        'underscore': '../lib/underscore/underscore-min'
    },

    shim: {
        'easing': {
            deps: ['jquery'],
            exports: 'jQuery.easing'
        },
        'Modernizr': {
            exports: 'Modernizr'
        },
        'Hammer': {
            exports: 'Hammer'
        },
        'underscore': {
            exports: '_'
        }
    },

    waitSeconds: 0
});
