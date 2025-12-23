import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import { FAQS, WHATSAPP_LINK } from "../constants";

export const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="FAQ"
      className="py-16 lg:py-28 bg-black relative border-t border-white/5 overflow-hidden"
    >
      {/* Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-accent/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-6 backdrop-blur-sm">
            <HelpCircle size={14} className="text-brand-accent" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400">
              Suporte Ikarus
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white uppercase mb-6 tracking-tight">
            Perguntas{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-white">
              Frequentes
            </span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto lg:text-xl leading-relaxed">
            Tire suas dúvidas sobre o protocolo Bella Shape. Se precisar de
            ajuda extra, nosso time está à disposição.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-4"
        >
          {FAQS.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants as any}
              className={`group border rounded-2xl overflow-hidden transition-all duration-300 ${
                activeIndex === index
                  ? "bg-white/[0.03] border-brand-accent/30"
                  : "bg-transparent border-white/10 hover:border-white/20"
              }`}
            >
              <button
                className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span
                  className={`font-display font-medium text-lg transition-colors ${
                    activeIndex === index
                      ? "text-white"
                      : "text-gray-300 group-hover:text-white"
                  }`}
                >
                  {faq.question}
                </span>
                <div
                  className={`p-2 rounded-full border transition-all duration-300 ${
                    activeIndex === index
                      ? "bg-brand-accent text-black border-brand-accent rotate-180"
                      : "bg-transparent border-white/10 text-gray-500 group-hover:text-white group-hover:border-white/30"
                  }`}
                >
                  <ChevronDown size={20} />
                </div>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 md:px-8 md:pb-8">
                      <div className="h-[1px] w-full bg-white/5 mb-6"></div>
                      <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Support CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 text-sm mb-4">Ainda tem dúvidas?</p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-brand-accent/50 rounded-full text-white transition-all duration-300 group"
          >
            <MessageCircle
              size={18}
              className="text-brand-accent group-hover:scale-110 transition-transform"
            />
            <span className="font-mono text-xs uppercase tracking-widest">
              Falar no WhatsApp
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
