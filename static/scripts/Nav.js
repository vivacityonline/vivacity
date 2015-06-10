define([
    'jquery',
    'easing',
    'markup',
    'globalElements',
    'globalEvents'
], function(
    $,
    easing,
    markup,
    globalElements,
    globalEvents) {
    'use strict';


    var Nav = function(options) {


        var self = this;


        var o = $.extend({
            $e: null,
            selector: '',
            zips: [10002,10013]
        }, options);


        var internal = {
            name: 'Nav',
            $e: o.$e || $(o.selector),

            scroll_top: globalElements.doc.scrollTop(),

            logo_bottom_pos: 0,

            scroll_is_past_logo: false
        };


        var elements = {
            window: $(window),

            logo: $('#logo'),

            scrollto_links: $('[data-scrollto]'),
            scrollto_target: $('html,body')
        };


        var fn = {
            init: function() {
                fn.setup_position_data();
                fn.setup_handlers();

                fn.set_header_state();
            },
            setup_position_data: function(){
                internal.logo_bottom_pos = elements.logo.offset().top + elements.logo.outerHeight(); 
            },
            setup_handlers: function() {
                elements.scrollto_links.on('click', handlers.scrollto_click);
                globalEvents.onScroll(handlers.scroll);
                globalEvents.onResize(handlers.resize);
            },

            set_header_state: function(){
                if (internal.scroll_top > internal.logo_bottom_pos) {
                    if (!internal.scroll_is_past_logo) {
                        internal.$e.addClass('state-sticky');
                        internal.scroll_is_past_logo = true;
                    }
                    
                } else {
                    if (internal.scroll_is_past_logo) {
                        internal.$e.removeClass('state-sticky');
                        internal.scroll_is_past_logo = false;
                    }
                }
            }
        };


        var handlers = {
            scroll: function(e, d) {
                internal.scroll_top = d.scroll_top;
                fn.set_header_state();
            },
            resize: function(e, d) {

            },
            scrollto_click: function() {
                var link, destination, distance;

                link = $(this);
                destination = $(link.data('scrollto')).offset().top - (elements.window.height() * 0.1);
                distance = Math.abs(elements.window.scrollTop() - destination);

                elements.scrollto_target.animate({
                    scrollTop: destination
                }, distance/2, 'easeInOutQuart');

            }
        };


        fn.init();
        console.log(internal);


    };

    return Nav;

});
