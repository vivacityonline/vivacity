define([
    'jquery',
    'CarouselSlideshow',
    'Accordion'
], function(
    $,
    CarouselSlideshow,
    Accordion) {
    'use strict';

    var Contact = function(options) {

        var self = this;

        var o = $.extend({
            $e: null,
            selector: ''
        }, options);

        var internal = {
            name: 'Contact',
            $e: o.$e || $(o.selector),
            heroSlideshow: null,
            contentAccordions: []
        };

        var elements = {
            heroSlideshow: $('.hero-slideshow', internal.$e),
            contentAccordions: $('.accordion.variant-content', internal.$e)
        };

        var fn = {
            init: function() {
                internal.heroSlideshow = new CarouselSlideshow({
                    $e: elements.heroSlideshow,
                    autoSync: true
                });

                elements.contentAccordions.each(function() {
                    internal.contentAccordions.push(new Accordion({
                        $e: $(this)
                    }));
                });
            }
        };

        var handlers = {
        };

        fn.init();
        console.log(internal);
    };

    return Contact;
});
