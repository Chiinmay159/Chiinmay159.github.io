/**
 * BoriLib Interactive Scripts
 * Version 1.0 | 2026-Ready Features
 */

// ============================================
// 1. INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  initScrollProgress();
  initNavigation();
  initParallax();
  initSearch();
  initCarousel();
  initCounterAnimation();
  initTestimonials();
  initScrollAnimations();
  initAccessibility();
});

// ============================================
// 2. SCROLL PROGRESS INDICATOR
// ============================================

function initScrollProgress() {
  const progressBar = document.getElementById('scrollProgress');

  if (!progressBar) return;

  window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    progressBar.style.width = `${Math.min(scrolled, 100)}%`;
  });
}

// ============================================
// 3. NAVIGATION
// ============================================

function initNavigation() {
  const navbar = document.querySelector('.navbar');
  const navbarToggle = document.querySelector('.navbar-toggle');
  const navbarMenu = document.querySelector('.navbar-menu');
  let lastScroll = 0;

  // Mobile menu toggle
  if (navbarToggle && navbarMenu) {
    navbarToggle.addEventListener('click', () => {
      const isExpanded = navbarToggle.getAttribute('aria-expanded') === 'true';
      navbarToggle.setAttribute('aria-expanded', !isExpanded);
      navbarMenu.classList.toggle('active');

      // Animate hamburger
      const hamburgers = navbarToggle.querySelectorAll('.hamburger');
      if (navbarMenu.classList.contains('active')) {
        hamburgers[0].style.transform = 'rotate(45deg) translateY(10px)';
        hamburgers[1].style.opacity = '0';
        hamburgers[2].style.transform = 'rotate(-45deg) translateY(-10px)';
      } else {
        hamburgers[0].style.transform = '';
        hamburgers[1].style.opacity = '1';
        hamburgers[2].style.transform = '';
      }
    });

    // Close menu on link click
    navbarMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navbarMenu.classList.remove('active');
        navbarToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Sticky navbar with hide on scroll down
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Add shadow when scrolled
    if (currentScroll > 50) {
      navbar.style.boxShadow = '0 4px 16px rgba(44, 62, 122, 0.12)';
    } else {
      navbar.style.boxShadow = '0 2px 8px rgba(44, 62, 122, 0.08)';
    }

    lastScroll = currentScroll;
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href !== '#login' && href !== '#register') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
}

// ============================================
// 4. PARALLAX EFFECT
// ============================================

function initParallax() {
  const parallaxLayers = document.querySelectorAll('.parallax-layer');

  if (parallaxLayers.length === 0) return;

  // Check if user prefers reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;

    parallaxLayers.forEach((layer, index) => {
      const speed = [0.3, 0.5, 1][index] || 1;
      const yPos = -(scrolled * speed);
      layer.style.transform = `translate3d(0, ${yPos}px, 0)`;
    });
  });
}

// ============================================
// 5. SEARCH FUNCTIONALITY
// ============================================

function initSearch() {
  const searchInput = document.querySelector('.search-input');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const advancedToggle = document.querySelector('.advanced-search-toggle');

  if (!searchInput) return;

  // Debounced search
  let searchTimeout;
  searchInput.addEventListener('input', (e) => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      handleSearch(e.target.value);
    }, 300);
  });

  // Filter buttons
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('active');
      const filter = btn.dataset.filter;
      console.log(`Filter toggled: ${filter}`);
      // In production, this would trigger filter UI
    });
  });

  // Advanced search toggle
  if (advancedToggle) {
    advancedToggle.addEventListener('click', () => {
      console.log('Advanced search toggled');
      // In production, this would show/hide advanced search panel
    });
  }

  // Voice search (placeholder)
  const voiceSearch = document.querySelector('.voice-search');
  if (voiceSearch) {
    voiceSearch.addEventListener('click', () => {
      console.log('Voice search activated');
      // In production, this would use Web Speech API
    });
  }
}

