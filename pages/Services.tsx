
import React from 'react';
import { Monitor, Target, ShoppingBag, Check, ArrowRight } from 'lucide-react';

export const Services: React.FC = () => {
  const serviceList = [
    {
      title: "Site Institucional",
      description: "Presença sólida para marcas que buscam credibilidade.",
      icon: <Monitor className="w-8 h-8 text-primary-600" />,
      items: ["Design Exclusivo", "Arquitetura de Conteúdo", "SEO Estruturado", "Mobile First"]
    },
    {
      title: "Landing Page",
      description: "Alta conversão para campanhas específicas.",
      icon: <Target className="w-8 h-8 text-primary-600" />,
      items: ["Foco em Conversão", "Velocidade Extrema", "Copywriting Estratégico", "Tracking de Leads"]
    },
    {
      title: "E-commerce",
      description: "Lojas rápidas e focadas na experiência de compra.",
      icon: <ShoppingBag className="w-8 h-8 text-primary-600" />,
      items: ["Catálogo de Produtos", "Checkout Otimizado", "Performance de Venda", "Gestão de Inventário"]
    }
  ];

  return (
    <section className="min-h-screen pt-32 pb-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-primary-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold uppercase tracking-wide text-primary-700 mb-8">
            <span className="w-2 h-2 rounded-full bg-primary-600 animate-pulse"></span>
            Nossas Soluções
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-display tracking-tight leading-tight mb-6 text-slate-900">
            Soluções Digitais sob Medida
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {serviceList.map((service, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center mb-8">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold font-display mb-4">{service.title}</h3>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">{service.description}</p>
              <div className="space-y-3 mb-10 w-full">
                {service.items.map((item, idx) => (
                  <div key={idx} className="flex items-start justify-center gap-3">
                    <Check className="w-5 h-5 text-green-600" />
                    <span className="text-slate-600 font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <a
                href="#contact"
                className="mt-auto w-full py-4 bg-primary-600 text-white rounded-2xl font-bold hover:bg-primary-700 transition-all shadow-lg"
              >
                Solicitar projeto
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button
             onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
             className="text-slate-500 hover:text-slate-800 uppercase tracking-widest text-xs font-bold"
          >
            Voltar ao topo
          </button>
        </div>
      </div>
    </section>
  );
};