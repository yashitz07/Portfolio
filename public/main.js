// Replace these with your actual values
const SERVICE_ID = 'service_3c25gwc';
const TEMPLATE_ID = 'template_atlktth';
const PUBLIC_KEY = 'GPLnuKl1gYmhc4bU1'; 

// Initialize EmailJS
emailjs.init(PUBLIC_KEY);

const form = document.getElementById('myForm');
form.addEventListener('submit', (e) => {
  e.preventDefault();

  emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form)
    .then(() => {
      alert("Message sent successfully! 📩");
      form.reset();
    })
    .catch((error) => {
      console.error('EmailJS Error:', error);
      alert("Failed to send message. Please try again.");
    });
});
