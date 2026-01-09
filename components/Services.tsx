
import React from 'react';
import { Monitor, Target, ShoppingBag } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    title: "Site Institucional",
    description: "Presença sólida para marcas que buscam credibilidade.",
    icon: <Monitor className="w-8 h-8 text-primary-600" />
  },
  {
    title: "Landing Page",
    description: "Alta conversão para campanhas específicas.",
    icon: <Target className="w-8 h-8 text-primary-600" />
  },
  {
    title: "E-commerce",
    description: "Lojas rápidas e focadas na experiência de compra.",
    icon: <ShoppingBag className="w-8 h-8 text-primary-600" />
  }
];

export const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 class="text-primary-600 font-semibold uppercase tracking-wide text-sm mb-3 font-display">
            O que entregamos
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 font-display">
            Serviços Principais
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-primary-50 rounded-xl flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3 font-display">
                {service.title}
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <a href="#contact" className="mt-auto py-3 px-8 bg-primary-600 text-white rounded-[10px] font-bold text-sm">
                Solicitar
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};