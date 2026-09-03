import { useState } from 'react'
import { ArrowRight, Check, HandHeart, Heart, Leaf, List, PaintBrush, UsersThree, X } from '@phosphor-icons/react'

const projects = [
  { title: 'Grüne Höfe', category: 'Umwelt', text: 'Gemeinsam verwandeln wir graue Innenhöfe in lebendige Orte für alle.', image: '/images/hero-community.png', color: 'yellow' },
  { title: 'Farbe verbindet', category: 'Kultur', text: 'Kinder, Künstler:innen und Nachbar:innen gestalten ihre Straße neu.', image: '/images/project-creative.png', color: 'blue' },
  { title: 'Gärten für alle', category: 'Gemeinschaft', text: 'Hochbeete, Wissen und frische Lebensmittel mitten im Viertel.', image: '/images/project-green.png', color: 'coral' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [donationOpen, setDonationOpen] = useState(false)
  const [amount, setAmount] = useState(35)
  const [donated, setDonated] = useState(false)
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Sunrise Collective Startseite">
          <img className="brand-logo" src="/brand/sunrise-collective-logo.svg" alt="Sunrise Collective" />
        </a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Menü öffnen">
          {menuOpen ? <X size={27} /> : <List size={27} />}
        </button>
        <nav className={menuOpen ? 'nav open' : 'nav'} aria-label="Hauptnavigation">
          <a href="#ueber-uns" onClick={closeMenu}>Über uns</a>
          <a href="#projekte" onClick={closeMenu}>Projekte</a>
          <a href="#wirkung" onClick={closeMenu}>Wirkung</a>
          <a href="#geschichten" onClick={closeMenu}>Geschichten</a>
          <button className="button button-coral nav-cta" onClick={() => { closeMenu(); setDonationOpen(true) }}>Jetzt helfen</button>
        </nav>
      </header>

      <main id="top">
        <section className="hero" id="ueber-uns">
          <div className="hero-copy">
            <p className="eyebrow">Gemeinsam. Lokal. Wirksam.</p>
            <h1>Wir stärken <span>Nachbarschaften.</span> Heute für morgen.</h1>
            <p className="hero-intro">Sunrise Collective unterstützt Menschen und Initiativen, die ihre Gemeinschaft aktiv gestalten.</p>
            <div className="hero-actions">
              <button className="button button-coral" onClick={() => setDonationOpen(true)}>Jetzt helfen <ArrowRight weight="bold" /></button>
              <a className="button button-outline" href="#projekte">Projekte entdecken <ArrowRight weight="bold" /></a>
            </div>
            <div className="hero-values" aria-label="Unsere Werte">
              <span><Heart /> Gemeinschaft stärken</span>
              <span><Leaf /> Chancen eröffnen</span>
              <span><UsersThree /> Zukunft gestalten</span>
            </div>
          </div>
          <div className="hero-visual">
            <img src="/images/hero-community.png" alt="Freiwillige arbeiten gemeinsam in einem Nachbarschaftsgarten" />
            <div className="hero-badge"><Heart weight="fill" /><strong>Zusammen wächst mehr.</strong></div>
          </div>
        </section>

        <section className="impact-strip" id="wirkung" aria-label="Unsere Wirkung">
          <div><Leaf /><strong>128</strong><span>Projekte unterstützt</span></div>
          <div><UsersThree /><strong>24.500+</strong><span>Menschen erreicht</span></div>
          <div><HandHeart /><strong>3,2 Mio. €</strong><span>wirksam eingesetzt</span></div>
          <div><Heart /><strong>3.800+</strong><span>Freiwillige aktiv</span></div>
        </section>

        <section className="section projects-section" id="projekte">
          <div className="section-heading">
            <div><p className="eyebrow">Unsere Projekte</p><h2>Lokale Ideen.<br /><span>Echte Wirkung.</span></h2></div>
            <p>Wir fördern Ideen, die direkt aus der Gemeinschaft kommen – schnell, partnerschaftlich und mit messbarer Wirkung.</p>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className={`project-card ${project.color}`} key={project.title}>
                <img src={project.image} alt="" />
                <div className="project-content">
                  <span>{project.category}</span><h3>{project.title}</h3><p>{project.text}</p>
                  <a href="#mitmachen" aria-label={`${project.title} unterstützen`}>Projekt unterstützen <ArrowRight weight="bold" /></a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="story-section" id="geschichten">
          <div className="story-image"><img src="/images/story-community.png" alt="Menschen verschiedener Generationen bei einer gemeinschaftlichen Aktivität" /></div>
          <div className="story-copy">
            <p className="eyebrow">Menschen & Geschichten</p>
            <blockquote>„Hier habe ich nicht nur einen Garten gefunden, sondern Menschen, die an mich glauben.“</blockquote>
            <p>Samira kam vor zwei Jahren zu unserem Gartenprojekt. Heute leitet sie selbst Workshops und bringt jede Woche neue Menschen zusammen.</p>
            <a href="#mitmachen">Gemeinsam aktiv werden <ArrowRight weight="bold" /></a>
          </div>
        </section>

        <section className="join-section section" id="mitmachen">
          <div className="join-copy">
            <p className="eyebrow light">Mach den Unterschied</p>
            <h2>Deine Idee.<br />Deine Zeit. Deine Wirkung.</h2>
            <p>Ob mit einer Spende, deiner Zeit oder einer eigenen Projektidee: Jede Form von Engagement bringt uns weiter.</p>
            <button className="button button-yellow" onClick={() => setDonationOpen(true)}>Jetzt aktiv werden <ArrowRight weight="bold" /></button>
          </div>
          <div className="newsletter">
            <PaintBrush size={38} weight="duotone" /><h3>Gute Nachrichten für dein Postfach.</h3><p>Einmal im Monat: Menschen, Projekte und Ideen, die Mut machen.</p>
            {subscribed ? <div className="success-message"><Check weight="bold" /> Danke! Du bist dabei.</div> : (
              <form onSubmit={(event) => { event.preventDefault(); if (email) setSubscribed(true) }}>
                <label className="sr-only" htmlFor="email">E-Mail-Adresse</label>
                <input id="email" type="email" placeholder="deine@email.de" value={email} onChange={(event) => setEmail(event.target.value)} required />
                <button type="submit" aria-label="Newsletter abonnieren"><ArrowRight weight="bold" /></button>
              </form>
            )}
          </div>
        </section>
      </main>

      <footer>
        <a className="brand footer-brand" href="#top"><img className="brand-logo" src="/brand/sunrise-collective-logo.svg" alt="Sunrise Collective" /></a>
        <p>Eine fiktive Nonprofit-Testorganisation für digitale Wirkung.</p>
        <div><a href="#projekte">Projekte</a><a href="#wirkung">Wirkung</a><a href="mailto:hello@example.org">Kontakt</a></div>
      </footer>

      {donationOpen && (
        <div className="modal-backdrop" role="presentation" onMouseDown={() => setDonationOpen(false)}>
          <section className="donation-modal" role="dialog" aria-modal="true" aria-labelledby="donation-title" onMouseDown={(event) => event.stopPropagation()}>
            <button className="modal-close" onClick={() => setDonationOpen(false)} aria-label="Dialog schließen"><X size={24} /></button>
            {donated ? (
              <div className="donation-success"><span><Check weight="bold" /></span><h2>Danke für deine Hilfe!</h2><p>Dies ist eine Testbestätigung – es wurde keine echte Spende ausgelöst.</p><button className="button button-coral" onClick={() => { setDonated(false); setDonationOpen(false) }}>Zurück zur Seite</button></div>
            ) : (
              <><p className="eyebrow">Test-Spende</p><h2 id="donation-title">Gemeinsam mehr bewegen.</h2><p>Wähle einen Betrag, um den Spendenablauf zu testen. Es findet keine Zahlung statt.</p><div className="amounts">{[15, 35, 75, 120].map((value) => <button className={amount === value ? 'selected' : ''} onClick={() => setAmount(value)} key={value}>{value} €</button>)}</div><button className="button button-coral full" onClick={() => setDonated(true)}>{amount} € Test-Spende abschließen <ArrowRight weight="bold" /></button></>
            )}
          </section>
        </div>
      )}
    </div>
  )
}

export default App
