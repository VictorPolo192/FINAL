"use client"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(useGSAP, ScrollTrigger)

export function LandingMotion() {
  useGSAP(() => {
    ScrollTrigger.create({ start: 40, end: "max", toggleClass: { targets: "[data-topbar]", className: "is-scrolled" } })

    const mm = gsap.matchMedia()
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.to(".hero-image", { yPercent: 14, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } })
      gsap.to(".hero-copy", { y: -70, opacity: 0, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom 35%", scrub: true } })

      gsap.set("[data-reveal]", { opacity: 0, y: 36 })
      ScrollTrigger.batch("[data-reveal]", {
        start: "top 88%",
        once: true,
        onEnter: (elements) => gsap.to(elements, { opacity: 1, y: 0, duration: 1.1, ease: "power3.out", stagger: 0.09, overwrite: true }),
      })

      gsap.fromTo(".experience-photo-img", { yPercent: -8, scale: 1.12 }, { yPercent: 8, scale: 1, ease: "none", scrollTrigger: { trigger: ".experience-photo", start: "top bottom", end: "bottom top", scrub: true } })

      gsap.fromTo("[data-word]", { opacity: 0.18 }, { opacity: 1, ease: "none", stagger: 0.1, scrollTrigger: { trigger: ".quote-section", start: "top 75%", end: "center 45%", scrub: true } })

      gsap.utils.toArray<HTMLElement>("[data-count]").forEach((element) => {
        const counter = { value: 0 }
        gsap.to(counter, {
          value: Number(element.dataset.count),
          duration: 1.8,
          ease: "power2.out",
          scrollTrigger: { trigger: element, start: "top 90%", once: true },
          onUpdate: () => {
            element.textContent = String(Math.round(counter.value))
          },
        })
      })
    })

    const watcher = document.querySelector(".peek-idle")
    const events = ["pointermove", "pointerdown", "keydown", "scroll", "touchstart"]
    let idle = 0
    const wake = () => {
      watcher?.classList.remove("is-watching")
      window.clearTimeout(idle)
      idle = window.setTimeout(() => watcher?.classList.add("is-watching"), 7000)
    }
    events.forEach((event) => window.addEventListener(event, wake, { passive: true }))
    wake()

    return () => {
      events.forEach((event) => window.removeEventListener(event, wake))
      window.clearTimeout(idle)
    }
  })

  return null
}
