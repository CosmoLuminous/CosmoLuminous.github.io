// ===================================
// Mobile Navigation Toggle
// ===================================

document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu   = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function () {
            const isOpen = navMenu.classList.toggle('active');
            navToggle.setAttribute('aria-expanded', isOpen);

            const spans = navToggle.querySelectorAll('span');
            if (isOpen) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity   = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = '';
                spans[1].style.opacity   = '';
                spans[2].style.transform = '';
            }
        });

        // Close on nav link click
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => closeMenu());
        });

        // Close on outside click
        document.addEventListener('click', function (e) {
            if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
                closeMenu();
            }
        });
    }

    function closeMenu() {
        if (!navMenu.classList.contains('active')) return;
        navMenu.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.querySelectorAll('span').forEach(s => {
            s.style.transform = '';
            s.style.opacity   = '';
        });
    }
});

// ===================================
// Smooth Scroll with offset
// ===================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const target = document.querySelector(targetId);
        if (!target) return;
        e.preventDefault();
        const navH = document.querySelector('.navbar')?.offsetHeight ?? 0;
        window.scrollTo({ top: target.offsetTop - navH - 16, behavior: 'smooth' });
    });
});

// ===================================
// Active nav link on scroll
// ===================================

(function () {
    const sections  = document.querySelectorAll('section[id]');
    const navLinks  = document.querySelectorAll('.nav-menu a');
    const navbar    = document.querySelector('.navbar');

    window.addEventListener('scroll', function () {
        const navH = navbar?.offsetHeight ?? 0;
        let current = '';

        sections.forEach(sec => {
            if (window.scrollY >= sec.offsetTop - navH - 80) {
                current = sec.id;
            }
        });

        navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
        });
    }, { passive: true });
})();

// ===================================
// Intersection Observer — scroll-in animations
// ===================================

(function () {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('anim-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.anim-ready').forEach(el => observer.observe(el));
})();

// ===================================
// Timeline filter
// ===================================

(function () {
    const tabs  = document.querySelectorAll('.tl-tab');
    const items = document.querySelectorAll('.tl-list .tl-item');

    if (!tabs.length) return;

    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            const filter = this.dataset.filter;

            // Update active tab
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');

            // Show/hide items
            items.forEach(item => {
                const cat = item.dataset.cat;
                const show = filter === 'all' || cat === filter;
                item.hidden = !show;
            });
        });
    });
})();

// ===================================
// Back to Top
// ===================================

(function () {
    const btn = document.createElement('button');
    btn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    btn.className = 'back-to-top';
    btn.setAttribute('aria-label', 'Back to top');
    document.body.appendChild(btn);

    window.addEventListener('scroll', () => {
        btn.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });

    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
})();

// ===================================
// Dynamic footer year
// ===================================

document.addEventListener('DOMContentLoaded', function () {
    const yearEl = document.getElementById('footerYear');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
});

// ===================================
// Keyboard navigation focus styles
// ===================================

document.addEventListener('DOMContentLoaded', function () {
    document.body.addEventListener('keydown', e => {
        if (e.key === 'Tab') document.body.classList.add('keyboard-nav');
    });
    document.body.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-nav');
    });
});

const focusStyle = document.createElement('style');
focusStyle.textContent = `
    body.keyboard-nav *:focus {
        outline: 2px solid #4E9E88;
        outline-offset: 2px;
    }
`;
document.head.appendChild(focusStyle);
