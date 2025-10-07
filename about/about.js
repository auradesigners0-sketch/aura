document.addEventListener('DOMContentLoaded', function() {

    // --- Translation System ---
    const translations = {
        en: {
            "page-title": "About Us - Aura",
            "nav-home": "Home",
            "nav-about": "About",
            "nav-services": "Services",
            "nav-portfolio": "Portfolio",
            "nav-contact": "Contact",
            "about-hero-title": "About Aura",
            "about-hero-subtitle": "We are a team of passionate creators, developers, and strategists dedicated to crafting digital experiences that inspire and transform.",
            "our-story-title": "Our Story",
            "story-text-1": "Founded in 2020, Aura emerged from a simple yet powerful vision: to create digital experiences that transcend the ordinary. What began as a small team of passionate developers and designers has grown into a full-service digital agency serving clients across Africa and beyond.",
            "story-text-2": "Our journey has been defined by innovation, excellence, and an unwavering commitment to our clients' success. We've helped startups launch their first products, established enterprises transform their digital presence, and nonprofits amplify their impact through technology.",
            "story-text-3": "Today, Aura stands as a testament to what's possible when creativity meets technical expertise. We continue to push boundaries, challenge conventions, and deliver solutions that not only meet expectations but exceed them.",
            "mission-title": "Our Mission",
            "mission-text": "To be the premier digital partner for African businesses and institutions, blending global design excellence with local soul to create powerful, lasting digital legacies.",
            "vision-title": "Our Vision",
            "vision-text": "To transform how African businesses connect with their audiences through innovative digital solutions that inspire, engage, and deliver measurable results.",
            "values-title": "Our Core Values",
            "value-1-title": "Innovation",
            "value-1-text": "We constantly explore new technologies and creative approaches to deliver cutting-edge solutions that set our clients apart.",
            "value-2-title": "Excellence",
            "value-2-text": "We pursue perfection in every project, ensuring the highest quality standards and attention to detail in everything we create.",
            "value-3-title": "Integrity",
            "value-3-text": "We build relationships based on trust, transparency, and ethical business practices that honor our commitments.",
            "value-4-title": "Collaboration",
            "value-4-text": "We believe in the power of partnership, working closely with clients to transform their vision into reality.",
            "team-title": "Meet Our Team",
            "team-1-name": "Alex Johnson",
            "team-1-role": "CEO & Founder",
            "team-1-bio": "Visionary leader with 15+ years in digital innovation, passionate about transforming businesses through technology.",
            "team-2-name": "Sarah Chen",
            "team-2-role": "CTO",
            "team-2-bio": "Technical architect with expertise in scalable solutions and emerging technologies.",
            "team-3-name": "Michael Osei",
            "team-3-role": "Creative Director",
            "team-3-bio": "Award-winning designer focused on creating intuitive, beautiful user experiences.",
            "team-4-name": "Grace Kimani",
            "team-4-role": "Head of Operations",
            "team-4-bio": "Operations expert ensuring smooth project delivery and exceptional client satisfaction.",
            "stat-1-label": "Projects Completed",
            "stat-2-label": "Happy Clients",
            "stat-3-label": "Team Members",
            "stat-4-label": "Years Experience",
            "cta-title": "Ready to Start Your Project?",
            "cta-text": "Let's work together to bring your vision to life. Contact us today for a consultation.",
            "cta-button": "Get In Touch",
            "footer-phone": "+254 700 123 456",
            "footer-email": "hello@aura.co.ke",
            "footer-location-title": "Location & Hours",
            "footer-address": "123 Design Lane, Creative City, CC 12345, Kenya",
            "footer-hours-title": "Working Hours:",
            "footer-hours": "Mon - Fri: 9:00 AM - 6:00 PM",
            "footer-weekend": "Saturday: 10:00 AM - 4:00 PM",
            "footer-sunday": "Sunday: Closed"
        },
        sw: {
            "page-title": "Kuhusu Sisi - Aura",
            "nav-home": "Nyumbani",
            "nav-about": "Kuhusu",
            "nav-services": "Huduma",
            "nav-portfolio": "Kazi Zetu",
            "nav-contact": "Mawasiliano",
            "about-hero-title": "Kuhusu Aura",
            "about-hero-subtitle": "Timu ya waundaji wa shauku, wasanidi programu, na wakereketwa waliobobea katika kuunda uzoefu wa kidijitali unaohamasisha na kubadilisha.",
            "our-story-title": "Hadithi Yetu",
            "story-text-1": "Ilianzishwa mwaka 2020, Aura ilitokea kwa maono rahisi lakini yenye nguvu: kuunda uzoefu wa kidijitali unaozidi ya kawaida. Iliyoanza kama timu ndogo ya wasanidi programu na wabunifu mashauku, imekuwa kampuni ya huduma kamili ya kidijitali inayohudumu wateja katika Afrika na nje ya Afrika.",
            "story-text-2": "Safari yetu imejengwa na ubunifu, ukuu, na ahadi imara ya mafanikio ya wateja wetu. Tumewasaidia wajasiriamali kuzindua bidhaa zao za kwanza, makampuni makubwa kubadilisha uwepo wao wa kidijitali, na mashirika ya kibiashara kuongeza athari zao kupitia teknolojia.",
            "story-text-3": "Leo, Aura ni ushahidi wa kinachowezekana wakati ubunifu unakutana na ujuzi wa kiufundi. Tunaendelea kufikia mipaka, kuchanganya mikakati, na kutoa suluhisho ambazo si tu kukidhi matarajio bali pia kuzipita.",
            "mission-title": "Dhamira Yetu",
            "mission-text": "Kuwa mshirika wa kipekee wa kidijitali kwa biashara na taasisi za Kiafrika, kuchanganya ubunifu bora wa kimataifa na roho ya ndani ili kuunda urithi wenye nguvu na wa kudumu.",
            "vision-title": "Maono Yetu",
            "vision-text": "Kubadilisha jinsi biashara za Kiafrika zinavyoungana na hadhira zao kupitia suluhisho za kidijitali zenye ubunifu zinazohamasisha, kuungana, na kutoa matokeo ya kipimo.",
            "values-title": "Thamani Zetu Kuu",
            "value-1-title": "Ubunifu",
            "value-1-text": "Tutuendelea kuchunguza teknolojia mpya na mbinu za ubunifu ili kutoa suluhisho za kisasa zinazowatofautisha wateja wetu.",
            "value-2-title": "Ukuu",
            "value-2-text": "Tunafuata ukamilifu katika kila mradi, kuhakikisha viwango vya juu vya ubora na umakini wa undani katika kila tunachounda.",
            "value-3-title": "Uadilifu",
            "value-3-text": "Tunajenga mahusiano yenye msingi wa uaminifu, uwazi, na mazoea ya biashara ya kiadili yanayoheshimu ahadi zetu.",
            "value-4-title": "Ushirikiano",
            "value-4-text": "Tunaamini katika nguvu ya ushirika, kufanya kazi karibu na wateja kubadilisha maono yao kuwa ukweli.",
            "team-title": "Ona Timu Yetu",
            "team-1-name": "Alex Johnson",
            "team-1-role": "MKURUGENZI Mkuu & MWANISHIRIKA",
            "team-1-bio": "Kiongozi mwenye maono na uzoefu wa miaka 15+ katika ubunifu wa kidijitali, mwenye shauku ya kubadilisha biashara kupitia teknolojia.",
            "team-2-name": "Sarah Chen",
            "team-2-role": "MKURUGENZI WA TEKNOLOJIA",
            "team-2-bio": "Mhandisi wa kiufundi mwenye ujuzi katika suluhisho zinazoweza kupanuka na teknolojia mpya.",
            "team-3-name": "Michael Osei",
            "team-3-role": "Mkurugenzi wa Ubunifu",
            "team-3-bio": "Mubunifu mshindi wa tuzo anayejikita katika kuunda uzoefu mzuri na wa kuvutia kwa watumiaji.",
            "team-4-name": "Grace Kimani",
            "team-4-role": "Mkuu wa Uendeshaji",
            "team-4-bio": "Mtaalamu wa uendeshaji anayehakikisha utoaji wa miradi laini na kuridhisha kwa wateja bora.",
            "stat-1-label": "Miradi Imekamilika",
            "stat-2-label": "Wateja Wenye Furaha",
            "stat-3-label": "Wanachama wa Timu",
            "stat-4-label": "Miaka ya Uzoefu",
            "cta-title": "Uko Tayari Kuanza Mradi Wako?",
            "cta-text": "Tufanye kazi pamoja kuuleta maono yako kweli. Wasiliana nasi leo kwa ushauri.",
            "cta-button": "Wasiliana Nasi",
            "footer-phone": "+254 700 123 456",
            "footer-email": "hello@aura.co.ke",
            "footer-location-title": "Mahali & Masaa",
            "footer-address": "123 Barabara ya Ubunifu, Jiji la Ubunifu, CC 12345, Kenya",
            "footer-hours-title": "Masaa ya Kazi:",
            "footer-hours": "Jumatatu - Ijumaa: 9:00 AM - 6:00 PM",
            "footer-weekend": "Jumamosi: 10:00 AM - 4:00 PM",
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
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
            header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.backgroundColor = 'transparent';
            header.style.backdropFilter = 'none';
            header.style.boxShadow = 'none';
        }
    }, 10);

    window.addEventListener('scroll', handleScroll);

    // --- Typing Animation for Hero Subtitle ---
    function startTypingAnimation() {
        const subtitleElement = document.getElementById('aboutHeroSubtitle');
        const text = translations[currentLang]['about-hero-subtitle'];
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
                setTimeout(typeChar, 40);
            } else {
                // Animation complete, add cursor blink
                cursor.classList.add('blink');
            }
        }
        
        // Start typing after page load
        setTimeout(typeChar, 500);
    }

    // --- Create Floating Particles ---
    function createParticles() {
        const particlesContainer = document.getElementById('aboutParticles');
        const particleCount = window.innerWidth < 768 ? 10 : 20;
        
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
                }
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const elementsToObserve = document.querySelectorAll('.fade-in-up');
    elementsToObserve.forEach(el => {
        observer.observe(el);
    });

    // --- Animated Counter for Stats ---
    function animateCounters() {
        const counters = document.querySelectorAll('.stat-number');
        const speed = 200;
        
        counters.forEach(counter => {
            const animate = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const increment = target / speed;
                
                if (count < target) {
                    counter.innerText = Math.ceil(count + increment);
                    setTimeout(animate, 1);
                } else {
                    counter.innerText = target;
                }
            };
            
            animate();
        });
    }

    // --- Trigger counter animation when stats section is visible ---
    const statsSection = document.querySelector('.stats');
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    if (statsSection) {
        statsObserver.observe(statsSection);
    }

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

    // --- Initialize Animations ---
    startTypingAnimation();
    createParticles();

    // --- Animate navigation menu on load ---
    setTimeout(() => {
        navMenu.classList.add('nav-visible');
    }, 500);

});