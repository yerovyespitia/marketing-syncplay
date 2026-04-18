import { useEffect, useRef, useState } from 'react'
import './App.css'

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
            <div className="chrome-title">syncplay — Stranger Things · S04E09</div>
          </div>
          <div className="app-body">
            <aside className="app-sidebar">
              <div className="sidebar-label">Room</div>
              <div className="sidebar-item active">
                <div className="ic" />
                <span>Living room</span>
              </div>
              <div className="sidebar-item">
                <div className="ic" />
                <span>Friday movie</span>
              </div>
              <div className="sidebar-label">Sources</div>
              <div className="sidebar-item">
                <div className="ic" />
                <span>YouTube</span>
              </div>
              <div className="sidebar-item">
                <div className="ic" />
                <span>Local file</span>
              </div>
              <div className="sidebar-item">
                <div className="ic" />
                <span>Magnet / Torrent</span>
              </div>
              <div className="room-code">
                <div className="room-code-label">Room code</div>
                <div className="room-code-value">PLX-7F2Q</div>
              </div>
            </aside>

            <div className="video-area">
              <div className="video-stage">
                <div className="video-placeholder">
                  <div className="play-btn" />
                  <div className="video-label">[ video placeholder — 1920×1080 ]</div>
                </div>
              </div>
              <div className="video-controls">
                <div className="ctrl-btn">▶</div>
                <div className="time">24:18 / 58:03</div>
                <div className="progress">
                  <div className="progress-fill" />
                </div>
                <div className="ctrl-btn">⇄</div>
              </div>
            </div>

            <aside className="app-chat">
              <div className="chat-header">
                <div className="avatars">
                  <div className="avatar a" />
                  <div className="avatar b" />
                </div>
                <div className="status">in sync</div>
              </div>
              <div className="message">
                <div className="message-author">ana</div>
                <div className="message-bubble">wait wait, pause 😩</div>
              </div>
              <div className="sync-event">ana paused at 24:18</div>
              <div className="message mine">
                <div className="message-author">you</div>
                <div className="message-bubble mine">ok ready, go</div>
              </div>
              <div className="sync-event">resynced · +0.2s drift</div>
            </aside>
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
        <h1>
          Watch anything,
          <br />
          together <span className="accent">in sync.</span>
        </h1>
        <p className="hero-sub">
          SyncPlay keeps you and your friends watching the same video at the same moment — no
          matter where you are. One room, one code, perfectly synced playback.
        </p>
        <div className="cta-row">
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
  return (
    <section className="section" id="features">
      <div className="container">
        <div className="section-label">01 — Sources</div>
        <h2>Any video, a single room.</h2>
        <p className="section-sub">
          SyncPlay plays from three different sources — you pick, and the app keeps everything
          aligned down to the millisecond.
        </p>

        <div className="sources-grid">
          <div className="source-card">
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

          <div className="source-card">
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

          <div className="source-card">
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
  return (
    <section className="section" id="how">
      <div className="container">
        <div className="section-label">02 — How it works</div>
        <h2>Three steps. Zero friction.</h2>
        <p className="section-sub">
          No need for accounts, no middle servers, no setup. Open the app and you're already
          watching together.
        </p>

        <div className="how-grid">
          <div className="step">
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
          <div className="step">
            <div className="step-icon">
              <PlusIcon />
            </div>
            <div className="step-num">step 02</div>
            <div className="step-title">Create a room</div>
            <div className="step-desc">
              Click "New room" and you get a unique 6-character code you can share over chat.
            </div>
          </div>
          <div className="step">
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

  const proAmount = yearly ? '50' : '6'
  const proPeriod = yearly ? '/yr' : '/mo'
  const proNote = yearly ? '$4.16/mo · billed annually' : 'cancel anytime'

  return (
    <section className="section" id="pricing">
      <div className="container">
        <div className="section-label">03 — Pricing</div>
        <h2>Watch together, your way.</h2>
        <p className="section-sub">
          SyncPlay is fully free for two. Need a bigger room? Only the host pays — guests
          always join free, no account needed.
        </p>

        <div className="billing-toggle">
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
          <div className="pricing-card">
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

          <div className="pricing-card featured">
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

          <div className="pricing-card">
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
  return (
    <section className="container" id="download">
      <div className="download-section">
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
