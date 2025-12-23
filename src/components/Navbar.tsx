import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { Button } from "./Button";

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileMenuRendered, setIsMobileMenuRendered] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const firstMobileLinkRef = useRef<HTMLAnchorElement>(null);
  const toggleBtnRef = useRef<HTMLButtonElement>(null);

  const mobileMenuId = "mobile-menu";

  // Scroll Detection
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Entrance Animation
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(navRef.current, { autoAlpha: 1 });

      gsap.fromTo(
        navRef.current,
        { y: -100, scale: 0.8, opacity: 0 },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: "elastic.out(1, 0.75)",
          delay: 0.2,
        }
      );

      gsap.fromTo(
        ".nav-item",
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.5,
          delay: 0.8,
          ease: "power2.out",
        }
      );
    }, navRef);

    return () => ctx.revert();
  }, []);

  // Monta o menu quando abrir
  useEffect(() => {
    if (isMobileMenuOpen) setIsMobileMenuRendered(true);
  }, [isMobileMenuOpen]);

  // Animação do menu + desmonta ao terminar de fechar
  useEffect(() => {
    const el = menuRef.current;
    if (!el) return;

    gsap.killTweensOf(el);

    if (isMobileMenuOpen) {
      // abre
      gsap.set(el, { height: 0, opacity: 0 });
      gsap.to(el, {
        height: "auto",
        opacity: 1,
        duration: 0.4,
        ease: "power3.out",
        onComplete: () => {
          // foco no primeiro link
          firstMobileLinkRef.current?.focus();
        },
      });

      gsap.fromTo(
        ".mobile-link",
        { x: -20, opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.05, duration: 0.3, delay: 0.05 }
      );
    } else if (isMobileMenuRendered) {
      // fecha
      gsap.to(el, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power3.in",
        onComplete: () => {
          setIsMobileMenuRendered(false);
          // devolve foco ao botão do menu
          toggleBtnRef.current?.focus();
        },
      });
    }
  }, [isMobileMenuOpen, isMobileMenuRendered]);

  // Fecha com ESC
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Benefícios", href: "#benefits" },
    { name: "Protocolo", href: "#usage" },
    { name: "Depoimentos", href: "#depoiments" },
    { name: "Preços", href: "#pricing" },
    { name: "FAQ", href: "#FAQ" },
  ];

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav
        ref={navRef}
        className={`
          pointer-events-auto
          relative bg-black/60 backdrop-blur-xl border
          rounded-2xl transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
          shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]
          ${isScrolled ? "border-white/15" : "border-white/10"}
          ${
            isMobileMenuOpen
              ? "w-full max-w-md bg-black/90"
              : "w-full max-w-5xl px-2 py-2"
          }
        `}
      >
        <div className="flex items-center justify-between h-14 pl-4 pr-2">
          {/* Logo (acessível para teclado) */}
          <button
            type="button"
            className="nav-item flex items-center gap-2 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Voltar para o topo"
          >
            <img
              src="/logo-inpi-branco-removebg-preview.png"
              className="w-20 h-16"
              alt="Ikarus"
            />
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2 transition-all duration-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="nav-item relative px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors group rounded-full hover:bg-white/5"
              >
                <span className="relative z-10 font-medium tracking-wide">
                  {link.name}
                </span>
              </a>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="nav-item flex items-center gap-3">
            {/* Desktop CTA */}
            <div className="hidden md:block">
              <Button
                variant="primary"
                className="h-10 px-6 text-xs !bg-white hover:!bg-brand-accent hover:!shadow-[0_0_20px_rgba(0,229,255,0.4)] border-none text-black font-bold tracking-wider rounded-xl"
              >
                COMPRAR
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              ref={toggleBtnRef}
              type="button"
              onClick={() => setIsMobileMenuOpen((v) => !v)}
              aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls={mobileMenuId}
              className="md:hidden p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X size={20} aria-hidden="true" focusable="false" />
              ) : (
                <Menu size={20} aria-hidden="true" focusable="false" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown (só existe no DOM quando necessário) */}
        {isMobileMenuRendered && (
          <div id={mobileMenuId} ref={menuRef} className="overflow-hidden">
            <div className="pt-4 pb-6 px-4 flex flex-col gap-2">
              <div className="h-[1px] w-full bg-white/5 mb-4"></div>

              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  ref={index === 0 ? firstMobileLinkRef : undefined}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mobile-link flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:border-brand-accent/30 hover:bg-brand-accent/5 transition-all group"
                >
                  <span className="text-gray-300 group-hover:text-white font-display uppercase tracking-wide">
                    {link.name}
                  </span>
                  <ArrowRight
                    size={16}
                    aria-hidden="true"
                    focusable="false"
                    className="text-gray-600 group-hover:text-brand-accent -translate-x-2 group-hover:translate-x-0 transition-transform opacity-0 group-hover:opacity-100"
                  />
                </a>
              ))}

              <div className="mobile-link pt-4">
                <Button
                  fullWidth
                  className="rounded-xl font-bold bg-brand-accent text-black border-none hover:bg-white"
                >
                  QUERO EVOLUIR AGORA
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
