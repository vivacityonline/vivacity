define([
    'jquery',
    'Modernizr'
], function(
    $,
    Modernizr) {
    'use strict';

    var core = {};

    core.init = function(scripts) {
        core.instances = {};

        Modernizr.addTest('cssvhunit', function() {
            var bool;
            Modernizr.testStyles("#modernizr { height: 50vh; }", function(elem, rule) {   
                var height = parseInt(window.innerHeight/2,10),
                    compStyle = parseInt((window.getComputedStyle ?
                              getComputedStyle(elem, null) :
                              elem.currentStyle)["height"],10);
                
                bool= (compStyle == height);
            });

            if (!bool) {
                $('html').addClass('no-cssvhunit');
            }

            return bool;
        });

        if (scripts && scripts.length) {
            core.runScripts(scripts);
        }

        console.log('^^^^^ App initialized ^^^^^');
        console.log(core);
    };

    core.runScripts = function(scripts) {
        $.each(scripts, function(i, script) {
            if ($.isFunction(script)) {
                script(core);
            }
        });
    };

    return core;
});
