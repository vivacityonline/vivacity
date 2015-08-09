define([
    'jquery',
    'globalElements',
    'functionUtil',
    'responsiveUtil',
    'jquery-mousewheel',
    'rafpolyfill'
], function(
    $,
    globalElements,
    functionUtil,
    responsiveUtil,
    __mousewheel,
    __rafpolyfill) {
    'use strict';

    return new function() {

        var self = this;

        var internal = {
            name: 'GlobalEvents',
            lastViewportWidth: globalElements.win.width(),

            scroll_top: 0,
            raf_is_ticking: false,
            is_wheeling: false,
            is_wheeling_timeout: null
        };

        var fn = {
            init: function() {
                // set initial scroll top
                internal.scroll_top = (window.pageYOffset ? window.pageYOffset : globalElements.doc.scrollTop());

                globalElements.win.on('resize', handlers.resize);
                globalElements.doc.on('mousewheel', handlers.mousewheel);
                globalElements.doc.on('scroll', handlers.scroll);
            },

            on: function() {
                return globalElements.doc.on.apply(globalElements.doc, arguments);
            },
            off: function() {
                return globalElements.doc.off.apply(globalElements.doc, arguments);
            },
            trigger: function() {
                return globalElements.doc.trigger.apply(globalElements.doc, arguments);
            },

            onResize: function(handler) {
                return fn.on(eventTypes.RESIZE, handler);
            },
            offResize: function(handler) {
                return fn.off(eventTypes.RESIZE, handler);
            },

            onScroll: function(handler) {
                return fn.on(eventTypes.SCROLL, handler);
            },
            offScroll: function(handler) {
                return fn.off(eventTypes.SCROLL, handler);
            },

            _scroll_or_mousewheel_event: function(){
                if(!internal.raf_is_ticking) {
                    requestAnimationFrame(fn._trigger_raf_scroll_event);
                }
                internal.raf_is_ticking = true;
            },
            _trigger_raf_scroll_event: function(){
                internal.raf_is_ticking = false;

                var native_y_offset = window.pageYOffset;

                internal.scroll_top = (native_y_offset ? native_y_offset : globalElements.doc.scrollTop());

                fn.trigger(eventTypes.SCROLL, {
                    scroll_top: internal.scroll_top
                });
            },

            get_current_scroll_pos: function(){
                return internal.scroll_top;
            }
        };

        var handlers = {
            resize: functionUtil.debounce(function() {
                var $win, width, height, lastViewportWidth, bp, hasTraversedTabletBreakpoint, hasTraversedPhoneBreakpoint;

                $win = globalElements.win;
                width = $win.width();
                height = $win.height();

                lastViewportWidth = internal.lastViewportWidth;
                bp = responsiveUtil.breakpoints;

                if ((lastViewportWidth > bp.TABLET_MAX_WIDTH && width <= bp.TABLET_MAX_WIDTH) ||
                    (lastViewportWidth <= bp.TABLET_MAX_WIDTH && width > bp.TABLET_MAX_WIDTH)) {
                    hasTraversedTabletBreakpoint = true;
                }

                if ((lastViewportWidth > bp.PHONE_MAX_WIDTH && width <= bp.PHONE_MAX_WIDTH) ||
                    (lastViewportWidth <= bp.PHONE_MAX_WIDTH && width > bp.PHONE_MAX_WIDTH)) {
                    hasTraversedPhoneBreakpoint = true;
                }

                fn.trigger(eventTypes.RESIZE, {
                    width: width,
                    height: height,
                    hasTraversedTabletBreakpoint: hasTraversedTabletBreakpoint,
                    hasTraversedPhoneBreakpoint: hasTraversedPhoneBreakpoint
                });

                internal.lastViewportWidth = width;
            }, 100),
            
            mousewheel: function(){
                if (!internal.is_wheeling) {
                    internal.is_wheeling = true;
                }
                clearTimeout(internal.is_wheeling_timeout);
                internal.is_wheeling_timeout = setTimeout(function(){
                    internal.is_wheeling = false;
                }, 100);

                fn._scroll_or_mousewheel_event();

                //console.log('wheeling');
            },
            scroll: function(){
                if (!internal.is_wheeling) {
                    fn._scroll_or_mousewheel_event();

                    //console.log('scrolling');
                }
            }
        };

        var eventTypes = {
            RESIZE: 'global-events-resize',
            SCROLL: 'global-events-scroll'
        };

        self.on = fn.on;
        self.off = fn.off;
        self.trigger = fn.trigger;

        self.onResize = fn.onResize;
        self.offResize = fn.offResize;

        self.onScroll = fn.onScroll;
        self.offScroll = fn.offScroll;

        self.getScrollPos = fn.get_current_scroll_pos;

        self.eventTypes = eventTypes;

        fn.init();
        console.log(internal);
    };
});
