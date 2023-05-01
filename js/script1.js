



// // scroll reveal
// ScrollReveal({ 
//     reset: true,
//     distance: '100px',
//     duration : 2000,
//     delay: 200
// });


// ScrollReveal().reveal(, { origin: 'left' });
// ScrollReveal().reveal(, { origin: 'right' });

// document.addEventListener('DOMContentLoaded', function() {
//     // Initialize ScrollReveal
//     ScrollReveal().reveal({
//         delay: 200,
//         // origin: 'bottom',
//         distance: '100px',
//         duration: 2000,
//         // reset: true
//     });

//     ScrollReveal().reveal('.bar', { origin: 'top' });
//     ScrollReveal().reveal('.header', { origin: 'bottom' });
    
// });
















// Typed Js 


// const typed = new Typed('.multiple-text', {
//     strings: ['BIENVENUE','WELCOME',"willKOMMEN"],
//     typeSpeed: 100,
//     backSpeed: 100,
//     backDelay: 1000,
//     loop: true
// });

document.addEventListener('DOMContentLoaded', function() {
    // Array of strings to be typed
    var strings = ["BIENVENUE", "WELLCOME", "WILLKOMMEN"];
    
    // Initialize Typed.js
    var typed = new Typed('.multiple-text', {
        strings: strings,
        typeSpeed: 60,
        backSpeed: 60,
        loop: true,
        backDelay: 1500
    });
});


// document.addEventListener('DOMContentLoaded', function() {
//     // Array of strings to be typed
//     var strings = ["Web Developer", "Designer", "Creative Thinker"];
    
//     // Initialize Typed.js
//     var typed = new Typed('#typed', {
//         strings: strings,
//         typeSpeed: 60,
//         loop: true,
//         backDelay: 1500
//     });
// });
