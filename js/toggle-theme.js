// Toggle thème sombre/clair
const themeToggle = document.getElementById('theme-toggle-input')
const systemDark = window.matchMedia('(prefers-color-scheme: dark)')
const stored = localStorage.getItem('theme')

themeToggle.checked = stored ? stored === 'dark' : systemDark.matches

themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        document.documentElement.setAttribute('data-theme', 'dark')
        localStorage.setItem('theme', 'dark')
    } else {
        document.documentElement.removeAttribute('data-theme')
        localStorage.setItem('theme', 'light')
    }
})

// Si l'utilisateur n'a jamais choisi explicitement, on suit le système en direct
systemDark.addEventListener('change', (e) => {
    if (localStorage.getItem('theme')) return // choix explicite déjà fait, on n'écrase pas
    if (e.matches) {
        document.documentElement.setAttribute('data-theme', 'dark')
        themeToggle.checked = true
    } else {
        document.documentElement.removeAttribute('data-theme')
        themeToggle.checked = false
    }
})