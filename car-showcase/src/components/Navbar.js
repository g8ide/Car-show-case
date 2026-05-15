/**
 * Navbar Component
 * Responsible for: logo, navigation links, and CTA button.
 * Handles mobile hamburger menu toggling.
 */

export function Navbar() {
  const html = /* html */`
    <nav class="navbar" id="navbar" aria-label="Main navigation">
      <!-- Brand / Logo -->
      <a href="#" class="navbar__brand" id="navbar-brand" aria-label="Car Showcase Home">
        <div class="navbar__logo" aria-hidden="true">🚗</div>
        <span class="navbar__title">Car<span>Showcase</span></span>
      </a>

      <!-- Navigation Links -->
      <ul class="navbar__nav" id="navbar-nav" role="menubar">
        <li role="none"><a href="#overview" role="menuitem" id="nav-overview">Overview</a></li>
        <li role="none"><a href="#specs" role="menuitem" id="nav-specs">Specs</a></li>
        <li role="none"><a href="#contact" role="menuitem" id="nav-contact">Contact</a></li>
        <li role="none"><a href="#buy" role="menuitem" id="nav-buy" class="navbar__cta">Buy Now</a></li>
      </ul>

      <!-- Hamburger (mobile) -->
      <button
        class="navbar__hamburger"
        id="hamburger-btn"
        aria-label="Toggle navigation menu"
        aria-expanded="false"
        aria-controls="navbar-nav"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  `;

  // Mount
  document.getElementById('navbar-mount').innerHTML = html;

  // Hamburger toggle
  const btn = document.getElementById('hamburger-btn');
  const nav = document.getElementById('navbar-nav');

  btn.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', isOpen.toString());
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!e.target.closest('#navbar')) {
      nav.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });

  // Close on link click (mobile)
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    });
  });
}
