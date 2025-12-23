import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { Button } from "./Button";
import { ArrowRight, Star } from "lucide-react";

export const Hero: React.FC = () => {
  const comp = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Intro Animations - Staggered text reveal
      tl.from(".hero-line", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power4.out",
      }).from(
        ".hero-fade",
        {
          y: 20,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
        },
        "-=0.5"
      );

      // Scroll Parallax for Bottle
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={comp}
      className="relative min-h-screen flex py-20 pt-32 lg:py-0 lg:pt-20 items-center overflow-hidden bg-black"
    >
      {/* Dynamic Background */}
      <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-l from-brand-accent/10 to-transparent skew-x-12 translate-x-1/4 pointer-events-none"></div>
      <div className="absolute top-[20%] left-[20%] w-64 h-64 bg-brand-purple/30 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Content */}
        <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left z-20">
          <div className="hero-fade flex items-center justify-center lg:justify-start gap-4 mb-10 group cursor-default">
            <div className="relative">
              <div className="flex -space-x-3 relative z-10">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-black bg-gray-800 overflow-hidden hover:scale-110 hover:z-20 transition-transform duration-300"
                  >
                    <img
                      src={`https://randomuser.me/api/portraits/thumb/women/${
                        i + 30
                      }.jpg`}
                      alt="User"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="absolute inset-0 bg-brand-accent/20 blur-xl rounded-full group-hover:bg-brand-accent/40 transition-colors"></div>
            </div>

            <div className="flex flex-col items-start">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    size={12}
                    className="fill-brand-accent text-brand-accent"
                  />
                ))}
              </div>
              <span className="text-[10px] text-gray-400 font-mono uppercase tracking-widest mt-1 group-hover:text-white transition-colors">
                Comunidade <span className="text-brand-accent">Ikarus</span>
              </span>
            </div>
          </div>

          <h1 className="font-display font-bold text-[2.8rem] sm:text-6xl xl:text-[5rem] lg:text-[4rem] leading-[1.2] text-white tracking-tighter mb-8 uppercase">
            <div className="overflow-hidden">
              <span className="hero-line block">Desbloqueie</span>
            </div>
            <div className="overflow-hidden">
              <span className="hero-line block text-transparent lg:text-nowrap bg-clip-text bg-gradient-to-r from-brand-accent to-brand-accentDark">
                Seu Potencial
              </span>
            </div>
            <div className="overflow-hidden">
              <span className="hero-line block">Metabólico</span>
            </div>
          </h1>

          <p className="hero-fade text-lg text-gray-400 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10 font-light lg:text-xl">
            Não é mágica, é bioengenharia. Uma fórmula inteligente desenhada
            para ativar seu metabolismo e promover bem-estar real.
          </p>

          <div className="hero-fade flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
            <Button className="text-lg py-4 rounded-2xl  shadow-[0_0_40px_-10px_rgba(0,229,255,0.4)]">
              <span>Adquirir agora</span>
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <div className="hidden sm:flex items-center gap-4  text-xs text-gray-500 font-mono uppercase tracking-widest px-4 border-l border-white/10 ml-2">
              <span>
                Tecnologia
                <br />
                Natural
              </span>
              <span>•</span>
              <span>
                Resultados
                <br />
                Reais
              </span>
            </div>
          </div>
        </div>

        {/* Right Content - Image */}
        <div className="lg:col-span-5 relative h-[300px] lg:h-[700px] flex items-center justify-center">
          {/* Background Rings */}
          <div className="absolute w-[80%] aspect-square border border-brand-accent/20 rounded-full animate-[spin_20s_linear_infinite] opacity-50"></div>
          <div className="absolute w-[70%] aspect-square border border-white/5 rounded-full animate-[spin_30s_linear_infinite_reverse]"></div>

          <div className="relative z-10 w-full h-full flex items-center justify-center">
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-40 h-10 bg-brand-accent blur-[80px] opacity-40"></div>

            <img
              src="/capa-removebg-preview.webp"
              alt="Bella Shape Frasco"
              className="min-h-full w-auto object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.9)] rounded-3xl"
              style={{
                maskImage:
                  "linear-gradient(to bottom, black 90%, transparent 100%)",
              }}
            />

            {/* Floating Card */}
            <div className="absolute bottom-9 lg:bottom-1/3 -right-1 bg-white/5 backdrop-blur-xl border border-white/10 p-2 rounded-2xl animate-float shadow-xl">
              <p className="font-display font-bold text-2xl text-white">100%</p>
              <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">
                Fórmula Natural
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
