/* ============================================================
   UrbisOwl — 2D vector owl mascot (motion-design style)
   Vanilla JS, no dependencies. Global: window.UrbisOwl
   ============================================================ */
(function () {
  'use strict';

  // ---------- tiny spring integrator (critically/under-damped) ----------
  function Spring(stiffness, damping, mass) {
    this.k = stiffness || 170;
    this.d = damping || 20;
    this.m = mass || 1;
    this.pos = 0;
    this.vel = 0;
    this.target = 0;
  }
  Spring.prototype.set = function (v) { this.pos = v; this.target = v; this.vel = 0; };
  Spring.prototype.to = function (v) { this.target = v; };
  Spring.prototype.step = function (dt) {
    var force = -this.k * (this.pos - this.target) - this.d * this.vel;
    var acc = force / this.m;
    this.vel += acc * dt;
    this.pos += this.vel * dt;
    return this.pos;
  };

  function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }
  function easeInOutSine(t) { return -(Math.cos(Math.PI * t) - 1) / 2; }
  function lerp(a, b, t) { return a + (b - a) * t; }
  function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }
  function dist(x1, y1, x2, y2) { return Math.hypot(x2 - x1, y2 - y1); }

  var SVG_NS = 'http://www.w3.org/2000/svg';

  var OWL_MARKUP = ''
    + '<svg id="owl-svg" viewBox="0 0 200 240" width="120" height="144" style="overflow:visible;display:block;filter:drop-shadow(0 6px 10px rgba(20,16,11,0.28))">'
    + '<defs>'
    + '<radialGradient id="gCos" cx="38%" cy="30%" r="80%"><stop offset="0%" stop-color="#FDF6E9"/><stop offset="45%" stop-color="#F4EFE4"/><stop offset="100%" stop-color="#E7D9BE"/></radialGradient>'
    + '<linearGradient id="gMantell" x1="30%" y1="0%" x2="70%" y2="100%"><stop offset="0%" stop-color="#F2B24C"/><stop offset="60%" stop-color="#D68F38"/><stop offset="100%" stop-color="#C67A2E"/></linearGradient>'
    + '<linearGradient id="gAla" x1="20%" y1="10%" x2="80%" y2="100%"><stop offset="0%" stop-color="#F2B24C"/><stop offset="55%" stop-color="#C67A2E"/><stop offset="100%" stop-color="#8B7BD8"/></linearGradient>'
    + '<radialGradient id="gDisc" cx="50%" cy="42%" r="62%"><stop offset="0%" stop-color="#FFFDF8"/><stop offset="70%" stop-color="#FBF3E4"/><stop offset="100%" stop-color="#EAD9BC"/></radialGradient>'
    + '<linearGradient id="gCua" x1="50%" y1="0%" x2="50%" y2="100%"><stop offset="0%" stop-color="#C67A2E"/><stop offset="100%" stop-color="#8B7BD8"/></linearGradient>'
    + '<filter id="blurOmbra" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="6"/></filter>'
    + '</defs>'
    + '<ellipse id="ombra" cx="100" cy="228" rx="42" ry="9" fill="#10231A" opacity="0.28" filter="url(#blurOmbra)"/>'
    + '<g id="rastre"></g>'
    + '<g id="ala-llunyana" style="transform-origin:118px 118px">'
    + '<path d="M118,112 C150,96 182,118 170,158 C150,150 128,146 118,132 Z" fill="url(#gAla)"/>'
    + '<path d="M118,112 C150,96 182,118 170,158 C150,150 128,146 118,132 Z" fill="#241a2e" opacity="0.28"/>'
    + '</g>'
    + '<g id="cua" style="transform-origin:100px 178px">'
    + '<path d="M84,176 C90,210 110,210 116,176 C110,190 90,190 84,176 Z" fill="url(#gCua)"/>'
    + '</g>'
    + '<g id="cos" style="transform-origin:100px 200px">'
    + '<path d="M100,96 C66,96 54,132 58,168 C61,196 80,212 100,212 C120,212 139,196 142,168 C146,132 134,96 100,96 Z" fill="url(#gCos)"/>'
    + '<path d="M100,100 C132,100 143,134 140,166 C138,150 120,140 100,140 C80,140 62,150 60,166 C57,134 68,100 100,100 Z" fill="url(#gMantell)" opacity="0.9"/>'
    + '<g id="pigallat" fill="#8a501d" opacity="0.6">'
    + '<circle cx="86" cy="120" r="2.4"/><circle cx="104" cy="116" r="2.9"/><circle cx="120" cy="124" r="2.4"/><circle cx="94" cy="134" r="2.9"/><circle cx="112" cy="136" r="2.4"/><circle cx="78" cy="132" r="2.4"/><circle cx="128" cy="134" r="2.9"/><circle cx="100" cy="148" r="2.4"/><circle cx="84" cy="150" r="2.9"/><circle cx="116" cy="150" r="2.4"/>'
    + '</g>'
    + '</g>'
    + '<g id="potes" style="opacity:0;transform-origin:100px 208px">'
    + '<path d="M90,206 L88,224 M88,224 L82,230 M88,224 L90,232 M88,224 L94,230" stroke="#C67A2E" stroke-width="4" stroke-linecap="round" fill="none"/>'
    + '<path d="M110,206 L112,224 M112,224 L106,230 M112,224 L110,232 M112,224 L118,230" stroke="#C67A2E" stroke-width="4" stroke-linecap="round" fill="none"/>'
    + '</g>'
    + '<g id="ala-propera" style="transform-origin:82px 118px">'
    + '<path d="M82,112 C50,96 18,118 30,158 C50,150 72,146 82,132 Z" fill="url(#gAla)"/>'
    + '</g>'
    + '<g id="cap" style="transform-origin:100px 96px">'
    + '<path d="M100,20 C60,20 44,52 48,84 C51,108 74,118 100,118 C126,118 149,108 152,84 C156,52 140,20 100,20 Z" fill="url(#gMantell)"/>'
    + '<g id="disc-facial">'
    + '<path d="M100,34 C78,30 60,44 60,68 C60,96 82,112 100,112 C118,112 140,96 140,68 C140,44 122,30 100,34 Z" fill="url(#gDisc)"/>'
    + '<path d="M100,40 C90,50 92,66 100,78 C108,66 110,50 100,40 Z" fill="#E7D3B0" opacity="0.5"/>'
    + '</g>'
    + '<g id="ull-esq"><ellipse cx="82" cy="66" rx="14" ry="16" fill="#14100B"/><circle cx="78" cy="60" r="4.4" fill="#FFFDF8" opacity="0.95"/><circle cx="86" cy="70" r="2" fill="#8B7BD8" opacity="0.85"/></g>'
    + '<g id="ull-dret"><ellipse cx="118" cy="66" rx="14" ry="16" fill="#14100B"/><circle cx="114" cy="60" r="4.4" fill="#FFFDF8" opacity="0.95"/><circle cx="122" cy="70" r="2" fill="#8B7BD8" opacity="0.85"/></g>'
    + '<path d="M100,76 C96,82 96,90 100,94 C104,90 104,82 100,76 Z" fill="#C67A2E"/>'
    + '<g id="parpelles">'
    + '<rect id="parp-esq" x="67" y="48" width="30" height="0" rx="8" fill="url(#gMantell)"/>'
    + '<rect id="parp-dret" x="103" y="48" width="30" height="0" rx="8" fill="url(#gMantell)"/>'
    + '</g>'
    + '</g>'
    + '</svg>';

  var PREY_MARKUP = ''
    + '<svg width="40" height="30" viewBox="0 0 40 30" style="overflow:visible;display:block">'
    + '<defs><radialGradient id="g-prey" cx="35%" cy="30%" r="75%">'
    + '<stop offset="0%" stop-color="#D9D2C4"/><stop offset="100%" stop-color="#8B8579"/>'
    + '</radialGradient></defs>'
    + '<path d="M2,24 Q-6,14 6,10" stroke="#8B8579" stroke-width="2" fill="none" stroke-linecap="round"/>'
    + '<ellipse cx="20" cy="18" rx="16" ry="10" fill="url(#g-prey)"/>'
    + '<circle cx="33" cy="13" r="7" fill="url(#g-prey)"/>'
    + '<circle cx="36" cy="10" r="1.6" fill="#14100B"/>'
    + '<ellipse cx="28" cy="7" rx="3" ry="4" fill="#8B7BD8" opacity="0.5"/>'
    + '</svg>';

  function UrbisOwl() {
    this.perches = [];
    this.perchRects = [];
    this.state = 'REPOS_PERXA';
    this.reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    this.x = new Spring(120, 18, 1);
    this.y = new Spring(120, 18, 1);
    this.rot = new Spring(90, 12, 1);
    this.scaleX = new Spring(140, 14, 1);
    this.scaleY = new Spring(140, 14, 1);
    this.headTurn = new Spring(80, 14, 1);
    this.blink = new Spring(400, 30, 1);

    this.facing = 1; // 1 right, -1 left
    this.perchIndex = 0;
    this.lastMove = 0;
    this.nextIdleSwitch = 15000 + Math.random() * 15000;
    this.wingPhase = 0;
    this.flapRate = 9; // hz while flying
    this.flightT = 0;
    this.flightFrom = { x: 0, y: 0 };
    this.flightTo = { x: 0, y: 0 };
    this.flightCtrl = { x: 0, y: 0 };
    this.flightDur = 900;
    this.trailTimer = 0;
    this.nextBlink = 2000 + Math.random() * 3000;
    this.blinkClock = 0;

    this.hunting = false;
    this.prey = null;
    this.preyEl = null;
    this.preyT = 0;

    this.mouse = { x: -9999, y: -9999 };
    this.lastFrame = null;
  }

  UrbisOwl.prototype.init = function (opts) {
    opts = opts || {};
    this.perches = opts.perches || ['header h1'];

    // tear down any previous mount (re-init safe, e.g. on DC remount)
    var oldContainer = document.getElementById('urbis-owl-root');
    if (oldContainer) oldContainer.remove();
    if (this._raf) this._raf = false;
    if (this.huntBtn && this.huntBtn.parentNode) this.huntBtn.remove();

    this.lastFrame = null;
    this.state = 'REPOS_PERXA';
    this.perchIndex = 0;

    this.container = document.createElement('div');
    this.container.id = 'urbis-owl-root';
    this.container.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:9999;';
    document.body.appendChild(this.container);

    this.owlWrap = document.createElement('div');
    this.owlWrap.style.cssText = 'position:absolute;top:0;left:0;will-change:transform;';
    this.owlWrap.innerHTML = OWL_MARKUP;
    this.container.appendChild(this.owlWrap);
    this.svg = this.owlWrap.querySelector('#owl-svg');

    this.trailLayer = document.createElement('div');
    this.trailLayer.style.cssText = 'position:absolute;top:0;left:0;';
    this.container.insertBefore(this.trailLayer, this.owlWrap);

    // hunt button
    this.huntBtn = document.createElement('button');
    this.huntBtn.setAttribute('aria-label', 'Envia una presa');
    this.huntBtn.style.cssText = 'position:fixed;right:26px;bottom:26px;width:60px;height:60px;border-radius:50%;border:none;'
      + 'background:radial-gradient(circle at 35% 30%, #F2B24C, #C67A2E 75%);box-shadow:0 8px 24px rgba(198,122,46,0.4),inset 0 1px 3px rgba(255,255,255,0.4);'
      + 'cursor:pointer;pointer-events:auto;display:flex;align-items:center;justify-content:center;transition:transform 180ms cubic-bezier(.34,1.56,.64,1),opacity 200ms;';
    this.huntBtn.innerHTML = '<svg width="26" height="26" viewBox="0 0 40 40">'
      + '<ellipse cx="20" cy="24" rx="11" ry="9" fill="#2B2118"/>'
      + '<circle cx="12" cy="14" r="5" fill="#2B2118"/><circle cx="28" cy="14" r="5" fill="#2B2118"/>'
      + '<circle cx="16" cy="23" r="1.6" fill="#F4EFE4"/>'
      + '<path d="M31 26 q9 2 9 8" stroke="#2B2118" stroke-width="2.4" fill="none" stroke-linecap="round"/>'
      + '</svg>';
    this.huntBtn.onmouseenter = function () { this.style.transform = 'scale(1.06)'; };
    this.huntBtn.onmouseleave = function () { this.style.transform = 'scale(1)'; };
    var self = this;
    this.huntBtn.addEventListener('click', function () { self.startHunt(); });
    document.body.appendChild(this.huntBtn);

    // resolve initial perch
    this._refreshPerchRects();
    var p0 = this._perchPoint(this.perchIndex);
    this.x.set(p0.x); this.y.set(p0.y);
    this.rot.set(0); this.scaleX.set(1); this.scaleY.set(1); this.headTurn.set(0); this.blink.set(0);
    this._setLanded(true);
    this.owlWrap.style.transform = 'translate(' + (p0.x - 60) + 'px,' + (p0.y - 144) + 'px)';

    var scrollDebounce = null;
    document.addEventListener('scroll', function () {
      self._refreshPerchRects();
      if (scrollDebounce) clearTimeout(scrollDebounce);
      scrollDebounce = setTimeout(function () {
        if (self.state !== 'REPOS_PERXA') return;
        var visible = self._visiblePerchIndices();
        if (visible.length && visible.indexOf(self.perchIndex) === -1) {
          self._flyToRandomPerch();
        }
      }, 220);
    }, { passive: true });
    window.addEventListener('resize', function () { self._refreshPerchRects(); });
    document.addEventListener('mousemove', function (e) {
      self.mouse.x = e.clientX; self.mouse.y = e.clientY;
      if (self.state === 'REPOS_PERXA' && dist(e.clientX, e.clientY, self.x.pos, self.y.pos) < 90) {
        self._onTouch();
      }
    });
    document.addEventListener('click', function (e) {
      if (dist(e.clientX, e.clientY, self.x.pos, self.y.pos) < 70) self._onTouch();
    });
    document.addEventListener('touchstart', function (e) {
      var t = e.touches[0]; if (!t) return;
      if (dist(t.clientX, t.clientY, self.x.pos, self.y.pos) < 80) self._onTouch();
    }, { passive: true });

    document.addEventListener('visibilitychange', function () {
      if (document.visibilityState === 'visible' && !self._raf) self._loop();
    });

    this._loop();
  };

  UrbisOwl.prototype._refreshPerchRects = function () {
    var self = this;
    this.perchRects = this.perches.map(function (sel) {
      var el = document.querySelector(sel);
      if (!el) return null;
      var r = el.getBoundingClientRect();
      var offset = r.height < 40 ? -8 : 26;
      return { x: r.left + r.width / 2, y: r.top - offset };
    }).filter(Boolean);
  };

  UrbisOwl.prototype._perchPoint = function (i) {
    var p = this.perchRects[i] || { x: window.innerWidth * 0.8, y: 140 };
    return {
      x: clamp(p.x, 50, window.innerWidth - 50),
      y: clamp(p.y, 60, window.innerHeight - 50),
    };
  };

  UrbisOwl.prototype._visiblePerchIndices = function () {
    var h = window.innerHeight, w = window.innerWidth;
    var out = [];
    for (var i = 0; i < this.perchRects.length; i++) {
      var r = this.perchRects[i];
      if (r.y > 20 && r.y < h - 20 && r.x > 0 && r.x < w) out.push(i);
    }
    return out;
  };

  UrbisOwl.prototype._setLanded = function (landed) {
    var potes = this.owlWrap.querySelector('#potes');
    if (potes) potes.style.opacity = landed ? '1' : '0';
    var ombra = this.owlWrap.querySelector('#ombra');
    if (ombra) ombra.style.opacity = landed ? '0.22' : '0';
  };

  UrbisOwl.prototype._onTouch = function () {
    if (this.state === 'CAÇANT' || this.state === 'VOLANT_HUNT') return;
    this.blinkClock = 0;
    this.scaleY.to(1.14); this.scaleX.to(0.9);
    var self = this;
    setTimeout(function () { self.scaleY.to(1); self.scaleX.to(1); }, 160);
    this._flyToRandomPerch();
  };

  UrbisOwl.prototype._flyToRandomPerch = function () {
    this._refreshPerchRects();
    if (this.perchRects.length < 1) return;
    var pool = this._visiblePerchIndices().filter(function (i) { return true; });
    var candidates = pool.filter((i) => i !== this.perchIndex);
    if (!candidates.length) candidates = pool.length ? pool : this.perchRects.map(function (_, i) { return i; }).filter((i) => i !== this.perchIndex);
    if (!candidates.length) return;
    var next = candidates[Math.floor(Math.random() * candidates.length)];
    this._flyTo(this._perchPoint(next));
    this.perchIndex = next;
    this.state = 'VOLANT';
  };

  UrbisOwl.prototype._flyTo = function (target) {
    this.flightFrom = { x: this.x.pos, y: this.y.pos };
    this.flightTo = { x: target.x, y: target.y };
    var midX = (this.flightFrom.x + this.flightTo.x) / 2;
    var arc = -Math.min(140, 60 + dist(this.flightFrom.x, this.flightFrom.y, this.flightTo.x, this.flightTo.y) * 0.25);
    this.flightCtrl = { x: midX, y: Math.min(this.flightFrom.y, this.flightTo.y) + arc };
    this.flightT = 0;
    this.flightDur = this.reduced ? 1 : clamp(dist(this.flightFrom.x, this.flightFrom.y, this.flightTo.x, this.flightTo.y) * 2.6, 500, 1400);
    this.facing = this.flightTo.x >= this.flightFrom.x ? 1 : -1;
    this._setLanded(false);
    this.scaleY.to(0.86); this.scaleX.to(1.12); // anticipation crouch->stretch
  };

  UrbisOwl.prototype.startHunt = function () {
    if (this.hunting) return;
    this.hunting = true;
    this.huntBtn.style.opacity = '0.45';
    this.huntBtn.style.pointerEvents = 'none';
    this.state = 'CAÇANT';
    this.prey = { x: window.innerWidth * 0.5, y: window.innerHeight * 0.5, t: 0 };
    this.preyEl = document.createElement('div');
    this.preyEl.style.cssText = 'position:absolute;top:0;left:0;will-change:transform;';
    this.preyEl.innerHTML = PREY_MARKUP;
    this.container.appendChild(this.preyEl);
  };

  UrbisOwl.prototype._stepPrey = function (dt, tSec) {
    if (!this.prey) return;
    var w = window.innerWidth, h = window.innerHeight;
    this.prey.t += dt;
    var speed = 220;
    var ang = Math.sin(this.prey.t * 2.3) * 2.4 + Math.sin(this.prey.t * 0.7) * 1.1;
    this.prey._dir = (this.prey._dir || 0) + ang * dt;
    this.prey.x += Math.cos(this.prey._dir) * speed * dt;
    this.prey.y += Math.sin(this.prey._dir) * speed * dt * 0.6;
    this.prey.x = clamp(this.prey.x, 40, w - 40);
    this.prey.y = clamp(this.prey.y, 100, h - 60);
    if (this.preyEl) {
      var pf = Math.cos(this.prey._dir) >= 0 ? 1 : -1;
      this.preyEl.style.transform = 'translate(' + (this.prey.x - 20) + 'px,' + (this.prey.y - 15) + 'px) scaleX(' + pf + ')';
    }
  };

  UrbisOwl.prototype._catchPrey = function () {
    var self = this;
    if (this.preyEl) {
      var burst = document.createElement('div');
      burst.style.cssText = 'position:absolute;top:' + (this.prey.y - 10) + 'px;left:' + (this.prey.x - 10) + 'px;';
      var dots = '';
      for (var i = 0; i < 6; i++) {
        var a = (i / 6) * Math.PI * 2;
        dots += '<div style="position:absolute;width:6px;height:6px;border-radius:50%;background:#8B7BD8;' +
          'transform:translate(' + (Math.cos(a) * 18) + 'px,' + (Math.sin(a) * 18) + 'px) scale(0);' +
          'transition:transform 320ms ease-out,opacity 320ms ease-out;opacity:1;" data-d></div>';
      }
      burst.innerHTML = dots;
      this.container.appendChild(burst);
      requestAnimationFrame(function () {
        burst.querySelectorAll('[data-d]').forEach(function (d) {
          var m = d.style.transform.match(/translate\(([-\d.]+)px,([-\d.]+)px\)/);
          d.style.transform = 'translate(' + (parseFloat(m[1]) * 1.8) + 'px,' + (parseFloat(m[2]) * 1.8) + 'px) scale(1)';
          d.style.opacity = '0';
        });
      });
      setTimeout(function () { burst.remove(); }, 400);
      this.preyEl.remove();
      this.preyEl = null;
    }
    this.prey = null;
    this.hunting = false;
    this.huntBtn.style.opacity = '1';
    this.huntBtn.style.pointerEvents = 'auto';
    this.scaleY.to(1.2); this.scaleX.to(0.85);
    setTimeout(function () { self.scaleY.to(1); self.scaleX.to(1); }, 180);
    // celebratory wing flutter handled by higher flapRate briefly
    this._celebrate = 26;
    this._flyToRandomPerch();
  };

  UrbisOwl.prototype._spawnTrail = function () {
    var ghost = this.owlWrap.cloneNode(true);
    ghost.style.cssText = this.owlWrap.style.cssText + 'opacity:0.15;filter:none;mix-blend-mode:normal;';
    var svgGhost = ghost.querySelector('svg');
    if (svgGhost) {
      svgGhost.style.filter = 'none';
      var overlay = document.createElementNS(SVG_NS, 'rect');
      overlay.setAttribute('x', '0'); overlay.setAttribute('y', '0');
      overlay.setAttribute('width', '200'); overlay.setAttribute('height', '240');
      overlay.setAttribute('fill', '#8B7BD8'); overlay.setAttribute('opacity', '0.35');
      overlay.setAttribute('style', 'mix-blend-mode:color');
      svgGhost.appendChild(overlay);
    }
    this.trailLayer.appendChild(ghost);
    var start = performance.now();
    function fade() {
      var t = (performance.now() - start) / 300;
      if (t >= 1) { ghost.remove(); return; }
      ghost.style.opacity = String(0.15 * (1 - t));
      requestAnimationFrame(fade);
    }
    requestAnimationFrame(fade);
  };

  UrbisOwl.prototype._loop = function () {
    var self = this;
    this._raf = true;
    function frame(ts) {
      if (document.visibilityState !== 'visible') { self._raf = false; return; }
      if (self.lastFrame == null) self.lastFrame = ts;
      var dt = Math.min((ts - self.lastFrame) / 1000, 0.05);
      self.lastFrame = ts;
      self._update(dt, ts / 1000);
      requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  };

  UrbisOwl.prototype._update = function (dt, tSec) {
    if (this.reduced) { this._renderStatic(); return; }

    // ---- state machine ----
    if (this.state === 'REPOS_PERXA') {
      this.nextIdleSwitch -= dt * 1000;
      if (this.nextIdleSwitch <= 0) {
        this.nextIdleSwitch = 15000 + Math.random() * 15000;
        this._flyToRandomPerch();
      }
      var p = this._perchPoint(this.perchIndex);
      this.x.to(p.x); this.y.to(p.y);
      // idle breathing
      var breathe = 1 + Math.sin(tSec * 1.6) * 0.012;
      this.scaleY.to(breathe); this.scaleX.to(1 / breathe * 0.5 + 0.5);
      this.rot.to(0);
      // blink
      this.blinkClock += dt * 1000;
      if (this.blinkClock > this.nextBlink) {
        this.blink.to(1);
        setTimeout(function () {}, 0);
        this.blinkClock = 0;
        this.nextBlink = 2200 + Math.random() * 3600;
        var self2 = this;
        setTimeout(function () { self2.blink.to(0); }, 120);
      }
      // head tracks cursor if near
      var dHead = dist(this.mouse.x, this.mouse.y, this.x.pos, this.y.pos);
      if (dHead < 220) {
        var ang = clamp((this.mouse.x - this.x.pos) / 8, -14, 14);
        this.headTurn.to(ang);
      } else {
        this.headTurn.to(0);
      }
    } else if (this.state === 'VOLANT') {
      this.flightT += dt * 1000;
      var tt = clamp(this.flightT / this.flightDur, 0, 1);
      var te = easeOutCubic(tt);
      var bx = lerp(lerp(this.flightFrom.x, this.flightCtrl.x, te), lerp(this.flightCtrl.x, this.flightTo.x, te), te);
      var by = lerp(lerp(this.flightFrom.y, this.flightCtrl.y, te), lerp(this.flightCtrl.y, this.flightTo.y, te), te);
      this.x.to(bx); this.y.to(by);
      // bank into the arc
      var dx = (lerp(this.flightCtrl.x, this.flightTo.x, te) - lerp(this.flightFrom.x, this.flightCtrl.x, te));
      var dy = (lerp(this.flightCtrl.y, this.flightTo.y, te) - lerp(this.flightFrom.y, this.flightCtrl.y, te));
      this.rot.to(clamp(Math.atan2(dy, dx * this.facing) * 20, -18, 18));
      this.wingPhase += dt * this.flapRate * Math.PI * 2;
      this.trailTimer += dt;
      if (this.trailTimer > 0.07) { this.trailTimer = 0; this._spawnTrail(); }
      if (tt >= 1) {
        this.state = 'REPOS_PERXA';
        this._setLanded(true);
        this.scaleY.to(0.82); this.scaleX.to(1.18);
        var self3 = this;
        setTimeout(function () { self3.scaleY.to(1); self3.scaleX.to(1); }, 140);
      }
    } else if (this.state === 'CAÇANT') {
      this._stepPrey(dt, tSec);
      if (this.prey) {
        this.x.to(this.prey.x); this.y.to(this.prey.y - 6);
        var ddx = this.prey.x - this.x.pos;
        this.facing = ddx >= 0 ? 1 : -1;
        this.rot.to(clamp(ddx / 12, -20, 20));
        this.wingPhase += dt * 13 * Math.PI * 2;
        this.trailTimer += dt;
        if (this.trailTimer > 0.05) { this.trailTimer = 0; this._spawnTrail(); }
        if (dist(this.x.pos, this.y.pos, this.prey.x, this.prey.y) < 22) {
          this._catchPrey();
        }
      }
    }

    // ---- integrate springs ----
    this.x.step(dt); this.y.step(dt); this.rot.step(dt);
    this.scaleX.step(dt); this.scaleY.step(dt); this.headTurn.step(dt); this.blink.step(dt);

    // ---- wing flap ----
    var flying = (this.state === 'VOLANT' || this.state === 'CAÇANT');
    var flap = flying ? Math.sin(this.wingPhase) * 46 : Math.sin(tSec * 1.1) * 3;
    var flapFar = flying ? Math.sin(this.wingPhase + 0.5) * 40 : Math.sin(tSec * 1.1 + 0.3) * 3;
    var squash = flying ? 1 + Math.sin(this.wingPhase) * 0.05 : 1;

    var near = this.owlWrap.querySelector('#ala-propera');
    var far = this.owlWrap.querySelector('#ala-llunyana');
    var tail = this.owlWrap.querySelector('#cua');
    var cap = this.owlWrap.querySelector('#cap');
    var cos = this.owlWrap.querySelector('#cos');
    var pE = this.owlWrap.querySelector('#parp-esq');
    var pD = this.owlWrap.querySelector('#parp-dret');

    if (near) near.style.transform = 'rotate(' + flap + 'deg)';
    if (far) far.style.transform = 'rotate(' + (-flapFar * 0.8) + 'deg)';
    if (tail) tail.style.transform = 'rotate(' + (flying ? Math.sin(this.wingPhase * 0.5) * 6 : 0) + 'deg)';
    if (cap) cap.style.transform = 'rotate(' + (this.headTurn.pos * 0.4) + 'deg) translateX(' + this.headTurn.pos * 0.6 + 'px)';
    if (cos) cos.style.transform = 'scale(' + squash + ',' + (2 - squash) + ')';
    var lidH = clamp(this.blink.pos * 40, 0, 40);
    if (pE) pE.setAttribute('height', String(lidH));
    if (pD) pD.setAttribute('height', String(lidH));

    this.owlWrap.style.transform = 'translate(' + (this.x.pos - 60) + 'px,' + (this.y.pos - 144) + 'px) '
      + 'scale(' + (this.facing * this.scaleX.pos) + ',' + this.scaleY.pos + ') rotate(' + (this.rot.pos / this.scaleX.pos) + 'deg)';

    var ombra = this.owlWrap.querySelector('#ombra');
    if (ombra) ombra.style.opacity = flying ? '0' : '0.22';
  };

  UrbisOwl.prototype._renderStatic = function () {
    var p = this._perchPoint(this.perchIndex);
    this.owlWrap.style.transform = 'translate(' + (p.x - 60) + 'px,' + (p.y - 144) + 'px)';
    this.owlWrap.style.transition = 'transform 500ms ease';
  };

  window.UrbisOwl = window.UrbisOwl || new UrbisOwl();
})();
