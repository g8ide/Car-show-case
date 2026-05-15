/**
 * Footer Component
 * Responsible for: brand name, copyright notice, and quick links.
 */

export function Footer() {
  const year = new Date().getFullYear();

  const html = /* html */`
    <footer class="footer" id="footer" role="contentinfo" aria-label="Site footer">

      <!-- Brand -->
      <div class="footer__brand" id="footer-brand">
        <span aria-hidden="true">🚗</span>
        CarShowcase
      </div>

      <!-- Copyright -->
      <p class="footer__copy" id="footer-copy">
        © ${year} CarShowcase. All rights reserved.
      </p>

      <!-- Quick Links -->
      <nav class="footer__links" aria-label="Footer navigation">
        <a href="#overview" id="footer-link-overview">Overview</a>
        <a href="#specs"    id="footer-link-specs">Specs</a>
        <a href="#contact"  id="footer-link-contact">Contact</a>
      </nav>

    </footer>
  `;

  document.getElementById('footer-mount').innerHTML = html;
}
