// Initialize Vanta.js Birds
window.addEventListener('DOMContentLoaded', () => {
    VANTA.BIRDS({
        el: "#vanta-canvas",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        mouseControls: false,
        touchControls: false,
        backgroundColor: 0x05000f,
        color1: 0x6b2fd9,
        color2: 0x8b5cf6,
        birdSize: 1.20, /* Slightly smaller birds for better look */
        wingSpan: 15.00,
        speedLimit: 4.00,
        quantity: 3.00, /* Reduced bird quantity slightly for better performance */
        separation: 50.00,
        alignment: 50.00,
        cohesion: 50.00
    });
});

// Optimized Scroll Handler
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
}, { passive: true });

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Reveal Animations (Intersection Observer)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('team-card-premium') || 
                entry.target.classList.contains('project-card') ||
                entry.target.classList.contains('testimonial-card') ||
                entry.target.classList.contains('tech-box') ||
                entry.target.classList.contains('stepsec') ||
                entry.target.classList.contains('ov-card')) {
                entry.target.classList.add('reveal');
            } else {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        }
    });
}, observerOptions);

document.querySelectorAll('section, .team-card-premium, .project-card, .testimonial-card, .tech-box, .stepsec, .ov-card').forEach((el, index) => {
    if (el.classList.contains('team-card-premium') || 
        el.classList.contains('project-card') ||
        el.classList.contains('testimonial-card') ||
        el.classList.contains('tech-box') ||
        el.classList.contains('stepsec') ||
        el.classList.contains('ov-card')) {
        el.style.transitionDelay = `${(index % 3) * 0.1}s`;
    } else {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease-out';
    }
    observer.observe(el);
});

// Custom Cursor Logic
const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");

let mouseX = 0;
let mouseY = 0;
let outlineX = 0;
let outlineY = 0;

window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (cursorDot) {
        cursorDot.style.left = `${mouseX}px`;
        cursorDot.style.top = `${mouseY}px`;
    }
});

const animateCursor = () => {
    if (!cursorOutline) return;
    outlineX += (mouseX - outlineX) * 0.25;
    outlineY += (mouseY - outlineY) * 0.25;
    cursorOutline.style.left = `${outlineX}px`;
    cursorOutline.style.top = `${outlineY}px`; 
    requestAnimationFrame(animateCursor);
};
animateCursor();

const updateCursorListeners = () => {
    if (!cursorOutline) return;
    const interactiveElements = document.querySelectorAll('a, button, .btn, input, select, textarea, .team-card-premium, .project-card, .testimonial-card');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursorOutline.style.backgroundColor = 'rgba(139, 92, 246, 0.1)';
            cursorOutline.style.borderColor = 'rgba(139, 92, 246, 0.5)';
        });
        el.addEventListener('mouseleave', () => {
            cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorOutline.style.backgroundColor = 'transparent';
            cursorOutline.style.borderColor = 'var(--accent-primary)';
        });
    });
};

