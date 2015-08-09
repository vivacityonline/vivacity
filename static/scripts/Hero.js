define([
    'jquery',
    'easing',
    'markup',
    'globalEvents'
], function(
    $,
    easing,
    markup,
    globalEvents) {
    'use strict';


    var Hero = function(options) {


        var self = this;


        var o = $.extend({
            $e: null,
            selector: ''
        }, options);


        var m = Hero.markup;


        var internal = {
            name: 'Hero',
            $e: o.$e || $(o.selector),
        };


        var elements = {
            bg: internal.$e.find('#hero-bg')
        };


        var fn = {
            init: function() {
                fn.setup_handlers();
                fn.set_hero_bg_position(globalEvents.getScrollPos());
            },
            setup_handlers: function() {
                globalEvents.onScroll(handlers.scroll);
            },

            set_hero_bg_position: function(position){
                var transform = 'translate3d(0,' + (0.5 * position) + 'px,0)';
                elements.bg.css({
                    '-webkit-transform': transform,
                    '-moz-transform': transform,
                    '-ms-transform': transform,
                    'transform': transform,
                });
            }
        };


        var handlers = {
            scroll: function(e,d) {
                fn.set_hero_bg_position(d.scroll_top);
            }
        };


        fn.init();
        console.log(internal);


    };


    Hero.markup = $.extend({
        //MEMBRANE: 'mondrian-membrane',
        //ITEM: 'mondrian-item',
    }, markup);


    return Hero;

});
