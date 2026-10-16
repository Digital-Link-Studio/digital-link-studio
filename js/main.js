// Digital Link Studio: site scripts

// Lets CSS tell when scripts are running, so enhancements degrade cleanly
document.documentElement.classList.add('js');

// Mobile navigation toggle
(function () {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('site-nav');
  if (!toggle || !nav) return;

  function setOpen(open) {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    nav.classList.toggle('is-open', open);
  }

  toggle.addEventListener('click', function () {
    setOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });

  // Close with Escape and return focus to the button
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && nav.classList.contains('is-open')) {
      setOpen(false);
      toggle.focus();
    }
  });

  // Reset when resizing up to desktop
  window.matchMedia('(min-width: 861px)').addEventListener('change', function (mq) {
    if (mq.matches) setOpen(false);
  });
})();

// "How we help" disclosure in the main navigation
(function () {
  document.querySelectorAll('.site-nav__trigger').forEach(function (trigger) {
    const item = trigger.parentElement;

    function setOpen(open) {
      trigger.setAttribute('aria-expanded', String(open));
    }

    // Set here rather than in the HTML, so the state is only announced when this script controls it
    setOpen(false);

    trigger.addEventListener('click', function () {
      setOpen(trigger.getAttribute('aria-expanded') !== 'true');
    });

    // Close with Escape and return focus to the button, before the mobile menu handles Escape
    item.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && trigger.getAttribute('aria-expanded') === 'true') {
        event.stopPropagation();
        setOpen(false);
        trigger.focus();
      }
    });

    // Close when focus or a click moves elsewhere
    item.addEventListener('focusout', function (event) {
      if (!item.contains(event.relatedTarget)) setOpen(false);
    });

    document.addEventListener('click', function (event) {
      if (!item.contains(event.target)) setOpen(false);
    });
  });
})();

// Contact form: sends without leaving the page when scripts run.
// Without scripts the form posts to Formspree as a normal form.
(function () {
  const form = document.getElementById('contact-form');
  if (!form || !window.fetch) return;

  const status = document.getElementById('contact-status');
  const button = form.querySelector('[type="submit"]');
  let sending = false;

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (sending) return;

    sending = true;
    button.setAttribute('aria-disabled', 'true');
    status.className = 'contact-form__status';
    status.textContent = 'Sending your message…';

    fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' }
    })
      .then(function (response) {
        if (!response.ok) throw new Error('Request failed');

        const sent = document.createElement('div');
        sent.className = 'contact-sent';
        sent.setAttribute('tabindex', '-1');
        sent.innerHTML =
          '<h2 class="contact-sent__title">Thank you, your message is on its way.</h2>' +
          '<p class="contact-sent__text">Shanda will reply to the email address you gave.</p>';
        form.replaceWith(sent);
        sent.focus();
      })
      .catch(function () {
        sending = false;
        button.removeAttribute('aria-disabled');
        status.className = 'contact-form__status contact-form__status--error';
        status.textContent = 'Your message did not send. Please try again, or email shanda@digitallink.studio.';
      });
  });
})();
