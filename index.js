const langInputs = document.querySelectorAll('.langWrap input[name="lang"]');
const i18nEls = document.querySelectorAll('[data-i18n]');
const i18nFileEls = document.querySelectorAll('[data-i18n-file]');

langInputs.forEach(el => {
    el.addEventListener('change', () => {
        const lang = el.value; // "fr", "en" ou "vi"
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

    i18nFileEls.forEach(el => {
        const key = el.getAttribute('data-i18n-file');
        if (files[lang] && files[lang][key]) {
            el.setAttribute('href', files[lang][key]);
        }
    });
}