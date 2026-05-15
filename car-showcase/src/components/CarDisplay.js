/**
 * CarDisplay Component
 * Responsible for: hero section with car image, name, description,
 * specifications grid, price, and CTA buttons.
 */

export function CarDisplay() {
  // ── Car Data (easy to swap out) ──────────────────────────────────────
  const car = {
    badge:       'Available Now · 2024 Model',
    name:        'BMW M4',
    model:       'Competition xDrive',
    description: `The BMW M4 Competition xDrive is the pinnacle of German engineering — 
                  a machine that blends razor-sharp handling with raw, thundering power. 
                  Born on the track and refined for the road, every curve it takes 
                  is a statement. This isn't just a car. It's an experience.`,
    image:       'src/assets/car.png',
    imageAlt:    'BMW M4 Competition xDrive — matte black, studio shot',
    specs: [
      { icon: '⚡', label: 'Engine',      value: '3.0L Twin-Turbo' },
      { icon: '🏎️', label: 'Horsepower',  value: '503 HP' },
      { icon: '🔄', label: '0–60 mph',    value: '3.4 Seconds' },
      { icon: '⚙️', label: 'Drivetrain',  value: 'All-Wheel Drive' },
      { icon: '📅', label: 'Year',        value: '2024' },
      { icon: '📍', label: 'Mileage',     value: '1,200 mi' },
    ],
    price:       '$89,500',
    priceNote:   'Negotiable · Finance available',
  };

  // ── Build Spec Items HTML ─────────────────────────────────────────────
  const specsHTML = car.specs.map((s, i) => /* html */`
    <div class="spec-item" id="spec-${i}" role="listitem">
      <div class="spec-item__icon" aria-hidden="true">${s.icon}</div>
      <div class="spec-item__label">${s.label}</div>
      <div class="spec-item__value">${s.value}</div>
    </div>
  `).join('');

  // ── Full Component HTML ───────────────────────────────────────────────
  const html = /* html */`
    <main class="hero" id="overview" aria-label="Car showcase main section">

      <!-- Badge -->
      <div class="hero__badge" id="hero-badge" aria-label="Listing status">
        <span class="hero__badge-dot" aria-hidden="true"></span>
        ${car.badge}
      </div>

      <!-- Car Heading -->
      <h1 class="hero__heading" id="car-name">${car.name}</h1>
      <p class="hero__subheading" id="car-model">${car.model}</p>

      <!-- Car Image -->
      <div class="hero__image-wrap" id="car-image-wrap">
        <div class="hero__image-glow" aria-hidden="true"></div>
        <img
          class="hero__image"
          id="car-image"
          src="${car.image}"
          alt="${car.imageAlt}"
          loading="eager"
          decoding="async"
        />
      </div>

      <!-- Info Cards Grid -->
      <div class="hero__info" id="car-info">

        <!-- Description Card -->
        <div class="card" id="description-card">
          <p class="card__label">About This Car</p>
          <h2 class="card__title">${car.name} ${car.model}</h2>
          <p class="card__text" id="car-description">${car.description}</p>
        </div>

        <!-- Specs Card -->
        <div class="card" id="specs" aria-label="Car specifications">
          <p class="card__label">Specifications</p>
          <div class="specs-grid" role="list" aria-label="Key specs">
            ${specsHTML}
          </div>
        </div>

        <!-- Price + CTA Row -->
        <div class="hero__price-row" id="price-cta-row">
          <!-- Price -->
          <div class="price__block">
            <span class="price__label">Asking Price</span>
            <span class="price__amount" id="car-price" aria-label="Price: ${car.price}">${car.price}</span>
            <span class="price__note">${car.priceNote}</span>
          </div>

          <!-- CTA Buttons -->
          <div class="cta-group" id="contact" role="group" aria-label="Purchase actions">
            <button
              class="btn btn--primary"
              id="btn-buy-now"
              aria-label="Buy this car now"
              onclick="document.getElementById('buy-modal').showModal()"
            >
              🚀 Buy Now
            </button>
            <button
              class="btn btn--outline"
              id="btn-contact"
              aria-label="Contact the seller"
              onclick="document.getElementById('contact-modal').showModal()"
            >
              📞 Contact Seller
            </button>
          </div>
        </div>

      </div><!-- /.hero__info -->
    </main>

    <!-- ── Buy Modal ─────────────────────────────────── -->
    <dialog class="modal" id="buy-modal" aria-modal="true" aria-labelledby="buy-modal-title">
      <div class="modal__inner">
        <button class="modal__close" id="buy-modal-close" aria-label="Close dialog" onclick="document.getElementById('buy-modal').close()">✕</button>
        <div class="modal__icon">🚗</div>
        <h2 class="modal__title" id="buy-modal-title">Ready to Own This Beast?</h2>
        <p class="modal__body">
          Submit your details and our team will reach out within 24 hours to arrange 
          a test drive and finalize your purchase.
        </p>
        <form class="modal__form" id="buy-form" onsubmit="handleFormSubmit(event, 'buy-modal')">
          <input class="modal__input" id="buy-name"  type="text"  placeholder="Full Name"      required autocomplete="name" />
          <input class="modal__input" id="buy-email" type="email" placeholder="Email Address"   required autocomplete="email" />
          <input class="modal__input" id="buy-phone" type="tel"   placeholder="Phone Number"    autocomplete="tel" />
          <button class="btn btn--primary" type="submit" id="buy-submit" style="width:100%;justify-content:center;">
            ✅ Submit Enquiry
          </button>
        </form>
      </div>
    </dialog>

    <!-- ── Contact Modal ─────────────────────────────── -->
    <dialog class="modal" id="contact-modal" aria-modal="true" aria-labelledby="contact-modal-title">
      <div class="modal__inner">
        <button class="modal__close" id="contact-modal-close" aria-label="Close dialog" onclick="document.getElementById('contact-modal').close()">✕</button>
        <div class="modal__icon">📞</div>
        <h2 class="modal__title" id="contact-modal-title">Contact the Seller</h2>
        <p class="modal__body">Have questions? Drop us a message and we'll get back to you shortly.</p>
        <div class="modal__contact-info">
          <a class="modal__contact-link" id="contact-phone" href="tel:+15551234567">📱 +1 (555) 123-4567</a>
          <a class="modal__contact-link" id="contact-email" href="mailto:sales@carshowcase.com">✉️ sales@carshowcase.com</a>
        </div>
        <form class="modal__form" id="contact-form" onsubmit="handleFormSubmit(event, 'contact-modal')">
          <input class="modal__input" id="contact-name"    type="text"     placeholder="Your Name"    required autocomplete="name" />
          <textarea class="modal__input modal__textarea" id="contact-message" placeholder="Your Message..." rows="4" required></textarea>
          <button class="btn btn--primary" type="submit" id="contact-submit" style="width:100%;justify-content:center;">
            📤 Send Message
          </button>
        </form>
      </div>
    </dialog>
  `;

  // Mount
  document.getElementById('main-mount').innerHTML = html;

  // ── Form submit handler (global so inline onclick works) ─────────────
  window.handleFormSubmit = (e, modalId) => {
    e.preventDefault();
    const modal = document.getElementById(modalId);
    modal.innerHTML = /* html */`
      <div class="modal__inner modal__success">
        <div class="modal__icon" style="font-size:3rem">✅</div>
        <h2 class="modal__title">Thank You!</h2>
        <p class="modal__body">We've received your request and will be in touch within 24 hours.</p>
        <button class="btn btn--primary" style="margin-top:1rem;width:100%;justify-content:center;" onclick="document.getElementById('${modalId}').close()">
          Close
        </button>
      </div>
    `;
  };

  // Close modal on backdrop click
  ['buy-modal', 'contact-modal'].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('click', (e) => {
        if (e.target === el) el.close();
      });
    }
  });
}