function handleSearch(query) {
  if (query.length < 2) return;

  console.log(`Searching for: ${query}`);
  // In production, this would:
  // 1. Send request to search API
  // 2. Show autocomplete suggestions
  // 3. Display results
}

// ============================================
// 6. CAROUSEL FUNCTIONALITY
// ============================================

function initCarousel() {
  const carouselTrack = document.querySelector('.carousel-track');
  const prevBtn = document.querySelector('.carousel-nav.prev');
  const nextBtn = document.querySelector('.carousel-nav.next');
  const dots = document.querySelectorAll('.dot');

  if (!carouselTrack) return;

  const items = carouselTrack.querySelectorAll('.carousel-item');
  const itemWidth = items[0]?.offsetWidth || 300;
  const gap = 24; // Gap between items
  let currentIndex = 0;
  let isAutoPlaying = true;
  let autoPlayInterval;

  // Navigation
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      scrollToIndex(Math.max(0, currentIndex - 1));
      pauseAutoPlay();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      scrollToIndex(Math.min(items.length - 1, currentIndex + 1));
      pauseAutoPlay();
    });
  }

  // Dots navigation
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      scrollToIndex(index * 3); // Jump by 3 items per dot
      pauseAutoPlay();
    });
  });

  function scrollToIndex(index) {
    currentIndex = index;
    const scrollAmount = (itemWidth + gap) * index;
    carouselTrack.scrollTo({
      left: scrollAmount,
      behavior: 'smooth'
    });
    updateDots();
  }

  function updateDots() {
    const dotIndex = Math.floor(currentIndex / 3);
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === dotIndex);
    });
  }

  // Auto-play
  function startAutoPlay() {
    autoPlayInterval = setInterval(() => {
      if (currentIndex >= items.length - 1) {
        scrollToIndex(0);
      } else {
        scrollToIndex(currentIndex + 1);
      }
    }, 5000);
  }

  function pauseAutoPlay() {
    isAutoPlaying = false;
    clearInterval(autoPlayInterval);
  }

  // Pause on hover
  carouselTrack.addEventListener('mouseenter', pauseAutoPlay);
  carouselTrack.addEventListener('mouseleave', () => {
    if (!isAutoPlaying) {
      isAutoPlaying = true;
      startAutoPlay();
    }
  });

  // Touch/swipe support
  let touchStartX = 0;
  let touchEndX = 0;

  carouselTrack.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  });

  carouselTrack.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  });

  function handleSwipe() {
    if (touchEndX < touchStartX - 50) {
      // Swipe left
      scrollToIndex(Math.min(items.length - 1, currentIndex + 1));
    }
    if (touchEndX > touchStartX + 50) {
      // Swipe right
      scrollToIndex(Math.max(0, currentIndex - 1));
    }
  }

  // Start auto-play
  startAutoPlay();
}

// ============================================
// 7. COUNTER ANIMATION
// ============================================

function initCounterAnimation() {
  const statNumbers = document.querySelectorAll('.stat-number[data-target]');

  if (statNumbers.length === 0) return;

  const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
        animateCounter(entry.target);
        entry.target.classList.add('counted');
      }
    });
  }, observerOptions);

  statNumbers.forEach(stat => observer.observe(stat));
}

function animateCounter(element) {
  const target = parseInt(element.dataset.target);
  const duration = 2000;
  const increment = target / (duration / 16); // 60fps
  let current = 0;

  const updateCounter = () => {
    current += increment;
    if (current < target) {
      element.textContent = Math.floor(current).toLocaleString();
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = target.toLocaleString() + (element.textContent.includes('+') ? '+' : '');
    }
  };

  updateCounter();
}

// ============================================
// 8. TESTIMONIALS CAROUSEL
// ============================================

