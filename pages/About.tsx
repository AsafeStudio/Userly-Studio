import React from 'react';
import { Target, Zap, Brain, Users, Layout, Shield, TrendingUp, CheckCircle, ArrowRight, Layers, Code2, Search } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section className="min-h-screen pt-32 pb-20 bg-white relative overflow-hidden text-slate-900">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-primary-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-primary-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold uppercase tracking-wide text-primary-700 mb-8">
            <span className="w-2 h-2 rounded-full bg-primary-600 animate-pulse"></span>
            Sobre a Userly
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-display tracking-tight leading-tight mb-6 text-slate-900">
            Tecnologia, Estratégia e Experiência <br/>
            <span className="text-primary-600">alinhadas para criar resultados reais.</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Desde 2023, a Userly nasceu como um estúdio digital focado em transformar marcas através de UX Estratégico, SEO Técnico e desenvolvimento de alto desempenho. Hoje, operamos como uma equipe multidisciplinar designers, desenvolvedores, estrategistas e especialistas em pesquisa trabalhando com um único objetivo:
          </p>
          <div className="mt-8 bg-primary-50 p-6 rounded-2xl border border-primary-100 inline-block">
             <p className="font-bold text-primary-800 text-lg">
               👉 Criar produtos digitais que combinam estética, performance e impacto no negócio.
             </p>
          </div>
        </div>

        <div className="mb-24">
           <h2 className="text-3xl font-bold font-display text-center mb-12">Nossa Essência</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                 <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-6 text-primary-600">
                    <Target size={24} />
                 </div>
                 <h3 className="text-xl font-bold mb-4 font-display">1. UX Estratégico como base</h3>
                 <p className="text-slate-600 leading-relaxed mb-4">
                    Nada é feito no “achismo”. Antes de qualquer layout, código ou otimização, entendemos profundamente quem é o usuário, o que ele busca e como ele se comporta.
                 </p>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                 <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-6 text-primary-600">
                    <Zap size={24} />
                 </div>
                 <h3 className="text-xl font-bold mb-4 font-display">2. Performance como regra</h3>
                 <p className="text-slate-600 leading-relaxed mb-4">
                    Sites lentos matam conversão. Por isso, adotamos tecnologias modernas para garantir velocidade superior e SEO sólido desde a fundação.
                 </p>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                 <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-6 text-primary-600">
                    <Brain size={24} />
                 </div>
                 <h3 className="text-xl font-bold mb-4 font-display">3. IA aplicada à prática</h3>
                 <p className="text-slate-600 leading-relaxed mb-4">
                    Usamos IA para aumentar nossa capacidade, acelerar processos e validar hipóteses, criando soluções impossíveis em construtores tradicionais.
                 </p>
              </div>
           </div>
        </div>

        <div className="text-center max-w-3xl mx-auto">
           <h2 className="text-3xl font-bold font-display text-slate-900 mb-6">Nosso Compromisso</h2>
           <p className="text-xl text-slate-600 mb-10">
              Não vendemos “sites”. Vendemos crescimento, estratégia e transformação digital real com excelência técnica e propósito.
           </p>
           <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-primary-600 rounded-xl hover:bg-primary-700 transition-all shadow-lg font-display">
                Falar com a Userly
                <ArrowRight className="ml-2 w-5 h-5" />
            </a>
        </div>
      </div>
    </section>
  );
};