// Project Data & Modal Logic (Unchanged)
const projectData = {
    socialvibing: {
        title: "SocialVibing", status: "LIVE", statusClass: "live",
        description: "A full-featured social networking platform with web app, mobile app, and admin panel.",
        features: ["Real-time posts and stories", "Follow/unfollow system", "In-app messaging", "Push notifications", "Admin dashboard"],
        tech: { frontend: "React Native + React", backend: "Node.js + Express", database: "Firebase + Firestore" },
        tags: ["Social", "Mobile", "Real-time"],
        images: ["/public/assets/images/projects/socialvibing.jpg.png", "/public/assets/images/projects/socialvibing1.jpeg", "/public/assets/images/projects/socialvibing2.jpeg"],
        actions: [
            { label: "View on Play Store", icon: "fab fa-google-play", link: "#" },
            { label: "View on App Store", icon: "fab fa-apple", link: "#" },
            { label: "Visit Website", icon: "fas fa-external-link-alt", link: "https://socialvibing.online/" }
        ]
    },
    tourease: {
        title: "TourEase", status: "LIVE", statusClass: "live",
        description: "A smart travel planning and booking platform for Pakistan and international destinations.",
        features: ["Tour browsing and booking", "Custom itinerary planning", "Real-time availability", "Payment integration", "Review system"],
        tech: { frontend: "Flutter", backend: "Node.js", database: "MongoDB" },
        tags: ["Travel", "Booking", "Flutter"],
        images: ["/public/assets/images/projects/tourease.jpg", "/public/assets/images/projects/tourease1.jpg", "/public/assets/images/projects/tourease2.jpg"],
        actions: [{ label: "Visit Website", icon: "fas fa-external-link-alt", link: "#" }, { label: "View Code", icon: "fab fa-github", link: "#" }]
    },
    artgallery: {
        title: "Art Gallery", status: "LIVE", statusClass: "live",
        description: "A premium digital art marketplace for discovering and purchasing unique artworks.",
        features: ["High-res art previews", "Secure payment gateway", "Artist profiles", "Category-based search", "Order tracking"],
        tech: { frontend: "React + Tailwind", backend: "Node.js", database: "PostgreSQL" },
        tags: ["Art", "Marketplace", "Design"],
        images: ["/public/assets/images/projects/artgallery.png", "/public/assets/images/projects/artgallery1.png", "/public/assets/images/projects/artgallery2.png"],
        actions: [{ label: "Visit Gallery", icon: "fas fa-external-link-alt", link: "#" }, { label: "View Portfolio", icon: "fas fa-briefcase", link: "#" }]
    },
    scholariq: {
        title: "ScholarIQ", status: "LIVE", statusClass: "live",
        description: "An AI-powered scholarship discovery portal with fraud detection for students worldwide.",
        features: ["AI scholarship matching", "Fraud detection system", "Application tracking", "Deadline reminders", "University database"],
        tech: { frontend: "Next.js", backend: "Python + FastAPI", database: "PostgreSQL + Supabase" },
        tags: ["AI", "Education", "Next.js"],
        images: ["/public/assets/images/projects/scholariq.png", "/public/assets/images/projects/scholariq1.png", "/public/assets/images/projects/scholariq.png"],
        actions: [{ label: "Visit Portal", icon: "fas fa-external-link-alt", link: "#" }, { label: "View Case Study", icon: "fas fa-file-alt", link: "#" }]
    }
};

const modal = document.getElementById('project-modal');
const modalClose = document.querySelector('.modal-close');

function openModal(projectId) {
    const data = projectData[projectId];
    if (!data) return;
    document.getElementById('modal-title').textContent = data.title;
    document.getElementById('modal-description').textContent = data.description;
    document.getElementById('modal-status').textContent = data.status;
    document.getElementById('modal-status').className = `status-badge ${data.statusClass}`;
    document.getElementById('modal-frontend').textContent = data.tech.frontend;
    document.getElementById('modal-backend').textContent = data.tech.backend;
    document.getElementById('modal-database').textContent = data.tech.database;
    document.getElementById('modal-tags').innerHTML = data.tags.map(tag => `<span class="tech-tag">${tag}</span>`).join(' ');
    document.getElementById('modal-features').innerHTML = data.features.map(f => `<li>${f}</li>`).join('');
    document.getElementById('modal-actions').innerHTML = data.actions.map(a => `<a href="${a.link}" class="btn ${a.label.includes('View') || a.label.includes('Visit') ? 'btn-primary' : 'btn-outline'}"><i class="${a.icon}" style="margin-right: 8px;"></i> ${a.label}</a>`).join('');
    
    // Gallery Logic
    const galleryContainer = document.getElementById('modal-gallery-container');
    if (galleryContainer && data.images && data.images.length > 0) {
        galleryContainer.innerHTML = `
            <div class="main-gallery-view">
                <img src="${data.images[0]}" id="main-gallery-img" alt="${data.title}">
            </div>
            <div class="gallery-thumbnails">
                ${data.images.map((img, idx) => `
                    <div class="thumb-item ${idx === 0 ? 'active' : ''}" onclick="switchGalleryImage('${img}', this)">
                        <img src="${img}" alt="Thumbnail ${idx + 1}">
                    </div>
                `).join('')}
            </div>
        `;
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Global function for gallery switching
window.switchGalleryImage = (src, thumb) => {
    document.getElementById('main-gallery-img').src = src;
    document.querySelectorAll('.thumb-item').forEach(el => el.classList.remove('active'));
    thumb.classList.add('active');
};

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
        openModal(card.getAttribute('data-id'));
    });
});

