import React from 'react';
import { LayoutTemplate, Search, Zap, Bot } from 'lucide-react';

const features = [
  {
    icon: <LayoutTemplate className="w-6 h-6 text-white" />,
    title: "UX Estratégico",
    description: "Arquitetura clara, navegação inteligente e experiência orientada a conversão."
  },
  {
    icon: <Search className="w-6 h-6 text-white" />,
    title: "SEO Técnico",
    description: "Velocidade extrema, código limpo, estrutura escalável e otimizada para Google."
  },
  {
    icon: <Zap className="w-6 h-6 text-white" />,
    title: "Tecnologia Moderna",
    description: "React, Next.js e TailwindCSS para desempenho que construtores visuais não alcançam."
  },
  {
    icon: <Bot className="w-6 h-6 text-white" />,
    title: "IA como Aceleradora",
    description: "Aumento de produtividade sem perder a precisão e o toque humano."
  }
];

export const Differentiators: React.FC = () => {
  return (
    <section id="diferenciais" className="py-24 bg-dark-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-16">
          <h2 className="text-primary-500 font-semibold tracking-wide uppercase text-sm mb-3 font-display">
            O que torna a Userly diferente
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white font-display">
            Tecnologia moderna + UX estratégico <br className="hidden md:block" /> + IA aplicada
          </h3>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Não fazemos apenas sites - criamos produtos digitais completos e resilientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-dark-800/50 rounded-2xl border border-white/5 hover:bg-dark-800 transition-all group text-left">
              <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mb-6 shadow-lg shadow-primary-900/20 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold mb-3 text-white font-display">{feature.title}</h4>
              <p className="text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};