import React from 'react';
import { Code2, Palette, BarChart, Handshake } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    title: "Desenvolvimento de Sites",
    description: "Criação completa, baseada em UX, SEO e performance moderna com IA integrada.",
    icon: <Code2 className="w-8 h-8 text-primary-600" />
  },
  {
    title: "UI/UX Design",
    description: "Interface limpa, clara e orientada ao comportamento do usuário para máxima conversão.",
    icon: <Palette className="w-8 h-8 text-primary-600" />
  },
  {
    title: "SEO Técnico",
    description: "Estrutura, velocidade, indexação e autoridade técnica para motores de busca.",
    icon: <BarChart className="w-8 h-8 text-primary-600" />
  },
  {
    title: "Parcerias com Agências",
    description: "Entrega white-label para estúdios que desejam tecnologia moderna sem equipe interna.",
    icon: <Handshake className="w-8 h-8 text-primary-600" />
  }
];

export const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary-600 font-semibold uppercase tracking-wide text-sm mb-3 font-display">
            O que entregamos
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 font-display">
            Serviços Principais
          </h3>
        </div>

        {/* Updated grid to 4 columns on LG screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-primary-50 rounded-xl flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3 font-display">
                {service.title}
              </h4>
              <p className="text-slate-600 text-lg leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};