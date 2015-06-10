define([
    'jquery',
    'CarouselSlideshow',
    'HeroSlideshowSizer',
    'Accordion',
    'UnitToggler'
], function(
    $,
    CarouselSlideshow,
    HeroSlideshowSizer,
    Accordion,
    UnitToggler) {
    'use strict';

    var Project = function(options) {

        var self = this;

        var o = $.extend({
            $e: null,
            selector: ''
        }, options);

        var internal = {
            name: 'Project',
            $e: o.$e || $(o.selector),
            heroSlideshow: null,
            heroSlideshowSizer: null,
            metaAccordion: null
        };

        var elements = {
            heroSlideshow: $('.hero-slideshow', internal.$e),
            titleBar: $('.content-titlebar', internal.$e),
            metaAccordion: $('.project-meta .accordion', internal.$e)
        };

        var fn = {
            init: function() {
                internal.heroSlideshow = new CarouselSlideshow({
                    $e: elements.heroSlideshow
                });

                internal.heroSlideshowSizer = new HeroSlideshowSizer({
                    heroSlideshow: internal.heroSlideshow,
                    peakHeightObtainer: fn.getContentPeakHeight
                });

                internal.metaAccordion = new Accordion({
                    $e: elements.metaAccordion
                });

                internal.unitToggler = new UnitToggler({
                    $e: internal.$e
                });
            },
            getContentPeakHeight: function() {
                var titleBarHeight = elements.titleBar.outerHeight();
                return titleBarHeight - elements.titleBar.find('h2').outerHeight() - 10;
            }
        };

        var handlers = {
        };

        fn.init();
        console.log(internal);
    };

    return Project;
});
