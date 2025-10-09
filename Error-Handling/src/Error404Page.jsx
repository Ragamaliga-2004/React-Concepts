import React from "react";

// Error404Page.jsx
// Single-file React component with inline CSS (plus a small <style> block for keyframes)
// Usage: import Error404Page from './Error404Page'; then render inside your router or as a fallback route.

export default function Error404Page() {
  const goHome = () => {
    // prefer SPA navigation if available
    try {
      window.history.pushState({}, "home", "/");
      window.dispatchEvent(new PopStateEvent('popstate'));
    } catch (e) {
      window.location.href = '/';
    }
  };

  const styles = {
    page: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 20px',
      background: 'linear-gradient(120deg, #f7f9fc 0%, #eef6ff 50%, #fefefe 100%)',
      fontFamily: "'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
      color: '#0f172a'
    },
    card: {
      maxWidth: '980px',
      width: '100%',
      background: 'linear-gradient(180deg, rgba(255,255,255,0.9), rgba(255,255,255,0.75))',
      borderRadius: '18px',
      boxShadow: '0 12px 30px rgba(16,24,40,0.12)',
      display: 'flex',
      gap: '32px',
      padding: '28px',
      alignItems: 'center',
      border: '1px solid rgba(15,23,42,0.04)'
    },
    left: {
      flex: '1 1 420px',
      padding: '8px 12px'
    },
    right: {
      flex: '0 0 320px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    codeBig: {
      fontSize: '108px',
      lineHeight: '1',
      fontWeight: 800,
      margin: '0 0 8px 0',
      letterSpacing: '-4px',
      color: '#0f172a'
    },
    title: {
      fontSize: '22px',
      fontWeight: 700,
      margin: '0 0 12px 0'
    },
    desc: {
      margin: '0 0 18px 0',
      color: '#334155',
      fontSize: '15px'
    },
    list: {
      display: 'flex',
      gap: '10px',
      flexWrap: 'wrap'
    },
    pill: {
      padding: '8px 12px',
      borderRadius: '999px',
      background: 'rgba(99,102,241,0.08)',
      color: '#4f46e5',
      fontWeight: 600,
      fontSize: '13px',
      border: '1px solid rgba(79,70,229,0.08)'
    },
    button: {
      marginTop: '14px',
      padding: '10px 16px',
      borderRadius: '10px',
      border: 'none',
      background: 'linear-gradient(90deg,#4f46e5,#06b6d4)',
      color: 'white',
      fontWeight: 700,
      cursor: 'pointer',
      boxShadow: '0 8px 20px rgba(79,70,229,0.18)'
    },
    sub: {
      marginTop: '10px',
      fontSize: '13px',
      color: '#64748b'
    },
    svgWrap: {
      width: '100%',
      maxWidth: '320px'
    }
  };

  return (
    <div style={styles.page}>
      {/* small style block for animation keyframes (still inline in component) */}
      <style>{`
        @keyframes floatUp {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .floating {
          animation: floatUp 4s ease-in-out infinite;
        }
        .pulse {
          animation: pulse 2.6s ease-in-out infinite;
        }
        @keyframes pulse {
          0% { transform: scale(1); opacity: 1 }
          50% { transform: scale(1.03); opacity: 0.92 }
          100% { transform: scale(1); opacity: 1 }
        }
      `}</style>

      <div style={styles.card}>
        <div style={styles.left}>
          <h1 style={styles.codeBig}>404</h1>
          <h2 style={styles.title}>Page not found</h2>
          <p style={styles.desc}>
            Oops — the page you're looking for doesn't exist or has been moved. Here are some helpful options to get you back on track.
          </p>

          <div style={styles.list}>
            <div style={styles.pill}>Check URL</div>
            <div style={styles.pill}>Go to Home</div>
            <div style={styles.pill}>Contact Support</div>
          </div>

          <button style={styles.button} onClick={goHome} className="pulse">Go to Home</button>
          <div style={styles.sub}>If you think this is an error, you can report it to support@example.com</div>
        </div>

        <div style={styles.right}>
          {/* Illustration: embedded SVG acting as an 'image' with nice colors */}
          <div style={styles.svgWrap} className="floating" aria-hidden>
            <svg viewBox="0 0 400 320" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0%" stopColor="#60a5fa" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
                <linearGradient id="g2" x1="0" x2="1">
                  <stop offset="0%" stopColor="#fde68a" />
                  <stop offset="100%" stopColor="#fb7185" />
                </linearGradient>
                <filter id="s" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="8" stdDeviation="18" floodOpacity="0.12" />
                </filter>
              </defs>

              {/* soft background blob */}
              <g filter="url(#s)">
                <ellipse cx="200" cy="160" rx="150" ry="110" fill="url(#g1)" opacity="0.12" />
              </g>

              {/* cute 'lost' map illustration */}
              <rect x="40" y="60" width="200" height="150" rx="12" fill="#fff" stroke="#e6eefc" strokeWidth="2" />

              <path d="M64 90c22-12 58-22 110-10" stroke="#a5b4fc" strokeWidth="6" strokeLinecap="round" fill="none" />

              <circle cx="110" cy="150" r="10" fill="url(#g2)" stroke="#fff" strokeWidth="3" />
              <text x="104" y="154" fontSize="10" fontWeight="700" fill="#fff">You</text>

              <g transform="translate(260,40)">
                <g>
                  <path d="M40 120 C10 90, 10 60, 40 40 C70 20, 110 20, 140 40 C170 60, 170 90, 140 120 C110 150, 70 150, 40 120 Z" fill="#fff" stroke="#e6eefc" strokeWidth="2" />
                  <text x="48" y="90" fontSize="24" fontWeight="700" fill="#0f172a">404</text>
                </g>
              </g>

              {/* small decorative stars */}
              <g opacity="0.9">
                <circle cx="24" cy="40" r="3" fill="#f472b6" />
                <circle cx="366" cy="20" r="4" fill="#60a5fa" />
                <circle cx="330" cy="280" r="3" fill="#34d399" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
