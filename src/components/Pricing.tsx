import React from "react";
import { motion } from "framer-motion";
import { Truck, ShieldCheck, ShoppingBag, Zap } from "lucide-react";
import { Button } from "./Button";
import {
  CHECKOUT_URL_1_UNIT,
  CHECKOUT_URL_3_UNITS,
  CHECKOUT_URL_5_UNITS,
} from "../constants";

export const Pricing: React.FC = () => {
  const offers = [
    {
      id: 1,
      title: "Pote Único",
      banner: "TRATAMENTO PARA 30 DIAS",
      image: "/capa-removebg-preview.webp",
      installmentPrice: "19,70",
      pixPrice: "197",
      discount: "91,00",
      url: CHECKOUT_URL_1_UNIT,
      highlight: false,
      ctaText: "QUERO EXPERIMENTAR",
      imgScale: "scale-100",
    },
    {
      id: 2,
      title: "Campeão de Vendas",
      banner: "LEVE 3 PAGUE 2 (90 DIAS)",
      image: "/2-removebg-preview.webp",
      installmentPrice: "39,40",
      pixPrice: "394",
      discount: "190,00",
      url: CHECKOUT_URL_3_UNITS,
      highlight: true,
      ctaText: "GARANTIR OFERTA",
      imgScale: "scale-150 md:scale-[180%]", // Aumenta o tamanho para compensar a largura dos 3 potes
    },
    {
      id: 3,
      title: "Kit Transformação",
      banner: "LEVE 5 PAGUE 3 (150 DIAS)",
      image: "/3-removebg-preview.webp",
      installmentPrice: "59,10",
      pixPrice: "591",
      discount: "436,00",
      url: CHECKOUT_URL_5_UNITS,
      highlight: false,
      ctaText: "MELHOR CUSTO-BENEFÍCIO",
      imgScale: "scale-150 md:scale-[170%]", // Aumenta ainda mais para o kit de 5 potes
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-black relative overflow-hidden ">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl pointer-events-none opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/30 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-purple/30 rounded-full blur-[150px]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-6">
            <Zap size={14} className="text-brand-accent" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400">
              Tabela de Preços
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-white uppercase tracking-tight mb-6">
            Escolha o seu{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-white">
              Protocolo
            </span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto lg:text-xl">
            Invista na sua saúde com as melhores condições do lote atual.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {offers.map((offer) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: offer.id * 0.1 }}
              className={`relative flex flex-col rounded-[2.5rem] p-6 lg:p-8 text-center border transition-all duration-500 overflow-hidden group
                ${
                  offer.highlight
                    ? "bg-brand-dark border-brand-accent shadow-[0_0_60px_rgba(0,229,255,0.15)] scale-105 z-10"
                    : "bg-[#0A0A0A] border-white/10 hover:border-white/20"
                }`}
            >
              {/* Recomendado Stamp */}
              {offer.highlight && (
                <div className="absolute top-24 right-4 z-30 w-24 h-24 pointer-events-none rotate-12 group-hover:rotate-0 transition-transform duration-500">
                  <div className="w-full h-full bg-brand-accent rounded-full flex flex-col items-center justify-center border-2 border-white shadow-[0_0_20px_rgba(0,229,255,0.4)]">
                    <span className="text-[9px] font-bold text-black leading-none mb-1">
                      96% DOS
                    </span>
                    <span className="text-[9px] font-bold text-black leading-none">
                      CLIENTES
                    </span>
                    <span className="text-[10px] font-black text-black leading-none mt-1">
                      RECOMENDAM
                    </span>
                  </div>
                </div>
              )}

              {/* Title */}
              <h3
                className={`text-xl font-display font-bold mb-4 uppercase tracking-wider ${
                  offer.highlight ? "text-brand-accent" : "text-white"
                }`}
              >
                {offer.title}
              </h3>

              {/* Red Banner */}
              <div className="bg-[#E62E2D] text-white py-2 px-6 rounded-lg font-black text-xs mb-6 uppercase tracking-widest inline-block mx-auto min-w-[85%] shadow-lg shadow-red-950/20">
                {offer.banner}
              </div>

              {/* Product Image Section - Fixed Height for alignment */}
              <div className="relative h-56 md:h-64 mb-8 flex items-center justify-center">
                <div
                  className={`transition-transform duration-700  ${offer.imgScale}`}
                >
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full max-w-[320px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
                  />
                </div>
              </div>

              {/* Pricing Block */}
              <div className="flex-1 flex flex-col justify-end">
                <div className="mb-8 space-y-1">
                  <p className="text-gray-400 text-sm font-medium uppercase tracking-widest">
                    Por 12x de
                  </p>
                  <div className="flex items-start justify-center gap-1 text-white">
                    <span className="text-2xl font-bold mt-2">R$</span>
                    <span className="text-6xl lg:text-7xl font-display font-black tracking-tighter leading-none">
                      {offer.installmentPrice.split(",")[0]}
                    </span>
                    <span className="text-2xl font-bold mt-2">
                      ,{offer.installmentPrice.split(",")[1]}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm font-medium mt-2">
                    Ou R$ {offer.pixPrice} à vista no PIX
                  </p>
                  <p className="text-sm font-bold mt-3 text-yellow-400">
                    Você economiza{" "}
                    <span className="underline decoration-1">
                      R$ {offer.discount}
                    </span>
                  </p>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => (window.location.href = offer.url)}
                  className={`w-full py-5 rounded-full font-black text-sm uppercase tracking-widest transition-all duration-300 shadow-xl mb-6
                    ${
                      offer.highlight
                        ? "bg-brand-accent text-black hover:bg-white hover:shadow-[0_0_30px_rgba(0,229,255,0.5)]"
                        : "bg-white/10 text-white hover:bg-white hover:text-black"
                    }`}
                >
                  {offer.ctaText}
                </button>

                {/* Footer Shipping */}
                <div
                  className={`flex items-center justify-center gap-3 ${
                    offer.highlight ? "text-brand-accent" : "text-gray-500"
                  }`}
                >
                  <Truck size={20} className="shrink-0" />
                  <div className="text-left">
                    <p className="text-[10px] font-bold uppercase leading-none opacity-80">
                      Frete grátis para
                    </p>
                    <p className="text-xs font-black uppercase leading-none tracking-wider">
                      Todo Brasil
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex items-center justify-center gap-8 text-gray-600 text-[10px] font-bold uppercase tracking-[0.2em]">
          <div className="flex items-center gap-2">
            <ShieldCheck size={14} className="text-brand-accent" />
            Checkout Seguro
          </div>
          <div className="w-1.5 h-1.5 bg-white/5 rounded-full"></div>
          <div className="flex items-center gap-2">
            <ShieldCheck size={14} className="text-brand-accent" />
            Satisfação Garantida
          </div>
        </div>
      </div>
    </section>
  );
};
