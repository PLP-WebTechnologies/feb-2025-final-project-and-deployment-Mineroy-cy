// Dark Mode Toggle
const toggleBtn = document.getElementById('toggleTheme');
toggleBtn?.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Contact Form Handler
const form = document.getElementById('contactForm');
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  document.getElementById('confirmationMessage').textContent = 'Thank you for your message!';
  form.reset();
});
