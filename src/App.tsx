import { useEffect, useRef, useState } from 'react'
import './App.css'

function useReveal<T extends HTMLElement = HTMLElement>(
  threshold = 0.15,
  rootMargin = '0px 0px -120px 0px'
) {
  const ref = useRef<T>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold, rootMargin }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold, rootMargin])

  return [ref, visible] as const
}

function LogoMark() {
  return (
    <svg viewBox="34 34 92 92" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(62.5, 63.2) scale(1.4)">
        <path
          d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"
          fill="currentColor"
        />
      </g>
      <path
        d="M 101.5 69.4 A 13 13 0 0 1 101.5 90.6"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M 107.2 61.2 A 23 23 0 0 1 107.2 98.8"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M 58.5 69.4 A 13 13 0 0 0 58.5 90.6"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M 52.8 61.2 A 23 23 0 0 0 52.8 98.8"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  )
}

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
    </svg>
  )
}

function WindowsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M3 5.5 10.5 4.5v7H3v-6zM11.5 4.4 21 3v8.5h-9.5v-7.1zM3 12.5h7.5v7L3 18.5v-6zm8.5 0H21V21l-9.5-1.3v-7.2z" />
    </svg>
  )
}

function PlayIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  )
}

function PlusIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 5v14M5 12h14" />
    </svg>
  )
}

function UsersIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}

function Nav() {
  return (
    <nav>
      <div className="container nav-inner">
        <div className="logo">
          <div className="logo-mark">
            <LogoMark />
          </div>
          <span>SyncPlay</span>
        </div>
        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#how">How it works</a>
          <a href="#download" className="nav-cta">
            Download
          </a>
        </div>
      </div>
    </nav>
  )
}

