import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { BenefitItem } from '../types';

const benefits: BenefitItem[] = [
  { title: "Carregamento ultrarrápido" },
  { title: "SEO de alta performance pronto desde o dia 1" },
  { title: "Experiência premium projetada para conversão" },
  { title: "Código seguro, limpo e escalável" },
  { title: "Personalização completa" },
  { title: "Zero dependência de plugins, temas ou limitações" },
];

export const Benefits: React.FC = () => {
  return (
    <section className="py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Visual Side */}
          <div className="relative order-2 lg:order-1">
             <div className="absolute inset-0 bg-gradient-to-tr from-primary-100 to-indigo-50 rounded-3xl transform rotate-3 scale-105"></div>
             <div className="relative bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
                <div className="flex items-center space-x-4 mb-6">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="space-y-4">
                    <div className="h-4 bg-slate-100 rounded w-3/4"></div>
                    <div className="h-32 bg-slate-50 rounded border-2 border-dashed border-slate-200 flex items-center justify-center text-slate-400">
                        Estrutura Clean Code
                    </div>
                    <div className="h-4 bg-slate-100 rounded w-1/2"></div>
                </div>
                <div className="mt-8 pt-8 border-t border-slate-100 flex justify-between items-center">
                    <div>
                        <div className="text-sm text-slate-500">Performance</div>
                        <div className="text-2xl font-bold text-green-600 font-display">100/100</div>
                    </div>
                    <div>
                        <div className="text-sm text-slate-500">SEO</div>
                        <div className="text-2xl font-bold text-green-600 font-display">100/100</div>
                    </div>
                    <div>
                        <div className="text-sm text-slate-500">Acessibilidade</div>
                        <div className="text-2xl font-bold text-green-600 font-display">100/100</div>
                    </div>
                </div>
             </div>
          </div>

          {/* Text Side */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 font-display">
              Benefícios reais para <br />
              <span className="text-primary-600">negócios que querem crescer</span>
            </h2>
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-green-500 mt-1 flex-shrink-0 mr-4" />
                  <p className="text-lg text-slate-700 font-medium">
                    {benefit.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};