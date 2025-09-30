// Aguarda o DOM estar completamente carregado antes de executar o script
document.addEventListener('DOMContentLoaded', () => {

    // Inicializa o VLibras Widget
    new window.VLibras.Widget('https://vlibras.gov.br/app');

    // --- LÓGICA DOS DESAFIOS INTERATIVOS ---
    const toggleContrastBtn = document.getElementById('toggle-contrast');
    const contrastText = document.getElementById('contrast-text');
    if (toggleContrastBtn && contrastText) {
        toggleContrastBtn.addEventListener('click', () => {
            contrastText.classList.toggle('low-contrast');
            contrastText.classList.toggle('high-contrast');
            toggleContrastBtn.textContent = contrastText.classList.contains('low-contrast') ? 'Aplicar Alto Contraste' : 'Ver Baixo Contraste';
        });
    }

    const validateBtn = document.getElementById('validate-button');
    const validationInput = document.getElementById('validation-input');
    const errorMsg = document.getElementById('validation-error-msg');
    const successMsg = document.getElementById('validation-success-msg');
    let validationTimer; // Variável para guardar o ID do temporizador

    if (validateBtn && validationInput && errorMsg && successMsg) {
        validateBtn.addEventListener('click', () => {
            // Limpa qualquer temporizador anterior para evitar resets múltiplos
            clearTimeout(validationTimer);

            const email = validationInput.value;
            // Expressão regular simples para validar o formato do email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (emailRegex.test(email)) {
                // Email válido
                validationInput.classList.remove('invalid');
                validationInput.classList.add('valid');
                errorMsg.classList.add('error-message-hidden');
                errorMsg.classList.remove('error-message-visible');
                successMsg.classList.remove('success-message-hidden');
                successMsg.classList.add('success-message-visible');
                validationInput.setAttribute('aria-invalid', 'false');
                validationInput.setAttribute('aria-describedby', 'validation-success-msg');
            } else {
                // Email inválido
                validationInput.classList.remove('valid');
                validationInput.classList.add('invalid');
                successMsg.classList.add('success-message-hidden');
                successMsg.classList.remove('success-message-visible');
                errorMsg.classList.remove('error-message-hidden');
                errorMsg.classList.add('error-message-visible');
                validationInput.setAttribute('aria-invalid', 'true');
                validationInput.setAttribute('aria-describedby', 'validation-error-msg');
            }

            // Inicia um temporizador de 5 segundos para resetar o estado visual e o conteúdo
            validationTimer = setTimeout(() => {
                validationInput.classList.remove('valid', 'invalid');
                errorMsg.classList.add('error-message-hidden');
                errorMsg.classList.remove('error-message-visible');
                successMsg.classList.add('success-message-hidden');
                successMsg.classList.remove('success-message-visible');
                validationInput.removeAttribute('aria-describedby');
                validationInput.removeAttribute('aria-invalid');

                validationInput.value = '';

                validationInput.focus();
            }, 5000); // 5000 milissegundos = 5 segundos
        });
    }


    const toggleTypographyBtn = document.getElementById('toggle-typography');
    const typographyText = document.getElementById('typography-text');
    if (toggleTypographyBtn && typographyText) {
        toggleTypographyBtn.addEventListener('click', () => {
            typographyText.classList.toggle('typography-bad');
            typographyText.classList.toggle('typography-good');
            toggleTypographyBtn.textContent = typographyText.classList.contains('typography-bad') ? 'Ativar Fonte Amigável' : 'Ver Fonte Inadequada';
        });
    }

    // --- LÓGICA DO TOGGLE DE FONTE ---
    const fontSwitch = document.getElementById('font-switch');
    if (fontSwitch) {
        fontSwitch.addEventListener('click', () => {
            const isChecked = document.body.classList.toggle('reading-font-active');
            fontSwitch.setAttribute('aria-checked', isChecked);
        });
    }

    // --- LÓGICA DO MENU HAMBÚRGUER ---
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    const navWrapper = document.getElementById('nav-wrapper');
    const body = document.body;
    const navLinks = navWrapper.querySelectorAll('a'); // Seleciona todos os links do menu

    const closeMenu = () => {
        hamburgerBtn.setAttribute('aria-expanded', 'false');
        navWrapper.setAttribute('aria-hidden', 'true');
        body.classList.remove('nav-open');
        hamburgerBtn.focus(); // Devolve o foco ao botão que abriu o menu
    };

    const openMenu = () => {
        hamburgerBtn.setAttribute('aria-expanded', 'true');
        navWrapper.setAttribute('aria-hidden', 'false');
        body.classList.add('nav-open');
        navWrapper.querySelector('a').focus(); // Foca no primeiro item do menu
    };

    if (hamburgerBtn && navWrapper) {
        hamburgerBtn.addEventListener('click', () => {
            const isOpened = body.classList.contains('nav-open');
            if (isOpened) {
                closeMenu();
            } else {
                openMenu();
            }
        });

        // Adiciona um "ouvinte" a cada link do menu
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                // Se o menu estiver aberto, fecha-o
                if (body.classList.contains('nav-open')) {
                    closeMenu();
                }
            });
        });
    }

    // --- LÓGICA DO ANO DINÂMICO NO RODAPÉ ---
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});



   // Adiciona um pequeno atraso para dar tempo ao script do VLibras de se inicializar
  // setTimeout(() => {
  //   console.log("--- Iniciando Diagnóstico do VLibras ---");
  //   const vlibrasWidget = document.querySelector('div[vw]');
  //   if (vlibrasWidget) {
  //     console.log("Elemento container do VLibras (div[vw]) foi encontrado!", vlibrasWidget);
  //     const accessButton = document.querySelector('.vw-access-button');
  //     if (accessButton) {
  //       console.log("Botão de acesso do VLibras (.vw-access-button) foi encontrado!!", accessButton);
  //       const styles = window.getComputedStyle(accessButton);
  //       console.log("Estilos computados do botão", {
  //         display: styles.display,
  //         opacity: styles.opacity,
  //         position: styles.position,
  //         zIndex: styles.zIndex
  //       });
  //     } else {
  //       console.error("ERRO: Botão de acesso do VLibras (.vw-access-button) NÃO foi encontrado.");
  //     }
  //   } else {
  //     console.error("ERRO: Container do VLibras (div[vw]) NÃO foi encontrado no DOM");
  //   }
  //   console.log("--- Fim do Diagnóstico ---");
  // }, 2000);

