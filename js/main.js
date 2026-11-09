(function () {
  var root = document.documentElement;
  var titles = { bg: 'Чужденецът снима | Сватбени филми', en: 'Чужденецът снима | Wedding films in Bulgaria' };
  var flagButtons = document.querySelectorAll('[data-set-lang]');

  function setLang(lang, remember) {
    if (lang !== 'bg' && lang !== 'en') lang = 'bg';
    root.lang = lang;
    root.classList.remove('l-bg', 'l-en');
    root.classList.add('l-' + lang);
    document.title = titles[lang];
    flagButtons.forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.setLang === lang)); });
    if (remember) { try { localStorage.setItem('lang', lang); } catch (e) {} }
  }

  var initial = 'bg';
  var fromUrl = new URLSearchParams(location.search).get('lang');
  if (fromUrl) { initial = fromUrl; }
  else { try { initial = localStorage.getItem('lang') || initial; } catch (e) {} }
  setLang(initial, false);

  flagButtons.forEach(function (b) {
    b.addEventListener('click', function () { setLang(b.dataset.setLang, true); });
  });

  // mobile menu
  var burger = document.querySelector('.burger');
  var menu = document.getElementById('menu');
  function closeMenu() { menu.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); }
  burger.addEventListener('click', function () {
    var open = menu.classList.toggle('open');
    burger.setAttribute('aria-expanded', String(open));
  });
  menu.addEventListener('click', function (e) { if (e.target.closest('a')) closeMenu(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeMenu(); });
})();
