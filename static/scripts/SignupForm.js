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


    var SignupForm = function(options) {


        var self = this;


        var o = $.extend({
            $e: null,
            selector: '',
            zips: [10012,11201]
        }, options);


        var m = SignupForm.markup;


        var internal = {
            name: 'SignupForm',
            $e: o.$e || $(o.selector),
        };


        var elements = {
            inputs: internal.$e.find('input[type=text], input[type=email]'),

            name:   internal.$e.find('#signup-name'),
            email:  internal.$e.find('#signup-email'),
            zip:    internal.$e.find('#signup-zip'),
            submit: internal.$e.find('#signup-submit'),

            error: internal.$e.find('#signup-error')
        };


        var fn = {
            init: function() {
                fn.setup_data();
                fn.setup_handlers();
            },
            setup_data: function(){
                elements.inputs.each(function(){
                    $(this).data('init_value', $(this).val());
                });
            },
            setup_handlers: function() {
                internal.$e.on('submit', handlers.submit);

                elements.inputs.on('focus', handlers.input_focus);
                elements.inputs.on('blur', handlers.input_blur);
                // globalEvents.onResize(handlers.rezie);
            }
        };


        var handlers = {
            resize: function() {
                // resize
            },
            input_focus: function(e){
                var input = $(this);

                if (input.val() == input.data('init_value')) {
                    input.val('');
                }

                input.addClass('state-filled');
            },
            input_blur: function(e){
                var input = $(this);

                if (input.val() == '') {
                    input.val(input.data('init_value'));
                }
                if (input.val() == input.data('init_value') || input.val() == '') {
                    input.removeClass('state-filled');
                }
            },
            submit: function(e){
                e.preventDefault();

                var incomplete = false;

                elements.inputs.each(function(){
                    var val = $(this).val();

                    if (val == $(this).data('init_value') | val == '') {
                        incomplete = true;
                        return;
                    }
                });

                if (incomplete) {
                    elements.error.text('Please complete all fields before submitting').removeClass('state-hidden');

                } else {
                    elements.error.addClass('state-hidden');

                    $.ajax({
                        url: 'https://docs.google.com/forms/d/1f0uKBSBJd3vRebIEFtvch49WsKKOW4pJUutjRSyjrgE/formResponse',
                        data: {
                            'entry.756960863':  elements.name.val(),
                            'entry.998837708':  elements.email.val(),
                            'entry.1101718958': elements.zip.val(),
                            'entry.2108194571': navigator.userAgent
                        },
                        type: 'POST',
                        dataType: 'xml',
                        statusCode: {
                            0: function (){
                                console.log('success: status code 0')
                                if (o.zips.indexOf(parseInt(elements.zip.val(),10)) > -1) {
                                    internal.$e.find('#stage-form').hide();
                                    internal.$e.find('#stage-success').show();
                                } else {
                                    internal.$e.find('#stage-form').hide();
                                    internal.$e.find('#stage-success-notinarea').show();
                                }
                            },
                            200: function (){
                                console.log('success: status code 200')
                                if (o.zips.indexOf(parseInt(elements.zip.val(),10)) > -1) {
                                    internal.$e.find('#stage-form').hide();
                                    internal.$e.find('#stage-success').show();
                                } else {
                                    internal.$e.find('#stage-form').hide();
                                    internal.$e.find('#stage-success-notinarea').show();
                                }
                            }
                        }
                    });
                }
            }
        };


        fn.init();
        console.log(internal);


    };


    SignupForm.markup = $.extend({
        //MEMBRANE: 'mondrian-membrane',
        //ITEM: 'mondrian-item',
    }, markup);


    return SignupForm;

});
