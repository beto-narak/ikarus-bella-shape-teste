import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { BENEFITS } from "../constants";

export const Benefits: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      // 1. Header Animation (Split effect simulation)
      tl.from(".benefit-header-item", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power4.out",
      })
        // 2. Line Expand
        .from(
          ".benefit-divider",
          {
            scaleX: 0,
            transformOrigin: "left center",
            duration: 0.8,
            ease: "power2.inOut",
          },
          "-=0.6"
        )
        // 3. Cards Entrance
        .from(
          ".benefit-card",
          {
            y: 100,
            opacity: 0,
            rotationX: 15, // Slight 3D tilt on enter
            transformOrigin: "top center",
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
          },
          "-=0.6"
        );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const icon = card.querySelector(".card-icon");
    const overlay = card.querySelector(".card-overlay");
    const border = card.querySelector(".card-border");

    gsap.to(card, { y: -10, duration: 0.4, ease: "power2.out" });
    gsap.to(icon, {
      scale: 1.2,
      duration: 0.5,
      ease: "back.out(1.7)",
    });
    gsap.to(overlay, { opacity: 1, duration: 0.4 });
    gsap.to(border, { opacity: 1, duration: 0.4 });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const icon = card.querySelector(".card-icon");
    const overlay = card.querySelector(".card-overlay");
    const border = card.querySelector(".card-border");

    gsap.to(card, { y: 0, duration: 0.4, ease: "power2.out" });
    gsap.to(icon, {
      color: "#ffffff",
      backgroundColor: "transparent",
      duration: 0.4,
      ease: "power2.out",
    });
    gsap.to(overlay, { opacity: 0, duration: 0.4 });
    gsap.to(border, { opacity: 0, duration: 0.4 });
  };

  return (
    <section
      ref={sectionRef}
      id="benefits"
      className=" py-20 bg-brand-dark relative z-10 overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="px-2 mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="benefit-header-item text-brand-accent font-mono text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-brand-accent"></span>
              Tecnologia Nutricional
            </span>
            <h2 className="benefit-header-item font-display text-4xl md:text-5xl font-bold text-white uppercase leading-[0.9] tracking-tight">
              A Ciência <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-white">
                Do Resultado
              </span>
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BENEFITS.map((benefit, index) => (
            <div
              key={index}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="benefit-card group relative bg-[#050505] p-8 h-full flex flex-col justify-between cursor-default rounded-2xl"
            >
              {/* Border Glow */}
              <div className="card-border absolute inset-0 border border-brand-accent/50 rounded-2xl opacity-0 transition-opacity pointer-events-none"></div>
              {/* Static Border */}
              <div className="absolute inset-0 border border-white/5 rounded-2xl pointer-events-none"></div>

              {/* Hover Overlay Gradient */}
              <div className="card-overlay absolute inset-0 bg-gradient-to-b from-brand-accent/10 to-transparent opacity-0 pointer-events-none rounded-2xl"></div>

              <div className="relative z-10">
                <div className="card-icon w-14 h-14 border border-white/10 rounded-xl flex items-center justify-center mb-10 transition-colors duration-300">
                  <benefit.icon className="w-6 h-6" />
                </div>

                <div>
                  <span className="text-brand-accent/50 font-mono text-[10px] uppercase tracking-widest mb-2 block">
                    Feature 0{index + 1}
                  </span>
                  <h3 className="font-display text-xl font-bold text-white mb-4 uppercase">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-500 text-sm lg:text-base leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {benefit.description}
                  </p>
                </div>
              </div>

              {/* Bottom Decorative Element */}
              <div className="mt-8 flex justify-end opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-2 h-2 bg-brand-accent rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
