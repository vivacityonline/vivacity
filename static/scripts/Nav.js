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

            scroll_direction: 'down',
            scroll_top: globalEvents.getScrollPos(),

            logo_bottom_pos: 0,

            scroll_is_past_logo: false,

            current_section: null,

            just_found_current_section: false
        };


        var elements = {
            window: $(window),

            logo: $('#logo'),

            scrollto_links: $('[data-scrollto]'),
            scrollto_target: $('html,body'),

            sections: $('[data-section]')
        };


        var fn = {
            init: function() {
                fn.setup_position_data();
                fn.setup_section_data();
                fn.setup_handlers();

                fn.set_header_state();
            },
            setup_position_data: function(){
                internal.logo_bottom_pos = elements.logo.offset().top + elements.logo.outerHeight(); 
            },
            setup_section_data: function(){
                elements.sections.each(function(){
                    $(this).data('height', $(this).outerHeight());
                    $(this).data('top_pos', $(this).offset().top);
                    $(this).data('bottom_pos', $(this).data('top_pos') + $(this).data('height'));
                    $(this).data('mid_pos', $(this).data('top_pos') + ($(this).data('height')/2));
                });
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
            },

            get_nearest_section: function(){
                var nearest_section = 0;
                var nearest_distance = 99999999;
                elements.sections.each(function(i){
                    var dist;

                    if (internal.scroll_direction == 'down') {
                        dist = Math.abs(internal.scroll_top - ($(this).data('top_pos')));
                    } else {
                        dist = Math.abs(internal.scroll_top - ($(this).data('mid_pos') - 50));
                    }

                    if (dist < nearest_distance) {
                        nearest_section = i;
                        nearest_distance = dist;
                    }
                });
                return elements.sections.eq(nearest_section);
            },

            set_current_section: function(section){
                if (!section.is(internal.current_section)) {
                    internal.current_section = section;
                    globalElements.body.removeClass(function(index, css) {
                        return (css.match (/\bsection-\S+/g) || []).join(' ');
                    }).addClass('section-' + section.data('section'));
                }
            }
        };


        var handlers = {
            scroll: function(e, d) {
                if (d.scroll_top >= internal.scroll_top) {
                    internal.scroll_direction = 'down';
                } else if ((d.scroll_top + internal.win_height) < internal.doc_height) {
                    // the above prevents mac elastic scrolling messing things up
                    internal.scroll_direction = 'up';
                }
                internal.scroll_top = d.scroll_top;

                fn.set_header_state();

                if (!internal.just_found_current_section) {
                    fn.set_current_section(fn.get_nearest_section());

                    internal.just_found_current_section = true;
                    setTimeout(function(){
                        internal.just_found_current_section = false;
                    }, 300);
                }
            },
            resize: function(e, d) {
                fn.setup_section_data();
                fn.set_current_section(fn.get_nearest_section());
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
