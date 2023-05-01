



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

// TO RECEIVE THE FEEDBACKS FROM THA FORM 
(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init('3PlactCk5HlvJA44P');
})();

window.onload = function() {
    var form = document.getElementById('contact-form');
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      // generate a five digit number for the contact_number variable
      // this.contact_number.value = Math.random() * 100000 | 0;
      // these IDs from the previous steps
      emailjs.sendForm('service_7i1tndl', 'template_ylw9btf', this)
        .then(function() {
          console.log('SUCCESS!');
          form.reset(); // reset the form values
        }, function(error) {
          console.log('FAILED...', error);
        });
    });
  }
  
//   $name = $_POST['name'];
//   $email = $_POST['email'];
//   $countryCode = $_POST['countryCode'];
//   $tel = $_POST['tel'];
//   $msgobject = $_POST['msgobject'];
//   $message = $_POST['message'];