if (modalClose) modalClose.addEventListener('click', closeModal);
if (modal) modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
window.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

// Testimonials Carousel Logic
const track = document.getElementById('testimonials-track');
if (track) {
    const slides = Array.from(track.children);
    const nextButton = document.getElementById('next-testimonial');
    const prevButton = document.getElementById('prev-testimonial');
    const dotsNav = document.getElementById('carousel-dots');

    let currentIndex = 0;
    let autoplayTimer;

    // Create Dots
    if (dotsNav && slides.length > 0) {
        slides.forEach((_, i) => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(i));
            dotsNav.appendChild(dot);
        });
    }

    const dots = dotsNav ? Array.from(dotsNav.children) : [];

    const updateSlidePosition = () => {
        if (!track || slides.length === 0) return;
        const cardWidth = slides[0].offsetWidth;
        const gap = 60; // 30px margin on each side
        const viewportWidth = track.parentElement.offsetWidth;
        
        const centerOffset = (viewportWidth - cardWidth) / 2;
        const moveAmount = currentIndex * (cardWidth + gap);
        
        track.style.transform = `translateX(${-moveAmount + centerOffset}px)`;

        slides.forEach((slide, index) => {
            if (index === currentIndex) slide.classList.add('active');
            else slide.classList.remove('active');
        });

        dots.forEach((dot, index) => {
            if (index === currentIndex) dot.classList.add('active');
            else dot.classList.remove('active');
        });
    };

    const goToSlide = (index) => {
        currentIndex = (index + slides.length) % slides.length;
        updateSlidePosition();
        resetAutoplay();
    };

    const nextSlide = () => goToSlide(currentIndex + 1);
    const prevSlide = () => goToSlide(currentIndex - 1);

    if (nextButton) nextButton.addEventListener('click', nextSlide);
    if (prevButton) prevButton.addEventListener('click', prevSlide);

    const startAutoplay = () => {
        autoplayTimer = setInterval(nextSlide, 4000);
    };

    const stopAutoplay = () => {
        clearInterval(autoplayTimer);
    };

    const resetAutoplay = () => {
        stopAutoplay();
        startAutoplay();
    };

    track.addEventListener('mouseenter', stopAutoplay);
    track.addEventListener('mouseleave', startAutoplay);

    // Swipe/Drag Support
    let isDragging = false;
    let startPos = 0;

    const dragStart = (e) => {
        isDragging = true;
        startPos = e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
        stopAutoplay();
        track.style.transition = 'none';
    };

    const dragEnd = (e) => {
        if (!isDragging) return;
        isDragging = false;
        const endPos = e.type.includes('mouse') ? e.pageX : e.changedTouches[0].clientX;
        const diff = endPos - startPos;
        track.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
        if (diff < -50) nextSlide();
        else if (diff > 50) prevSlide();
        else updateSlidePosition();
    };

    track.addEventListener('mousedown', dragStart);
    track.addEventListener('touchstart', dragStart);
    window.addEventListener('mouseup', dragEnd);
    window.addEventListener('touchend', dragEnd);

    // Initial position
    window.addEventListener('load', updateSlidePosition);
    window.addEventListener('resize', updateSlidePosition);
    startAutoplay();
}


