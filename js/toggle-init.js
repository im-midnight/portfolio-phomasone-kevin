(function() {
    var stored = localStorage.getItem('theme');
    var isDark = stored === 'dark';

    if (isDark) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }

    var link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.type = 'image/webp';
    link.href = isDark ? '/assets/icon-dark.webp' : '/assets/icon.webp';

    var faviconlink = document.createElement('link');
    faviconlink.id = 'favicon';
    faviconlink.rel = 'icon';
    faviconlink.type = 'image/webp';
    faviconlink.href = isDark ? '/assets/icon-dark.webp' : '/assets/icon.webp';

    document.head.appendChild(link);
    document.head.appendChild(faviconlink);
})();
