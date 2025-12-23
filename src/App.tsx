import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { TrustBar } from "./components/TrustBar";
import { Benefits } from "./components/Benefits";
import { UsageAndSpecs } from "./components/UsageAndSpecs";
import { Safety } from "./components/Safety";
import { Testimonials } from "./components/Testimonials";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { Button } from "./components/Button";
import { SHOPIFY_URL } from "./constants";
import { Pricing } from "./components/Pricing";
import { Reflection } from "./components/Reflection";

// Register GSAP Plugin
gsap.registerPlugin(ScrollTrigger);

function App() {
  const ctaRef = useRef<HTMLElement>(null);
  const textTitleRef = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // 1. Animação do Background (Orbita Suave)
      gsap.to(".cta-orb", {
        scale: 1.2,
        opacity: 0.4,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // 2. Animação "Blur Reveal" Letra por Letra com SCRUB
      // Selecionamos explicitamente os chars para garantir que o GSAP os encontre
      const chars = gsap.utils.toArray(".reveal-char");

      gsap.fromTo(
        chars,
        {
          opacity: 0,
          filter: "blur(20px)",
          y: 50,
          scale: 1.5,
        },
        {
          opacity: 1,
          filter: "blur(0px)",
          y: 0,
          scale: 1,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: textTitleRef.current,
            start: "top 85%", // Começa um pouco mais cedo
            end: "bottom 50%",
            scrub: 1,
          },
        }
      );

      // 3. Elementos Fade Up
      gsap.from(".cta-content-fade", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 70%",
        },
      });
    }, ctaRef);
    return () => ctx.revert();
  }, []);

  // Função auxiliar para quebrar texto em letras
  const splitTextToChars = (text: string, className: string = "") => {
    return text.split("").map((char, index) => (
      <span
        key={index}
        className={`reveal-char inline-block ${
          char === " " ? "w-4 md:w-6" : ""
        } ${className}`}
        style={{ willChange: "transform, opacity, filter" }}
      >
        {char}
      </span>
    ));
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-brand-accent selection:text-black relative overflow-x-hidden">
      {/* Global Noise Texture */}
      <div className="fixed inset-0 z-[1] bg-noise pointer-events-none opacity-20 mix-blend-overlay"></div>

      <div className="relative z-[2]">
        <Navbar />

        <main>
          <Hero />
          <TrustBar />
          <Benefits />
          <Reflection />
          <UsageAndSpecs />
          <Safety />
          <Testimonials />
          <Pricing />
          <FAQ />

          {/* Final CTA Section Modernizada */}
          <section
            ref={ctaRef}
            className="py-20 lg:py-28 bg-black relative overflow-hidden"
          >
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-accent/5 to-transparent pointer-events-none"></div>

            {/* Orbs de Luz */}
            <div className="cta-orb absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] md:w-[800px] md:h-[800px] bg-brand-accent/10 blur-[100px] md:blur-[150px] rounded-full pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-brand-purple/10 blur-[80px] rounded-full pointer-events-none mix-blend-screen"></div>

            <div className="max-w-5xl mx-auto text-center px-4 relative z-10">
              {/* Badge */}
              <div className="cta-content-fade inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-8 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
                </span>
                <span className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-white">
                  Últimas unidades do lote
                </span>
              </div>

              {/* Título com Scroll Scrub Blur Reveal */}
              <h2 className="font-display text-3xl sm:text-5xl lg:text-[4.5rem] font-bold mb-8 uppercase tracking-normal leading-[1.5] ">
                Sua Melhor Versão{" "}
                <span className="text-brand-accent">Começa Agora</span>
              </h2>

              <p className="cta-content-fade text-gray-400 mb-12 md:text-xl lg:text-2xl max-w-2xl mx-auto font-light leading-relaxed border-l-2 border-brand-accent/20 pl-4 md:border-none md:pl-0">
                Não deixe para depois a transformação que você merece. A
                bioengenharia a favor do seu corpo.
              </p>

              <Button className="w-full md:w-auto rounded-2xl py-4 px-10  lg:text-xl font-bold tracking-widest shadow-[0_0_50px_rgba(0,229,255,0.2)] hover:shadow-[0_0_80px_rgba(0,229,255,0.5)] bg-white text-black hover:bg-brand-accent hover:text-black border-none transition-all duration-500 hover:-translate-y-1">
                Garantir meu Frasco
              </Button>

              <div className="cta-content-fade mt-10 pt-10 border-t border-white/25 flex flex-wrap justify-center gap-6 md:gap-12 opacity-60">
                {[
                  "Envio Imediato",
                  "Garantia de 7 Dias",
                  "Compra Segura SSL",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-brand-accent rounded-full"></div>
                    <p className="text-[10px] md:text-xs text-gray-200 uppercase tracking-widest font-mono">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
