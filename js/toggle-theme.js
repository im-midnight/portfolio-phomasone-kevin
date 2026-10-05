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

// Au chargement : choix fait pendant la visite, sinon on suit l'OS
const stored = sessionStorage.getItem('theme')
applyTheme(stored ? stored === 'dark' : systemDark.matches)

// Le toggle change le thème pour la visite en cours (d'une page à l'autre)
themeToggle.addEventListener('change', () => {
    applyTheme(themeToggle.checked)
    sessionStorage.setItem('theme', themeToggle.checked ? 'dark' : 'light')
})

// Quand l'OS change, on le suit et on efface le choix du toggle
systemDark.addEventListener('change', (e) => {
    sessionStorage.removeItem('theme')
    applyTheme(e.matches)
})