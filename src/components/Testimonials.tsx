import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { Star, Quote, CheckCircle } from "lucide-react";
import { TESTIMONIALS } from "../constants";

export const Testimonials: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Header Animation
      gsap.from(".testimonial-header", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%",
        },
      });

      // Cards Animation
      gsap.from(".testimonial-card", {
        y: 100,
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".testimonials-grid",
          start: "top 85%",
        },
      });
    }, container);
    return () => ctx.revert();
  }, []);

  const onEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      y: -10,
      borderColor: "rgba(0, 229, 255, 0.4)",
      boxShadow: "0 0 30px rgba(0, 229, 255, 0.1)",
      duration: 0.3,
    });
    gsap.to(e.currentTarget.querySelector(".quote-icon"), {
      rotate: 180,
      scale: 1.2,
      color: "#00E5FF",
      duration: 0.4,
    });
  };

  const onLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      y: 0,
      borderColor: "rgba(255, 255, 255, 0.1)",
      boxShadow: "none",
      duration: 0.3,
    });
    gsap.to(e.currentTarget.querySelector(".quote-icon"), {
      rotate: 0,
      scale: 1,
      color: "rgba(255, 255, 255, 0.05)",
      duration: 0.4,
    });
  };

  return (
    <section
      ref={container}
      id="depoiments"
      className="pt-16 pb-0 lg:py-28 bg-black border-t border-white/5 relative overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-brand-accent/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="testimonial-header inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-accent/20 bg-brand-accent/5 mb-6">
            <div className="w-1.5 h-1.5 bg-brand-accent rounded-full animate-pulse"></div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-brand-accent">
              Resultados Comprovados
            </span>
          </div>

          <h2 className="testimonial-header font-display text-4xl md:text-5xl font-bold text-white uppercase mb-6 tracking-tight">
            Quem Usa,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-white">
              Recomenda
            </span>
          </h2>
          <p className="testimonial-header text-gray-400 max-w-2xl mx-auto lg:text-xl leading-relaxed">
            Histórias reais de pessoas que desbloquearam sua melhor versão.
            Junte-se à comunidade que mais cresce no Brasil.
          </p>
        </div>

        <div className="testimonials-grid grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item, index) => (
            <div
              key={index}
              className="testimonial-card bg-[#0A0A0A] p-8 rounded-3xl border border-white/10 relative group transition-colors"
              onMouseEnter={onEnter}
              onMouseLeave={onLeave}
            >
              <Quote className=" absolute top-8 right-8 text-white/5 w-12 h-12 transition-colors" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex-1">
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={`${
                          i < item.rating
                            ? "fill-brand-accent text-brand-accent "
                            : "text-gray-800"
                        }`}
                      />
                    ))}
                  </div>

                  <p className="text-gray-300 mb-8 text-base font-light leading-relaxed min-h-[80px]">
                    "{item.text}"
                  </p>
                </div>

                <div className="flex items-center gap-4 pt-6 border-t border-white/5 group-hover:border-white/10 transition-colors">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-gray-800 overflow-hidden border border-white/10 p-0.5">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 bg-black rounded-full p-0.5">
                      <CheckCircle
                        size={12}
                        className="text-brand-accent fill-black"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-white font-bold font-display uppercase text-sm group-hover:text-brand-accent transition-colors">
                      {item.name}
                    </p>
                    <p className="text-gray-500 text-[10px] uppercase tracking-wider">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof Bar */}
        <div className="testimonial-header  border-t border-white/5 flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {[
            "98% Aprovação",
            "+10.000 Clientes",
            "Entrega Segura",
            "Suporte 24/7",
          ].map((text, i) => (
            <span
              key={i}
              className="text-gray-500 font-mono text-xs uppercase tracking-widest"
            >
              {text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
