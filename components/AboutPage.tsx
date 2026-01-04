import React from 'react';
import { Target, Zap, Brain, Users, Layout, Shield, TrendingUp, CheckCircle, ArrowRight, Layers, Code2, Search } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <section className="min-h-screen pt-32 pb-20 bg-white relative overflow-hidden text-slate-900">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-primary-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-primary-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header / Intro */}
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
          <p className="mt-8 text-slate-600">
             Acreditamos que um site não deve ser apenas bonito. Ele precisa ser rápido, acessível, confiável, encontrável no Google e, acima de tudo, pensado para o comportamento humano.
          </p>
        </div>

        {/* Nossa Essência (3 Pilares) */}
        <div className="mb-24">
           <h2 className="text-3xl font-bold font-display text-center mb-12">Nossa Essência</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Pilar 1 */}
              <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                 <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-6 text-primary-600">
                    <Target size={24} />
                 </div>
                 <h3 className="text-xl font-bold mb-4 font-display">1. UX Estratégico como base</h3>
                 <p className="text-slate-600 leading-relaxed mb-4">
                    Nada é feito no “achismo”. Antes de qualquer layout, código ou otimização, entendemos profundamente quem é o usuário, o que ele busca e como ele se comporta.
                 </p>
                 <p className="text-slate-600 text-sm italic">
                    Essa abordagem direciona arquitetura, conteúdo, fluxos, SEO e decisões de design.
                 </p>
              </div>

              {/* Pilar 2 */}
              <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                 <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-6 text-primary-600">
                    <Zap size={24} />
                 </div>
                 <h3 className="text-xl font-bold mb-4 font-display">2. Performance como regra</h3>
                 <p className="text-slate-600 leading-relaxed mb-4">
                    Sites lentos matam conversão. Por isso, adotamos tecnologias modernas (React, Next.js, Tailwind, otimização de imagens, pré renderização, estrutura semântica avançada) para garantir:
                 </p>
                 <ul className="space-y-2 text-sm text-slate-700 font-medium">
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> Velocidade de carregamento superior</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> Máximo desempenho no Lighthouse</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> SEO sólido desde a fundação</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> Estabilidade e escalabilidade</li>
                 </ul>
              </div>

              {/* Pilar 3 */}
              <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                 <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-6 text-primary-600">
                    <Brain size={24} />
                 </div>
                 <h3 className="text-xl font-bold mb-4 font-display">3. IA aplicada à prática</h3>
                 <p className="text-slate-600 leading-relaxed mb-4">
                    Usamos IA não para substituir profissionais mas para aumentar nossa capacidade, acelerar processos, validar hipóteses e criar soluções que hoje são praticamente impossíveis em construtores visuais tradicionais.
                 </p>
                 <p className="text-primary-700 font-semibold text-sm">
                    A combinação entre método humano + precisão técnica + IA tornou se nosso diferencial.
                 </p>
              </div>
           </div>
        </div>

        {/* Propósito e Equipe */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-start">
           <div>
              <h2 className="text-3xl font-bold font-display mb-6">Nosso Propósito</h2>
              <p className="text-lg text-slate-600 mb-6 font-medium">
                 Queremos elevar o padrão da presença digital no Brasil.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                 Construir sites que não parecem “templates”, não dependem de Elementor/WordPress, não quebram com atualizações e não decepcionam usuários.
              </p>
              <h4 className="font-bold text-slate-900 mb-4">Criamos para empresas que:</h4>
              <ul className="space-y-3">
                 {['buscam uma presença digital profissional', 'querem crescer com SEO estruturado', 'valorizam UX e tomada de decisão baseada em dados', 'precisam de tecnologia moderna e escalável'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                       <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                       <span className="text-slate-700">{item}</span>
                    </li>
                 ))}
              </ul>
           </div>

           <div className="bg-slate-50 p-8 rounded-3xl">
              <h2 className="text-3xl font-bold font-display mb-6">Nossa Equipe</h2>
              <p className="text-slate-600 mb-6">
                 Somos uma equipe experiente, formada por profissionais que vieram de:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                 <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                    <Layout className="w-5 h-5 text-primary-500 mb-2" />
                    <span className="text-sm font-bold text-slate-800">design gráfico e UI</span>
                 </div>
                 <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                    <Users className="w-5 h-5 text-primary-500 mb-2" />
                    <span className="text-sm font-bold text-slate-800">UX research e arquitetura</span>
                 </div>
                 <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                    <Search className="w-5 h-5 text-primary-500 mb-2" />
                    <span className="text-sm font-bold text-slate-800">SEO avançado</span>
                 </div>
                 <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                    <Code2 className="w-5 h-5 text-primary-500 mb-2" />
                    <span className="text-sm font-bold text-slate-800">front end moderno</span>
                 </div>
                 <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 sm:col-span-2">
                    <TrendingUp className="w-5 h-5 text-primary-500 mb-2" />
                    <span className="text-sm font-bold text-slate-800">data & analytics</span>
                 </div>
              </div>
              <p className="text-slate-600 italic border-l-4 border-primary-500 pl-4">
                 Enxuta, eficiente e altamente colaborativa. Cada projeto passa por revisões técnicas, análises estratégicas e validações de experiência.
              </p>
           </div>
        </div>

        {/* Metodologia */}
        <div className="mb-24">
           <h2 className="text-3xl font-bold font-display text-center mb-12">Nossa Metodologia</h2>
           <p className="text-center text-slate-600 max-w-2xl mx-auto mb-12">
              Um processo sólido, transparente e orientado a resultados.
           </p>
           
           <div className="relative">
              {/* Connector Line (Desktop) */}
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 z-0"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-7 gap-6 relative z-10">
                 {[
                    'Imersão e negócio',
                    'Pesquisa e UX',
                    'UI de alto padrão',
                    'Dev Moderno',
                    'SEO Técnico',
                    'Testes e Performance',
                    'Deploy e Monitoramento'
                 ].map((step, index) => (
                    <div key={index} className="flex flex-col items-center text-center">
                       <div className="w-10 h-10 rounded-full bg-white border-2 border-primary-500 text-primary-600 font-bold flex items-center justify-center mb-4 shadow-sm z-10">
                          {index + 1}
                       </div>
                       <h4 className="text-sm font-bold text-slate-900">{step}</h4>
                    </div>
                 ))}
              </div>
           </div>
        </div>

        {/* Why Not Wordpress */}
        <div className="bg-dark-900 rounded-3xl p-10 md:p-16 text-white mb-24 overflow-hidden relative">
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-600/10 rounded-full blur-3xl opacity-50 pointer-events-none -translate-y-1/2 translate-x-1/4"></div>
           
           <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                 <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">Por que não usamos WordPress ou Elementor</h2>
                 <p className="text-slate-400 mb-8 text-lg">
                    Sites construídos em tecnologia moderna entregam resultados que nenhum construtor drag and drop consegue alcançar.
                 </p>
                 <div className="space-y-4">
                    <p className="text-white font-bold mb-2">Porque nossos projetos exigem:</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                       <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg">
                          <Layers className="text-primary-400" size={20} /> mais performance
                       </div>
                       <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg">
                          <Shield className="text-primary-400" size={20} /> mais segurança
                       </div>
                       <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg">
                          <Code2 className="text-primary-400" size={20} /> mais controle
                       </div>
                       <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg">
                          <TrendingUp className="text-primary-400" size={20} /> mais escalabilidade
                       </div>
                       <div className="sm:col-span-2 flex items-center gap-3 bg-white/5 p-3 rounded-lg">
                          <Search className="text-primary-400" size={20} /> mais profundidade técnica em SEO
                       </div>
                    </div>
                 </div>
              </div>
              <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                 <h3 className="text-xl font-bold mb-6 font-display text-white">Por que as empresas escolhem a Userly</h3>
                 <ul className="space-y-3">
                    {[
                       'Stack moderna e profissional',
                       'Foco em UX de verdade',
                       'SEO técnico avançado',
                       'IA aplicada ao processo completo',
                       'Entrega de performance máxima',
                       'Processo claro e colaborativo',
                       'Código limpo e escalável',
                       'Experiência sólida desde 2023'
                    ].map((item, i) => (
                       <li key={i} className="flex items-center gap-3 text-slate-300">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                          {item}
                       </li>
                    ))}
                 </ul>
              </div>
           </div>
        </div>

        {/* Compromisso e CTA */}
        <div className="text-center max-w-3xl mx-auto">
           <h2 className="text-3xl font-bold font-display text-slate-900 mb-6">Nosso Compromisso</h2>
           <p className="text-xl text-slate-600 mb-8">
              Não vendemos “sites”. <br/>
              Vendemos crescimento, estratégia e transformação digital real.
           </p>
           <p className="text-slate-600 mb-10 leading-relaxed">
              Quando um projeto entra na Userly, ele recebe: <br/>
              <span className="font-bold text-primary-600">cuidado, profundidade, critério, excelência técnica e propósito.</span>
           </p>

           <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-primary-600 rounded-xl hover:bg-primary-700 transition-all shadow-lg shadow-primary-500/25 group font-display">
                Falar com a Userly
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
        </div>

      </div>
    </section>
  );
};