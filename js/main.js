// Loading Animation
window.addEventListener('load', () => {
    // Remover loading animation (já foi removida do HTML)
    // const loading = document.querySelector('.loading');
    // loading.style.display = 'none';
    
    // Iniciar animações após o carregamento
    setTimeout(() => {
        initAnimations();
    }, 100);
});

// Scroll Suave para Navbar
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('.nav a, .mobile-menu a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Verificar se é um link interno (começa com #)
            if (href && href.startsWith('#')) {
                e.preventDefault();
                
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    // Calcular offset para considerar o header fixo
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = targetElement.offsetTop - headerHeight - 20;
                    
                    // Scroll suave com duração personalizada
                    smoothScrollTo(targetPosition, 800);
                    
                    // Fechar menu mobile se estiver aberto
                    const mobileMenu = document.querySelector('.mobile-menu');
                    if (mobileMenu && mobileMenu.classList.contains('active')) {
                        mobileMenu.classList.remove('active');
                        document.body.style.overflow = '';
                    }
                }
            }
        });
    });
}

// Função de scroll suave personalizada
function smoothScrollTo(targetPosition, duration) {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    // Função de easing para movimento suave
    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

// Sistema de Animação Avançado
function initAnimations() {
    // Inicializar scroll suave
    initSmoothScroll();
    
    // Animar elementos do header
    animateHeaderElements();
    
    // Animar hero section
    animateHeroSection();
    
    // Configurar observer para animações de scroll
    setupScrollAnimations();
}

function animateHeaderElements() {
    const logo = document.querySelector('.logo img');
    const navItems = document.querySelectorAll('.nav ul li');
    const whatsappFloat = document.querySelector('.whatsapp-float');
    
    if (logo) {
        logo.style.opacity = '0';
        logo.style.transform = 'scale(0.8)';
        setTimeout(() => {
            logo.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            logo.style.opacity = '1';
            logo.style.transform = 'scale(1)';
        }, 100);
    }
    
    navItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        setTimeout(() => {
            item.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, 200 + (index * 100));
    });
    
    if (whatsappFloat) {
        whatsappFloat.style.opacity = '0';
        whatsappFloat.style.transform = 'scale(0.3)';
        setTimeout(() => {
            whatsappFloat.style.transition = 'all 1s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
            whatsappFloat.style.opacity = '1';
            whatsappFloat.style.transform = 'scale(1)';
        }, 1000);
    }
}

function animateHeroSection() {
    const heroTitle = document.querySelector('.hero-content h1');
    const heroText = document.querySelector('.hero-content p');
    const heroButton = document.querySelector('.hero-content .cta-button');
    
    if (heroTitle) {
        heroTitle.style.opacity = '0';
        heroTitle.style.transform = 'translateY(-100px)';
        setTimeout(() => {
            heroTitle.style.transition = 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            heroTitle.style.opacity = '1';
            heroTitle.style.transform = 'translateY(0)';
        }, 200);
    }
    
    if (heroText) {
        heroText.style.opacity = '0';
        heroText.style.transform = 'translateY(60px)';
        setTimeout(() => {
            heroText.style.transition = 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            heroText.style.opacity = '1';
            heroText.style.transform = 'translateY(0)';
        }, 400);
    }
    
    if (heroButton) {
        heroButton.style.opacity = '0';
        heroButton.style.transform = 'scale(0.3)';
        setTimeout(() => {
            heroButton.style.transition = 'all 1.2s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
            heroButton.style.opacity = '1';
            heroButton.style.transform = 'scale(1)';
        }, 600);
    }
}

function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                
                // Animar seções específicas
                if (element.classList.contains('section-header')) {
                    animateSectionHeader(element);
                } else if (element.classList.contains('premium-card')) {
                    animatePremiumCard(element);
                } else if (element.classList.contains('treatment-card')) {
                    animateTreatmentCard(element);
                } else if (element.classList.contains('testimonial-card')) {
                    animateTestimonialCard(element);
                } else if (element.classList.contains('convenio-icone')) {
                    animateConvenioCard(element);
                } else if (element.classList.contains('commitment-icon')) {
                    animateCommitmentIcon(element);
                } else if (element.classList.contains('hours-card')) {
                    animateHoursCard(element);
                } else {
                    // Animação padrão para outros elementos
                    element.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }
                
                observer.unobserve(element);
            }
        });
    }, observerOptions);
    
    // Observar elementos com classe reveal
    document.querySelectorAll('.reveal').forEach(el => {
        observer.observe(el);
    });
}

