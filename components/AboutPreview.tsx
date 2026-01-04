import React from 'react';
import { ArrowRight, Cpu, Layers } from 'lucide-react';

export const AboutPreview: React.FC = () => {
  return (
    <section className="py-24 bg-dark-900 relative overflow-hidden border-t border-white/5">
      {/* Abstract Tech Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-600/5 rounded-full blur-3xl opacity-50 pointer-events-none -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-3xl opacity-50 pointer-events-none translate-y-1/4 -translate-x-1/4"></div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-soft-light pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wide text-primary-200 mb-8 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
          Estúdio Digital
        </div>

        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 font-display tracking-tight leading-tight">
          Um pouco sobre a Userly
        </h2>
        
        <div className="prose prose-lg prose-invert mx-auto mb-10">
          <p className="text-lg md:text-xl text-slate-400 leading-relaxed font-light">
            Desde 2023, a Userly atua como um estúdio digital especializado em UX, SEO técnico e desenvolvimento moderno. 
            Somos uma equipe enxuta, experiente e extremamente criteriosa e priorizamos a estratégia, o design e a tecnologia 
            para construir sites rápidos, escaláveis e preparados para resultados reais. Nosso foco é elevar marcas através 
            de interfaces inteligentes, performance de ponta e decisões guiadas por dados.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="/sobre"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-primary-600 rounded-xl hover:bg-primary-700 transition-all shadow-lg shadow-primary-900/20 group font-display"
          >
            Ver mais sobre a Userly
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Stats / Badges (Optional Visual Reinforcement) */}
        <div className="mt-16 pt-10 border-t border-white/5 grid grid-cols-2 md:grid-cols-3 gap-8 text-center opacity-60">
           <div className="flex flex-col items-center gap-2">
              <Cpu className="w-6 h-6 text-primary-500" />
              <span className="text-sm text-slate-400 font-medium">Performance First</span>
           </div>
           <div className="flex flex-col items-center gap-2">
              <Layers className="w-6 h-6 text-primary-500" />
              <span className="text-sm text-slate-400 font-medium">Design System</span>
           </div>
           <div className="col-span-2 md:col-span-1 flex flex-col items-center gap-2">
              <div className="font-bold text-white font-display text-lg">2023</div>
              <span className="text-sm text-slate-400 font-medium">Fundação</span>
           </div>
        </div>

      </div>
    </section>
  );
};