<?php
$bodyClasses = 'index';
include '_header.php';
?>


<div class='hero' style='background-image: url(/static/images/bg.jpg)'>

    <div class='hero-content'>
        <div class='hero-content-membrane'>

            <div class='logo' id='logo'>
                <h1>Vivacity</h1>
                <?php include 'static/images/svg-logo.html'; ?>
            </div>

            <span class='tagline'>Morning delivery nutrition blends. Daily.</span>

            <form id='signup' class='signup'>
                <div id='stage-form' class='pre-submit-form'>
                    <input id='signup-name' class='signup-name' type='text' value='I’m inspired! My name is&hellip;' />
                    <input id='signup-email' class='signup-email' type='email' value='Email' />
                    <input id='signup-zip' class='signup-zip' type='text' value='Zip' />
                    <input id='signup-submit' class='signup-submit' type='submit' value='Sign up' />
                    <span id='signup-error' class='signup-error state-hidden'>Error message here</span>
                </div>
                <div id='stage-success' class='post-submit-msg' style='display:none'>
                    <span>Awesome! We're delivering in your area.<br />Our health experts will be in contact with you soon.</span>
                </div>
                <div id='stage-success-notinarea' class='post-submit-msg' style='display:none'>
                    <span>Thanks for your interest in Vivacity!<br />We're not in your area yet, but we'll give you a shout when we are.</span>
                </div>
                <div id='stage-error' class='post-submit-msg' style='display:none'>
                    <span>We're so sorry!<br />There was a problem submitting your details. Please contact us via email.</span>
                </div>
            </form>
            <script>
                scripts.push(function(core) {
                    require(['SignupForm'], function(SignupForm) {
                        core.instances.signupform = new SignupForm({
                            selector: '#signup'
                        });
                    });
                });
            </script>



        </div>
    </div>

    <div class='slant'>
        <svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 580 242' enable-background='new 0 0 580 242' xml:space='preserve' preserveAspectRatio='none'>
            <polygon points='580,242 0,242 580,0 '/>
        </svg>
    </div>


    <span class='line top'></span>
    <span class='line bottom'></span>

</div>


<div class='section about' id='about'>




    <h2 class='hidden'>About</h2>

    <span class='line'></span>

    <ul>
        <li>
            <p>Vivacity is a customized subscription-based service that delivers nutrition blends created by Certified Nutritionists to you every morning.</p> 
            <p><strong>Start your day productive, focused, and well nourished!</strong></p>
        </li>
        <li>
            <div class='thumb' style='background-image: url(/static/images/about-1.jpg)'></div>
            <h3>Breakfast is Essential</h3>
            <p>A habit of regular consumption and breakfast has a positive influence on your <strong>attention, concentration</strong> and <strong>memory</strong>!</p>
        </li>

        <li>
            <div class='thumb' style='background-image: url(/static/images/about-2.jpg)'></div>
            <h3>You are Unique</h3>
            <p>Everyone's body is different. People have various taste preferences and our bodies require specialized nutrients to support our particular lifestyle. <strong>Vivacity is tailored to your body type, dietary needs, and lifestyle.</strong></p>
        </li>

        <li>
            <div class='thumb' style='background-image: url(/static/images/about-3.jpg)'></div>
            <h3>Health is Wealth</h3>
            <p>Staying healthy can be <strong>convenient and cost effective</strong>. Fueling your body in the morning ensures you will be <strong>your best</strong> throughout the day.</p>
        </li>
    </ul>

</div>


