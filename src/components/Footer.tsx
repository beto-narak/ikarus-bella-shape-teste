import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-black border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:justify-around gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">IKARUS</h3>
            <p className="text-gray-500 text-sm mb-4 max-w-sm">
              Focados em trazer a melhor tecnologia em suplementação para o seu
              dia a dia. Transforme sua rotina com qualidade e responsabilidade.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>comercial@ikarussuplementos.com.br</li>
              <li>47 93386-0859</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-center items-center gap-4">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Ikarus Supplements. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
