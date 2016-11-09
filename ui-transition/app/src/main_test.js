let chai = require('chai');
let expect = chai.expect;
let $ = require('jquery');
window.$ = window.jQuery = $;

describe('Submitting achievement code', () => {
    
    let setText = (text, selector) => {
        let input = $(selector) || $('#text-input');
        let e = $.Event('keypress');
        e.which = e.keyCode = 13;
        return input.val(text).trigger(e);
    };
/*
    it('retrieves user input', () => {
        
    });

    it('validates user input', () => {

    });

    it('prompts user of invalid input', () => {

    });

    it('transitions from initial-state to success-state', () => {

    });
*/
});
