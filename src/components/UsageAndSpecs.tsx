import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { STEPS } from "../constants";
import {
  PackageOpen,
  CalendarClock,
  Droplets,
  Zap,
  AlertCircle,
} from "lucide-react";

export const UsageAndSpecs: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // 1. Timeline Draw Animation (Scroll Scrub)
      gsap.from(".timeline-progress", {
        height: "0%",
        ease: "none",
        scrollTrigger: {
          trigger: ".steps-container",
          start: "top center",
          end: "bottom center",
          scrub: 0.5,
        },
      });

      // 2. Steps Entrance
      gsap.fromTo(
        ".step-card",
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".steps-container",
            start: "top 75%",
          },
        }
      );

      // 3. Bento Grid Entrance - Fixed with fromTo
      gsap.fromTo(
        ".spec-card",
        { y: 50, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".specs-container",
            start: "top 80%",
          },
        }
      );

      // 4. Counter Animation - Fixed logic using data-target
      gsap.utils.toArray<HTMLElement>(".counter-value").forEach((el) => {
        // Read from data attribute instead of innerText to prevent 0-value bug on re-renders
        const target = parseInt(el.getAttribute("data-target") || "0");

        // Explicitly set starting value
        el.innerText = "0";

        gsap.to(el, {
          innerText: target,
          duration: 2,
          snap: { innerText: 1 },
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            once: true,
          },
          onUpdate: function () {
            el.innerText = Math.ceil(this.targets()[0].innerText).toString();
          },
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="usage"
      className="py-16 lg:py-28 bg-black relative border-t border-white/5 overflow-hidden"
    >
      {/* Background Gradients */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div>
          {/* Left: Usage Protocol */}
          <div className="steps-container">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-brand-accent/10 rounded-xl border border-brand-accent/20">
                <Zap className="text-brand-accent w-6 h-6" />
              </div>
              <div>
                <span className="text-brand-accent font-mono text-sm uppercase tracking-widest block">
                  Metodologia
                </span>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-white uppercase">
                  Protocolo{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-white">
                    Diário
                  </span>
                </h2>
              </div>
            </div>

            <div className="flex items-start flex-col lg:flex-row w-full gap-12 2xl:gap-24 justify-between">
              <div className="relative pl-12 space-y-12">
                {/* Timeline Track */}
                <div className="absolute left-[19px] top-4 bottom-4 w-[2px] bg-white/5 rounded-full"></div>
                {/* Timeline Progress */}
                <div className="timeline-progress absolute left-[19px] top-4 w-[2px] bg-brand-accent rounded-full max-h-[calc(100%-2rem)]"></div>

                {STEPS.map((step, index) => (
                  <div key={index} className="step-card relative group">
                    {/* Timeline Dot */}
                    <div className="absolute -left-[45px] top-1 w-8 h-8 bg-black border border-white/20 rounded-full flex items-center justify-center z-10 group-hover:border-brand-accent group-hover:shadow-[0_0_15px_rgba(0,229,255,0.4)] transition-all duration-300">
                      <div className="w-2 h-2 bg-gray-600 rounded-full group-hover:bg-brand-accent transition-colors duration-300"></div>
                    </div>

                    <div className="bg-white/5 border border-white/5 p-6 rounded-2xl group-hover:bg-white/[0.07] group-hover:border-white/10 transition-all duration-300">
                      <span className="text-brand-accent/70 font-mono text-xs mb-2 block tracking-widest">
                        PASSO {step.number}
                      </span>
                      <h3 className="font-display text-xl font-bold text-white mb-2 uppercase">
                        {step.title}
                      </h3>
                      <p className="text-gray-400 lg:text-lg leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="specs-container flex flex-col mt-10 justify-center">
                <div className="flex flex-col items-end mb-5 ">
                  <span className="text-gray-500 font-mono text-sm uppercase tracking-widest block mb-2">
                    Detalhes Técnicos
                  </span>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-white uppercase text-right">
                    Especificações
                  </h2>
                </div>

                <div className="grid grid-cols-2 gap-4  bg-[#0A0A0A] p-8 items-center justify-center text-center rounded-[2rem] border border-white/5 group hover:border-brand-accent/50 transition-all duration-500 relative overflow-hidden">
                  {/* Spec 1 */}
                  <div className=" bg-[#0A0A0A] p-8 flex flex-col items-center justify-center text-center rounded-[2rem] border border-white/5 group ">
                    <div className="absolute inset-0 bg-brand-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <PackageOpen className="w-10 h-10 text-gray-400 group-hover:text-brand-accent mb-6 transition-colors duration-300" />
                    <span
                      className="counter-value text-3xl lg:text-5xl font-display font-bold text-white mb-2"
                      data-target="30"
                    >
                      30
                    </span>
                    <span className="text-xs text-gray-500 uppercase tracking-widest font-bold">
                      Cápsulas
                    </span>
                  </div>

                  {/* Spec 2 */}
                  <div className=" bg-[#0A0A0A] p-8 flex flex-col items-center justify-center text-center rounded-[2rem] border border-white/5 group ">
                    <div className="absolute inset-0 bg-brand-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <Droplets className="w-10 h-10 text-gray-400 group-hover:text-brand-accent mb-6 transition-colors duration-300" />
                    <div className="flex items-baseline gap-1">
                      <span
                        className="counter-value text-3xl lg:text-5xl font-display font-bold text-white mb-2"
                        data-target="500"
                      >
                        500
                      </span>
                      <span className="text-sm font-bold text-gray-600">
                        mg
                      </span>
                    </div>
                    <span className="text-xs text-gray-500 uppercase tracking-widest font-bold">
                      Concentração
                    </span>
                  </div>

                  {/* Spec 3 - Full Width Image Card */}
                  <div className="spec-card bg-[#0A0A0A] col-span-2 text-left relative h-32 overflow-hidden group rounded-[2rem] border border-white/5">
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

                    <div className="absolute bottom-0 left-0 right-0 p-8 flex  justify-between items-center gap-5 z-10">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="w-2 h-2 bg-brand-accent rounded-full animate-pulse"></span>
                          <span className="text-brand-accent text-xs font-mono uppercase tracking-widest">
                            Duração Ideal
                          </span>
                        </div>
                        <span className="font-display font-bold text-nowrap text-white uppercase block text-2xl leading-none">
                          Ciclo de 30 Dias
                        </span>
                      </div>
                      <div className="w-12 h-12 min-w-12 min-h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-brand-accent group-hover:text-black group-hover:border-brand-accent transition-all duration-300">
                        <CalendarClock className="w-6 h-6" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Warning Box */}
            <div className="step-card mt-12 flex items-start gap-4 p-5 bg-yellow-500/5 border border-yellow-500/20 rounded-xl">
              <AlertCircle className="text-yellow-500 w-6 h-6 shrink-0 mt-0.5" />
              <div>
                <p className="text-yellow-500 font-bold uppercase text-sm tracking-wider mb-1">
                  Atenção
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Para maximizar a absorção, nunca tome em jejum. Seu corpo
                  precisa de combustível para processar a fórmula.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Technical Specs (Bento Grid) */}
        </div>
      </div>
    </section>
  );
};
