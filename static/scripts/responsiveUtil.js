define([
    'jquery',
    'globalElements'
], function(
    $,
    globalElements) {
    'use strict';

    var responsiveUtil = {};

    responsiveUtil.breakpoints = {
        // these constants correspond to media queries defined in core/layout.less
        PHONE_MAX_WIDTH: 767,
        TABLET_MAX_WIDTH: 1015
    };

    responsiveUtil.fn = {
        getViewportWidth: function() {
            return globalElements.win.width();
        },

        isPhoneSize: function(viewportWidth) {
            viewportWidth = viewportWidth || responsiveUtil.fn.getViewportWidth();
            return viewportWidth <= responsiveUtil.breakpoints.PHONE_MAX_WIDTH;
        },
        isTabletSize: function(viewportWidth) {
            viewportWidth = viewportWidth || responsiveUtil.fn.getViewportWidth();
            return (
                viewportWidth > responsiveUtil.breakpoints.PHONE_MAX_WIDTH &&
                viewportWidth <= responsiveUtil.breakpoints.TABLET_MAX_WIDTH
            );
        },
        isDesktopWidth: function(viewportWidth) {
            viewportWidth = viewportWidth || responsiveUtil.fn.getViewportWidth();
            return viewportWidth > responsiveUtil.breakpoints.TABLET_MAX_WIDTH;
        },

        hasTouchSupport: function() {
            return (!!('ontouchstart' in window) || !!('onmsgesturechange' in window) ? true : false);
        }
    };

    return responsiveUtil;
});
