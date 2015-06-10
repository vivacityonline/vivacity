define([
    'jquery',
    'CarouselSlideshow',
    'Accordion'
], function(
    $,
    CarouselSlideshow,
    Accordion) {
    'use strict';

    var Practice = function(options) {

        var self = this;

        var o = $.extend({
            $e: null,
            selector: ''
        }, options);

        var internal = {
            name: 'Practice',
            $e: o.$e || $(o.selector),
            heroSlideshow: null,
            contentAccordion: null
        };

        var elements = {
            heroSlideshow: $('.hero-slideshow', internal.$e),
            contentAccordion: $('.accordion.variant-content', internal.$e)
        };

        var fn = {
            init: function() {
                internal.heroSlideshow = new CarouselSlideshow({
                    $e: elements.heroSlideshow,
                    autoSync: true
                });

                internal.contentAccordion = new Accordion({
                    $e: elements.contentAccordion
                });
            }
        };

        var handlers = {
        };

        fn.init();
        console.log(internal);
    };

    return Practice;
});
