import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { Truck, ShieldCheck, Award, Lock } from "lucide-react";

export const TrustBar: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Animação de entrada apenas para desktop (grid)
      gsap.from(".desktop-trust-item", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: container.current,
          start: "top 95%",
        },
      });

      // Animação de entrada suave para o mobile
      gsap.from(".mobile-marquee-wrapper", {
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: container.current,
          start: "top 95%",
        },
      });
    }, container);
    return () => ctx.revert();
  }, []);

  const items = [
    { icon: Truck, text: "Envio Expresso Brasil" },
    { icon: ShieldCheck, text: "Pagamento 100% Seguro" },
    { icon: Award, text: "Garantia de 7 Dias" },
    { icon: Lock, text: "Privacidade Protegida" },
  ];

  // Componente de item reutilizável
  const TrustItems = () => (
    <>
      {items.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-3 px-6 shrink-0 group cursor-default"
        >
          <div className="p-2 bg-brand-accent/5 rounded-full group-hover:bg-brand-accent/20 transition-colors duration-300 border border-brand-accent/10">
            <item.icon className="text-brand-accent w-4 h-4 " />
          </div>
          <span className="text-gray-400 group-hover:text-white transition-colors duration-300 text-xs font-mono uppercase tracking-widest whitespace-nowrap font-medium">
            {item.text}
          </span>
        </div>
      ))}
    </>
  );

  return (
    <div
      ref={container}
      className="bg-black/40 backdrop-blur-md border-y border-white/10 py-6 md:py-8 relative z-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 md:-mt-6 md:pb-4 sm:px-6 lg:px-8">
        {/* DESKTOP VIEW: Grid Estático */}
        <div className="hidden md:flex justify-between gap-8 md:gap-0">
          {items.map((item, index) => (
            <div
              key={index}
              className="desktop-trust-item flex flex-col items-center justify-center text-center gap-3 flex-1 group hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="p-2.5 bg-white/5 rounded-full border border-white/5 group-hover:border-brand-accent/50 group-hover:bg-brand-accent/10 transition-all duration-300">
                <item.icon className="text-brand-accent w-5 h-5" />
              </div>
              <span className="text-gray-400 group-hover:text-white text-xs font-mono uppercase tracking-widest transition-colors duration-300">
                {item.text}
              </span>
            </div>
          ))}
        </div>

        {/* MOBILE VIEW: Infinite Marquee */}
        {/* Usamos mask-image linear-gradient para criar o fade transparente perfeito nas bordas */}
        <div className="md:hidden mobile-marquee-wrapper relative [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <div className="flex animate-marquee w-max py-1">
            {/* Renderizamos 3x para garantir o loop perfeito */}
            <div className="flex shrink-0">
              <TrustItems />
            </div>
            <div className="flex shrink-0">
              <TrustItems />
            </div>
            <div className="flex shrink-0">
              <TrustItems />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