<div class='section howitworks' id='howitworks'>

    <span class='line horizontal'></span>
    <span class='line vertical'></span>

    <ul>
        <li>
            <div class='thumb'>
                <svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 175 175' enable-background='new 0 0 175 175' xml:space='preserve'>
                    <path d='M148.699,26.217v140.9c0,3.349-2.679,6.112-6.112,6.112H32.412c-3.433,0-6.112-2.763-6.112-6.112v-140.9 c0-3.349,2.679-6.112,6.112-6.112h24.446v-6.111c0-3.349,2.763-6.111,6.112-6.111h21.432V4.785c0-1.674,1.423-3.014,3.098-3.014 s3.098,1.34,3.098,3.014v3.098h21.432c3.349,0,6.112,2.762,6.112,6.111v6.111h24.446C146.02,20.105,148.699,22.868,148.699,26.217z  M142.588,26.217h-24.446v6.195c0,3.349-2.763,6.111-6.112,6.111H62.97c-3.349,0-6.112-2.762-6.112-6.111v-6.195H32.412v140.9H119.9 l22.688-22.687V26.217z M62.97,32.412h49.06V13.994H62.97V32.412z M142.588,153.052l-13.981,14.065h13.981V153.052z M80.01,82.25 H69.437c-1.101,0-1.982-0.991-1.982-2.093v-6.938c0-0.441,0.33-1.321,0.661-1.652l16.08-12.556h10.133 c1.101,0,1.982,0.991,1.982,2.093v70.71c0,1.101-0.881,2.092-1.982,2.092H82.103c-1.212,0-2.093-0.991-2.093-2.092V82.25z'/>
                </svg>
            </div>
            <p>Simply <a data-scrollto='#logo'>sign up</a>, complete our HealthID™ Form about daily activity, taste and body-specific requests</p>
        </li>

        <li>
            <div class='thumb'>
                <svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 175 175' enable-background='new 0 0 175 175' xml:space='preserve'>
                    <path d='M162.868,103.723l-29.821-37.981h-0.074c-0.445-0.593-1.187-1.039-2.077-1.039h-27.061 c-1.307,1.805-2.632,3.616-3.921,5.377h11.447c0.247,0,0.492,0.013,0.734,0.039h17.467l25.592,32.565h-43.248 c-1.484,0-2.671,1.187-2.671,2.745h-0.223c-1.335,10.682-10.46,18.99-21.513,18.99s-20.177-8.308-21.513-18.99h-0.223 c0-1.558-1.187-2.745-2.671-2.745H19.847l25.592-32.565h20.802c1.292-1.752,2.626-3.569,3.976-5.415H44.104 c-0.89,0-1.632,0.445-2.077,1.039h-0.074l-29.821,37.981c-0.371,0.519-0.593,1.039-0.593,1.706v56.971 c0,2.967,2.448,5.415,5.415,5.415h141.092c2.967,0,5.415-2.448,5.415-5.415v-56.971 C163.461,104.762,163.239,104.243,162.868,103.723z M158.046,162.401H16.954V108.1h43.989c2.522,12.388,13.427,21.735,26.557,21.735 s24.035-9.347,26.557-21.735h43.989V162.401z M60.74,85.833c7.007-9.182,24.887-33.465,32.015-44.338 c1.571-2.416,3.141-5.799,3.141-9.182c0-4.591-3.866-8.698-10.631-8.698c-4.953,0-9.423,3.503-11.719,6.041 c-0.966,0.966-2.416,0.966-3.383,0l-7.37-7.491c-0.846-0.724-0.966-2.175-0.121-3.141c0,0,9.786-11.84,24.162-11.84 c17.276,0,27.424,10.994,27.424,24.404c0,6.404-1.812,10.028-4.712,15.706c-3.866,6.886-13.772,19.813-19.451,27.787h21.263 c1.208,0,2.295,1.087,2.295,2.295V88.25c0,1.208-1.087,2.295-2.295,2.295H63.036c-1.329,0-2.295-1.087-2.295-2.295V85.833z'/>
                </svg>
            </div>
            <p>A custom menu for each day of the week is created by a Certified Nutritionist to support your unique lifestyle</p>
        </li>

        <li>
            <div class='thumb'>
                <svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 175 175' enable-background='new 0 0 175 175' xml:space='preserve'>
                    <path d='M150.55,99.593c-4.84-48.464-29.105-53.304-33.945-53.304h-7.204c-0.497,0.536-1.006,1.053-1.531,1.539 c1.2,0.976,2.38,2.083,3.497,3.3h5.237c2.387,0,24.265,4.84,29.105,48.464H29.29c4.84-43.624,26.718-48.464,29.105-48.464h8.125 v-4.839h-8.125c-4.84,0-29.105,4.839-33.945,53.304c-2.652,0-4.84,2.187-4.84,4.839v50.917c0,6.697,5.436,12.133,12.133,12.133 s12.133-5.436,12.133-12.133v-7.226h87.248v7.226c0,6.697,5.436,12.133,12.133,12.133s12.133-5.436,12.133-12.133v-50.917 C155.389,101.78,153.201,99.593,150.55,99.593z M39.036,155.349c0,4.045-3.315,7.294-7.293,7.294c-4.044,0-7.293-3.249-7.293-7.294 v-7.226h14.586V155.349z M150.55,155.349c0,4.045-3.249,7.294-7.293,7.294c-3.978,0-7.293-3.249-7.293-7.294v-7.226h14.586V155.349z  M150.55,143.217H24.45v-38.785H150.55V143.217z M131.124,133.538c5.37,0,9.746-4.309,9.746-9.68s-4.376-9.68-9.746-9.68 c-5.37,0-9.68,4.309-9.68,9.68S125.754,133.538,131.124,133.538z M131.124,119.018c2.718,0,4.84,2.188,4.84,4.84 s-2.122,4.84-4.84,4.84c-2.652,0-4.84-2.188-4.84-4.84S128.472,119.018,131.124,119.018z M43.876,133.538 c5.37,0,9.68-4.309,9.68-9.68s-4.309-9.68-9.68-9.68c-5.37,0-9.746,4.309-9.746,9.68S38.506,133.538,43.876,133.538z  M43.876,119.018c2.652,0,4.84,2.188,4.84,4.84s-2.188,4.84-4.84,4.84c-2.718,0-4.84-2.188-4.84-4.84S41.158,119.018,43.876,119.018 z M63.235,126.245c0-1.326,1.127-2.387,2.453-2.387h43.624c1.326,0,2.453,1.061,2.453,2.387c0,1.393-1.127,2.453-2.453,2.453H65.688 C64.362,128.698,63.235,127.638,63.235,126.245z M60.659,77.455l7.519-7.518c0.835-0.835,2.029-0.955,2.984-0.239 c0,0,7.4,5.49,13.128,5.49c5.132,0,10.383-4.297,10.383-9.548s-5.371-9.667-14.202-9.667h-6.683c-1.194,0-2.268-1.074-2.268-2.268 v-9.906c0-1.313,1.074-2.267,2.268-2.267h6.683c8.354,0,12.77-4.058,12.77-9.19s-4.416-8.951-9.548-8.951 c-5.251,0-8.593,2.745-10.383,4.774c-0.835,0.954-2.268,0.954-3.222,0.119l-7.28-7.161c-0.955-0.835-0.835-2.267,0-3.103 c0,0,9.786-10.503,22.795-10.503c13.844,0,25.779,8.474,25.779,21.841c0,9.19-6.922,15.993-12.293,18.499v0.358 c5.609,2.387,14.441,9.787,14.441,20.051c0,13.008-11.338,22.795-27.808,22.795c-15.038,0-22.676-7.399-25.182-10.622 C59.824,79.603,59.943,78.291,60.659,77.455z'/>
                </svg>
            </div>
            <p>We deliver to your office fresh daily</p>
        </li>
    </ul>

    <div class='bigbutton-holder'>
        <a data-scrollto='#logo' class='bigbutton'>Sign Up Today!</a>
    </div>

</div>


<!--
<script>
    scripts.push(function(core) {
        require(['Mondrian'], function(Mondrian) {
            core.instances.projectsMondrian = new Mondrian({
                selector: '#index-mondrian2'
            });
        });
    });
</script>
-->

<script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-64449293-1', 'auto');
    ga('send', 'pageview');
</script>


<?php include '_footer.php'; ?>
