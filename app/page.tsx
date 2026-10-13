const moments = [
  { number: "01", title: "Aire libre", text: "Caminos entre árboles, sobremesas al sol y tiempo para no mirar el reloj.", icon: "✳" },
  { number: "02", title: "Ratos para ti", text: "Un libro pendiente, una partida larga o una siesta sin notificaciones.", icon: "⌁" },
  { number: "03", title: "Cocina sin prisa", text: "Recetas de temporada, producto local y conversaciones alrededor de la mesa.", icon: "◒" },
]

export default function Home() {
  return (
    <main>
      <section className="hero" id="inicio">
        <div className="hero-image" aria-hidden="true" />
        <header className="topbar">
          <a className="brand" href="#inicio" aria-label="Casa Desconecta, inicio"><span className="brand-mark">cd</span><span>casa<br />desconecta</span></a>
          <nav aria-label="Navegación principal"><a href="#experiencia">La experiencia</a><a href="#casa">La casa</a><a className="nav-cta" href="#reservas">Reservar estancia <span>↗</span></a></nav>
        </header>
        <div className="hero-copy">
          <p className="eyebrow"><span /> SIERRA · CAMPO · CALMA</p>
          <h1>Hay lugares<br />que te <em>devuelven</em><br />a ti.</h1>
          <p className="hero-intro">Una casa rural para dejar el móvil a un lado y volver a lo que importa. Dos días, sin cobertura y sin ninguna prisa.</p>
          <a className="button button-light" href="#experiencia">Descubre las 48 horas <span>↓</span></a>
        </div>
        <div className="hero-bottom"><span>Una escapada para estar, de verdad.</span><span>40° 24&apos; N &nbsp; 3° 42&apos; O</span></div>
        <div className="hero-stamp"><span>48</span><small>HORAS<br />OFFLINE</small></div>
      </section>

      <section className="manifesto" id="experiencia">
        <div className="section-label"><span>01 / LA IDEA</span><span>MENOS RUIDO, MÁS VIDA</span></div>
        <div className="manifesto-grid"><p className="manifesto-kicker">Tu próxima escapada<br />empieza <em>al desconectar.</em></p><div><p className="manifesto-text">Al llegar, guardamos contigo móviles, ordenadores y relojes inteligentes durante 48 horas. No hay Wi-Fi para huéspedes. Solo espacio para respirar, mirar alrededor y volver a conectar con el presente.</p><a className="text-link" href="#casa">Así se vive aquí <span>↘</span></a></div></div>
      </section>

      <section className="experiences" id="casa">
        <div className="experience-photo"><div className="photo-note">EL LUJO DE NO TENER PLANES <span>✳</span></div></div>
        <div className="experience-content"><p className="eyebrow eyebrow-dark">02 / TU FIN DE SEMANA</p><h2>El tiempo<br />vuelve a ser <em>tuyo.</em></h2><p className="experience-lead">No venimos a llenarte la agenda. Preparamos el lugar; tú decides el ritmo.</p><div className="moment-list">{moments.map((moment) => <article className="moment" key={moment.number}><span className="moment-icon">{moment.icon}</span><div><h3>{moment.title}</h3><p>{moment.text}</p></div><span className="moment-number">{moment.number}</span></article>)}</div></div>
      </section>

      <section className="quote-section"><span className="quote-mark">“</span><blockquote>Al principio echas de menos el móvil.<br />Luego, se te olvida que existe.</blockquote><p>48 horas que se sienten como mucho más.</p><span className="quote-sun">✳</span></section>

      <section className="booking" id="reservas"><div className="booking-copy"><p className="eyebrow">03 / TU PRÓXIMA ESCAPADA</p><h2>Haz sitio<br />para <em>desconectar.</em></h2><p>Ven con quien quieras. Vuelve con tiempo para ti.</p></div><div className="booking-card"><span className="booking-number">48<span>h</span></span><div><p className="booking-label">UNA PAUSA QUE SE NOTA</p><p className="booking-detail">Dos noches · Naturaleza · Sin pantallas</p></div><a className="button button-dark" href="mailto:hola@casadesconecta.es?subject=Quiero%20reservar%20mi%20escapada">Consultar disponibilidad <span>↗</span></a></div></section>
      <footer><a className="brand footer-brand" href="#inicio"><span className="brand-mark">cd</span><span>casa<br />desconecta</span></a><span>Un lugar para volver a estar.</span><a href="#inicio">Volver arriba ↑</a></footer>
    </main>
  )
}
