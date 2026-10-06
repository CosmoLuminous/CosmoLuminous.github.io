/**
 * animations.js
 *
 * Two canvas effects matching the reference profile's visual style:
 *
 *  1. #netbg  — full-page floating particle-network (nodes drifting slowly,
 *               connected by fading edges when close). Uses the warm teal/amber
 *               palette from the design tokens.
 *
 *  2. #linkfx — a lightweight cursor-burst effect: small radial sparks fire
 *               from the pointer whenever a link is hovered, and a slightly
 *               larger burst fires on click. Runs on a separate overlay canvas
 *               so it never interferes with page content.
 */

(function () {
    'use strict';

    /* ── Design tokens (match css/style.css) ── */
    const SIGNAL  = { r: 78,  g: 158, b: 136 }; // #4E9E88 teal
    const AMBER   = { r: 210, g: 114, b: 90  }; // #D2725A amber
    const INK     = { r: 28,  g: 27,  b: 26  }; // #1C1B1A near-black
    const PAPER_R = 251, PAPER_G = 251, PAPER_B = 250; // #FBFBFA

    /* ─────────────────────────────────────────────────────────────
       1.  NETWORK BACKGROUND  (#netbg)
       ───────────────────────────────────────────────────────────── */

    const netCanvas = document.getElementById('netbg');
    if (!netCanvas) return;

    const netCtx = netCanvas.getContext('2d');

    /* Config */
    const NET = {
        count      : 72,           // number of nodes
        minR       : 2.5,          // min node radius
        maxR       : 5.0,          // max node radius
        speed      : 0.42,         // max drift speed (px/frame)
        linkDist   : 200,          // max edge length (px)
        nodeAlpha  : 0.82,
        edgeAlpha  : 0.38,
        mouseRadius: 140,          // how far mouse attracts nodes
        mouseForce : 0.028,        // attraction strength
    };

    let W, H, nodes = [], mouse = { x: -9999, y: -9999 };
    let rafId;

    function rgba(c, a) {
        return `rgba(${c.r},${c.g},${c.b},${a})`;
    }

    function initNodes() {
        nodes = [];
        for (let i = 0; i < NET.count; i++) {
            const t = Math.random(); // blend teal ↔ amber
            const c = {
                r: Math.round(SIGNAL.r + (AMBER.r - SIGNAL.r) * t),
                g: Math.round(SIGNAL.g + (AMBER.g - SIGNAL.g) * t),
                b: Math.round(SIGNAL.b + (AMBER.b - SIGNAL.b) * t),
            };
            nodes.push({
                x  : Math.random() * W,
                y  : Math.random() * H,
                vx : (Math.random() - 0.5) * NET.speed * 2,
                vy : (Math.random() - 0.5) * NET.speed * 2,
                r  : NET.minR + Math.random() * (NET.maxR - NET.minR),
                c,
                phase: Math.random() * Math.PI * 2,  // for gentle pulse
            });
        }
    }

    function resizeNet() {
        W = netCanvas.width  = window.innerWidth;
        H = netCanvas.height = window.innerHeight;
    }

    function drawNet(ts) {
        netCtx.clearRect(0, 0, W, H);

        /* Update positions */
        nodes.forEach(n => {
            /* Gentle mouse attraction */
            const dx = mouse.x - n.x;
            const dy = mouse.y - n.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < NET.mouseRadius && dist > 1) {
                n.vx += (dx / dist) * NET.mouseForce;
                n.vy += (dy / dist) * NET.mouseForce;
            }

            /* Dampen & cap speed */
            n.vx *= 0.995;
            n.vy *= 0.995;
            const spd = Math.sqrt(n.vx * n.vx + n.vy * n.vy);
            if (spd > NET.speed) {
                n.vx = (n.vx / spd) * NET.speed;
                n.vy = (n.vy / spd) * NET.speed;
            }

            n.x += n.vx;
            n.y += n.vy;

            /* Bounce off edges */
            if (n.x < n.r)     { n.x = n.r;      n.vx =  Math.abs(n.vx); }
            if (n.x > W - n.r) { n.x = W - n.r;  n.vx = -Math.abs(n.vx); }
            if (n.y < n.r)     { n.y = n.r;      n.vy =  Math.abs(n.vy); }
            if (n.y > H - n.r) { n.y = H - n.r;  n.vy = -Math.abs(n.vy); }
        });

        /* Draw edges */
        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
                const a = nodes[i], b = nodes[j];
                const dx = a.x - b.x, dy = a.y - b.y;
                const d  = Math.sqrt(dx * dx + dy * dy);
                if (d < NET.linkDist) {
                    const alpha = (1 - d / NET.linkDist) * NET.edgeAlpha;
                    /* Blend colors of the two endpoints */
                    const cr = Math.round((a.c.r + b.c.r) / 2);
                    const cg = Math.round((a.c.g + b.c.g) / 2);
                    const cb = Math.round((a.c.b + b.c.b) / 2);
                    netCtx.beginPath();
                    netCtx.moveTo(a.x, a.y);
                    netCtx.lineTo(b.x, b.y);
                    netCtx.strokeStyle = `rgba(${cr},${cg},${cb},${alpha})`;
                    netCtx.lineWidth   = 0.8;
                    netCtx.stroke();
                }
            }
        }

        /* Draw nodes */
        const t = ts / 4000; // slow pulse
        nodes.forEach(n => {
            const pulse  = 0.85 + 0.15 * Math.sin(t + n.phase);
            const radius = n.r * pulse;
            const alpha  = NET.nodeAlpha * pulse;

            netCtx.beginPath();
            netCtx.arc(n.x, n.y, radius, 0, Math.PI * 2);
            netCtx.fillStyle = `rgba(${n.c.r},${n.c.g},${n.c.b},${alpha})`;
            netCtx.fill();
        });

        rafId = requestAnimationFrame(drawNet);
    }

    function startNet() {
        resizeNet();
        initNodes();
        cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(drawNet);
    }

    /* Mouse tracking */
    window.addEventListener('mousemove', e => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    }, { passive: true });

    window.addEventListener('mouseleave', () => {
        mouse.x = -9999;
        mouse.y = -9999;
    });

    /* Resize — debounced */
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            resizeNet();
            initNodes();
        }, 150);
    }, { passive: true });

    /* Pause when tab is hidden (saves battery) */
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            cancelAnimationFrame(rafId);
        } else {
            rafId = requestAnimationFrame(drawNet);
        }
    });

    startNet();


    /* ─────────────────────────────────────────────────────────────
       2.  LINK SPARKLE EFFECT  (#linkfx)
       ───────────────────────────────────────────────────────────── */

    const fxCanvas = document.getElementById('linkfx');
    if (!fxCanvas) return;

    const fxCtx = fxCanvas.getContext('2d');

    /* Config */
    const FX = {
        hoverCount  : 10,    // sparks on hover
        clickCount  : 22,    // sparks on click
        hoverSpeed  :  3.2,
        clickSpeed  :  5.5,
        hoverRadius :  20,   // max spread radius
        clickRadius :  36,
        life        :  38,   // frames to live
        size        :  3.5,  // max spark dot size
    };

    let sparks = [];

    function resizeFx() {
        fxCanvas.width  = window.innerWidth;
        fxCanvas.height = window.innerHeight;
    }

    function spawnSparks(x, y, count, speed, spread) {
        for (let i = 0; i < count; i++) {
            const angle  = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.8;
            const mag    = speed * (0.4 + Math.random() * 0.6);
            /* Alternate teal / amber */
            const c = i % 2 === 0 ? SIGNAL : AMBER;
            sparks.push({
                x, y,
                vx   : Math.cos(angle) * mag,
                vy   : Math.sin(angle) * mag,
                life : FX.life,
                max  : FX.life,
                r    : FX.size * (0.5 + Math.random() * 0.5),
                c,
            });
        }
    }

    let fxRaf;
    function drawFx() {
        fxCtx.clearRect(0, 0, fxCanvas.width, fxCanvas.height);

        sparks = sparks.filter(s => s.life > 0);

        sparks.forEach(s => {
            s.x  += s.vx;
            s.y  += s.vy;
            s.vx *= 0.88;
            s.vy *= 0.88;
            s.vy += 0.04; // very gentle gravity
            s.life--;

            const a = (s.life / s.max) * 0.9;
            fxCtx.beginPath();
            fxCtx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
            fxCtx.fillStyle = `rgba(${s.c.r},${s.c.g},${s.c.b},${a})`;
            fxCtx.fill();
        });

        fxRaf = requestAnimationFrame(drawFx);
    }

    /* Track pointer over links */
    document.addEventListener('mouseover', e => {
        const link = e.target.closest('a, button');
        if (!link) return;
        spawnSparks(e.clientX, e.clientY, FX.hoverCount, FX.hoverSpeed, FX.hoverRadius);
    }, { passive: true });

    document.addEventListener('click', e => {
        spawnSparks(e.clientX, e.clientY, FX.clickCount, FX.clickSpeed, FX.clickRadius);
    }, { passive: true });

    window.addEventListener('resize', () => resizeFx(), { passive: true });

    resizeFx();
    fxRaf = requestAnimationFrame(drawFx);

})();
