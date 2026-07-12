const SERVICE_ID = 'service_3c25gwc';
const TEMPLATE_ID = 'template_atlktth';
const PUBLIC_KEY = 'GPLnuKl1gYmhc4bU1';

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initNavScroll();
  initActiveNavLinks();
  initScrollReveal();
  initContactForm();
});

function initMobileMenu() {
  const mainListDiv = document.getElementById('mainListDiv');
  const mediaButton = document.getElementById('mediaButton');

  if (!mediaButton || !mainListDiv) return;

  mediaButton.addEventListener('click', () => {
    mainListDiv.classList.toggle('show_list');
    mediaButton.classList.toggle('active');
  });

  mainListDiv.querySelectorAll('ul li a').forEach(link => {
    link.addEventListener('click', () => {
      mainListDiv.classList.remove('show_list');
      mediaButton.classList.remove('active');
    });
  });
}

function initNavScroll() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });
}

function initActiveNavLinks() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav div.main_list ul li a');

  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
          });
        }
      });
    },
    { rootMargin: '-40% 0px -55% 0px' }
  );

  sections.forEach(section => observer.observe(section));
}

function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  reveals.forEach(el => observer.observe(el));
}

function initContactForm() {
  const form = document.getElementById('myForm');
  if (!form || typeof emailjs === 'undefined') return;

  emailjs.init(PUBLIC_KEY);

  form.addEventListener('submit', e => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form)
      .then(() => {
        alert('Message sent successfully!');
        form.reset();
      })
      .catch(error => {
        console.error('EmailJS Error:', error);
        alert('Failed to send message. Please try again.');
      });
  });
}
