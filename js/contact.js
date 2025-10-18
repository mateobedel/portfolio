import $ from 'jquery';

const MAX_LEN = 64;
let glitchTimeouts = [];
let glitchIntervals = [];
const shuffleIn = [25, 52, 21, 55, 2, 31, 6, 38, 5, 43, 56, 60, 59, 51, 22, 54, 0, 8, 24, 13, 45, 27, 9, 46, 18, 53, 49, 61, 17, 10, 37, 28, 4, 15, 14, 40, 62, 63, 29, 36, 34, 35, 3, 16, 48, 42, 33, 47, 57, 50, 26, 41, 7, 23, 20, 19, 1, 30, 39, 11, 12, 32, 44, 58];
const shuffleOut = [31, 46, 58, 26, 57, 12, 10, 29, 19, 55, 27, 40, 16, 17, 37, 23, 22, 5, 32, 62, 9, 54, 50, 13, 42, 60, 8, 45, 2, 3, 35, 38, 28, 36, 39, 52, 20, 0, 30, 21, 18, 44, 49, 25, 41, 15, 51, 56, 47, 61, 14, 24, 1, 7, 43, 53, 11, 4, 59, 48, 63, 6, 34, 33];


function clearGlitchTimers() {
    glitchTimeouts.forEach(clearTimeout);
    glitchTimeouts = [];
    glitchIntervals.forEach(clearInterval);
    glitchIntervals = [];
}

function repeatAndPad(unit, len) {
    const reps = Math.floor(len / unit.length);
    let out = unit.repeat(reps);
    if (out.length < len) out += " ".repeat(len - out.length);
    return out.slice(0, len);
}


function glitchTransition($el, fromText, toText, opts) {

    clearGlitchTimers();
    const chars = fromText.split('');
    $el.text(chars.join(''));

    shuffleIn.forEach((idx, i) => {
        const delay = Math.floor((i / MAX_LEN) * opts.scrambleDuration);
        glitchTimeouts.push(setTimeout(() => {
            chars[idx] = ".";
            $el.text(chars.join(''));
        }, delay));
    });

    shuffleOut.forEach((idx, i) => {
        const delay = opts.scrambleDuration + Math.floor((i / MAX_LEN) * opts.resolveDuration);
        glitchTimeouts.push(setTimeout(() => {
            chars[idx] = toText[idx];
            $el.text(chars.join(''));
        }, delay));
    });
}

function hover_contact() {

    var circle_text = $('#circle-text');
    var circle_text_path = $('#circle-text textPath');
    circle_text_path.text(repeatAndPad("contact ", MAX_LEN));

    $('.social-link').on('mouseenter', function() {
        glitchTransition(
            circle_text_path,
            circle_text_path.text(),
            repeatAndPad(this.id+" ", MAX_LEN),
            {scrambleDuration: 300,resolveDuration: 300}
        );
    });

    $('.contact-info').on('mouseenter', function() {
    }).on('mouseleave', function() {
        
        circle_text.css('fill', 'var(--purple)');
        glitchTransition(
            circle_text_path, 
            circle_text_path.text(),
            repeatAndPad("contact ", MAX_LEN),
            {scrambleDuration: 300, resolveDuration: 300}
        );
    });
}

export function contact_events() {
    hover_contact();
}