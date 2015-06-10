define([
    'jquery',
    'globalElements',
    'functionUtil',
    'responsiveUtil'
], function(
    $,
    globalElements,
    functionUtil,
    responsiveUtil) {
    'use strict';

    return new function() {

        var self = this;

        var internal = {
            name: 'GlobalEvents',
            lastViewportWidth: globalElements.win.width()
        };

        var fn = {
            init: function() {
                globalElements.win.on('resize', handlers.resize);
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

            scroll: function(){
                var native_y_offset, scroll_top;

                native_y_offset = window.pageYOffset;
                scroll_top = (native_y_offset ? native_y_offset : globalElements.doc.scrollTop());

                fn.trigger(eventTypes.SCROLL, {
                    scroll_top: scroll_top
                });
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

        self.eventTypes = eventTypes;

        fn.init();
        console.log(internal);
    };
});
