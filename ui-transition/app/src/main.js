require('../styles.scss');
require('file?name=index.html!../index.html');

((global) => {

    let getUserInput = () => {
        return $('#text-input').val();
    };

    let isValid = (value) => {
        if (value.length > 2)
            return true;
        
        return false;
    };

    let showMessage = () => {
        $('#input-prompt').show();
    };

    let hideMessage = () => {
        $('#input-prompt').hide();
    };

    let transition = () => {
        // jquery transition
        $('#initial-state').hide();
        $('#success-state').show();        
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