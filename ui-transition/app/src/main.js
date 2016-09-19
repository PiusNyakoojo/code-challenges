require('../styles.scss');
require('../assets/stylesheets/animate.css');
require('file?name=index.html!../index.html');

((global) => {

    let minChars = 3;
    let progressAnimSpeed = 1600; // 1.6 seconds

    let startingPercent = 20;
    let percentLeft = (100 - startingPercent);
    let pointsLeft = 35; // 35 points

    let getUserInput = () => {
        return $('#text-input').val();
    };

    let isValid = (value) => {
        if (value.length <= minChars)
            return false;
        
        return true;
    };

    let showMessage = () => {
        $('#input-prompt-message').html(`
            Please enter more than ${minChars} characters.
        `);
        $('#input-prompt').show();
    };

    let hideMessage = () => {
        $('#input-prompt').hide();
    };

    // Objective
    let transition = () => {
        // jquery transition
        //$('#initial-state').hide();
        //$('#success-state').show();

        // increase the progress bar
        // reduce the points needed to go
        // fade out initial state
        // pop in success state

        $('#progress-carot').animate({ left: percentLeft + '%' }, progressAnimSpeed);
        $('#progress-bar').animate({ width: '100%' }, {
            duration: progressAnimSpeed,
            progress: (anim, percent, remainingMs) => {
                $('#points-left').html(pointsLeft - Math.floor(pointsLeft * percent));
            },
            complete: () => {
                $('#initial-state').fadeOut();
                $('#success-state').slideDown();              
            }
        });
        
    };

    // Submit the Achievement Code
    global.submitAchievementCode = () => {
        hideMessage();

        let code = getUserInput();

        if (isValid(code))
            transition();
        else
            showMessage();
    };
    
    // Reset the demo
    global.resetDemo = () => {
        $('#text-input').val("");

        $('#progress-carot').animate({ left: (startingPercent - 20) + '%' }, 10);
        $('#progress-bar').animate({ width: startingPercent + '%' }, 10);
        $('#points-left').html(pointsLeft);

        $('#success-state').hide();
        $('#initial-state').show();
    };

    // Dismiss initial-state
    global.dismissInitial = () => {
        $('#initial-state').hide();
    };

    // Dismiss success-state
    global.dismissSuccess = () => {
        $('#success-state').hide();
    };

})(window);