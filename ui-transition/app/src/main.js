require('../styles.scss');
require('../assets/stylesheets/animate.css');
require('file?name=index.html!../index.html');
let $ = require('jquery');
window.jQuery = $;
window.$ = $;

(() => {
    // Add animateCss to jquery
    $.fn.extend({
        animateCss: function (animationName, callback) {
            var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            this.addClass('animated ' + animationName).one(animationEnd, function() {
                $(this).removeClass('animated ' + animationName);

                if (callback && typeof callback === 'function') {
                    callback();
                }
            });
        }
    });
})();

$(document).ready(() => {

    let minChars = 3;
    let progressAnimSpeed = 1000; // 1.0 seconds

    let startingPercent = 40;
    let goalPercent = 100;
    let defaultPercentCss = 10; // default percent (set in css)
    let percentLeft = (goalPercent - startingPercent);
    let pointsLeft = 35; // 35 points

    initProgress();

    function initProgress() {
        $('#progress-carot').animate({ left: (startingPercent - defaultPercentCss) + '%' }, 10);
        $('#progress-bar').animate({ width: startingPercent + '%' }, 10);
    }

    function getUserInput() {
        return $('#text-input').val();
    }

    function isValid(value) {
        if (value.length <= minChars)
            return false;
        
        return true;
    }

    function showMessage() {
        $('#input-prompt-message').html(`
            Please enter more than ${minChars} characters.
        `);
        $('#input-prompt-message').attr('aria-hidden', 'false');
        $('#input-prompt').show();
    }

    function hideMessage() {
        $('#input-prompt').hide();
        $('#input-prompt-message').attr('aria-hidden', 'true');
    }

    // Objective
    function transition() {
        // jquery transition

        // increase the progress bar
        // reduce the points needed to go
        // hide initial state
        // pop in success state

        $('#progress-carot').animate({ left: (goalPercent - defaultPercentCss) + '%' }, progressAnimSpeed);
        $('#progress-bar').animate({ width: goalPercent + '%' }, {
            duration: progressAnimSpeed,
            progress: (anim, percent, remainingMs) => {
                $('#points-left').html(pointsLeft - Math.floor(pointsLeft * percent));
            },
            complete: () => {
                $('#initial-state').hide();
                $('#success-state').show();                
                $('#success-state').animateCss('bounceIn');              
            }
        });
        
    }

    // Submit the Achievement Code
    window.submitAchievementCode = () => {
        hideMessage();

        let code = getUserInput();

        if (isValid(code)) {
            $('#loading-icon-container').show();

            setTimeout(() => { // simulate server-validation of the request
                $('#loading-icon-container').hide();
                transition();
            }, 2000); 
        } else {
            showMessage();
        }
    };
    
    // Reset the demo
    window.resetDemo = () => {
        $('#text-input').val("");
        hideMessage();

        initProgress();
        $('#points-left').html(pointsLeft);

        $('#success-state').hide();
        $('#initial-state').show();
    };

    // Dismiss initial-state
    window.dismissInitial = () => {
        $('#initial-state').animateCss('zoomOutUp', () => {
            $('#initial-state').hide();
        });
    };

    // Dismiss success-state
    window.dismissSuccess = () => {
        $('#success-state').animateCss('bounceOut', () => {
            $('#success-state').hide();
        }); 
    };

});
