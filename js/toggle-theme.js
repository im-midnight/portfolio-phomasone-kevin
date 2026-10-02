const themeToggle = document.getElementById('theme-toggle-input')
const systemDark = window.matchMedia('(prefers-color-scheme: dark)')

function applyTheme(dark) {
    if (dark) {
        document.documentElement.setAttribute('data-theme', 'dark')
    } else {
        document.documentElement.removeAttribute('data-theme')
    }
    themeToggle.checked = dark
}

// Au chargement : on suit l'OS
applyTheme(systemDark.matches)

// Le toggle change le thème pour la visite en cours
themeToggle.addEventListener('change', () => {
    applyTheme(themeToggle.checked)
})

// Quand l'OS change, on le suit, même après un clic sur le toggle
systemDark.addEventListener('change', (e) => {
    applyTheme(e.matches)
})