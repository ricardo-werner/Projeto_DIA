document.addEventListener('DOMContentLoaded', () => {
  // Desafio do Contraste
  const toggleContrastBtn = document.getElementById('toggle-contrast');
  const contrastText = document.getElementById('contrast-text');
  toggleContrastBtn.addEventListener('click', () => {
    contrastText.classList.toggle('low-contrast');
    contrastText.classList.toggle('high-contrast');
    toggleContrastBtn.textContent = contrastText.classList.contains('low-contrast') ? 'Aplicar Alto Contraste' : 'Ver Baixo Contraste';
  });

  // Desafio da Cor
  const toggleColorBtn = document.getElementById('toggle-color');
  const colorErrorMsg = document.getElementById('color-error-msg');
  toggleColorBtn.addEventListener('click', () => {
    colorErrorMsg.classList.toggle('error-message-hidden');
    colorErrorMsg.classList.toggle('error-message-visible');
    toggleColorBtn.textContent = colorErrorMsg.classList.contains('error-message-hidden') ? 'Adicionar Reforço Visual' : 'Remover Reforço Visual';
  });

  // Desafio da Tipografia
  const toggleTypographyBtn = document.getElementById('toggle-typography');
  const typographyText = document.getElementById('typography-text');
  toggleTypographyBtn.addEventListener('click', () => {
    typographyText.classList.toggle('typography-bad');
    typographyText.classList.toggle('typography-good');
    toggleTypographyBtn.textContent = typographyText.classList.contains('typography-bad') ? 'Ativar Fonte Amigável' : 'Ver Fonte Inadequada';
  });

  // Novo Toggle de Fonte
  const fontSwitch = document.getElementById('font-switch');
  fontSwitch.addEventListener('click', () => {
    const isChecked = document.body.classList.toggle('reading-font-active');
    fontSwitch.setAttribute('aria-checked', isChecked);
  });

  // Lógica do Menu Hamburguer
  const hamburgerBtn = document.querySelector('.hamburger-btn');
  const navWrapper = document.getElementById('nav-wrapper');
  const body = document.body;

  hamburgerBtn.addEventListener('click', () => {
    const isOpened = hamburgerBtn.getAttribute('aria-expanded') === 'true';
    hamburgerBtn.setAttribute('aria-expanded', !isOpened);
    navWrapper.setAttribute('aria-hidden', isOpened);
    body.classList.toggle('nav-open');

    if (!isOpened) {
      //Opcional: focar no primeiro item do menu quando aberto
      navWrapper.querySelector('a').focus();
    }
  });
});
