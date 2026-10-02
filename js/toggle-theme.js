const themeToggle = document.getElementById('theme-toggle-input')
const systemDark = window.matchMedia('(prefers-color-scheme: dark)')
const stored = localStorage.getItem('theme')

function applyTheme(dark) {
    if (dark) {
        document.documentElement.setAttribute('data-theme', 'dark')
    } else {
        document.documentElement.removeAttribute('data-theme')
    }
    themeToggle.checked = dark
}

// Application initiale (ce qui manquait)
applyTheme(stored ? stored === 'dark' : systemDark.matches)

themeToggle.addEventListener('change', () => {
    applyTheme(themeToggle.checked)
    localStorage.setItem('theme', themeToggle.checked ? 'dark' : 'light')
})

systemDark.addEventListener('change', (e) => {
    if (localStorage.getItem('theme')) return
    applyTheme(e.matches)
})