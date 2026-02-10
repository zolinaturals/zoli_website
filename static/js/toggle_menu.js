document.addEventListener('DOMContentLoaded', function () {
    const dd = document.querySelector('.language-dropdown');
    if (!dd) return;
    const btn = dd.querySelector('.lang-toggle');
    btn.addEventListener('click', function () {
        const open = dd.classList.toggle('open');
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.addEventListener('click', function (e) {
        if (!dd.contains(e.target)) {
            dd.classList.remove('open');
            btn.setAttribute('aria-expanded', 'false');
        }
    });
});