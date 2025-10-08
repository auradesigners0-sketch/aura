document.addEventListener('DOMContentLoaded', function() {

    // --- Translation System ---
    const translations = {
        en: {
            "page-title": "Aura - Design · Develop · Host",
            "nav-home": "Home",
            "nav-about": "About",
            "nav-services": "Services",
            "nav-portfolio": "Portfolio",
            "nav-contact": "Contact",
            "hero-title": "Design · Develop · Host",
            "hero-subtitle": "Crafting digital experiences that resonate with purpose and prestige",
            "hero-cta": "Start Your Project",
            "keyword-1": "Innovation",
            "keyword-2": "Excellence",
            "keyword-3": "Legacy",
            "keyword-4": "Impact",
            "about-title": "About Us",
            "about-text": "Aura exists to empower entrepreneurs and institutions with digital solutions that transcend the ordinary. We believe in crafting experiences that not only function flawlessly but also tell a story of heritage, innovation, and purpose. In a world of fleeting digital trends, we build lasting digital legacies.",
            "mission-text": "Our Mission: To be the premier digital partner for African businesses and institutions, blending global design excellence with local soul to create powerful, lasting legacies.",
            "about-cta": "Learn More About Us",
            "services-title": "Our Services",
            "service-1-title": "Design",
            "service-1-text": "Creating visually stunning interfaces that blend aesthetic appeal with intuitive functionality, tailored to your unique brand identity.",
            "service-2-title": "Develop",
            "service-2-text": "Building robust, scalable digital solutions with clean code and cutting-edge technology to power your vision.",
            "service-3-title": "Host",
            "service-3-text": "Providing secure, reliable hosting solutions that ensure your digital presence remains accessible and performs optimally.",
            "service-cta": "Request a Proposal",
            "portfolio-title": "Our Work",
            "portfolio-preview": "Preview",
            "portfolio-cta": "See More Work",
            "audience-title": "Who We Serve",
            "audience-1-title": "Companies",
            "audience-1-desc": "Driving business growth",
            "audience-2-title": "Schools",
            "audience-2-desc": "Empowering future leaders",
            "audience-3-title": "Churches",
            "audience-3-desc": "Building digital communities",
            "audience-4-title": "Charities",
            "audience-4-desc": "Amplifying noble causes",
            "audience-5-title": "Engineers",
            "audience-5-desc": "Structuring a better world",
            "audience-6-title": "Catering",
            "audience-6-desc": "Feeding the world",
            "audience-7-title": "Hotels & restaurants",
            "audience-7-desc": "Executive services",
            "audience-8-title": "Architects",
            "audience-8-desc": "Designing dream spaces",
            "audience-9-title": "Entrepreneurs",
            "audience-9-desc": "Launching visionary ideas",
            "contact-title": "Get In Touch",
            "contact-cta": "Contact Us",
            "footer-phone": "+254 717 043 283",
            "footer-email": "auradesigners0@gmail.com",
            "footer-location-title": "Location & Hours",
            "footer-address": "Goba, Kinondoni, Dar es Salaam, Tanzania",
            "footer-hours-title": "Working Hours:",
            "footer-hours": "Mon - Fri: 8:00 AM - 4:00 PM",
            "footer-weekend": "Saturday: 8:00 AM - 2:00 PM",
            "footer-sunday": "Sunday: Closed"
        },
        sw: {
            "page-title": "Aura - Tunabuni, Tunaunda na Kusakinisha",
            "nav-home": "Nyumbani",
            "nav-about": "Kuhusu",
            "nav-services": "Huduma",
            "nav-portfolio": "Kazi Zetu",
            "nav-contact": "Mawasiliano",
            "hero-title": "Tunabuni, Tunaunda na Kusakinisha",
            "hero-subtitle": "Kuunda uzoefu wa kidijitali unaolingana na dhamira na hadhi",
            "hero-cta": "Fanya Kazi Nasi",
            "keyword-1": "Ubunifu",
            "keyword-2": "Ukuu",
            "keyword-3": "Urithi",
            "keyword-4": "Athari",
            "about-title": "Kuhusu Sisi",
            "about-text": "Aura ipo ili kuwawezesha wajasiriamali na taasisi kwa suluhisho za kidijitali zinazozidi ya kawaida. Tunasadika kuunda uzoefu ambao hazi tu kufanya kazi kwa usahihi bali pia kusimulia hadithi ya urithi, ubunifu, na dhamira. Katika ulimbuu wa mwelekeo wa kidijitali unaobadilika, tunajenga urithi wa kidijitali wa kudumu.",
            "mission-text": "Dhamira Yetu: Kuwa mshirika wa kipekee wa kidijitali kwa biashara na taasisi za Kiafrika, kuchanganya ubunifu bora wa kimataifa na roho ya ndani ili kuunda urithi wenye nguvu na wa kudumu.",
            "about-cta": "Jua Zaidi Kuhusu Sisi",
            "services-title": "Huduma Zetu",
            "service-1-title": "Ubunifu",
            "service-1-text": "Tunabuni kazi zenye muonekano wa kipekee wenye mvuto na unarahisisha matumizi. Tunabuni kulingana na muonekano na utambulisho wa kipekee wa chapa yako.",
            "service-2-title": "Kuunda",
            "service-2-text": "Kazi zetu zinaleta suluhu bora la kazi yako katika mtandao, linazoweza kupanua biashara yako na kukuza maono yako na kuwazidi washindani wako.",
            "service-3-title": "Kusakinisha Mtandaoni",
            "service-3-text": "Tunatoa suluhu za kusakinisha page yako sehemu ya kuaminika ambazo huhakikisha uwepo wako wa kidigitali unapatikana na unafanya kazi vizuri.",
            "service-cta": "Wasilisha Ombi",
            "portfolio-title": "Kazi Zetu",
            "portfolio-preview": "Tazama",
            "portfolio-cta": "Tazama Kazi Zaidi",
            "audience-title": "Tunafanya Kazi Na",
            "audience-1-title": "Makampuni",
            "audience-1-desc": "Tunasaidia ukuaji wa biashara",
            "audience-2-title": "Mashule na Vyuo",
            "audience-2-desc": "Kuwawezesha wasomi na viongozi wa wakati ujao",
            "audience-3-title": "Makanisa",
            "audience-3-desc": "Kujenga taasisi za kiimani katika ulimwengu wa kidijitali",
            "audience-4-title": "Mashirika",
            "audience-4-desc": "Kuongeza sauti ya mashirika ya katika ulimwengu wa kidigitali",
            "audience-5-title": "Wahandisi",
            "audience-5-desc": "Kujenga ulimwengu bora zaidi kwa uhandisi makini",
            "audience-6-title": "Makampuni Ya Ujenzi",
            "audience-6-desc": "makamouni ya ujenzi wa makazi binafsi na maofisi",
            "audience-7-title": "Makampuni Ya Vyakula",
            "audience-7-desc": "makamouni ya usambazaji wa vyakula maofisini na event mbalmbali",
            "audience-8-title": "Mahoteli na Migahawa",
            "audience-8-desc": "Makampuni ya Malazi na Vyakula ",
            "audience-9-title": "Wajasiriamali",
            "audience-9-desc": "Kutoka kwa wakulima, mpaka kwa watu wauzaji wa jumla",
            "contact-title": "Wasiliana Nasi",
            "contact-cta": "Wasiliana Nasi",
            "footer-phone": "+255 717 043 283",
            "footer-email": "auradesigners0@gmail.com",
            "footer-location-title": "Mahali & Masaa",
            "footer-address": "Goba center, Kinondoni, Dar es salaam, Tanzania",
            "footer-hours-title": "Masaa ya Kazi:",
            "footer-hours": "Jumatatu - Ijumaa: 8:00 AM - 4:00 PM",
            "footer-weekend": "Jumamosi: 8:00 AM - 2:00 PM",
            "footer-sunday": "Jumapili: Imefungwa"
        }
    };

    let currentLang = localStorage.getItem('auraLang') || 'en';

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('auraLang', lang);
        document.documentElement.lang = lang;

        const titleElement = document.querySelector('title');
        if (titleElement && titleElement.dataset.translate) {
            titleElement.textContent = translations[lang][titleElement.dataset.translate];
        }

        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[lang] && translations[lang][key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translations[lang][key];
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });

        const langSwitch = document.getElementById('langSwitch');
        langSwitch.textContent = lang === 'en' ? 'SW' : 'EN';
        
        // Restart typing animation when language changes
        startTypingAnimation();
    }

    const langSwitch = document.getElementById('langSwitch');
    langSwitch.addEventListener('click', (e) => {
        e.preventDefault();
        const newLang = currentLang === 'en' ? 'sw' : 'en';
        setLanguage(newLang);
    });

    setLanguage(currentLang);

    // --- Mobile Navigation Toggle ---
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        hamburger.setAttribute('aria-expanded', navMenu.classList.contains('active'));
    });

    document.querySelectorAll('.nav-menu li a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
        });
    });

    // --- Header Scroll Effect with Debounce ---
    const header = document.querySelector('.header');
    
    function debounce(func, wait) {
        let timeout;
        return function() {
            const context = this;
            const args = arguments;
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(context, args), wait);
        };
    }

    const handleScroll = debounce(() => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(56, 50, 22, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
            header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.backgroundColor = 'transparent';
            header.style.backdropFilter = 'none';
            header.style.boxShadow = 'none';
        }
    }, 10);

    window.addEventListener('scroll', handleScroll);

    // --- Smooth Scrolling for Anchor Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // --- Typing Animation for Hero Subtitle ---
    function startTypingAnimation() {
        const subtitleElement = document.getElementById('heroSubtitle');
        const text = translations[currentLang]['hero-subtitle'];
        let index = 0;
        
        // Clear the element first
        subtitleElement.textContent = '';
        
        // Create a span for the cursor
        const cursor = document.createElement('span');
        cursor.className = 'typing-cursor';
        cursor.textContent = '|';
        subtitleElement.appendChild(cursor);
        
        function typeChar() {
            if (index < text.length) {
                // Insert the character before the cursor
                const char = document.createTextNode(text.charAt(index));
                subtitleElement.insertBefore(char, cursor);
                index++;
                setTimeout(typeChar, 50);
            } else {
                // Animation complete, add cursor blink
                cursor.classList.add('blink');
            }
        }
        
        // Start typing after hero title animation
        setTimeout(typeChar, 1500);
    }

    // --- Hero Animations ---
    function animateHeroTitle() {
        const heroTitle = document.getElementById('heroTitle');
        heroTitle.style.opacity = '0';
        heroTitle.style.transform = 'translateY(50px)';
        
        setTimeout(() => {
            heroTitle.style.opacity = '1';
            heroTitle.style.transform = 'translateY(0)';
            heroTitle.style.transition = 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        }, 300);
    }

    function animateHeroContent() {
        const cta = document.getElementById('heroCta');
        
        cta.style.opacity = '0';
        cta.style.transform = 'translateY(50px)';
        
        setTimeout(() => {
            cta.style.opacity = '1';
            cta.style.transform = 'translateY(0)';
            cta.style.transition = 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        }, 3500);
    }

    // --- Create Floating Particles ---
    function createParticles() {
        const particlesContainer = document.getElementById('particles');
        const particleCount = window.innerWidth < 768 ? 15 : 30;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 15 + 's';
            particle.style.animationDuration = (15 + Math.random() * 10) + 's';
            particlesContainer.appendChild(particle);
        }
    }

    // --- Enhanced Intersection Observer for Animations ---
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('fade-in-up')) {
                    setTimeout(() => {
                        entry.target.classList.add('is-visible');
                    }, index * 100);
                } else if (entry.target.classList.contains('service-card')) {
                    setTimeout(() => {
                        entry.target.classList.add('animate-in');
                    }, index * 150);
                } else if (entry.target.classList.contains('portfolio-item')) {
                    setTimeout(() => {
                        entry.target.classList.add('animate-in');
                    }, index * 100);
                } else if (entry.target.classList.contains('audience-block')) {
                    setTimeout(() => {
                        entry.target.classList.add('animate-in');
                    }, index * 120);
                }
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const elementsToObserve = document.querySelectorAll('.fade-in-up, .service-card, .portfolio-item, .audience-block');
    elementsToObserve.forEach(el => {
        observer.observe(el);
    });

    // --- Back to Top Button ---
    const backToTopButton = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // --- Initialize Hero Animations ---
    animateHeroTitle();
    startTypingAnimation();
    animateHeroContent();
    createParticles();

    // --- Update Active Navigation Link on Scroll ---
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // --- Animate navigation menu on load ---
    setTimeout(() => {
        navMenu.classList.add('nav-visible');
    }, 500);

});