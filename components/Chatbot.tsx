import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Loader2, Sparkles } from 'lucide-react';
import { GoogleGenAI, Chat } from "@google/genai";

export const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'model'; text: string }[]>([
    { role: 'model', text: 'Olá! Sou a IA da Userly. Como posso ajudar você a escalar seu projeto hoje?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatSessionRef = useRef<Chat | null>(null);

  // Initialize Chat Session
  useEffect(() => {
    const initChat = () => {
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        
        const systemInstruction = `
          Você é o assistente virtual oficial da Userly, um estúdio de desenvolvimento web de alta performance.
          
          SUA PERSONA:
          - Profissional, amigável, entusiasta por tecnologia moderna e direto ao ponto.
          - Você prioriza respostas concisas (máximo 3 frases, a menos que peçam detalhes técnicos).
          - Seu objetivo final é tirar dúvidas e convencer o usuário a pedir um orçamento ou contato.

          O QUE A USERLY FAZ:
          1. Desenvolvimento de Sites Profissionais (Sites Institucionais, Landing Pages, Dashboards).
          2. UI/UX Design (Foco em conversão e usabilidade).
          3. SEO Técnico (Otimização para Google, Core Web Vitals).
          4. Parcerias White-label (Desenvolvimento para agências de publicidade).

          TECNOLOGIAS QUE USAMOS:
          - React, Next.js, TailwindCSS, TypeScript.
          - NÃO usamos WordPress, Elementor, Wix ou construtores visuais arrasta-e-solta. Explique que isso é para garantir performance, segurança e escalabilidade.

          DIFERENCIAIS:
          - Código limpo.
          - Carregamento ultrarrápido.
          - Design exclusivo (sem templates prontos).
          - IA integrada no processo de desenvolvimento.

          AÇÕES:
          - Se o usuário quiser um orçamento ou falar com humanos, direcione-o para preencher o formulário na seção de contato ou envie o link "#contact".
          - Se perguntarem preços, diga que depende da complexidade do projeto e sugira uma avaliação gratuita via contato.
        `;

        chatSessionRef.current = ai.chats.create({
          model: 'gemini-2.5-flash',
          config: {
            systemInstruction: systemInstruction,
            temperature: 0.7,
          },
        });
      } catch (error) {
        console.error("Failed to initialize AI", error);
      }
    };

    initChat();
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || !chatSessionRef.current) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const result = await chatSessionRef.current.sendMessage({ message: userMessage });
      const responseText = result.text;

      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Desculpe, tive um problema técnico momentâneo. Pode tentar novamente ou ir para a seção de contato?" }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60] font-sans">
      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-[90vw] sm:w-[400px] h-[500px] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 fade-in duration-300">
          
          {/* Header */}
          <div className="bg-dark-900 p-4 flex justify-between items-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-600/20 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>
            <div className="flex items-center gap-3 relative z-10">
              <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center border-2 border-primary-400/30">
                <Sparkles size={20} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold font-display text-base">Userly AI</h3>
                <p className="text-xs text-primary-200 flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  Online
                </p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white transition-colors relative z-10 p-1"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-grow overflow-y-auto p-4 space-y-4 bg-slate-50">
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.role === 'model' && (
                  <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <Bot size={16} className="text-primary-600" />
                  </div>
                )}
                
                <div 
                  className={`max-w-[80%] p-3.5 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-primary-600 text-white rounded-tr-none' 
                      : 'bg-white border border-slate-200 text-slate-700 rounded-tl-none shadow-sm'
                  }`}
                >
                  {msg.text.split('\n').map((line, i) => (
                    <p key={i} className={i > 0 ? 'mt-2' : ''}>
                        {line.includes('#contact') ? (
                            <>
                                {line.split('#contact')[0]}
                                <a href="#contact" onClick={() => setIsOpen(false)} className="underline font-bold hover:text-primary-300">
                                    formulário de contato
                                </a>
                                {line.split('#contact')[1]}
                            </>
                        ) : (
                            line
                        )}
                    </p>
                  ))}
                </div>

                {msg.role === 'user' && (
                  <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0 mt-1">
                    <User size={16} className="text-slate-500" />
                  </div>
                )}
              </div>
            ))}
            
            {isLoading && (
              <div className="flex gap-3 justify-start">
                <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                  <Bot size={16} className="text-primary-600" />
                </div>
                <div className="bg-white border border-slate-200 p-4 rounded-2xl rounded-tl-none shadow-sm flex items-center gap-2">
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-75"></div>
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-150"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-slate-100">
            <div className="relative flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Pergunte sobre tecnologias, serviços..."
                disabled={isLoading}
                className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl py-3 pl-4 pr-12 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all placeholder:text-slate-400"
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="absolute right-2 p-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isLoading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
              </button>
            </div>
            <p className="text-[10px] text-center text-slate-400 mt-2">
              A IA pode cometer erros. Verifique informações importantes.
            </p>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`group flex items-center justify-center w-14 h-14 rounded-full shadow-xl transition-all duration-300 hover:scale-105 ${
          isOpen ? 'bg-slate-200 text-slate-600 rotate-90' : 'bg-primary-600 text-white'
        }`}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={28} className="fill-current" />}
        
        {/* Status dot if closed - Changed to Green for 'Online' */}
        {!isOpen && (
           <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-4 w-4">
             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
             <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500 border-2 border-white"></span>
           </span>
        )}
      </button>
    </div>
  );
};