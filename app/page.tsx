import Image from "next/image"

import { LandingMotion } from "@/components/landing-motion"

function Peek({ className = "" }: { className?: string }) {
  return <span className={`peek ${className}`} aria-hidden="true"><Image src="/pajarillo.jpeg" alt="" width={300} height={400} /></span>
}

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

const mascotFacts = [
  { label: "Especie", value: "Picozapato" },
  { label: "Oficio", value: "Guardián de la calma" },
  { label: "Horas de pantalla", value: "Cero" },
]

const quote = ["Al principio echas de menos el móvil.", "Luego, se te olvida que existe."]

export default function Home() {
  return (
    <main>
      <LandingMotion />
      <Peek className="peek-right peek-idle" />
      <header className="topbar" data-topbar>
        <a className="brand" href="#inicio" aria-label="Sin Cobertura, inicio"><span className="brand-mark" aria-hidden="true" /><span>sin<br />cobertura</span></a>
        <nav aria-label="Navegación principal"><a href="#experiencia">La experiencia</a><a href="#casa">La casa</a><a href="#evaristo">Evaristo</a><a className="nav-cta" href="#reservas">Reservar estancia <span>↗</span></a></nav>
        <Peek className="peek-down peek-rare" />
      </header>

      <section className="hero" id="inicio">
        <div className="hero-image" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow"><span /> SIERRA · CAMPO · CALMA</p>
          <h1><span className="line"><span>Hay lugares</span></span><span className="line"><span>que te <em>devuelven</em></span></span><span className="line"><span>a ti.</span></span></h1>
          <p className="hero-intro">Una casa rural para dejar el móvil a un lado y volver a lo que importa. Dos días, sin cobertura y sin ninguna prisa.</p>
          <a className="button button-light" href="#experiencia">Descubre las 48 horas <span>↓</span></a>
        </div>
        <div className="hero-bottom"><Peek /><span>Una escapada para estar, de verdad.</span><span>40° 24&apos; N &nbsp; 3° 42&apos; O</span></div>
        <div className="hero-stamp" aria-hidden="true">
          <svg viewBox="0 0 200 200"><defs><path id="stamp-circle" d="M100,100 m-80,0 a80,80 0 1,1 160,0 a80,80 0 1,1 -160,0" /></defs><text><textPath href="#stamp-circle" textLength="496">HORAS OFFLINE ✳ SIN PANTALLAS ✳ SIN PRISA ✳</textPath></text></svg>
          <span>48</span>
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">{[0, 1].map((group) => <div className="marquee-group" key={group}>{marquee.map((word) => <span key={word}>{word}<i>✳</i></span>)}<span><b className="marquee-bird"><Image src="/pajarillo.jpeg" alt="" width={150} height={200} /></b><i>✳</i></span></div>)}</div>
      </div>

      <section className="manifesto" id="experiencia">
        <Peek className="peek-left peek-rare" />
        <div className="section-label" data-reveal><span>01 / LA IDEA</span><span>MENOS RUIDO, MÁS VIDA</span></div>
        <div className="manifesto-grid"><p className="manifesto-kicker" data-reveal>Tu próxima escapada<br />empieza <em>al desconectar.</em></p><div data-reveal><p className="manifesto-text">Al llegar, guardamos contigo móviles, ordenadores y relojes inteligentes durante 48 horas. No hay Wi-Fi para huéspedes. Solo espacio para respirar, mirar alrededor y volver a conectar con el presente.</p><a className="text-link" href="#casa">Así se vive aquí <span>↘</span></a></div></div>
        <div className="stats">{stats.map((stat) => <div className="stat" key={stat.label} data-reveal><p className="stat-value"><span data-count={stat.value}>{stat.value}</span>{stat.unit && <em>{stat.unit}</em>}</p><p className="stat-label">{stat.label}</p></div>)}</div>
      </section>

      <section className="experiences" id="casa">
        <div className="experience-photo"><div className="experience-photo-img" aria-hidden="true" /><div className="photo-note"><Peek />EL LUJO DE NO TENER PLANES <span>✳</span></div></div>
        <div className="experience-content"><p className="eyebrow eyebrow-dark" data-reveal>02 / TU FIN DE SEMANA</p><h2 data-reveal>El tiempo<br />vuelve a ser <em>tuyo.</em></h2><p className="experience-lead" data-reveal>No venimos a llenarte la agenda. Preparamos el lugar; tú decides el ritmo.</p><div className="moment-list">{moments.map((moment) => <article className="moment" key={moment.number} data-reveal><span className="moment-icon">{moment.icon}</span><div><h3>{moment.title}</h3><p>{moment.text}</p></div><span className="moment-number">{moment.number}</span></article>)}</div></div>
      </section>

      <section className="quote-section"><Peek className="peek-rare" /><span className="quote-mark">“</span><blockquote>{quote.map((line) => <span className="quote-line" key={line}>{line.split(" ").map((word, index) => <span data-word key={index}>{word}{" "}</span>)}</span>)}</blockquote><p data-reveal>48 horas que se sienten como mucho más.</p><span className="quote-sun">✳</span></section>

      <section className="mascot" id="evaristo">
        <figure className="mascot-photo" data-reveal>
          <Image src="/pajarillo.jpeg" alt="Evaristo, un picozapato de plumaje gris, mirando fijamente a cámara" width={1074} height={1433} sizes="(max-width: 760px) 84vw, 36vw" />
          <figcaption>EVARISTO <span>✳</span> RESIDENTE DESDE SIEMPRE</figcaption>
        </figure>
        <div className="mascot-content">
          <p className="eyebrow" data-reveal>03 / EL ALMA DE ESTE LUGAR</p>
          <h2 data-reveal>Conoce a nuestra mascota, <em>Evaristo.</em></h2>
          <p className="mascot-lead" data-reveal>Llegó antes que el primer huésped y nunca se ha ido. No habla, no tiene prisa y no ha mirado una pantalla en su vida. Solo observa.</p>
          <div className="mascot-text" data-reveal>
            <p>Hay quien dice que nos mira mal. Nosotros sabemos que nos mira de verdad: con esa atención entera, sin distracciones, que a los demás se nos olvidó por el camino. Cuando abrimos este lugar buscábamos un sitio donde parar; él ya llevaba toda la vida sabiendo hacerlo.</p>
            <p>Para nosotros es mucho más que una mascota. Es el guardián silencioso de las mañanas, el que espera inmóvil junto al camino cuando llega alguien nuevo y el que despide, sin un solo gesto, a quien se marcha distinto de como vino. Los niños le cuentan secretos. Los mayores, sin darse cuenta, acaban sentándose a su lado a no hacer nada.</p>
            <p>Evaristo nos recuerda cada día por qué existe todo esto: porque estar presente es la forma más sencilla de querer. Si durante tu estancia sientes que alguien te observa, no te preocupes. Es él, cuidando de ti a su manera.</p>
          </div>
          <blockquote data-reveal>No hace falta decir nada para hacer compañía.</blockquote>
          <dl className="mascot-facts" data-reveal>{mascotFacts.map((fact) => <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>)}</dl>
        </div>
      </section>

      <section className="booking" id="reservas"><div className="booking-copy" data-reveal><p className="eyebrow">04 / TU PRÓXIMA ESCAPADA</p><h2>Haz sitio<br />para <em>desconectar.</em></h2><p>Ven con quien quieras. Vuelve con tiempo para ti.</p></div><div className="booking-card" data-reveal><Peek className="peek-left peek-rare" /><span className="booking-number">48<span>h</span></span><div><p className="booking-label">UNA PAUSA QUE SE NOTA</p><p className="booking-detail">Dos noches · Naturaleza · Sin pantallas</p></div><a className="button button-light button-wide" href="mailto:hola@sincobertura.es?subject=Quiero%20reservar%20mi%20escapada">Consultar disponibilidad <span>↗</span></a></div></section>

      <footer>
        <p className="footer-wordmark" aria-hidden="true" data-reveal>sin cobertura</p>
        <div className="footer-row"><a className="brand footer-brand" href="#inicio"><span className="brand-mark" aria-hidden="true" /><span>sin<br />cobertura</span></a><span>Un lugar para volver a estar.</span><a href="#inicio">Volver arriba ↑</a></div>
      </footer>
    </main>
  )
}
