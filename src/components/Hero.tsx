import React from "react";
import { ArrowRight, TrendingUp, Compass, Star, ArrowDown } from "lucide-react";

interface HeroProps {
  onExploreClick: () => void;
  onFeaturedClick: () => void;
}

export default function Hero({ onExploreClick, onFeaturedClick }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-white pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-36">
      
      {/* Background Abstract Geometric SVG Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.04] select-none">
        <svg
          className="w-full h-full"
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" className="text-brand-navy" />
          {/* Chart-like diagnostic line path */}
          <path
            d="M 100,500 L 250,450 L 400,480 L 550,380 L 700,410 L 850,290 L 1000,320 L 1150,180 L 1300,220 L 1500,50"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            className="text-brand-navy"
            strokeDasharray="5,5"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            {/* Editorial Header Pill */}
            <div className="inline-flex items-center space-x-2 bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-full self-start">
              <span className="flex h-2 w-2 rounded-full bg-gold animate-pulse" />
              <span className="text-[11px] font-bold text-slate-600 tracking-wider uppercase font-sans">
                Edição Semanal de Finanças & Investimentos
              </span>
            </div>

            {/* Main Catchy Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-brand-navy font-bold leading-[1.1] tracking-tight">
              Seu dinheiro <br className="hidden sm:inline" />
              trabalhando por <span className="text-gold italic font-normal">você</span>.
            </h1>

            {/* Subheading text */}
            <p className="font-sans text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
              Análises independentes, estratégias de alocação de curto a longo prazo e educação financeira definitiva para quem busca construir riqueza de verdade.
            </p>

            {/* Actions Grid */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-2">
              <button
                onClick={onExploreClick}
                className="bg-brand-navy hover:bg-brand-navy-light text-white text-sm font-bold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                id="hero-explore-cta"
              >
                <Compass className="h-4 w-4 text-gold" />
                Explorar Artigos
                <ArrowRight className="h-4 w-4" />
              </button>
              
              <button
                onClick={onFeaturedClick}
                className="bg-transparent hover:bg-slate-50 text-brand-navy border border-slate-200 hover:border-brand-navy text-sm font-bold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                id="hero-featured-cta"
              >
                <Star className="h-4 w-4 text-gold fill-gold" />
                Ver Destaque da Semana
              </button>
            </div>

            {/* Quick stats tags row */}
            <div className="pt-6 sm:pt-8 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div>
                <span className="block font-mono text-2xl font-bold text-brand-navy">100%</span>
                <span className="text-xs text-slate-400">Conteúdo Independente</span>
              </div>
              <div>
                <span className="block font-mono text-2xl font-bold text-brand-navy">12k+</span>
                <span className="text-xs text-slate-400">Leitores Semanais</span>
              </div>
              <div className="col-span-2 sm:col-span-1 border-t sm:border-t-0 border-slate-50 pt-2 sm:pt-0">
                <span className="block font-mono text-2xl font-bold text-brand-navy">CDI+6%</span>
                <span className="text-xs text-slate-400">Meta Média de Retorno</span>
              </div>
            </div>
          </div>

          {/* Right Column (Visual Composite Component) */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0 flex justify-center">
            
            {/* Visual Frame Wrapper with Background shadows */}
            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-none aspect-[4/3] sm:aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-50">
              <img
                src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1400"
                alt="Finanças, cotações e gráficos em uma metrópole"
                className="w-full h-full object-cover grayscale-[15%] brightness-95 hover:scale-105 transition-transform duration-700 font-sans"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent pointer-events-none" />
              
              {/* Overlay credit corner element */}
              <div className="absolute bottom-4 left-4 bg-brand-navy/30 backdrop-blur-sm px-2.5 py-1 rounded text-[10px] text-white/80 font-mono tracking-wider">
                PORTFÓLIO ESTRATÉGICO B3
              </div>
            </div>

            {/* Floating Card: Fake Portfolio Return (+18,4% ao ano) */}
            <div
              className="float-card absolute -top-6 sm:-top-8 -left-2 sm:-left-6 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-xl shadow-xl border border-slate-100 max-w-xs flex flex-col space-y-2 z-20"
              id="hero-floating-card-return"
            >
              <div className="flex items-center justify-between space-x-8">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider font-sans">
                  Retorno Portfólio
                </span>
                <span className="bg-emerald-50 text-emerald-700 font-mono text-[10px] font-bold px-1.5 py-0.5 rounded flex items-center gap-0.5">
                  <TrendingUp className="h-3 w-3" />
                  +18.4% a.a.
                </span>
              </div>
              
              <div className="flex items-baseline space-x-1.5 pt-0.5">
                <span className="font-mono text-xl sm:text-2xl font-black text-brand-navy">R$ 142.850</span>
                <span className="text-[10px] text-slate-400">CDI + 8%</span>
              </div>

              {/* Dynamic Sparkline SVG Chart */}
              <div className="h-10 w-full pt-1.5">
                <svg className="w-full h-full" viewBox="0 0 100 30" width="100%" height="100%">
                  <defs>
                    <linearGradient id="gradient-area" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#C9A84C" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#C9A84C" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  {/* Fill area below chart */}
                  <path
                    d="M0,28 L5,27 L15,22 L25,25 L35,16 L45,18 L55,10 L65,14 L75,8 L85,11 L95,2 L100,2 L100,30 L0,30 Z"
                    fill="url(#gradient-area)"
                  />
                  {/* Grid helping lines */}
                  <line x1="0" y1="15" x2="100" y2="15" stroke="#f1f5f9" strokeDasharray="2,2" />
                  {/* Glowing main path */}
                  <path
                    d="M0,28 L5,27 L15,22 L25,25 L35,16 L45,18 L55,10 L65,14 L75,8 L85,11 L95,2"
                    fill="none"
                    stroke="#C9A84C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  {/* Circular pulse marker at high mark */}
                  <circle cx="95" cy="2" r="2.5" fill="#0A1628" stroke="#C9A84C" strokeWidth="1" />
                </svg>
              </div>

              <div className="flex justify-between items-center text-[9px] text-slate-400 font-mono pt-1">
                <span>Mai 2025</span>
                <span>Mai 2026</span>
              </div>
            </div>

            {/* Extra abstract mini widget behind elements */}
            <div className="hidden sm:flex absolute -right-6 -bottom-6 bg-brand-navy text-white px-5 py-4 rounded-xl shadow-lg border border-white/10 flex-col space-y-1 z-20">
              <span className="text-[9px] text-slate-400 uppercase tracking-wide">Fundo Conservador LCI</span>
              <div className="flex items-center space-x-1.5 font-mono text-sm">
                <span className="font-bold text-gold">102% do CDI</span>
                <span className="text-[10px] text-emerald-400">★ Isento de IR</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
