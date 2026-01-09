import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onNavigate: (page: 'home' | 'services' | 'about') => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white text-center">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-primary-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-primary-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold uppercase tracking-wide text-primary-700 mb-8">
            <span className="w-2 h-2 rounded-full bg-primary-600 animate-pulse"></span>
            Tecnologia Moderna
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display text-slate-900 tracking-tight leading-[1.1] mb-6">
            Sites profissionais com <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-500">
              UX, SEO e Tecnologia
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Transformamos usabilidade, performance técnica e design limpo em resultados reais.
            Criamos estruturas digitais que convertem, carregam rápido e posicionam sua marca no topo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-primary-600 rounded-[10px] hover:bg-primary-700 transition-all shadow-lg shadow-primary-500/25 group font-display"
            >
              Solicitar projeto
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-slate-700 bg-white border border-slate-200 rounded-[10px] hover:bg-slate-50 hover:border-slate-300 transition-all font-display"
            >
              Ver portfólio
            </button>
          </div>

          <div className="mt-12 flex items-center justify-center gap-4 text-sm text-slate-500">
             <div className="flex -space-x-2">
               {[1,2,3].map(i => (
                 <div key={i} className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center overflow-hidden">
                    <img src={`https://picsum.photos/32/32?random=${i}`} alt="Avatar" className="w-full h-full object-cover" />
                 </div>
               ))}
             </div>
             <p>Mais de 50+ projetos entregues com alta performance.</p>
          </div>
        </div>
      </div>
    </section>
  );
};