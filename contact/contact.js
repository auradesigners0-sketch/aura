document.addEventListener('DOMContentLoaded', function() {

    // --- Initialize EmailJS ---
    (function() {
        emailjs.init("h2bxvU7nIshl_AEFm"); // Replace with your EmailJS public key
    })();

    // --- Translation System ---
    const translations = {
        en: {
            "page-title": "Contact Us - Aura",
            "nav-home": "Home",
            "nav-about": "About",
            "nav-services": "Services",
            "nav-portfolio": "Portfolio",
            "nav-contact": "Contact",
            "contact-hero-title": "Get In Touch",
            "contact-hero-subtitle": "We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
            "services-title": "Services We Offer",
            "service-1-title": "Web Design",
            "service-1-desc": "Creating visually stunning and user-friendly websites",
            "service-2-title": "Web Development",
            "service-2-desc": "Building robust and scalable web applications",
            "service-3-title": "Mobile Apps",
            "service-3-desc": "Native and cross-platform mobile application development",
            "service-4-title": "Hosting Solutions",
            "service-4-desc": "Secure and reliable hosting for your digital presence",
            "service-5-title": "Digital Marketing",
            "service-5-desc": "Strategic marketing to grow your online presence",
            "service-6-title": "SEO Optimization",
            "service-6-desc": "Improve your search engine rankings and visibility",
            "industries-title": "Industries We Serve",
            "industry-1-title": "Education",
            "industry-2-title": "Catering Services",
            "industry-3-title": "E-commerce",
            "industry-4-title": "Healthcare",
            "industry-5-title": "Real Estate",
            "industry-6-title": "Tourism & Hospitality",
            "industry-7-title": "Finance",
            "industry-8-title": "Fitness & Wellness",
            "form-title": "Send Us a Message",
            "form-first-name": "First Name",
            "form-last-name": "Last Name",
            "form-email": "Email Address",
            "form-phone": "Phone Number",
            "form-company": "Company/Organization",
            "form-company-type": "Company Type",
            "form-select-company-type": "Select company type",
            "form-option-school": "School",
            "form-option-catering": "Catering Service",
            "form-option-ecommerce": "E-commerce",
            "form-option-healthcare": "Healthcare",
            "form-option-realestate": "Real Estate",
            "form-option-tourism": "Tourism & Hospitality",
            "form-option-finance": "Finance",
            "form-option-fitness": "Fitness & Wellness",
            "form-option-other": "Other",
            "form-service": "Service You Need",
            "form-select-service": "Select a service",
            "form-option-web-design": "Web Design",
            "form-option-web-development": "Web Development",
            "form-option-mobile-app": "Mobile App Development",
            "form-option-hosting": "Hosting Solutions",
            "form-option-digital-marketing": "Digital Marketing",
            "form-option-seo": "SEO Optimization",
            "form-option-consultation": "Consultation",
            "form-message": "Message",
            "form-newsletter": "I'd like to receive newsletters and updates from Aura",
            "form-privacy": "I agree to the privacy policy and terms of service",
            "form-submit": "Send Message",
            "form-success": "Thank you for your message! We'll get back to you soon.",
            "form-error": "There was an error sending your message. Please try again.",
            "info-title": "Contact Information",
            "info-address-title": "Address",
            "info-address": "123 Ubunifu Street, Kinondoni, Dar es Salaam, Tanzania",
            "info-phone-title": "Phone",
            "info-phone": "+255 712 345 678",
            "info-phone-alt": "+255 722 987 654",
            "info-email-title": "Email",
            "info-email": "hello@aura.co.tz",
            "info-email-support": "support@aura.co.tz",
            "info-hours-title": "Business Hours",
            "info-hours-weekdays": "Monday - Friday: 9:00 AM - 6:00 PM",
            "info-hours-saturday": "Saturday: 10:00 AM - 4:00 PM",
            "info-hours-sunday": "Sunday: Closed",
            "social-title": "Connect With Us",
            "map-title": "Find Us",
            "map-office-title": "Our Dar es Salaam Office",
            "map-office-description": "Located in the heart of Kinondoni, our office is easily accessible by public transport and has ample parking available. We welcome visitors for scheduled meetings and consultations.",
            "map-directions": "Get Directions",
            "faq-title": "Frequently Asked Questions",
            "faq-1-question": "What services does Aura offer?",
            "faq-1-answer": "Aura offers a comprehensive range of digital services including web design and development, mobile app development, UI/UX design, hosting solutions, and digital marketing. We work with clients across various industries to create tailored solutions that meet their specific needs.",
            "faq-2-question": "How long does a typical project take?",
            "faq-2-answer": "Project timelines vary depending on complexity and scope. A simple website might take 4-6 weeks, while a complex web application could take 3-6 months. We provide detailed timelines during the planning phase and keep clients updated throughout the development process.",
            "faq-3-question": "Do you work with international clients?",
            "faq-3-answer": "Yes, we work with clients both locally and internationally. Our team is experienced in remote collaboration and we have systems in place to ensure smooth communication and project management regardless of location.",
            "faq-4-question": "What is your pricing structure?",
            "faq-4-answer": "Our pricing is project-based and depends on the specific requirements, complexity, and timeline. We provide detailed quotes after an initial consultation to understand your needs. We offer flexible payment plans and are transparent about all costs upfront.",
            "footer-phone": "+255 712 345 678",
            "footer-email": "hello@aura.co.tz",
            "footer-location-title": "Location & Hours",
            "footer-address": "123 Ubunifu Street, Kinondoni, Dar es Salaam, Tanzania",
            "footer-hours-title": "Working Hours:",
            "footer-hours": "Mon - Fri: 9:00 AM - 6:00 PM",
            "footer-weekend": "Saturday: 10:00 AM - 4:00 PM",
            "footer-sunday": "Sunday: Closed"
        },
        sw: {
            "page-title": "Wasiliana Nasi - Aura",
            "nav-home": "Nyumbani",
            "nav-about": "Kuhusu",
            "nav-services": "Huduma",
            "nav-portfolio": "Kazi Zetu",
            "nav-contact": "Mawasiliano",
            "contact-hero-title": "Wasiliana Nasi",
            "contact-hero-subtitle": "Tungependa kusikia kutoka kwako. Tutumie ujumbe na tutajibu haraka iwezekanavyo.",
            "services-title": "Huduma Tunazotoa",
            "service-1-title": "Ubunifu wa Tovuti",
            "service-1-desc": "Kuunda tovuti zenye mvuto na rahisi kutumia",
            "service-2-title": "Maendeleo ya Tovuti",
            "service-2-desc": "Kujenga programu za tovuti zenye nguvu na zinazoweza kupanuka",
            "service-3-title": "Programu za Simu",
            "service-3-desc": "Maendeleo ya programu za simu za asili na za jukwaa la msalaba",
            "service-4-title": "Suluhisho za Kuweka Mahali",
            "service-4-desc": "Uwekaji mahali usalama na wa kuaminika kwa uwepo wako wa kidijitali",
            "service-5-title": "Masoko ya Kidijitali",
            "service-5-desc": "Masoko ya kimkakati kuongeza uwepo wako mtandaoni",
            "service-6-title": "Ubunifu wa SEO",
            "service-6-desc": "Boresha uwezo wako wa injini ya utafutaji na kuonekana",
            "industries-title": "Viwanda Tunavyohudumia",
            "industry-1-title": "Elimu",
            "industry-2-title": "Huduma za Chakula",
            "industry-3-title": "Biashara ya Mtandaoni",
            "industry-4-title": "Afya",
            "industry-5-title": "Mali Isiyohamishika",
            "industry-6-title": "Utalii na Mahospitali",
            "industry-7-title": "Fedha",
            "industry-8-title": "Mazoezi na Afya ya Mwili",
            "form-title": "Tutumie Ujumbe",
            "form-first-name": "Jina la Kwanza",
            "form-last-name": "Jina la Mwisho",
            "form-email": "Anwani ya Barua pepe",
            "form-phone": "Namba ya Simu",
            "form-company": "Kampuni/Shirika",
            "form-company-type": "Aina ya Kampuni",
            "form-select-company-type": "Chagua aina ya kampuni",
            "form-option-school": "Shule",
            "form-option-catering": "Huduma ya Chakula",
            "form-option-ecommerce": "Biashara ya Mtandaoni",
            "form-option-healthcare": "Afya",
            "form-option-realestate": "Mali Isiyohamishika",
            "form-option-tourism": "Utalii na Mahospitali",
            "form-option-finance": "Fedha",
            "form-option-fitness": "Mazoezi na Afya ya Mwili",
            "form-option-other": "Nyingine",
            "form-service": "Huduma Unayohitaji",
            "form-select-service": "Chagua huduma",
            "form-option-web-design": "Ubunifu wa Tovuti",
            "form-option-web-development": "Maendeleo ya Tovuti",
            "form-option-mobile-app": "Maendeleo ya Programu za Simu",
            "form-option-hosting": "Suluhisho za Kuweka Mahali",
            "form-option-digital-marketing": "Masoko ya Kidijitali",
            "form-option-seo": "Ubunifu wa SEO",
            "form-option-consultation": "Ushauri",
            "form-message": "Ujumbe",
            "form-newsletter": "Ningependa kupokea jarida na masasisho kutoka Aura",
            "form-privacy": "Nakubali sera ya faragha na masharti ya huduma",
            "form-submit": "Tuma Ujumbe",
            "form-success": "Asante kwa ujumbe wako! Tutakujibu hivi karibuni.",
            "form-error": "Ujumbe wako haujatumwa kikamilifu. Tafadhali jaribu tena.",
            "info-title": "Maelezo ya Mawasiliano",
            "info-address-title": "Anwani",
            "info-address": "Goba center, Kinondoni, Dar es salaam, Tanzania",
            "info-phone-title": "Simu",
            "info-phone": "+255 717 043 283",
            "info-phone-alt": "+255 717 043 283",
            "info-email-title": "Barua pepe",
            "info-email": "auradesigners0@gmail.com",
            "info-email-support": "support@aura.co.tz",
            "info-hours-title": "Masaa ya Biashara",
            "info-hours-weekdays": "Jumatatu - Ijumaa: 9:00 AM - 6:00 PM",
            "info-hours-saturday": "Jumamosi: 10:00 AM - 4:00 PM",
            "info-hours-sunday": "Jumapili: Imefungwa",
            "social-title": "Unganisha Nasi",
            "map-title": "Tutafute",
            "map-office-title": "Ofisi Yetu ya Dar es Salaam",
            "map-office-description": "Iko katikati ya Goba Center, ofisi yetu inafikika kirahisi na usafiri wa umma na kuna maegesho mengi yanayopatikana. Tunakaribisha wageni kwa mikutano ya mpango na ushauri.",
            "map-directions": "Pata Maelekezo",
            "faq-title": "Maswali Yanayoulizwa Mara nyingi",
            "faq-1-question": "Aura inatoa huduma gani?",
            "faq-1-answer": "Aura inatoa safu kamili ya huduma za kidijitali ikiwemo ubunifu na maendeleo ya tovuti, maendeleo ya programu za simu, ubunifu wa UI/UX, suluhisho za kuweka mahali, na masoko ya kidijitali. Tunafanya kazi na wateja katika viwanda mbalimbali kuunda suluhisho zinazolingana na mahitaji yao maalum.",
            "faq-2-question": "Mradi wa kawaida unachukua muda gani?",
            "faq-2-answer": "Muda wa mradi hutofautiana kulingana na ugumu na kipenyo. Tovuti rahisi inaweza kuchukua wiki 2-4, wakati programu ya tovuti ngumu inaweza kuchukua miezi 3-6. Tunatoa maelezo ya kina ya muda wakati wa awamu ya upangaji na tunawawasha wateja wakati wa mchakato wa maendeleo.",
            "faq-3-question": "Mnafanya kazi na wateja wa kimataifa?",
            "faq-3-answer": "Ndio, tunafanya kazi na wateja wa ndani na wa kimataifa. Timu yetu ina uzoefu katika ushirikiano wa mbali na tuna mifumo iliyojengwa kuhakikisha mawasiliano laini na usimamizi wa mradi bila kujali eneo.",
            "faq-4-question": "Muundo wako wa bei ni upi?",
            "faq-4-answer": "Bei yetu inatokana na mradi na inategemea mahitaji maalum, ugumu, na muda. Tunatoa nukuu za kina baada ya ushauri wa awali kuelewa mahitaji yako. Tunatoa mpango wa malipo wenye urahisi na ni wazi kuhusu gharama zote mapema.",
            "footer-phone": "+255 717 043 283",
            "footer-email": "auradesigners0@gmail.com",
            "footer-location-title": "Mahali & Masaa",
            "footer-address": "Goba, Kinondoni, Dar es Salaam, Tanzania",
            "footer-hours-title": "Masaa ya Kazi:",
            "footer-hours": "Jumatatu - Ijumaa: 8:00 AM - 6:00 PM",
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

    // --- Typing Animation for Hero Subtitle ---
    function startTypingAnimation() {
        const subtitleElement = document.getElementById('contactHeroSubtitle');
        const text = translations[currentLang]['contact-hero-subtitle'];
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
        const particlesContainer = document.getElementById('contactParticles');
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
                } else if (entry.target.classList.contains('service-offer-item') || 
                          entry.target.classList.contains('industry-item')) {
                    setTimeout(() => {
                        entry.target.classList.add('animate-in');
                    }, index * 100);
                }
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const elementsToObserve = document.querySelectorAll('.fade-in-up, .service-offer-item, .industry-item');
    elementsToObserve.forEach(el => {
        observer.observe(el);
    });

    // --- Form Submission with EmailJS ---
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    const submitBtn = document.querySelector('.submit-btn');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Show loading state
        submitBtn.disabled = true;
        submitBtn.textContent = currentLang === 'en' ? 'Sending...' : 'Inatuma...';
        
        // Get form data
        const formData = new FormData(contactForm);
        const formDataObj = {};
        
        formData.forEach((value, key) => {
            formDataObj[key] = value;
        });
        
        // Prepare email parameters
        const templateParams = {
            from_name: `${formDataObj.firstName} ${formDataObj.lastName}`,
            from_email: formDataObj.email,
            phone: formDataObj.phone || 'Not provided',
            company: formDataObj.company || 'Not provided',
            company_type: formDataObj.companyType,
            service: formDataObj.service,
            message: formDataObj.message,
            newsletter: formDataObj.newsletter ? 'Yes' : 'No',
            to_email: 'auradesigners0@gmail.com' // Your receiving email
        };
        
        // Send email using EmailJS
        emailjs.send('service_m0a4756', 'template_ljvak08', templateParams)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                
                // Show success message
                formMessage.textContent = translations[currentLang]['form-success'];
                formMessage.className = 'form-message success';
                
                // Reset form
                contactForm.reset();
                
                // Reset button
                submitBtn.disabled = false;
                submitBtn.textContent = translations[currentLang]['form-submit'];
                
                // Hide message after 5 seconds
                setTimeout(() => {
                    formMessage.textContent = '';
                    formMessage.className = 'form-message';
                }, 5000);
            }, function(error) {
                console.log('FAILED...', error);
                
                // Show error message
                formMessage.textContent = translations[currentLang]['form-error'];
                formMessage.className = 'form-message error';
                
                // Reset button
                submitBtn.disabled = false;
                submitBtn.textContent = translations[currentLang]['form-submit'];
                
                // Hide message after 5 seconds
                setTimeout(() => {
                    formMessage.textContent = '';
                    formMessage.className = 'form-message';
                }, 5000);
            });
    });

    // --- FAQ Accordion ---
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Toggle current item
            const answer = item.querySelector('.faq-answer');
            const icon = item.querySelector('.faq-question i');
            
            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.querySelector('.faq-answer').style.maxHeight = null;
                    otherItem.querySelector('.faq-question i').classList.remove('rotate');
                }
            });
            
            // Toggle current item
            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
                icon.classList.remove('rotate');
            } else {
                answer.style.maxHeight = answer.scrollHeight + 'px';
                icon.classList.add('rotate');
            }
        });
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

    // --- Initialize Animations ---
    startTypingAnimation();
    createParticles();

    // --- Animate navigation menu on load ---
    setTimeout(() => {
        navMenu.classList.add('nav-visible');
    }, 500);

});