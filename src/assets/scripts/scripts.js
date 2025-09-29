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

    if (validateBtn && validationInput && errorMsg && successMsg) {
        validateBtn.addEventListener('click', () => {
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

    if (hamburgerBtn && navWrapper) {
        hamburgerBtn.addEventListener('click', () => {
            const isOpened = hamburgerBtn.getAttribute('aria-expanded') === 'true';
            hamburgerBtn.setAttribute('aria-expanded', !isOpened);
            navWrapper.setAttribute('aria-hidden', isOpened);
            body.classList.toggle('nav-open');

            if (!isOpened) {
                // Focar no primeiro item do menu quando aberto para acessibilidade
                navWrapper.querySelector('a').focus();
            }
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

