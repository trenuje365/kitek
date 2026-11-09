(function () {
  var root = document.documentElement;
  root.classList.add('js');
  var titles = { bg: 'Чужденецът снима | Сватбени филми', en: 'Чужденецът снима | Wedding films in Bulgaria' };
  var buttons = document.querySelectorAll('[data-set-lang]');
  var sub = document.getElementById('subtitle');

  function setLang(lang, remember) {
    if (lang !== 'bg' && lang !== 'en') lang = 'bg';
    root.lang = lang;
    root.classList.remove('l-bg', 'l-en');
    root.classList.add('l-' + lang);
    document.title = titles[lang];
    buttons.forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.setLang === lang)); });
    if (remember) { try { localStorage.setItem('lang', lang); } catch (e) {} }
  }

  var initial = 'bg';
  var fromUrl = new URLSearchParams(location.search).get('lang');
  if (fromUrl) { initial = fromUrl; }
  else {
    try { initial = localStorage.getItem('lang') || initial; } catch (e) {}
  }
  setLang(initial, false);

  buttons.forEach(function (b) {
    b.addEventListener('click', function () { setLang(b.dataset.setLang, true); });
  });

  // The one moment of motion: the subtitle cuts in a beat after the frame, like a real subtitle.
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  setTimeout(function () { sub.classList.add('on'); }, reduce ? 0 : 900);
})();
