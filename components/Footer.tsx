import React from 'react';
import { Instagram, Linkedin, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-dark-900 text-white border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
               <img src="https://i.imgur.com/zT5ylxA.png" alt="Userly" className="h-10 w-auto object-contain" />
            </div>
            <p className="text-slate-400 text-sm mb-6">
              Desenvolvimento web de alta performance para negócios que não aceitam o básico.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          <div className="col-span-1">
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-slate-500 font-display">Serviços</h4>
            <ul className="space-y-2 text-slate-300">
              <li><a href="#" className="hover:text-primary-400 transition-colors">Desenvolvimento Web</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">UI/UX Design</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Otimização SEO</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">White-label</a></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-slate-500 font-display">Empresa</h4>
            <ul className="space-y-2 text-slate-300">
              <li><a href="#" className="hover:text-primary-400 transition-colors">Sobre</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Carreiras</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Contato</a></li>
            </ul>
          </div>

          <div className="col-span-1">
             <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-slate-500 font-display">Newsletter</h4>
             <p className="text-xs text-slate-400 mb-4">Receba dicas de performance web e UX.</p>
             <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
               <input 
                  type="email" 
                  placeholder="Seu e-mail profissional" 
                  className="bg-dark-800 border border-slate-700 text-white px-4 py-2 rounded-lg text-sm focus:outline-none focus:border-primary-500"
               />
               <button type="submit" className="bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors font-display">
                 Inscrever
               </button>
             </form>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Userly. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 text-sm text-slate-500">
            <a href="#" className="hover:text-slate-300">Privacidade</a>
            <a href="#" className="hover:text-slate-300">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};