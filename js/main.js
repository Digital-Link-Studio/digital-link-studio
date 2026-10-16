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
