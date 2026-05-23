document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Mobile Menu Toggle Logic
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if(mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        
        // Close menu when clicking a link
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // 2. Initialize AOS (Scroll Animations)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: true,
            offset: 50,
        });
    }

    // 3. Initialize Swiper for Proof Vault
    if (typeof Swiper !== 'undefined') {
        new Swiper('.proofSwiper', {
            slidesPerView: 1,
            spaceBetween: 40,
            loop: true,
            grabCursor: true,
            pagination: { el: '.swiper-pagination', clickable: true },
            navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
            centeredSlides: true,
        });

        // 4. Initialize Swiper for Testimonials
        new Swiper('.testimonialSwiper', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            grabCursor: true,
            autoplay: {
                delay: 6000,
                disableOnInteraction: false,
            },
            pagination: { el: '.swiper-pagination', clickable: true },
        });
    }
});