// Logo Text - Keep as BST
const logoText = document.getElementById('dynamic-logo-text');
if (logoText) {
    logoText.textContent = "BST";
}

if (typeof updateCursorListeners === 'function') updateCursorListeners();

// Tech Stack Orbit Items Population
const populateOrbits = () => {
    const techData = {
        frontend: [
            { name: "React", icon: "fab fa-react" },
            { name: "Next.js", icon: "fas fa-bolt" },
            { name: "TS", icon: "fas fa-code" },
            { name: "Tailwind", icon: "fab fa-css3-alt" }
        ],
        backend: [
            { name: "Node.js", icon: "fab fa-node-js" },
            { name: "Python", icon: "fab fa-python" },
            { name: "FastAPI", icon: "fas fa-rocket" },
            { name: "Express", icon: "fas fa-train" }
        ],
        database: [
            { name: "Supabase", icon: "fas fa-bolt" },
            { name: "Firebase", icon: "fas fa-fire" },
            { name: "Postgres", icon: "fas fa-database" },
            { name: "Mongo", icon: "fas fa-leaf" }
        ],
        mobile: [
            { name: "Flutter", icon: "fas fa-mobile-alt" },
            { name: "RN", icon: "fab fa-react" },
            { name: "OpenAI", icon: "fas fa-robot" },
            { name: "LLMs", icon: "fas fa-brain" }
        ]
    };

    Object.keys(techData).forEach(category => {
        const container = document.getElementById(`items-${category}`);
        if (!container) return;

        const items = techData[category];
        const radius = 150; // Match SVG circle radius

        items.forEach((item, index) => {
            const angle = (index / items.length) * 2 * Math.PI;
            const orbitItem = document.createElement('div');
            orbitItem.className = 'orbit-item';
            
            // Initial position based on angle
            const x = 225 + radius * Math.cos(angle);
            const y = 225 + radius * Math.sin(angle);
            
            orbitItem.style.left = `${(x / 450) * 100}%`;
            orbitItem.style.top = `${(y / 450) * 100}%`;

            orbitItem.innerHTML = `
                <div class="orbit-bubble">
                    <i class="${item.icon} orbit-icon"></i>
                    <span class="orbit-name">${item.name}</span>
                </div>
            `;
            container.appendChild(orbitItem);
            
            // Save angle for animation
            orbitItem.dataset.angle = angle;
        });

        // Add rotation animation
        let currentRotation = 0;
        const animate = () => {
            currentRotation += 0.005;
            container.querySelectorAll('.orbit-item').forEach((item, index) => {
                const baseAngle = parseFloat(item.dataset.angle);
                const angle = baseAngle + currentRotation;
                const x = 225 + radius * Math.cos(angle);
                const y = 225 + radius * Math.sin(angle);
                item.style.left = `${(x / 450) * 100}%`;
                item.style.top = `${(y / 450) * 100}%`;
            });
            requestAnimationFrame(animate);
        };
        animate();
    });
};

document.addEventListener('DOMContentLoaded', populateOrbits);

// Back to Top Functionality
const backToTopBtn = document.getElementById('backToTop');
if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ── AJAX Contact Form Submission ──────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const btn = document.getElementById('contact-submit-btn');
        const successBox = document.getElementById('form-success');

        // Show loading state
        btn.disabled = true;
        btn.innerHTML = '<i class="fas fa-spinner fa-spin" style="margin-right:8px;"></i>Sending...';

        try {
            const data = new FormData(form);
            const response = await fetch('https://formspree.io/f/meevwdbq', {
                method: 'POST',
                body: data,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                // Hide form, show success message
                form.style.display = 'none';
                successBox.style.display = 'block';
            } else {
                throw new Error('Server error');
            }
        } catch (err) {
            // Reset button on error
            btn.disabled = false;
            btn.innerHTML = 'Send Inquiry';
            alert('Something went wrong. Please try again or email us directly.');
        }
    });
});
