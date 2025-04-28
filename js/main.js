// Loading Animation
window.addEventListener('load', () => {
    const loading = document.querySelector('.loading');
    loading.style.display = 'none';
});

// Scroll Reveal
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
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Convênios Carousel
const swiper = new Swiper('.convenios-slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.convenios-slider .swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.convenios-slider .swiper-button-next',
        prevEl: '.convenios-slider .swiper-button-prev',
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
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