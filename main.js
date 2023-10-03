import emailjs from '@emailjs/browser';


const emailApiKey = import.meta.env.VITE_EMAIL_KEY;
const serviceId = import.meta.env.VITE_SERVICE_ID;
const templateId = import.meta.env.VITE_TEMPLATE_ID;

const scrollButton = document.querySelector('.landingButton');

scrollButton.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default anchor link behavior

    // Get the target section (in this case, the "works" section)
    const targetSection = document.getElementById('works')

    // Scroll to the target section with smooth behavior
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });

emailjs.init(emailApiKey);

window.onload = function() {

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        
        emailjs.sendForm(serviceId, templateId, this)
            .then(function() {
                console.log('SUCCESS!');
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}