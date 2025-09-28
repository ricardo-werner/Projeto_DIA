// Usamos window.onload para garantir que TODOS os recursos,
// incluindo o script externo do VLibras, estejam completamente carregados.

window.onload = function() {
  /* A inicialização do VLibras foi movida para cá para garantir que o DOM esteja completamente carregado antes de inicializar o widget */
  new window.VLibras.Widget('https://vlibras.gov.br/app');
    
  // Desafio do Contraste
  const toggleContrastBtn = document.getElementById('toggle-contrast');
  const contrastText = document.getElementById('contrast-text');
  if(toggleContrastBtn && contrastText) {
    toggleContrastBtn.addEventListener('click', () => {
      contrastText.classList.toggle('low-contrast');
      contrastText.classList.toggle('high-contrast');
      toggleContrastBtn.textContent = contrastText.classList.contains('low-contrast') ? 'Aplicar Alto Contraste' : 'Ver Baixo Contraste';
    });
  }

  // Desafio da Cor
  const toggleColorBtn = document.getElementById('toggle-color');
  const colorErrorMsg = document.getElementById('color-error-msg');
  if(toggleColorBtn && colorErrorMsg) {
    toggleColorBtn.addEventListener('click', () => {
      colorErrorMsg.classList.toggle('error-message-hidden');
      colorErrorMsg.classList.toggle('error-message-visible');
      toggleColorBtn.textContent = colorErrorMsg.classList.contains('error-message-hidden') ? 'Adicionar Reforço Visual' : 'Remover Reforço Visual';
    });
  }

  // Desafio da Tipografia
  const toggleTypographyBtn = document.getElementById('toggle-typography');
  const typographyText = document.getElementById('typography-text');
  if(toggleTypographyBtn && typographyText) {
    toggleTypographyBtn.addEventListener('click', () => {
      typographyText.classList.toggle('typography-bad');
      typographyText.classList.toggle('typography-good');
      toggleTypographyBtn.textContent = typographyText.classList.contains('typography-bad') ? 'Ativar Fonte Amigável' : 'Ver Fonte Inadequada';
    });
  }

  // Novo Toggle de Fonte
  const fontSwitch = document.getElementById('font-switch');
  if(fontSwitch) {
    fontSwitch.addEventListener('click', () => {
      const isChecked = document.body.classList.toggle('reading-font-active');
      fontSwitch.setAttribute('aria-checked', isChecked);
    });
  }

  // Lógica do Menu Hamburguer
  const hamburgerBtn = document.querySelector('.hamburger-btn');
  const navWrapper = document.getElementById('nav-wrapper');
  const body = document.body;

  if(hamburgerBtn && navWrapper) {
    hamburgerBtn.addEventListener('click', () => {
      const isOpened = hamburgerBtn.getAttribute('aria-expanded') === 'true';
      hamburgerBtn.setAttribute('aria-expanded', !isOpened);
      navWrapper.setAttribute('aria-hidden', isOpened);
      body.classList.toggle('nav-open');

      if(!isOpened) {
        //Opcional: focar no primeiro item do menu quando aberto
        navWrapper.querySelector('a').focus();
      }
    });
  }

   // Adiciona um pequeno atraso para dar tempo ao script do VLibras de se inicializar
  setTimeout(() => {
    console.log("--- Iniciando Diagnóstico do VLibras ---");
    const vlibrasWidget = document.querySelector('div[vw]');
    if (vlibrasWidget) {
      console.log("Elemento container do VLibras (div[vw]) foi encontrado!", vlibrasWidget);
      const accessButton = document.querySelector('.vw-access-button');
      if (accessButton) {
        console.log("Botão de acesso do VLibras (.vw-access-button) foi encontrado!!", accessButton);
        const styles = window.getComputedStyle(accessButton);
        console.log("Estilos computados do botão", {
          display: styles.display,
          opacity: styles.opacity,
          position: styles.position,
          zIndex: styles.zIndex
        });
      } else {
        console.error("ERRO: Botão de acesso do VLibras (.vw-access-button) NÃO foi encontrado.");
      }
    } else {
      console.error("ERRO: Container do VLibras (div[vw]) NÃO foi encontrado no DOM");
    }
    console.log("--- Fim do Diagnóstico ---");
  }, 2000); //Atraso de 2seg
};
