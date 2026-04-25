/*!
 * LAPIS Navbar Module v1.0.0
 * CDN micro-frontend — auto-contenido, sin dependencias
 * Uso: <script src="CDN_URL/lapis-navbar.js"></script>
 * Mount point en Webflow: <div id="lapis-nav-root"></div>
 */
(function () {
  'use strict';

  /* ── CSS ── */
  var CSS = [
    '.lapis-nav *{box-sizing:border-box;margin:0;padding:0}',
    '.lapis-nav{z-index:9999;font-family:\'Inter\',system-ui,-apple-system,sans-serif;width:100%}',
    '.lapis-bar{height:72px;background:#05070c;color:#fff;display:flex;align-items:center;justify-content:space-between;padding:0 32px;border-bottom:1px solid rgba(255,255,255,.07);position:relative;width:100%}',
    '.lapis-logo img{height:40px;display:block}',
    '.lapis-actions{display:flex;align-items:center;gap:14px}',
    '.lapis-cta{background:#fff;color:#05070c;text-decoration:none;padding:12px 22px;border-radius:999px;font-size:13.5px;font-weight:800;letter-spacing:.01em;white-space:nowrap;transition:background .18s,transform .15s}',
    '.lapis-cta:hover{background:#e8e0ff;transform:translateY(-1px)}',
    '.lapis-btn{width:44px;height:44px;border:1px solid rgba(255,255,255,.2);border-radius:12px;background:rgba(255,255,255,.05);display:flex;align-items:center;justify-content:center;flex-direction:column;gap:5px;cursor:pointer;transition:background .18s,border-color .18s}',
    '.lapis-btn:hover{background:rgba(255,255,255,.1);border-color:rgba(255,255,255,.35)}',
    '.lapis-btn span{width:20px;height:2px;background:#fff;border-radius:2px;display:block}',
    '.lapis-drawer{position:fixed;inset:0;z-index:99999;pointer-events:none}',
    '.lapis-backdrop{position:absolute;inset:0;background:rgba(3,5,10,.75);backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px);opacity:0;transition:opacity .28s ease}',
    '.lapis-panel{position:absolute;top:0;right:0;width:min(360px,90vw);height:100%;background:#060c17;color:#fff;transform:translateX(108%);transition:transform .34s cubic-bezier(.32,.72,0,1);padding:24px 24px 32px;overflow-y:auto;overflow-x:hidden;box-shadow:-24px 0 80px rgba(0,0,0,.55);display:flex;flex-direction:column}',
    '.lapis-drawer.open{pointer-events:auto}',
    '.lapis-drawer.open .lapis-backdrop{opacity:1}',
    '.lapis-drawer.open .lapis-panel{transform:translateX(0)}',
    '.lapis-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;padding-bottom:16px;border-bottom:1px solid rgba(255,255,255,.07);flex-shrink:0}',
    '.lapis-head img{height:32px}',
    '.lapis-close{width:34px;height:34px;border:1px solid rgba(255,255,255,.15);border-radius:8px;background:rgba(255,255,255,.04);color:#fff;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:background .18s,border-color .18s;flex-shrink:0}',
    '.lapis-close:hover{background:rgba(255,255,255,.1);border-color:rgba(255,255,255,.3)}',
    '.lapis-nav-body{flex:1;display:flex;flex-direction:column}',
    '.lapis-acc{border-bottom:1px solid rgba(255,255,255,.08)}',
    '.lapis-acc-btn{width:100%;background:none;border:0;color:#fff;font-size:15px;font-weight:700;text-align:left;padding:13px 0;display:flex;justify-content:space-between;align-items:center;cursor:pointer;font-family:inherit;gap:12px;transition:color .18s}',
    '.lapis-acc-btn:hover{color:#c9a8ff}',
    '.lapis-acc-icon{width:24px;height:24px;border-radius:6px;background:rgba(183,136,255,.12);border:1px solid rgba(183,136,255,.2);display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:background .18s,transform .25s}',
    '.lapis-acc.active .lapis-acc-icon{background:rgba(183,136,255,.22);transform:rotate(90deg)}',
    '.lapis-acc-icon svg{display:block}',
    '.lapis-content{max-height:0;overflow:hidden;transition:max-height .32s cubic-bezier(.4,0,.2,1)}',
    '.lapis-acc.active .lapis-content{max-height:800px}',
    '.lapis-content-inner{padding:0 0 10px}',
    '.lapis-label{font-size:11px;letter-spacing:.12em;color:#b788ff;text-transform:uppercase;font-weight:800;margin-bottom:10px;padding:0 2px}',
    '.lapis-item{display:flex;flex-direction:column;text-decoration:none;padding:8px 10px;border-left:2px solid rgba(255,255,255,.1);border-radius:0 6px 6px 0;margin-bottom:3px;transition:background .18s,border-color .18s}',
    '.lapis-item:hover{background:rgba(183,136,255,.06);border-color:#b788ff}',
    '.lapis-item strong{display:block;color:#fff;font-size:13.5px;font-weight:600;margin-bottom:1px}',
    '.lapis-item span{display:block;color:rgba(255,255,255,.5);font-size:12px;line-height:1.4}',
    '.lapis-direct{display:flex;align-items:center;color:#fff;text-decoration:none;font-size:15px;font-weight:700;padding:13px 0;border-bottom:1px solid rgba(255,255,255,.08);transition:color .18s}',
    '.lapis-direct:hover{color:#c9a8ff}',
    '.lapis-panel-cta{display:block;text-align:center;margin-top:auto;padding-top:16px}',
    '.lapis-panel-cta a{display:block;background:#fff;color:#05070c;text-decoration:none;padding:13px 20px;border-radius:999px;font-weight:900;font-size:14px;transition:background .18s,transform .15s}',
    '.lapis-panel-cta a:hover{background:#e8e0ff;transform:translateY(-1px)}',
    '@media(max-width:640px){',
    '  .lapis-bar{padding:0 18px;height:64px}',
    '  .lapis-logo img{height:34px}',
    '  .lapis-cta{padding:10px 16px;font-size:13px}',
    '  .lapis-btn{width:42px;height:42px}',
    '  .lapis-panel{padding:16px 16px 24px;width:min(340px,78vw)}',
    '  .lapis-acc-btn{font-size:14px;padding:12px 0}',
    '  .lapis-direct{font-size:14px;padding:12px 0}',
    '  .lapis-item strong{font-size:13px}',
    '}',
    '@media(max-width:380px){.lapis-cta{display:none}}'
  ].join('\n');

  /* ── HTML ── */
  var CHEVRON = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#b788ff" stroke-width="2.5" stroke-linecap="round"><polyline points="9 18 15 12 9 6"/></svg>';
  var ICON = '<span class="lapis-acc-icon">' + CHEVRON + '</span>';
  var LOGO_URL = 'https://cdn.prod.website-files.com/69d98b110a340bd2b5265993/69dbc318a9d02a100777a6f8_gema%20lapis.png';

  function acc(label, inner) {
    return '<div class="lapis-acc"><button class="lapis-acc-btn">' + label + ICON + '</button><div class="lapis-content"><div class="lapis-content-inner">' + inner + '</div></div></div>';
  }
  function item(href, title, desc, extra) {
    return '<a class="lapis-item" href="' + href + '"' + (extra || '') + '><strong>' + title + '</strong>' + (desc ? '<span>' + desc + '</span>' : '') + '</a>';
  }

  var HTML = [
    '<nav class="lapis-nav">',
    '  <div class="lapis-bar">',
    '    <a class="lapis-logo" href="/" aria-label="LAPIS Home"><img src="' + LOGO_URL + '" alt="LAPIS"></a>',
    '    <div class="lapis-actions">',
    '      <a class="lapis-cta" href="/diagnostico">Diagnóstico IA sin costo</a>',
    '      <button class="lapis-btn" id="lapisOpen" aria-label="Abrir menú"><span></span><span></span><span></span></button>',
    '    </div>',
    '  </div>',
    '</nav>',
    '<div class="lapis-drawer" id="lapisDrawer">',
    '  <div class="lapis-backdrop" id="lapisBackdrop"></div>',
    '  <aside class="lapis-panel" role="dialog" aria-modal="true" aria-label="Menú de navegación">',
    '    <div class="lapis-head">',
    '      <a href="/"><img src="' + LOGO_URL + '" alt="LAPIS"></a>',
    '      <button class="lapis-close" id="lapisClose" aria-label="Cerrar menú"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>',
    '    </div>',
    '    <div class="lapis-nav-body">',
    acc('Invierte / Desarrolla',
      '<div class="lapis-label">Modelos de inversión</div>' +
      item('/invierte-desarrolla/construye-tu-casa', 'Construye tu casa', 'Convierte tu terreno en un residencial.') +
      item('/invierte-desarrolla/coliving-rentable', 'Coliving rentable', 'Convierte propiedades en flujo constante.') +
      item('/invierte-desarrolla/microcentros-logisticos', 'Microcentros logísticos', 'Activa terrenos para logística urbana.') +
      item('/invierte-desarrolla/multifamiliares-urbanos', 'Multifamiliares urbanos', 'Escala rentabilidad por densificación.') +
      item('/invierte-desarrolla/clinicas-especializadas', 'Clínicas especializadas', 'Infraestructura médica preparada para IA.') +
      item('/invierte-desarrolla/urbanizaciones', 'Desarrollos urbanos e industriales', 'Transforma propiedades subutilizadas.') +
      item('/invierte-desarrolla/desarrollos-energeticamente-independientes', 'Desarrollos energéticamente independientes', 'Controla tu propia energía.')
    ),
    acc('Soluciones Empresariales',
      '<div class="lapis-label">Sistema LAPIS</div>' +
      item('/soluciones/lapis-os', 'LAPIS OS', 'Protege y controla tu proyecto inmobiliario con IA.') +
      item('/soluciones/estructuracion', 'Estructuración de proyecto', 'Definición clara antes de invertir.') +
      item('/soluciones/gerencia-de-proyectos', 'Gerencia de proyectos', 'Control total de obra y recursos.') +
      item('/soluciones/auditoria-rescate', 'Auditoría y rescate', 'Corrige proyectos en riesgo.') +
      item('/soluciones/marketing-inmobiliario', 'Marketing inmobiliario', 'Vende antes de invertir.')
    ),
    '      <a class="lapis-direct" href="/casos-de-exito">Casos de Éxito</a>',
    acc('Recursos',
      '<div class="lapis-label">Recursos y validación</div>' +
      item('/blog', 'Blog', 'Aprende a invertir con control.') +
      item('/guias-practicas', 'Guías prácticas', 'Evita errores en tu proyecto.') +
      item('/metodologia-lapis', 'Metodología LAPIS', 'Cómo estructuramos y controlamos.') +
      item('/centro-de-ayuda', 'Centro de ayuda', 'Solicita apoyo a nuestro equipo.')
    ),
    acc('Empresa',
      item('/empresa', 'Quiénes somos', '') +
      item('/contacto', 'Contacto', '') +
      item('https://www.lapisglobal.us', 'Oficinas en EUA', '', ' target="_blank" rel="noopener"') +
      item('/oficinas-lapis', 'Oficinas en México', 'CDMX · Monterrey · Guadalajara · Querétaro · Aguascalientes · Durango · Hermosillo · San Luis Potosí')
    ),
    '    </div>',
    '    <div class="lapis-panel-cta"><a href="/diagnostico">Iniciar diagnóstico IA sin costo</a></div>',
    '  </aside>',
    '</div>'
  ].join('\n');

  /* ── INIT ── */
  function injectCSS() {
    if (document.getElementById('lapis-nav-css')) return;
    var style = document.createElement('style');
    style.id = 'lapis-nav-css';
    style.textContent = CSS;
    document.head.appendChild(style);
  }

  function mount() {
    var root = document.getElementById('lapis-nav-root');
    if (!root) return;
    var wrapper = document.createElement('div');
    wrapper.style.cssText = 'width:100%;display:contents';
    wrapper.innerHTML = HTML;
    root.parentNode.replaceChild(wrapper, root);
    initEvents();
  }

  function initEvents() {
    var drawer = document.getElementById('lapisDrawer');
    var openBtn = document.getElementById('lapisOpen');
    var closeBtn = document.getElementById('lapisClose');
    var backdrop = document.getElementById('lapisBackdrop');
    if (!drawer || !openBtn) return;

    function openMenu() {
      drawer.classList.add('open');
      document.body.style.overflow = 'hidden';
      if (closeBtn) closeBtn.focus();
    }
    function closeMenu() {
      drawer.classList.remove('open');
      document.body.style.overflow = '';
      openBtn.focus();
    }

    openBtn.addEventListener('click', openMenu);
    if (closeBtn) closeBtn.addEventListener('click', closeMenu);
    if (backdrop) backdrop.addEventListener('click', closeMenu);
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeMenu(); });

    document.querySelectorAll('.lapis-acc-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var acc = btn.parentElement;
        var isActive = acc.classList.contains('active');
        document.querySelectorAll('.lapis-acc').forEach(function (a) { a.classList.remove('active'); });
        if (!isActive) acc.classList.add('active');
      });
    });
  }

  /* ── BOOT ── */
  injectCSS();
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }

})();
