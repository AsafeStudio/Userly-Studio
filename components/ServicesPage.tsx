import React from 'react';
import { Code2, Palette, BarChart, Handshake, Check, ArrowRight } from 'lucide-react';

export const ServicesPage: React.FC = () => {
  const services = [
    {
      title: "Desenvolvimento de Sites Profissionais",
      description: "Construímos sites completos com arquitetura clara, design premium e performance técnica de nível empresarial.",
      icon: <Code2 className="w-8 h-8 text-primary-600" />,
      items: [
        "UI moderna",
        "UX estratégico",
        "SEO técnico avançado",
        "IA aplicada no processo",
        "Desenvolvimento em React/Next.js",
        "Integração de ferramentas",
        "Estrutura escalável e segura"
      ]
    },
    {
      title: "UI/UX Design",
      description: "Interface minimalista com foco total na clareza, acessibilidade e conversão.",
      icon: <Palette className="w-8 h-8 text-primary-600" />,
      items: [
        "Wireframes estratégicos",
        "Layouts responsivos",
        "Direção visual completa",
        "Jornada otimizada do usuário"
      ]
    },
    {
      title: "SEO Técnico",
      description: "Estrutura técnica que posiciona.",
      icon: <BarChart className="w-8 h-8 text-primary-600" />,
      items: [
        "Velocidade e Core Web Vitals",
        "Sitemap e indexação avançada",
        "Otimização de imagens, código e tags",
        "Auditoria completa"
      ]
    },
    {
      title: "Parcerias para Agências e Estúdios",
      description: "Para equipes que desejam tecnologia moderna sem contratar time interno.",
      icon: <Handshake className="w-8 h-8 text-primary-600" />,
      items: [
        "Desenvolvimento white-label",
        "Entregas rápidas com IA",
        "Suporte técnico premium"
      ]
    }
  ];

  return (
    <section className="min-h-screen pt-32 pb-20 bg-white relative overflow-hidden">
      {/* Background Decor (Matching Hero) */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-primary-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-primary-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold uppercase tracking-wide text-primary-700 mb-8">
            <span className="w-2 h-2 rounded-full bg-primary-600 animate-pulse"></span>
            Nossas Soluções
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-display tracking-tight leading-tight mb-6 text-slate-900">
            Tecnologia moderna, UX estratégico e SEO técnico
            <span className="block text-primary-500 mt-2 text-3xl md:text-4xl">tudo em um único estúdio.</span>
          </h1>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white rounded-3xl p-8 md:p-10 border border-slate-200 shadow-sm hover:shadow-xl hover:border-primary-100 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
            >
               {/* Hover Gradient Background */}
               <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-primary-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold font-display mb-4 text-slate-900">
                  {service.title}
                </h3>
                
                <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-3">
                  {service.items.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="mt-1 bg-green-100 p-0.5 rounded-full">
                        <Check className="w-3.5 h-3.5 text-green-600" />
                      </div>
                      <span className="text-slate-600 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Footer */}
        <div className="mt-20 text-center">
            <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-primary-600 rounded-xl hover:bg-primary-700 transition-all shadow-lg shadow-primary-500/25 group font-display">
                Solicitar orçamento
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
        </div>

      </div>
    </section>
  );
};