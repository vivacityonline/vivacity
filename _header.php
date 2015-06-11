<!doctype html>
<html>
    <head>
        <meta charset='utf-8'>
        <meta name='robots' content='noindex, nofollow'>
        <meta http-equiv='X-UA-Compatible' content='IE=edge'>
        <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'>
        <meta name='msapplication-tap-highlight' content='no'>

        <title>Vivacity</title>

        <meta name='description' content='Healthy delivery breakfast. Daily. Vivacity is tailored to your body type, dietary needs, and lifestyle.' />
        <meta property='og:description' content='Healthy delivery breakfast. Daily. Vivacity is tailored to your body type, dietary needs, and lifestyle.' />
        
        <meta property='og:site_name' content='Vivacity'/>
        <meta property='og:type' content='website'/>
        <meta property='og:locale' content='en_US' />
        <meta property='og:image' content='/static/images/ogicon.png' />

        <meta name='keywords' content='vivacity, smoothies, smoothie, delivery, office, breakfast, healthy, meal, new york, nyc, new york city, manhattan, brooklyn' />

        <script src='//use.typekit.net/alr8opu.js'></script>
        <script>try{Typekit.load();}catch(e){}</script>

        <link rel='shortcut icon' type='image/png' href='/static/images/favicon.png'>

        <link rel='stylesheet' type='text/css' href='static/styles/main.css'>

        <script>
            scripts = [];
        </script>
    </head>



    <body class='<?php if ($bodyClasses) { echo $bodyClasses; } ?>'>

        <div class='global-container'>

            <div class='global-page'>


                <div id='nav' class='header'>
                    <ul>
                        <li class='smalllogo' data-scrollto='.hero'><?php include 'static/images/svg-logo.html'; ?></li>
                        <li><a data-scrollto='#about'>About</a></li>
                        <li><a data-scrollto='#howitworks'>How It Works</a></li>
                        <li><a data-scrollto='#signup' class='button'>Sign Up</a></li>
                    </ul>
                </div>
                <script>
                    scripts.push(function(core) {
                        require(['Nav'], function(Nav) {
                            core.instances.nav = new Nav({
                                selector: '#nav'
                            });
                        });
                    });
                </script>
