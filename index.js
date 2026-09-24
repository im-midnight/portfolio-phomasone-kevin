const langInputs = document.querySelectorAll('.langWrap input[name="lang"]');
const i18nEls = document.querySelectorAll('[data-i18n]');
const i18nHtmlEls = document.querySelectorAll('[data-i18n-html]');
const i18nFileEls = document.querySelectorAll('[data-i18n-file]');
const i18nPlaceholderEls = document.querySelectorAll('[data-i18n-placeholder]');


// Au chargement de la page : récupère la langue sauvegardée (ou "fr" par défaut)
const savedLang = localStorage.getItem('lang') || 'fr';

// Coche le bon radio et applique la traduction tout de suite
const savedInput = document.querySelector(`.langWrap input[value="${savedLang}"]`);
if (savedInput) {
    savedInput.checked = true;
}
applyLang(savedLang);

langInputs.forEach(el => {
    el.addEventListener('change', () => {
        const lang = el.value; // "fr", "en" ou "vi"
        localStorage.setItem('lang', lang); // sauvegarde le choix
        applyLang(lang);
    });
});

function applyLang(lang) {
    document.documentElement.lang = lang;

    i18nEls.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (data[lang] && data[lang][key]) {
            el.textContent = data[lang][key];
        }
    });

    i18nHtmlEls.forEach(el => {
        const key = el.getAttribute('data-i18n-html');
        if (data[lang] && data[lang][key]) {
            el.innerHTML = data[lang][key];
        }
    });

    i18nFileEls.forEach(el => {
        const key = el.getAttribute('data-i18n-file');
        if (files[lang] && files[lang][key]) {
            el.setAttribute('href', files[lang][key]);
        }
    });

    i18nPlaceholderEls.forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (data[lang] && data[lang][key]) {
            el.setAttribute('placeholder', data[lang][key]);
        }
    });
}