function initTestimonials() {
  const testimonialCards = [
    {
      text: "BoriLib has revolutionized my research on medieval Sanskrit poetry. Access from Cambridge is seamless and instant. The advanced search capabilities are unmatched.",
      author: "Dr. Sarah Mitchell",
      title: "Cambridge University",
      field: "Sanskrit Studies"
    },
    {
      text: "The advanced search capabilities and script rendering are unmatched. Essential for Prakrit studies and cross-referencing ancient texts.",
      author: "Prof. Rahul Deshpande",
      title: "University of Mumbai",
      field: "Prakrit Literature"
    },
    {
      text: "As a Buddhist studies scholar, the Tibetan manuscript collection is invaluable. The digital preservation quality is outstanding.",
      author: "Dr. Akiko Tanaka",
      title: "Kyoto University",
      field: "Buddhist Studies"
    },
    {
      text: "The critical editions with variant readings have transformed my textual analysis work. A must-have resource for philologists.",
      author: "Dr. Hans Weber",
      title: "Heidelberg University",
      field: "Indology"
    }
  ];

  const prevBtn = document.querySelector('.testimonial-prev');
  const nextBtn = document.querySelector('.testimonial-next');
  const testimonialCard = document.querySelector('.testimonial-card');
  let currentTestimonial = 0;

  if (!prevBtn || !nextBtn || !testimonialCard) return;

  function updateTestimonial(index) {
    const testimonial = testimonialCards[index];
    const textElement = testimonialCard.querySelector('.testimonial-text');
    const nameElement = testimonialCard.querySelector('.author-name');
    const titleElement = testimonialCard.querySelector('.author-title');
    const fieldElement = testimonialCard.querySelector('.author-field');

    // Fade out
    testimonialCard.style.opacity = '0';
    testimonialCard.style.transform = 'translateY(20px)';

    setTimeout(() => {
      textElement.textContent = testimonial.text;
      nameElement.textContent = testimonial.author;
      titleElement.textContent = testimonial.title;
      fieldElement.textContent = testimonial.field;

      // Fade in
      testimonialCard.style.opacity = '1';
      testimonialCard.style.transform = 'translateY(0)';
    }, 300);
  }

  prevBtn.addEventListener('click', () => {
    currentTestimonial = (currentTestimonial - 1 + testimonialCards.length) % testimonialCards.length;
    updateTestimonial(currentTestimonial);
  });

  nextBtn.addEventListener('click', () => {
    currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
    updateTestimonial(currentTestimonial);
  });

  // Ensure smooth transition
  testimonialCard.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
}

// ============================================
// 9. SCROLL ANIMATIONS
// ============================================

function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.fade-up');

  // Check if user prefers reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    animatedElements.forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
    return;
  }

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

  // Stagger animation for sections
  const sections = document.querySelectorAll('section > .container > *');
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  sections.forEach((section, index) => {
    if (!section.classList.contains('fade-up')) {
      section.style.opacity = '0';
      section.style.transform = 'translateY(20px)';
      section.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
      sectionObserver.observe(section);
    }
  });
}

// ============================================
// 10. ACCESSIBILITY ENHANCEMENTS
// ============================================

function initAccessibility() {
  // Keyboard navigation for carousel
  const carouselItems = document.querySelectorAll('.carousel-item');
  carouselItems.forEach(item => {
    item.setAttribute('tabindex', '0');
    item.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        item.querySelector('.btn-view-item')?.click();
      }
    });
  });

  // Keyboard navigation for category cards
  const categoryCards = document.querySelectorAll('.category-card');
  categoryCards.forEach(card => {
    card.setAttribute('tabindex', '0');
    card.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.click();
      }
    });
  });

  // Announce dynamic content changes to screen readers
  const announcer = document.createElement('div');
  announcer.setAttribute('role', 'status');
  announcer.setAttribute('aria-live', 'polite');
  announcer.setAttribute('aria-atomic', 'true');
  announcer.className = 'sr-only';
  document.body.appendChild(announcer);

  // Store announcer globally for use in other functions
  window.announceToScreenReader = (message) => {
    announcer.textContent = message;
    setTimeout(() => {
      announcer.textContent = '';
    }, 1000);
  };

  // Focus management for modals (when implemented)
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      // Close any open modals/dropdowns
      document.querySelectorAll('.language-dropdown').forEach(dropdown => {
        dropdown.style.opacity = '0';
        dropdown.style.visibility = 'hidden';
      });
    }
  });
}

