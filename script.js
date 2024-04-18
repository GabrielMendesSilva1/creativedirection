document.addEventListener('DOMContentLoaded', function() {
    // Inicializa o Swiper.js para o carrossel de serviços
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // Adiciona o listener de evento para o formulário de contato
    const form = document.getElementById("contact-form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const mensagem = document.getElementById("mensagem").value;

        // Verifica se os campos estão preenchidos
        if (nome === '' || email === '' || mensagem === '') {
            alert("Por favor, preencha todos os campos do formulário.");
            return false;
        }

        // Verifica o formato do e-mail usando uma expressão regular simples
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Por favor, insira um endereço de e-mail válido.");
            return false;
        }

        // Se todas as verificações passarem, o formulário é enviado
        this.submit();
    });

    // Adiciona o listener de evento para a rolagem suave para âncoras
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));

            // Scroll suave para o destino
            if (target) {
                window.scrollTo({
                    top: target.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});
