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


    var Carousel = function(options) {


        var self = this;


        var o = $.extend({
            $e: null,
            selector: ''
        }, options);


        var m = Carousel.markup;


        var internal = {
            name: 'Carousel',
            $e: o.$e || $(o.selector),

            current_slide: 0
        };


        var elements = {
            track: internal.$e.find('.'+m.TRACK),
            items: internal.$e.find('.'+m.ITEM),

            next: internal.$e.find('.'+m.NEXT),
            prev: internal.$e.find('.'+m.PREV)
        };


        var fn = {
            init: function() {
                fn.setup_handlers();
            },
            setup_handlers: function() {
                elements.next.on('click', handlers.next_click);
                elements.prev.on('click', handlers.prev_click);
            },

            goto_next_slide: function(){
                fn.goto_slide((internal.current_slide+1) % elements.items.length);
            },
            goto_prev_slide: function(){
                fn.goto_slide((internal.current_slide-1) % elements.items.length);
            },

            goto_slide: function(num){

                var transform = 'translate3d(' + (-100 * num) + 'vw,0,0)';
                elements.track.css({
                    '-webkit-transform': transform,
                    '-moz-transform': transform,
                    '-ms-transform': transform,
                    'transform': transform,
                });

                internal.current_slide = num;
            }
        };


        var handlers = {
            next_click: function(){
                fn.goto_next_slide();
            },
            prev_click: function(){
                fn.goto_prev_slide();
            },
        };


        fn.init();
        console.log(internal);


    };


    Carousel.markup = $.extend({
        TRACK: 'carousel-track',
        ITEM: 'carousel-item',
        NEXT: 'carousel-next',
        PREV: 'carousel-prev'
    }, markup);


    return Carousel;

});
