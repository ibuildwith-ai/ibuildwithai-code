// =============================================================================
// MOBILE MENU v2 — Flat list navigation
// =============================================================================

document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const mobileNav = document.getElementById('mobileNav');

  if (!mobileMenuToggle || !mobileNav) {
    return;
  }

  function toggleMobileMenu() {
    const isActive = mobileMenuToggle.classList.contains('active');

    if (isActive) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  }

  function openMobileMenu() {
    mobileMenuToggle.classList.add('active');
    mobileNav.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    mobileMenuToggle.classList.remove('active');
    mobileNav.classList.remove('open');
    document.body.style.overflow = '';
    mobileMenuToggle.focus();
  }

  mobileMenuToggle.addEventListener('click', toggleMobileMenu);

  // Close with Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && mobileNav.classList.contains('open')) {
      closeMobileMenu();
    }
  });

  // Close on resize to desktop
  window.addEventListener('resize', function() {
    if (window.innerWidth > 1050) {
      closeMobileMenu();
    }
  });

  // Close menu when navigating to internal pages
  const mobileNavLinks = mobileNav.querySelectorAll('a');
  mobileNavLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      if (this.hostname === window.location.hostname) {
        closeMobileMenu();
      }
    });
  });
});
