(function() {
    var stored = localStorage.getItem('theme');
    var isDark = stored
        ? stored === 'dark'
        : window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (isDark) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }

    var link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.type = 'image/webp';
    link.href = isDark ? '/assets/icon-dark.webp' : '/assets/icon.webp';
    document.head.appendChild(link);
})();