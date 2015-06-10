define([], function() {
    'use strict';

    var functionUtil = {};

    functionUtil.debounce = function(func, wait, immediate) {
        // debounce function adapted from underscore.js
        // http://underscorejs.org/#debounce
        if (!wait) { wait = 100; }
        var timeout, result;
        return function() {
            var context = this, args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) result = func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) result = func.apply(context, args);
            return result;
        };
    };

    return functionUtil;
});