// ============================================
// 11. LANGUAGE SELECTOR
// ============================================

const languageButtons = document.querySelectorAll('.language-btn, .footer-language button');
languageButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const lang = btn.textContent.trim().split(' ')[0];

    // Remove active class from all buttons
    languageButtons.forEach(b => b.classList.remove('active'));

    // Add active class to clicked button
    btn.classList.add('active');

    // Update HTML lang attribute
    document.documentElement.setAttribute('lang', btn.getAttribute('lang') || 'en');

    // Store preference
    localStorage.setItem('preferredLanguage', lang);

    console.log(`Language changed to: ${lang}`);
    // In production, this would trigger UI language change
  });
});

// Load saved language preference
const savedLanguage = localStorage.getItem('preferredLanguage');
if (savedLanguage) {
  const matchingBtn = Array.from(languageButtons).find(btn =>
    btn.textContent.includes(savedLanguage)
  );
  if (matchingBtn) {
    matchingBtn.click();
  }
}

// ============================================
// 12. PERFORMANCE OPTIMIZATIONS
// ============================================

// Lazy load images
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }
        imageObserver.unobserve(img);
      }
    });
  });

  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}

// Prefetch on hover (desktop only)
if (window.matchMedia('(min-width: 900px)').matches) {
  let hoverTimeout;
  document.querySelectorAll('a[href^="/"], a[href^="http"]').forEach(link => {
    link.addEventListener('mouseenter', () => {
      hoverTimeout = setTimeout(() => {
        const href = link.getAttribute('href');
        if (href && !link.dataset.prefetched) {
          const prefetchLink = document.createElement('link');
          prefetchLink.rel = 'prefetch';
          prefetchLink.href = href;
          document.head.appendChild(prefetchLink);
          link.dataset.prefetched = 'true';
        }
      }, 100);
    });

    link.addEventListener('mouseleave', () => {
      clearTimeout(hoverTimeout);
    });
  });
}

// ============================================
// 13. ERROR HANDLING
// ============================================

window.addEventListener('error', (e) => {
  console.error('Global error:', e.error);
  // In production, this would send to error tracking service
});

window.addEventListener('unhandledrejection', (e) => {
  console.error('Unhandled promise rejection:', e.reason);
  // In production, this would send to error tracking service
});

// ============================================
// 14. ANALYTICS (PLACEHOLDER)
// ============================================

function trackEvent(category, action, label) {
  console.log(`Analytics: ${category} - ${action} - ${label}`);
  // In production, this would send to analytics service
  // Example: gtag('event', action, { 'event_category': category, 'event_label': label });
}

// Track important interactions
document.querySelectorAll('.btn-hero-primary, .btn-primary').forEach(btn => {
  btn.addEventListener('click', () => {
    trackEvent('Button', 'Click', btn.textContent.trim());
  });
});

document.querySelectorAll('.category-card').forEach(card => {
  card.addEventListener('click', () => {
    const title = card.querySelector('.category-title')?.textContent.trim();
    trackEvent('Category', 'Navigate', title);
  });
});

// ============================================
// 15. UTILITIES
// ============================================

// Debounce function
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Throttle function
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Check if element is in viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// ============================================
// 16. CONSOLE WELCOME MESSAGE
// ============================================

console.log(
  '%cBoriLib%c - Digital Heritage Reimagined',
  'font-size: 24px; font-weight: bold; color: #2C3E7A;',
  'font-size: 16px; color: #757575;'
);
console.log('Bhandarkar Oriental Research Institute | Since 1917');
console.log('Explore 125,000+ books and 28,000+ manuscripts');
console.log('---');
console.log('Interested in our API? Contact us at contact@borilib.com');

// ============================================
// END OF SCRIPTS
// ============================================