function animateSectionHeader(element) {
    element.style.transition = 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    element.style.opacity = '1';
    element.style.transform = 'translateY(0)';
}

function animatePremiumCard(element) {
    const index = Array.from(element.parentNode.children).indexOf(element);
    const delays = [0.2, 0.4, 0.6];
    const animations = ['fadeInLeft', 'fadeInUp', 'fadeInRight'];
    
    setTimeout(() => {
        element.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
    }, delays[index] * 1000);
}

function animateTreatmentCard(element) {
    element.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    element.style.opacity = '1';
    element.style.transform = 'scale(1)';
}

function animateTestimonialCard(element) {
    const index = Array.from(element.parentNode.children).indexOf(element);
    const delays = [0.2, 0.4, 0.6];
    
    setTimeout(() => {
        element.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
    }, delays[index] * 1000);
}

function animateConvenioCard(element) {
    const index = Array.from(element.parentNode.children).indexOf(element);
    const delay = (index + 1) * 0.1;
    
    setTimeout(() => {
        element.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        element.style.opacity = '1';
        element.style.transform = 'scale(1)';
    }, delay * 1000);
}

function animateCommitmentIcon(element) {
    setTimeout(() => {
        element.style.transition = 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        element.style.opacity = '1';
        element.style.transform = 'rotate(0deg) scale(1)';
    }, 300);
}

function animateHoursCard(element) {
    setTimeout(() => {
        element.style.transition = 'all 1s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
        element.style.opacity = '1';
        element.style.transform = 'scale(1)';
    }, 200);
}

// Scroll Reveal Melhorado
const reveal = () => {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
};

window.addEventListener('scroll', reveal);
reveal(); // Trigger on initial load

// Header Scroll Effect
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll && currentScroll > 100) {
        header.classList.add('header-hidden');
    } else {
        header.classList.remove('header-hidden');
    }

    if (currentScroll > 50) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }

    lastScroll = currentScroll;
});

// Mobile Menu
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const closeMenu = document.querySelector('.close-menu');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.add('active');
    document.body.style.overflow = 'hidden';
});

closeMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    document.body.style.overflow = '';
});

mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Smooth Scroll
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         const target = document.querySelector(this.getAttribute('href'));
//         if (target) {
//             target.scrollIntoView({
//                 behavior: 'smooth'
//             });
//         }
//     });
// });

// Carrossel de Especialidades
const treatmentsSwiper = new Swiper('.treatments-swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.treatments-swiper .swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.treatments-swiper .swiper-button-next',
        prevEl: '.treatments-swiper .swiper-button-prev',
    },
    breakpoints: {
        480: {
            slidesPerView: 1,
            spaceBetween: 25,
        },
        640: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 50,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 60,
        },
    }
});

// WhatsApp Click Tracking
document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
    link.addEventListener('click', () => {
        // You can add analytics tracking here if needed
        console.log('WhatsApp button clicked');
    });
});

// Treatment Card Animations
document.querySelectorAll('.treatment-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Parallax Effect no Hero
const hero = document.querySelector('.hero');
window.addEventListener('scroll', () => {
    const scroll = window.pageYOffset;
    if (hero) {
        hero.style.backgroundPositionY = `${scroll * 0.5}px`;
    }
});

// Galeria Lightbox
const galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        const img = item.querySelector('img');
        if (img) {
            const lightbox = document.createElement('div');
            lightbox.className = 'lightbox';
            lightbox.innerHTML = `
                <div class="lightbox-content">
                    <img src="${img.src}" alt="${img.alt}">
                    <button class="lightbox-close">&times;</button>
                </div>
            `;
            document.body.appendChild(lightbox);

            lightbox.addEventListener('click', (e) => {
                if (e.target.classList.contains('lightbox') || e.target.classList.contains('lightbox-close')) {
                    lightbox.remove();
                }
            });
        }
    });
});

// Chatbot Functionality
const chatbot = document.getElementById('dental-assistant');
const chatbotToggle = document.querySelector('.chatbot-toggle');
const closeChat = document.querySelector('.close-chat');
const chatMessages = document.querySelector('.chatbot-messages');
const chatInput = document.querySelector('.chatbot-input input');
const chatSubmit = document.querySelector('.chatbot-input button');

