import React from 'react';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-dark-900 relative overflow-hidden">
      {/* Abstract bg elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary-900/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary-900/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="mb-8 flex justify-center">
          <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center">
            <Quote className="w-6 h-6 text-white" />
          </div>
        </div>
        
        <blockquote className="text-2xl md:text-4xl font-medium text-white leading-tight mb-8 font-display">
          “Nosso site nunca foi tão rápido e claro. A conversão aumentou e agora temos presença profissional de verdade.”
        </blockquote>
        
        <div className="flex items-center justify-center space-x-4">
          <div className="w-12 h-12 rounded-full bg-slate-700 overflow-hidden">
             <img src="https://picsum.photos/100/100" alt="Cliente" className="w-full h-full object-cover" />
          </div>
          <div className="text-left">
            <div className="text-white font-bold font-display">Ricardo Silva</div>
            <div className="text-primary-200 text-sm">CEO, TechStart</div>
          </div>
        </div>
      </div>
    </section>
  );
};