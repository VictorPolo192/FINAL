import { LandingMotion } from "@/components/landing-motion"

const moments = [
  { number: "01", title: "Aire libre", text: "Caminos entre árboles, sobremesas al sol y tiempo para no mirar el reloj.", icon: "✳" },
  { number: "02", title: "Ratos para ti", text: "Un libro pendiente, una partida larga o una siesta sin notificaciones.", icon: "⌁" },
  { number: "03", title: "Cocina sin prisa", text: "Recetas de temporada, producto local y conversaciones alrededor de la mesa.", icon: "◒" },
]

const marquee = ["Sin Wi-Fi", "Sin prisa", "Sin notificaciones", "Sin reloj", "Con tiempo"]

const stats = [
  { value: 48, unit: "h", label: "sin pantallas ni avisos" },
  { value: 2, unit: "", label: "noches de silencio" },
  { value: 0, unit: "", label: "redes Wi-Fi para huéspedes" },
]

const quote = ["Al principio echas de menos el móvil.", "Luego, se te olvida que existe."]

export default function Home() {
  return (
    <main>
      <LandingMotion />
      <header className="topbar" data-topbar>
        <a className="brand" href="#inicio" aria-label="Casa Desconecta, inicio"><span className="brand-mark">cd</span><span>casa<br />desconecta</span></a>
        <nav aria-label="Navegación principal"><a href="#experiencia">La experiencia</a><a href="#casa">La casa</a><a className="nav-cta" href="#reservas">Reservar estancia <span>↗</span></a></nav>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-image" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow"><span /> SIERRA · CAMPO · CALMA</p>
          <h1><span className="line"><span>Hay lugares</span></span><span className="line"><span>que te <em>devuelven</em></span></span><span className="line"><span>a ti.</span></span></h1>
          <p className="hero-intro">Una casa rural para dejar el móvil a un lado y volver a lo que importa. Dos días, sin cobertura y sin ninguna prisa.</p>
          <a className="button button-light" href="#experiencia">Descubre las 48 horas <span>↓</span></a>
        </div>
        <div className="hero-bottom"><span>Una escapada para estar, de verdad.</span><span>40° 24&apos; N &nbsp; 3° 42&apos; O</span></div>
        <div className="hero-stamp" aria-hidden="true">
          <svg viewBox="0 0 200 200"><defs><path id="stamp-circle" d="M100,100 m-80,0 a80,80 0 1,1 160,0 a80,80 0 1,1 -160,0" /></defs><text><textPath href="#stamp-circle" textLength="496">HORAS OFFLINE ✳ SIN PANTALLAS ✳ SIN PRISA ✳</textPath></text></svg>
          <span>48</span>
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">{[0, 1].map((group) => <div className="marquee-group" key={group}>{marquee.map((word) => <span key={word}>{word}<i>✳</i></span>)}</div>)}</div>
      </div>

      <section className="manifesto" id="experiencia">
        <div className="section-label" data-reveal><span>01 / LA IDEA</span><span>MENOS RUIDO, MÁS VIDA</span></div>
        <div className="manifesto-grid"><p className="manifesto-kicker" data-reveal>Tu próxima escapada<br />empieza <em>al desconectar.</em></p><div data-reveal><p className="manifesto-text">Al llegar, guardamos contigo móviles, ordenadores y relojes inteligentes durante 48 horas. No hay Wi-Fi para huéspedes. Solo espacio para respirar, mirar alrededor y volver a conectar con el presente.</p><a className="text-link" href="#casa">Así se vive aquí <span>↘</span></a></div></div>
        <div className="stats">{stats.map((stat) => <div className="stat" key={stat.label} data-reveal><p className="stat-value"><span data-count={stat.value}>{stat.value}</span>{stat.unit && <em>{stat.unit}</em>}</p><p className="stat-label">{stat.label}</p></div>)}</div>
      </section>

      <section className="experiences" id="casa">
        <div className="experience-photo"><div className="experience-photo-img" aria-hidden="true" /><div className="photo-note">EL LUJO DE NO TENER PLANES <span>✳</span></div></div>
        <div className="experience-content"><p className="eyebrow eyebrow-dark" data-reveal>02 / TU FIN DE SEMANA</p><h2 data-reveal>El tiempo<br />vuelve a ser <em>tuyo.</em></h2><p className="experience-lead" data-reveal>No venimos a llenarte la agenda. Preparamos el lugar; tú decides el ritmo.</p><div className="moment-list">{moments.map((moment) => <article className="moment" key={moment.number} data-reveal><span className="moment-icon">{moment.icon}</span><div><h3>{moment.title}</h3><p>{moment.text}</p></div><span className="moment-number">{moment.number}</span></article>)}</div></div>
      </section>

      <section className="quote-section"><span className="quote-mark">“</span><blockquote>{quote.map((line) => <span className="quote-line" key={line}>{line.split(" ").map((word, index) => <span data-word key={index}>{word}{" "}</span>)}</span>)}</blockquote><p data-reveal>48 horas que se sienten como mucho más.</p><span className="quote-sun">✳</span></section>

      <section className="booking" id="reservas"><div className="booking-copy" data-reveal><p className="eyebrow">03 / TU PRÓXIMA ESCAPADA</p><h2>Haz sitio<br />para <em>desconectar.</em></h2><p>Ven con quien quieras. Vuelve con tiempo para ti.</p></div><div className="booking-card" data-reveal><span className="booking-number">48<span>h</span></span><div><p className="booking-label">UNA PAUSA QUE SE NOTA</p><p className="booking-detail">Dos noches · Naturaleza · Sin pantallas</p></div><a className="button button-light button-wide" href="mailto:hola@casadesconecta.es?subject=Quiero%20reservar%20mi%20escapada">Consultar disponibilidad <span>↗</span></a></div></section>

      <footer>
        <p className="footer-wordmark" aria-hidden="true" data-reveal>casa desconecta</p>
        <div className="footer-row"><a className="brand footer-brand" href="#inicio"><span className="brand-mark">cd</span><span>casa<br />desconecta</span></a><span>Un lugar para volver a estar.</span><a href="#inicio">Volver arriba ↑</a></div>
      </footer>
    </main>
  )
}