// Mensagens iniciais do chatbot
const initialMessages = [
    {
        type: 'bot',
        text: 'Olá! Eu sou o assistente virtual da Dental Magic JP. Como posso ajudar você hoje?'
    },
    {
        type: 'bot',
        text: 'Você pode me perguntar sobre:'
    },
    {
        type: 'bot',
        text: '• Nossos tratamentos\n• Horários de atendimento\n• Convênios aceitos\n• Agendar uma consulta'
    }
];

// Toggle do chatbot
if (chatbotToggle) {
    chatbotToggle.addEventListener('click', () => {
        chatbot.classList.add('active');
        if (chatMessages && chatMessages.children.length === 0) {
            showInitialMessages();
        }
    });
}
if (closeChat) {
    closeChat.addEventListener('click', () => {
        chatbot.classList.remove('active');
    });
}

// Função para mostrar mensagens iniciais
function showInitialMessages() {
    initialMessages.forEach((message, index) => {
        setTimeout(() => {
            addMessage(message.text, message.type);
        }, index * 500);
    });
}

// Função para adicionar mensagem
function addMessage(text, type = 'user') {
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message ${type}`;
    messageDiv.innerHTML = `
        <div class="message-content">
            ${text.replace(/\n/g, '<br>')}
        </div>
    `;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Respostas pré-definidas
const responses = {
    'tratamento': 'Oferecemos diversos tratamentos como:\n• Limpeza e prevenção\n• Clareamento dental\n• Ortodontia\n• Implantes\n• Próteses\n\nGostaria de agendar uma avaliação?',
    'horário': 'Nosso horário de atendimento é:\n• Segunda a Sexta: 08:30h às 20:00h\n• Sábado: 08:30h às 12:00h',
    'convênio': 'Trabalhamos com os principais convênios:\n• Unimed\n• Amil\n• Bradesco Saúde\n• SulAmérica\n• Cassi',
    'agendar': 'Para agendar uma consulta, você pode:\n• Clicar no botão do WhatsApp\n• Ligar para (83) 99605-5541\n• Ou comparecer presencialmente na clínica dentro do horário de atendimento.\n\nQual opção você prefere?',
    'localização': 'Estamos localizados em João Pessoa, PB.\nEndereço: Av. Exemplo, 123 - Bairro, João Pessoa - PB.\nVeja o mapa na seção "Como Chegar" do site.',
    'telefone': 'Nosso telefone é (83) 99605-5541.\nVocê pode ligar ou enviar mensagem pelo WhatsApp!',
    'faq': 'Perguntas frequentes:\n- Localização\n- Convênios\n- Telefone\n- Agendamento\n- Horários\n- Tratamentos\n\nDigite sua dúvida!'
};

// Processar input do usuário
function processUserInput(input) {
    const lowercaseInput = input.toLowerCase();
    let response = 'Desculpe, não entendi sua pergunta. Você pode perguntar sobre localização, convênios, telefone, agendamento, horários ou tratamentos.';

    if (lowercaseInput.includes('tratamento')) {
        response = responses.tratamento;
    } else if (lowercaseInput.includes('horário') || lowercaseInput.includes('horario')) {
        response = responses.horário;
    } else if (lowercaseInput.includes('convênio') || lowercaseInput.includes('convenio')) {
        response = responses.convênio;
    } else if (lowercaseInput.includes('agendar') || lowercaseInput.includes('consulta') || lowercaseInput.includes('marcar')) {
        response = responses.agendar;
    } else if (lowercaseInput.includes('localização') || lowercaseInput.includes('localizacao') || lowercaseInput.includes('onde fica') || lowercaseInput.includes('endereço') || lowercaseInput.includes('endereco')) {
        response = responses.localização;
    } else if (lowercaseInput.includes('telefone') || lowercaseInput.includes('número') || lowercaseInput.includes('numero') || lowercaseInput.includes('whatsapp')) {
        response = responses.telefone;
    } else if (lowercaseInput.includes('pergunta') || lowercaseInput.includes('faq') || lowercaseInput.includes('dúvida') || lowercaseInput.includes('duvida')) {
        response = responses.faq;
    }

    return response;
}

// Enviar mensagem
function sendMessage() {
    const message = chatInput.value.trim();
    if (message) {
        addMessage(message, 'user');
        chatInput.value = '';

        // Simular resposta do bot após 500ms
        setTimeout(() => {
            const response = processUserInput(message);
            addMessage(response, 'bot');
        }, 500);
    }
}

// Event listeners para envio de mensagem
if (chatSubmit) {
    chatSubmit.addEventListener('click', sendMessage);
}
if (chatInput) {
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
}

// Adicionar estilos CSS para as mensagens
const style = document.createElement('style');
style.textContent = `
    .chat-message {
        margin-bottom: 15px;
    }
    .chat-message .message-content {
        padding: 10px 15px;
        border-radius: 15px;
        max-width: 80%;
        display: inline-block;
    }
    .chat-message.user {
        text-align: right;
    }
    .chat-message.user .message-content {
        background: var(--primary-color);
        color: white;
    }
    .chat-message.bot .message-content {
        background: var(--light-gray);
        color: var(--text-color);
    }
`;
document.head.appendChild(style);

// Swiper para galeria de fotos da clínica
const gallerySwiper = new Swiper('.gallery-swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.gallery-swiper .swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.gallery-swiper .swiper-button-next',
        prevEl: '.gallery-swiper .swiper-button-prev',
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 1,
        },
        1024: {
            slidesPerView: 1,
        },
    }
});

// Scroll suave para o mapa ao clicar em 'Como Chegar'
document.querySelectorAll('.scroll-to-mapa').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        const mapa = document.getElementById('mapa');
        if (mapa) {
            mapa.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    });
});

// Galeria Moderna e Interativa
class ModernGallery {
    constructor() {
        this.portfolioImages = [
            {
                src: 'assets/galeria/recepcao.jpg',
                alt: 'Recepção da Clínica',
                title: 'Recepção da Clínica',
                description: 'Ambiente acolhedor e moderno'
            },
           
            {
                src: 'assets/galeria/consultorio2.jpg',
                alt: 'Consultório 2',
                title: 'Consultório Especializado',
                description: 'Tecnologia avançada para seu tratamento'
            }
        ];
        
        this.currentSlide = 0;
        this.previousSlide = null;
        this.autoPlayInterval = null;
        this.touchStartX = 0;
        this.touchEndX = 0;
        this.showSwipeHint = true;
        this.isHovered = false;
        this.hoveredButton = null;
        this.parallaxY = 0;
        this.mouseX = 0;
        this.mouseY = 0;
        
        this.init();
    }
    
    init() {
        this.createDots();
        this.bindEvents();
        this.startAutoPlay();
        this.initParallax();
        this.updateProgress();
        this.updateInfo();
    }
    
    createDots() {
        const dotsWrapper = document.getElementById('dots-wrapper');
        if (!dotsWrapper) return;
        
        dotsWrapper.innerHTML = '';
        
        this.portfolioImages.forEach((_, index) => {
            const dot = document.createElement('button');
            dot.className = 'dot';
            dot.innerHTML = '<div class="dot-inner"></div><div class="dot-ripple"></div>';
            
            if (index === this.currentSlide) {
                dot.classList.add('active');
            }
            
            dot.addEventListener('click', () => this.goToSlide(index));
            dotsWrapper.appendChild(dot);
        });
    }
    
    bindEvents() {
        const prevButton = document.getElementById('prev-button');
        const nextButton = document.getElementById('next-button');
        const carouselMain = document.querySelector('.carousel-main');
        const magneticField = document.querySelector('.magnetic-field');
        
        if (prevButton) {
            prevButton.addEventListener('click', () => this.prevSlide());
            prevButton.addEventListener('mouseenter', () => this.hoveredButton = 'left');
            prevButton.addEventListener('mouseleave', () => this.hoveredButton = null);
        }
        
        if (nextButton) {
            nextButton.addEventListener('click', () => this.nextSlide());
            nextButton.addEventListener('mouseenter', () => this.hoveredButton = 'right');
            nextButton.addEventListener('mouseleave', () => this.hoveredButton = null);
        }
        
        if (carouselMain) {
            carouselMain.addEventListener('mouseenter', () => {
                this.isHovered = true;
                carouselMain.classList.add('hovered');
                if (magneticField) magneticField.classList.add('active');
            });
            
            carouselMain.addEventListener('mouseleave', () => {
                this.isHovered = false;
                carouselMain.classList.remove('hovered');
                if (magneticField) magneticField.classList.remove('active');
            });
            
            carouselMain.addEventListener('touchstart', (e) => this.handleTouchStart(e));
            carouselMain.addEventListener('touchend', (e) => this.handleTouchEnd(e));
        }
    }
    
    prevSlide() {
        this.previousSlide = this.currentSlide;
        this.currentSlide = (this.currentSlide - 1 + this.portfolioImages.length) % this.portfolioImages.length;
        this.updateSlide();
        this.hideSwipeHint();
        this.resetAutoPlay();
    }
    
    nextSlide() {
        this.previousSlide = this.currentSlide;
        this.currentSlide = (this.currentSlide + 1) % this.portfolioImages.length;
        this.updateSlide();
        this.hideSwipeHint();
        this.resetAutoPlay();
    }
    
    goToSlide(index) {
        this.previousSlide = this.currentSlide;
        this.currentSlide = index;
        this.updateSlide();
        this.hideSwipeHint();
        this.resetAutoPlay();
    }
    
    updateSlide() {
        const currentImage = document.getElementById('current-image');
        const previousImage = document.getElementById('previous-image');
        const reflectionImage = document.querySelector('.reflection-image');
        
        if (currentImage) {
            currentImage.src = this.portfolioImages[this.currentSlide].src;
            currentImage.alt = this.portfolioImages[this.currentSlide].alt;
        }
        
        if (previousImage && this.previousSlide !== null) {
            previousImage.src = this.portfolioImages[this.previousSlide].src;
            previousImage.alt = this.portfolioImages[this.previousSlide].alt;
        }
        
        if (reflectionImage) {
            reflectionImage.src = this.portfolioImages[this.currentSlide].src;
            reflectionImage.alt = this.portfolioImages[this.currentSlide].alt;
        }
        
        this.updateDots();
        this.updateProgress();
        this.updateInfo();
        
        // Limpar slide anterior após animação
        setTimeout(() => {
            this.previousSlide = null;
        }, 1500);
    }
    
    updateDots() {
        const dots = document.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentSlide);
        });
    }
    
    updateProgress() {
        const progressFill = document.getElementById('progress-fill');
        if (progressFill) {
            const progress = ((this.currentSlide + 1) / this.portfolioImages.length) * 100;
            progressFill.style.width = `${progress}%`;
        }
    }
    
    updateInfo() {
        const infoTitle = document.querySelector('.info-title');
        const infoDescription = document.querySelector('.info-description');
        
        if (infoTitle) {
            infoTitle.textContent = this.portfolioImages[this.currentSlide].title;
        }
        
        if (infoDescription) {
            infoDescription.textContent = this.portfolioImages[this.currentSlide].description;
        }
    }
    
    hideSwipeHint() {
        this.showSwipeHint = false;
        const swipeHint = document.getElementById('swipe-hint');
        if (swipeHint) {
            swipeHint.style.display = 'none';
        }
    }
    
    startAutoPlay() {
        this.autoPlayInterval = setInterval(() => {
            this.nextSlide();
        }, 8000);
    }
    
    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
    }
    
    resetAutoPlay() {
        this.stopAutoPlay();
        setTimeout(() => {
            this.startAutoPlay();
        }, 5000);
    }
    
    handleTouchStart(event) {
        this.touchStartX = event.touches[0].clientX;
    }
    
    handleTouchEnd(event) {
        this.touchEndX = event.changedTouches[0].clientX;
        this.handleSwipe();
    }
    
    handleSwipe() {
        const swipeThreshold = 50;
        const swipeDistance = this.touchStartX - this.touchEndX;
        
        if (Math.abs(swipeDistance) > swipeThreshold) {
            if (swipeDistance > 0) {
                this.nextSlide();
            } else {
                this.prevSlide();
            }
        }
    }
    
    initParallax() {
        const handleMouseMove = (e) => {
            this.mouseX = e.clientX;
            this.mouseY = e.clientY;
            this.parallaxY = (e.clientY - window.innerHeight / 2) * 0.02;
            
            const parallaxOverlay = document.querySelector('.parallax-overlay');
            if (parallaxOverlay) {
                parallaxOverlay.style.transform = `translateY(${this.parallaxY}px)`;
            }
        };
        
        window.addEventListener('mousemove', handleMouseMove);
    }
}

// Inicializar galeria quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    new ModernGallery();
});