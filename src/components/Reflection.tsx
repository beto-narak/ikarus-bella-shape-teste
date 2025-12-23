import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

export const Reflection: React.FC = () => {
  return (
    <section className="py-16 lg:py-28 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-brand-purple/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-accent/20 bg-brand-accent/5 mb-8 w-fit">
              <Sparkles size={14} className="text-brand-accent" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-brand-accent">
                Autoestima & Bem-estar
              </span>
            </div>

            <h2 className="font-display text-4xl md:text-6xl font-bold text-white uppercase  tracking-tighter mb-8">
              Quando foi a última vez que você se{" "}
              <span className="text-brand-accent">sentiu bem</span> com o seu
              reflexo?
            </h2>

            <div className="space-y-6">
              <p className="text-xl text-gray-300 font-medium leading-relaxed">
                Se você não consegue lembrar, então é hora de conhecer o poder
                da bioengenharia do{" "}
                <span className="text-white">Bella Shape</span>.
              </p>

              <div className="h-[1px] w-20 bg-brand-accent/50"></div>

              <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                Melhore sua relação com seu corpo e alcance o bem-estar com um
                suplemento desenhado para ajudar a{" "}
                <span className="text-white font-semibold">
                  perder peso de forma natural e saudável
                </span>
                , aumentando sua autoestima e renovando seu amor próprio todos
                os dias.
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                document
                  .getElementById("pricing")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="mt-10 flex items-center gap-3 text-brand-accent font-mono text-xs uppercase tracking-[0.2em] group"
            >
              Quero minha transformação
              <ArrowRight
                size={16}
                className="group-hover:translate-x-2 transition-transform"
              />
            </motion.button>
          </motion.div>

          {/* Visual Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative flex justify-center items-center"
          >
            {/* Measuring Tape Orb Effect */}
            <div className="absolute w-[85%] aspect-square rounded-full border-2 border-dashed border-brand-accent/20 animate-[spin_30s_linear_infinite]"></div>
            <div className="absolute w-[100%] aspect-square rounded-full border border-white/5 animate-[spin_60s_linear_infinite_reverse]"></div>

            {/* Glow behind the person */}
            <div className="absolute w-64 h-64 bg-brand-accent/20 blur-[100px] rounded-full"></div>

            {/* The Image (Adaptada para o estilo do site) */}
            <div className="relative z-10 w-full max-w-[500px]">
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop"
                alt="Mulher confiante"
                className="w-full h-auto rounded-[3rem]  transition-all duration-700 shadow-2xl border border-white/10"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