function ProductFrame() {
  const frameRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const frame = frameRef.current
    if (!frame) return

    const update = () => {
      const rect = frame.getBoundingClientRect()
      const vh = window.innerHeight
      const raw = 1 - (rect.top - vh * 0.3) / (vh * 0.5)
      const t = Math.max(0, Math.min(1, raw))
      const angle = 12 * (1 - t)
      const scale = 0.95 + 0.05 * t
      frame.style.transform = `rotateX(${angle}deg) scale(${scale})`
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return (
    <div className="container">
      <div className="product-frame-wrapper">
        <div className="product-frame" ref={frameRef}>
          <div className="window-chrome">
            <div className="dot r" />
            <div className="dot y" />
            <div className="dot g" />
          </div>
          <div className="real-app-body">
            <header className="real-app-header">
              <div className="real-app-logo">
                <div className="real-app-logo-mark">
                  <LogoMark />
                </div>
                <div className="real-app-logo-text">
                  <span className="real-app-logo-name">SYNCPLAY</span>
                  <span className="real-app-logo-sub">Desktop</span>
                </div>
              </div>
              <div className="real-app-badges">
                <div className="connected-badge">
                  <span className="connected-dot" />
                  Connected
                </div>
              </div>
            </header>

            <div className="real-app-main">
              <div className="real-app-hero">
                <h3 className="real-app-heading">
                  Watch anything<br />together, in sync.
                </h3>
                <p className="real-app-sub">
                  Share a room code and play from YouTube, a local file, or a magnet link —
                  everyone stays in perfect sync.
                </p>
              </div>
              <div className="real-app-alias">
                <label className="real-alias-label">Your alias</label>
                <div className="real-alias-input">Guest 5056</div>
              </div>
            </div>

            <div className="real-app-cards">
              <div className="room-card">
                <div className="room-card-label">CREATE ROOM</div>
                <div className="room-card-title">Choose your media source</div>
                <div className="source-tabs">
                  <div className="source-tab active">YouTube</div>
                  <div className="source-tab">Local File</div>
                  <div className="source-tab">Magnet Link</div>
                </div>
                <div className="real-field-label">YouTube URL</div>
                <div className="real-input">https://www.youtube.com/watch?v=dQw4w9WgXcQ</div>
                <div className="real-input-hint">Supports watch, short and embed URLs.</div>
                <div className="room-btn-primary">Create sync room</div>
              </div>

              <div className="room-card-divider" />

              <div className="room-card">
                <div className="room-card-label join">JOIN ROOM</div>
                <div className="room-card-title">Enter a shared room code</div>
                <div className="real-field-label">Room code</div>
                <div className="real-input placeholder">AB12CD</div>
                <div className="real-input-hint">
                  Use the room code whether the host chose YouTube or a local file.
                </div>
                <div className="room-btn-secondary">Join room</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <h1 className="hero-anim hero-anim-1">
          Watch anything,
          <br />
          together <span className="accent">in sync.</span>
        </h1>
        <p className="hero-sub hero-anim hero-anim-2">
          SyncPlay keeps you and your friends watching the same video at the same moment — no
          matter where you are. One room, one code, perfectly synced playback.
        </p>
        <div className="cta-row hero-anim hero-anim-3">
          <a href="#download" className="btn btn-primary">
            <AppleIcon />
            <span>Download for Mac</span>
          </a>
          <a href="#download" className="btn btn-secondary">
            <WindowsIcon />
            <span>Download for Windows</span>
          </a>
        </div>
      </div>
      <ProductFrame />
    </section>
  )
}

function Sources() {
  const [ref, visible] = useReveal()
  return (
    <section ref={ref} className={`section${visible ? ' in-view' : ''}`} id="features">
      <div className="container">
        <div className="section-label reveal-up">01 — Sources</div>
        <h2 className="reveal-up" style={{ '--delay': '0.08s' } as React.CSSProperties}>Any video, a single room.</h2>
        <p className="section-sub reveal-up" style={{ '--delay': '0.14s' } as React.CSSProperties}>
          SyncPlay plays from three different sources — you pick, and the app keeps everything
          aligned down to the millisecond.
        </p>

        <div className="sources-grid">
          <div className="source-card reveal-up" style={{ '--delay': '0.22s' } as React.CSSProperties}>
            <div className="source-visual v-youtube">
              <div className="yt-card">
                <div className="yt-thumb">
                  <div className="yt-play" />
                </div>
                <div className="yt-meta">
                  <div className="yt-line" />
                  <div className="yt-line short" />
                </div>
              </div>
            </div>
            <div className="source-body">
              <div className="source-kind">youtube.com</div>
              <div className="source-title">YouTube videos</div>
              <div className="source-desc">
                Paste the link. SyncPlay plays it natively and keeps the timestamp identical on
                both ends.
              </div>
            </div>
          </div>

          <div className="source-card reveal-up" style={{ '--delay': '0.32s' } as React.CSSProperties}>
            <div className="source-visual v-local">
              <div className="finder">
                <div className="finder-top">
                  <div className="dot r" />
                  <div className="dot y" />
                  <div className="dot g" />
                </div>
                <div className="finder-list">
                  <div className="file-row">
                    <div className="file-icon" /> movie_01.mkv
                  </div>
                  <div className="file-row sel">
                    <div className="file-icon" /> episode_09.mp4
                  </div>
                  <div className="file-row">
                    <div className="file-icon" /> trailer.mov
                  </div>
                  <div className="file-row">
                    <div className="file-icon" /> clip_final.webm
                  </div>
                </div>
              </div>
            </div>
            <div className="source-body">
              <div className="source-kind">file://local</div>
              <div className="source-title">Local files</div>
              <div className="source-desc">
                MP4, MKV, MOV, WEBM — if your computer can play it, SyncPlay can sync it. No
                uploads to any server.
              </div>
            </div>
          </div>

          <div className="source-card reveal-up" style={{ '--delay': '0.42s' } as React.CSSProperties}>
            <div className="source-visual v-torrent">
              <div className="torrent-card">
                <div className="torrent-row">
                  <span className="torrent-tag">MAG</span>
                  <div className="torrent-hash">magnet:?xt=urn:btih:a1b2c3…</div>
                </div>
                <div className="torrent-progress">
                  <div className="torrent-progress-fill" />
                </div>
                <div className="torrent-stats">
                  <span>72% · streaming</span>
                  <span>↓ 4.2 MB/s</span>
                </div>
              </div>
            </div>
            <div className="source-body">
              <div className="source-kind">magnet://</div>
              <div className="source-title">Magnet links</div>
              <div className="source-desc">
                Direct streaming from torrents — SyncPlay starts playing as soon as enough pieces
                are available, no waiting for the full download.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function HowItWorks() {
  const [ref, visible] = useReveal()
  return (
    <section ref={ref} className={`section${visible ? ' in-view' : ''}`} id="how">
      <div className="container">
        <div className="section-label reveal-up">02 — How it works</div>
        <h2 className="reveal-up" style={{ '--delay': '0.08s' } as React.CSSProperties}>Three steps. Zero friction.</h2>
        <p className="section-sub reveal-up" style={{ '--delay': '0.14s' } as React.CSSProperties}>
          No need for accounts, no middle servers, no setup. Open the app and you're already
          watching together.
        </p>

        <div className="how-grid">
          <div className="step reveal-up" style={{ '--delay': '0.22s' } as React.CSSProperties}>
            <div className="step-icon">
              <PlayIcon />
            </div>
            <div className="step-num">step 01</div>
            <div className="step-title">Pick a video</div>
            <div className="step-desc">
              Paste a YouTube link, drop a video file or paste a magnet. The app detects the
              source type automatically.
            </div>
          </div>
          <div className="step reveal-up" style={{ '--delay': '0.32s' } as React.CSSProperties}>
            <div className="step-icon">
              <PlusIcon />
            </div>
            <div className="step-num">step 02</div>
            <div className="step-title">Create a room</div>
            <div className="step-desc">
              Click "New room" and you get a unique 6-character code you can share over chat.
            </div>
          </div>
          <div className="step reveal-up" style={{ '--delay': '0.42s' } as React.CSSProperties}>
            <div className="step-icon">
              <UsersIcon />
            </div>
            <div className="step-num">step 03</div>
            <div className="step-title">Watch together</div>
            <div className="step-desc">
              If anyone pauses, seeks or resyncs, both sides stay on the exact same frame.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Pricing() {
  const [yearly, setYearly] = useState(true)
  const [ref, visible] = useReveal()

  const proAmount = yearly ? '50' : '6'
  const proPeriod = yearly ? '/yr' : '/mo'
  const proNote = yearly ? '$4.16/mo · billed annually' : 'cancel anytime'

  return (
    <section ref={ref} className={`section${visible ? ' in-view' : ''}`} id="pricing">
      <div className="container">
        <div className="section-label reveal-up">03 — Pricing</div>
        <h2 className="reveal-up" style={{ '--delay': '0.08s' } as React.CSSProperties}>Watch together, your way.</h2>
        <p className="section-sub reveal-up" style={{ '--delay': '0.14s' } as React.CSSProperties}>
          SyncPlay is fully free for two. Need a bigger room? Only the host pays — guests
          always join free, no account needed.
        </p>

        <div className="billing-toggle reveal-up" style={{ '--delay': '0.2s' } as React.CSSProperties}>
          <span className={yearly ? '' : 'active'}>Monthly</span>
          <button
            type="button"
            className={`toggle-track${yearly ? ' on' : ''}`}
            onClick={() => setYearly((v) => !v)}
            aria-pressed={yearly}
            aria-label="Toggle yearly billing"
          >
            <span className="toggle-thumb" />
          </button>
          <span className={yearly ? 'active' : ''}>Yearly</span>
          <span className="save-badge">Save 30%</span>
        </div>

        <div className="pricing-grid">
          <div className="pricing-card reveal-up" style={{ '--delay': '0.28s' } as React.CSSProperties}>
            <div className="pricing-tag">Free</div>
            <div className="pricing-price">
              <span className="currency">$</span>0
            </div>
            <div className="pricing-note">forever</div>
            <ul className="pricing-features">
              <li>2 people per room</li>
              <li>YouTube, local files, magnet</li>
              <li>Synced playback</li>
              <li>No login required</li>
            </ul>
            <a href="#download" className="pricing-btn secondary">
              Download free
            </a>
          </div>

          <div className="pricing-card featured reveal-up" style={{ '--delay': '0.38s' } as React.CSSProperties}>
            <div className="pricing-tag">Pro</div>
            <div className="pricing-price">
              <span className="currency">$</span>
              {proAmount}
              <span className="period">{proPeriod}</span>
            </div>
            <div className="pricing-note">{proNote}</div>
            <ul className="pricing-features">
              <li>Host rooms of up to 5 people</li>
              <li>Guests join free — no account</li>
              <li>Unlimited rooms</li>
              <li>Priority sync servers</li>
            </ul>
            <a href="#" className="pricing-btn primary">
              Subscribe
            </a>
          </div>

          <div className="pricing-card reveal-up" style={{ '--delay': '0.48s' } as React.CSSProperties}>
            <div className="pricing-tag">One-time pass</div>
            <div className="pricing-price">
              <span className="currency">$</span>1
            </div>
            <div className="pricing-note">single premium room</div>
            <ul className="pricing-features">
              <li>Host a room of up to 5 people</li>
              <li>Guests join free — no account</li>
              <li>One room, one session</li>
              <li>No subscription needed</li>
            </ul>
            <a href="#" className="pricing-btn secondary">
              Buy a pass
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function DownloadCTA() {
  const [ref, visible] = useReveal<HTMLDivElement>(0.2, '0px 0px -60px 0px')
  return (
    <section className="container" id="download">
      <div ref={ref} className={`download-section reveal-up${visible ? ' visible' : ''}`}>
        <div className="badge">
          <span className="badge-dot" />
          <span>Start Now</span>
        </div>
        <h2>Ready to sync?</h2>
        <p className="hero-sub" style={{ marginBottom: 32 }}>
          Download SyncPlay for your platform
        </p>
        <div className="cta-row">
          <a href="#" className="btn btn-primary">
            <AppleIcon />
            <span>Download for Mac</span>
          </a>
          <a href="#" className="btn btn-secondary">
            <WindowsIcon />
            <span>Download for Windows</span>
          </a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer>
      <div className="container footer-inner">
        <div className="footer-stack">
          <div className="logo-mark" style={{ width: 28, height: 28 }}>
            <LogoMark />
          </div>
          <div className="footer-meta">© 2026</div>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <div className="ambient" />
      <div className="grid-bg" />
      <Nav />
      <Hero />
      <Sources />
      <HowItWorks />
      <Pricing />
      <DownloadCTA />
      <Footer />
    </>
  )
}
