import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import {
  AlertTriangle,
  ShieldCheck,
  Lock,
  Activity,
  FileText,
} from "lucide-react";

export const Safety: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      // 1. Card Expand
      tl.from(".safety-panel", {
        scaleY: 0,
        opacity: 0,
        transformOrigin: "center",
        duration: 0.8,
        ease: "power3.inOut",
      })
        // 2. Content Fade In
        .from(".safety-content", {
          opacity: 0,
          duration: 0.5,
        })
        // 3. Stagger List Items
        .from(
          ".safety-item",
          {
            x: -20,
            opacity: 0,
            stagger: 0.1,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.2"
        );

      // 4. Scanner Line Animation (Continuous)
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={container}
      id="safety"
      className="pb-28 pt-0 bg-black relative"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Panel */}
        <div className="safety-panel relative bg-[#080808] border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
          {/* Scanner Effect */}

          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

          <div className="safety-content relative z-10 p-8 md:p-12">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 border-b border-white/5 pb-8">
              <div>
                <h2 className="font-display text-3xl font-bold flex-wrap text-white uppercase tracking-tight flex items-center gap-3">
                  <ShieldCheck className="text-brand-accent" />
                  Segurança &{" "}
                  <span className="text-gray-500">Transparência</span>
                </h2>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Left Column: Contraindications */}
              <div>
                <h3 className="flex items-center gap-2 text-red-500 font-bold mb-6 text-sm uppercase tracking-wider">
                  <AlertTriangle size={18} className="animate-pulse" />
                  Protocolos de Restrição
                </h3>

                <ul className="space-y-4">
                  {[
                    "Gestantes e lactantes.",
                    "Menores de 19 anos.",
                    "Pessoas com condições médicas severas (cardíacos, hipertensos não controlados).",
                    "Pacientes em tratamento com medicação controlada (consulte seu médico).",
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      className="safety-item flex items-start gap-3 text-sm text-gray-400 group"
                    >
                      <div className="mt-1.5 w-1.5 h-1.5 min-w-1.5 min-h-1.5 bg-red-900 rounded-full group-hover:bg-red-500 transition-colors shadow-[0_0_10px_rgba(239,68,68,0.2)]"></div>
                      <span className="group-hover:text-gray-200 transition-colors">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column: Legal Disclaimer */}
              <div className="relative">
                {/* Decorative background for right column */}

                <h3 className="flex items-center gap-2 text-brand-accent font-bold mb-6 text-sm uppercase tracking-wider relative z-10">
                  <Activity size={18} />
                  Aviso Legal
                </h3>

                <div className="safety-item bg-white/5 border border-white/5 rounded-2xl p-6 relative z-10 hover:border-brand-accent/30 transition-colors">
                  <div className="flex gap-4 mb-4">
                    <FileText className="text-gray-500 shrink-0" size={24} />
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Este produto é um{" "}
                      <strong className="text-white">
                        suplemento alimentar
                      </strong>{" "}
                      e não um medicamento. Não se destina a diagnosticar,
                      tratar, curar ou prevenir qualquer doença.
                    </p>
                  </div>
                  <div className="h-[1px] w-full bg-white/5 my-4"></div>
                  <p className="text-gray-500 text-xs leading-relaxed italic">
                    Os resultados podem variar de pessoa para pessoa dependendo
                    do estilo de vida, alimentação e características biológicas
                    individuais. O uso deve estar associado a uma dieta
                    equilibrada e hábitos de vida saudáveis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
