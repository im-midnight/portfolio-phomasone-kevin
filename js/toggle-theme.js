const themeToggle = document.getElementById('theme-toggle-input')

function applyTheme(dark) {
    if (dark) {
        document.documentElement.setAttribute('data-theme', 'dark')
    } else {
        document.documentElement.removeAttribute('data-theme')
    }
    themeToggle.checked = dark

    const favicon = document.getElementById('favicon')
    if (favicon) {
        favicon.href = dark ? '/assets/icon-dark.webp' : '/assets/icon.webp'
    }
}

const stored = localStorage.getItem('theme')
applyTheme(stored === 'dark')

themeToggle.addEventListener('change', () => {
    applyTheme(themeToggle.checked)
    localStorage.setItem('theme', themeToggle.checked ? 'dark' : 'light')
})