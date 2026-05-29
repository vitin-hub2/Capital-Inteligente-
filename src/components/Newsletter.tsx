import React, { useState } from "react";
import { Mail, CheckCircle, Sparkles, AlertCircle, BookmarkCheck, Heart } from "lucide-react";

interface NewsletterProps {
  onSubscribeSuccess?: (email: string) => void;
}

export default function Newsletter({ onSubscribeSuccess }: NewsletterProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim()) {
      setStatus("error");
      setErrorMessage("Por favor, preencha o seu nome.");
      return;
    }

    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setErrorMessage("Por favor, insira um endereço de e-mail válido.");
      return;
    }

    setStatus("loading");
    
    // Simulate a secure subscription API post
    setTimeout(() => {
      setStatus("success");
      if (onSubscribeSuccess) {
        onSubscribeSuccess(email);
      }
    }, 1200);
  };

  return (
    <section className="bg-[#F5F7FA] py-16 md:py-24 border-t border-slate-100" id="newsletter-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core Main Wrapper with White elevated Panel */}
        <div className="bg-white rounded-2xl p-8 sm:p-12 md:p-16 shadow-xl border border-slate-100 relative overflow-hidden text-center">
          
          {/* Subtle background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

          {status === "success" ? (
            /* Success confirmation container state */
            <div className="flex flex-col items-center justify-center space-y-6 py-6 animate-fade-in text-left sm:text-center max-w-lg mx-auto">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center shadow-inner">
                <CheckCircle className="h-10 w-10" />
              </div>
              
              <div className="space-y-2">
                <h3 className="font-serif text-2xl sm:text-3xl text-brand-navy font-bold">
                  Inscrição Confirmada!
                </h3>
                <p className="text-sm text-[#C9A84C] font-mono uppercase tracking-wider font-bold">
                  Bem-vindo ao Clube Capital Inteligente, {name}!
                </p>
                <p className="text-sm text-slate-500 leading-relaxed pt-2">
                  Enviamos uma mensagem de confirmação para <strong className="text-brand-navy font-medium">{email}</strong>. Prepare-se para receber análises cirúrgicas, hacks de finanças pessoais e insights exclusivos todas as sextas-feiras diretamente na sua caixa de entrada.
                </p>
              </div>

              {/* Gift checklist box and content */}
              <div className="w-full bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-3 mt-4 text-xs text-slate-600">
                <div className="font-bold text-brand-navy flex items-center gap-1.5 uppercase tracking-wider text-[10px]">
                  <Sparkles className="h-3.5 w-3.5 text-gold" />
                  Próximos passos recomendados
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500">✓</span>
                    <span>Adicione <strong>news@capitalinteligente.com</strong> aos contatos confiáveis para evitar a pasta de spam.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500">✓</span>
                    <span>Siga-nos nas redes para cotações diárias consolidadas.</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => {
                  setStatus("idle");
                  setEmail("");
                  setName("");
                }}
                className="text-xs font-bold text-brand-navy hover:text-gold flex items-center gap-1 mt-4 transition-colors"
              >
                Cadastrar outro e-mail
              </button>
            </div>
          ) : (
            /* Standard input capture form */
            <div className="flex flex-col items-center">
              
              {/* Giant gold envelope icon container */}
              <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mb-6 shadow-sm">
                <Mail className="h-8 w-8 text-gold" id="newsletter-icon" />
              </div>

              {/* Title and Subtitle descriptors */}
              <div className="space-y-3 max-w-2xl mx-auto mb-8">
                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-brand-navy font-bold tracking-tight">
                  Inteligência financeira toda semana, de graça.
                </h3>
                <p className="text-sm sm:text-base text-slate-500 max-w-xl mx-auto leading-relaxed">
                  Mais de 12.000 investidores recebem nossa newsletter semanal com análises exclusivas, alertas estratégicos de mercado e oportunidades selecionadas de investimentos.
                </p>
              </div>

              {/* Submission Form Grid */}
              <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-3">
                
                {/* Inputs layout container */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="text"
                    required
                    disabled={status === "loading"}
                    placeholder="Seu primeiro nome"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (status === "error") setStatus("idle");
                    }}
                    className="flex-1 text-sm bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-gold focus:bg-white text-slate-800 placeholder-slate-400"
                  />
                  <input
                    type="email"
                    required
                    disabled={status === "loading"}
                    placeholder="Seu melhor e-mail"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (status === "error") setStatus("idle");
                    }}
                    className="flex-1 text-sm bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-gold focus:bg-white text-slate-800 placeholder-slate-400"
                  />
                </div>

                {/* Validation message line */}
                {status === "error" && (
                  <div className="text-xs text-red-600 font-medium flex items-center justify-center gap-1.5 py-1">
                    <AlertCircle className="h-3.5 w-3.5" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Submit button Trigger */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-gold hover:bg-gold-hover text-brand-navy text-sm font-bold py-3.5 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center mt-2 disabled:opacity-75"
                  id="newsletter-subscribe-button"
                >
                  {status === "loading" ? (
                    <span className="flex items-center gap-2">
                      <span className="h-4 w-4 border-2 border-brand-navy border-t-transparent rounded-full animate-spin" />
                      Cadastrando...
                    </span>
                  ) : (
                    "Quero Receber de Graça"
                  )}
                </button>
              </form>

              {/* Trust badges footer row */}
              <div className="text-[11px] sm:text-xs text-slate-400 flex items-center justify-center flex-wrap gap-x-4 gap-y-2 pt-5 border-t border-slate-50 mt-8 w-full">
                <span className="flex items-center gap-1 font-medium text-slate-500">
                  <span className="text-gold">✓</span> Sem spam
                </span>
                <span className="flex items-center gap-1 font-medium text-slate-500">
                  <span className="text-gold">✓</span> Cancede fácil a qualquer momento
                </span>
                <span className="flex items-center gap-1 font-medium text-slate-500">
                  <span className="text-gold">✓</span> Conteúdo 100% exclusivo
                </span>
              </div>

              {/* Social Proof Statistics Area */}
              <div className="grid grid-cols-3 gap-4 md:gap-8 pt-8 border-t border-slate-100 mt-8 w-full max-w-xl text-center">
                <div className="space-y-0.5">
                  <span className="block font-serif text-lg md:text-xl font-bold text-brand-navy">12.400+</span>
                  <span className="block text-[10px] text-slate-400 uppercase tracking-wider">Assinantes</span>
                </div>
                <div className="space-y-0.5">
                  <span className="block font-serif text-lg md:text-xl font-bold text-brand-navy">4.9⭐</span>
                  <span className="block text-[10px] text-slate-400 uppercase tracking-wider">Avaliação Média</span>
                </div>
                <div className="space-y-0.5">
                  <span className="block font-serif text-lg md:text-xl font-bold text-brand-navy">Sexta às 8h</span>
                  <span className="block text-[10px] text-slate-400 uppercase tracking-wider">Publicado Regularmente</span>
                </div>
              </div>

            </div>
          )}

        </div>
      </div>
    </section>
  );
}
