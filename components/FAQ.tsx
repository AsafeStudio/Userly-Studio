import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQItem } from '../types';

const faqItems: FAQItem[] = [
  {
    question: "Vocês trabalham com WordPress ou Elementor?",
    answer: (
      <>
        <p className="mb-4 font-bold text-slate-900">Não.</p>
        <p className="mb-4">
          A Userly trabalha com desenvolvimento moderno, usando tecnologias como 
          <strong className="text-primary-600"> React, Next.js e TailwindCSS</strong> - as mesmas adotadas por empresas líderes do mercado.
        </p>
        <p className="mb-2">Isso garante:</p>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          <li>Velocidade máxima</li>
          <li>Segurança avançada</li>
          <li>SEO técnico robusto</li>
          <li>Escalabilidade</li>
          <li>Personalização total</li>
          <li>Integração nativa com IA</li>
        </ul>
        <p className="text-sm italic text-slate-500">
          Construtores visuais limitam performance e SEO - pilares centrais do que entregamos.
        </p>
      </>
    )
  },
  {
    question: "Quanto tempo leva para entregar um projeto?",
    answer: "Nossos projetos típicos levam entre 2 a 6 semanas, dependendo da complexidade. Focamos em sprints ágeis para garantir qualidade e velocidade."
  },
  {
    question: "O site será compatível com celulares (responsivo)?",
    answer: "Sim, 100%. Adotamos uma metodologia 'Mobile-First', garantindo que a experiência seja perfeita em smartphones, tablets e desktops."
  },
  {
    question: "Como funciona a manutenção após o lançamento?",
    answer: "Oferecemos pacotes de suporte técnico para manter as bibliotecas atualizadas, monitorar performance e realizar ajustes pontuais conforme seu negócio evolui."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Headline and Description */}
          <div className="lg:col-span-4">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display">Perguntas Frequentes</h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              Tire suas dúvidas sobre nosso modelo de trabalho e entenda como podemos escalar seu negócio.
            </p>
            <div className="mt-8 hidden lg:block">
               <div className="h-1 w-20 bg-primary-600 rounded"></div>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-8 space-y-4">
            {faqItems.map((item, index) => (
              <div 
                key={index} 
                className="border border-slate-200 rounded-xl overflow-hidden transition-all hover:border-slate-300 bg-slate-50/50"
              >
                <button
                  className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none group"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-lg font-medium text-slate-900 group-hover:text-primary-600 transition-colors">
                    {item.question}
                  </span>
                  <span className="ml-4 flex-shrink-0 text-primary-600">
                    {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                  </span>
                </button>
                
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};