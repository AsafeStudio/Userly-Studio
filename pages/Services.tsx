import React from 'react';
import { Code2, Palette, BarChart, Handshake, Check, ArrowRight } from 'lucide-react';

export const Services: React.FC = () => {
  const serviceList = [
    {
      title: "Desenvolvimento de Sites Profissionais",
      description: "Construímos sites completos com arquitetura clara, design premium e performance técnica de nível empresarial.",
      icon: <Code2 className="w-8 h-8 text-primary-600" />,
      items: ["UI moderna", "UX estratégico", "SEO técnico avançado", "Desenvolvimento em React/Next.js"]
    },
    {
      title: "UI/UX Design",
      description: "Interface minimalista com foco total na clareza, acessibilidade e conversão.",
      icon: <Palette className="w-8 h-8 text-primary-600" />,
      items: ["Wireframes estratégicos", "Layouts responsivos", "Direção visual completa"]
    },
    {
      title: "SEO Técnico",
      description: "Estrutura técnica que posiciona e converte.",
      icon: <BarChart className="w-8 h-8 text-primary-600" />,
      items: ["Velocidade e Core Web Vitals", "Sitemap e indexação", "Otimização de imagens"]
    },
    {
      title: "Parcerias para Agências",
      description: "Para equipes que desejam tecnologia moderna sem contratar time interno.",
      icon: <Handshake className="w-8 h-8 text-primary-600" />,
      items: ["Desenvolvimento white-label", "Entregas rápidas com IA", "Suporte premium"]
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
            Tecnologia moderna, UX estratégico e SEO técnico
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {serviceList.map((service, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center mb-8">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold font-display mb-4">{service.title}</h3>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">{service.description}</p>
              <div className="space-y-3">
                {service.items.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600" />
                    <span className="text-slate-600 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};