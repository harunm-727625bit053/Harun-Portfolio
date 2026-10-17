// EmailJS setup: replace these three placeholders with values from your EmailJS dashboard.
// These are public frontend values; never put your Gmail password or a private API key here.
const EMAILJS_SERVICE_ID = "YOUR_EMAILJS_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_EMAILJS_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_EMAILJS_PUBLIC_KEY";
const PORTFOLIO_EMAIL = "harunm2294@gmail.com";

const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.textContent = isOpen ? '×' : '☰';
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.textContent = '☰';
  }));
}

const contactForm = document.querySelector('#contact-form');
const contactStatus = document.querySelector('#contact-status');
const contactSubmit = document.querySelector('#contact-submit');

if (contactForm && contactStatus && contactSubmit) {
  contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    contactStatus.textContent = '';

    if (
      !window.emailjs ||
      EMAILJS_SERVICE_ID === 'YOUR_EMAILJS_SERVICE_ID' ||
      EMAILJS_TEMPLATE_ID === 'YOUR_EMAILJS_TEMPLATE_ID' ||
      EMAILJS_PUBLIC_KEY === 'YOUR_EMAILJS_PUBLIC_KEY'
    ) {
      contactStatus.textContent = 'The contact form is not configured yet. Please use the Email me button, or finish the EmailJS setup described in README.md.';
      contactStatus.classList.add('error');
      return;
    }

    const formData = new FormData(contactForm);
    const name = String(formData.get('from_name') || '').trim();
    const replyTo = String(formData.get('reply_to') || '').trim();
    const subject = String(formData.get('subject') || '').trim() || 'Portfolio contact message';
    const message = String(formData.get('message') || '').trim();

    if (!name || !replyTo || !message) {
      contactStatus.textContent = 'Please fill in your name, email, and message.';
      contactStatus.classList.add('error');
      return;
    }

    contactSubmit.disabled = true;
    contactSubmit.innerHTML = 'Sending…';
    contactStatus.classList.remove('error', 'success');

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          to_email: PORTFOLIO_EMAIL,
          from_name: name,
          reply_to: replyTo,
          subject,
          message
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      contactForm.reset();
      contactStatus.textContent = 'Message sent successfully. Thank you for reaching out!';
      contactStatus.classList.add('success');
    } catch (error) {
      console.error('EmailJS error:', error);
      contactStatus.textContent = 'Sorry, your message could not be sent. Please use the Email me button instead.';
      contactStatus.classList.add('error');
    } finally {
      contactSubmit.disabled = false;
      contactSubmit.innerHTML = 'Send message <span>↗</span>';
    }
  });
}
