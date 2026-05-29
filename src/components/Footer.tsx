import React from "react";
import { Circle, Instagram, Youtube, Twitter, Linkedin, ArrowUp, ChevronRight, Check } from "lucide-react";

interface FooterProps {
  onNavClick: (category: string | null) => void;
  onScrollToTop: () => void;
  onOpenNewsletter: () => void;
  onScrollToAbout: () => void;
}

export default function Footer({
  onNavClick,
  onScrollToTop,
  onOpenNewsletter,
  onScrollToAbout
}: FooterProps) {
  
  const handleTemaClick = (category: string) => {
    onNavClick(category);
    const element = document.getElementById("latest-articles-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSupportLinkClick = (anchorId: string) => {
    const element = document.getElementById(anchorId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else if (anchorId === "about-section") {
      onScrollToAbout();
    }
  };

  return (
    <footer className="bg-brand-navy border-t-4 border-gold text-slate-300 pt-16 pb-8 select-none z-30" id="footer-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core Link and Logo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-white/5 text-left">
          
          {/* Column 1: Branding block */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            <div className="flex items-center cursor-pointer" onClick={onScrollToTop}>
              <div className="w-1.5 h-6 bg-gold mr-2.5 rounded-full" />
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white">
                Capital<span className="text-gold font-normal"> Inteligente</span>
              </span>
            </div>
            
            <p className="font-sans text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed font-light">
              Construindo riqueza real com conhecimento, independência analítica e transparência. Descomplicamos o mercado financeiro para orientar sua jornada com segurança.
            </p>
            
            {/* Realized compliance micro badge */}
            <div className="flex items-center space-x-2 text-[10px] text-slate-500 font-mono">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C9A84C]" />
              <span>Conteúdo Educacional CVM e APIMEC</span>
            </div>
          </div>

          {/* Column 2: Blog and Category Anchors */}
          <div className="lg:col-span-2 flex flex-col space-y-3.5">
            <h4 className="text-xs uppercase font-extrabold tracking-wider text-white font-sans">
              Blog
            </h4>
            <ul className="space-y-2 text-xs font-medium text-slate-400">
              <li>
                <button
                  onClick={() => {
                    onNavClick(null);
                    onScrollToTop();
                  }}
                  className="hover:text-gold flex items-center transition-colors"
                >
                  <ChevronRight className="h-3 w-3 mr-1 text-gold" />
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleTemaClick("RENDA FIXA")}
                  className="hover:text-gold flex items-center transition-colors"
                >
                  <ChevronRight className="h-3 w-3 mr-1 text-gold" />
                  Artigos
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleTemaClick("AÇÕES")}
                  className="hover:text-gold flex items-center transition-colors"
                >
                  <ChevronRight className="h-3 w-3 mr-1 text-gold" />
                  Categorias
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenNewsletter}
                  className="hover:text-gold flex items-center transition-colors"
                >
                  <ChevronRight className="h-3 w-3 mr-1 text-gold" />
                  Newsletter Grátis
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Topics themes */}
          <div className="lg:col-span-2 flex flex-col space-y-3.5">
            <h4 className="text-xs uppercase font-extrabold tracking-wider text-white font-sans">
              Temas de Estudo
            </h4>
            <ul className="space-y-2 text-xs font-medium text-slate-400">
              <li>
                <button
                  onClick={() => handleTemaClick("RENDA FIXA")}
                  className="hover:text-gold flex items-center transition-colors"
                >
                  <span className="h-1 w-1 bg-gold rounded-full mr-2" />
                  Renda Fixa IPCA+
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleTemaClick("AÇÕES")}
                  className="hover:text-gold flex items-center transition-colors"
                >
                  <span className="h-1 w-1 bg-gold rounded-full mr-2" />
                  Ações e Dividendos
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleTemaClick("FUNDOS")}
                  className="hover:text-gold flex items-center transition-colors"
                >
                  <span className="h-1 w-1 bg-gold rounded-full mr-2" />
                  Fundos Imobiliários
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleTemaClick("MERCADOS")}
                  className="hover:text-gold flex items-center transition-colors"
                >
                  <span className="h-1 w-1 bg-gold rounded-full mr-2" />
                  Moedas & Câmbio
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Support policies */}
          <div className="lg:col-span-2 flex flex-col space-y-3.5">
            <h4 className="text-xs uppercase font-extrabold tracking-wider text-white font-sans">
              Suporte & Legal
            </h4>
            <ul className="space-y-2 text-xs font-medium text-slate-400">
              <li>
                <button
                  onClick={() => handleSupportLinkClick("about-section")}
                  className="hover:text-gold flex items-center transition-colors"
                >
                  <Circle className="h-1.5 w-1.5 mr-2 text-gold fill-gold" />
                  Quem Somos
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSupportLinkClick("about-section")}
                  className="hover:text-gold flex items-center transition-colors"
                >
                  <Circle className="h-1.5 w-1.5 mr-2 text-gold fill-gold" />
                  Fale com a Equipe
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenNewsletter}
                  className="hover:text-gold flex items-center transition-colors"
                >
                  <Circle className="h-1.5 w-1.5 mr-2 text-gold fill-gold" />
                  Políticas de Dados
                </button>
              </li>
              <li>
                <button
                  onClick={onScrollToTop}
                  className="hover:text-gold flex items-center transition-colors"
                >
                  <Circle className="h-1.5 w-1.5 mr-2 text-gold fill-gold" />
                  Termos de Uso
                </button>
              </li>
            </ul>
          </div>

          {/* Column 5: Social Profiles layout */}
          <div className="lg:col-span-2 flex flex-col space-y-4">
            <h4 className="text-xs uppercase font-extrabold tracking-wider text-white font-sans">
              Redes Sociais
            </h4>
            
            <div className="flex items-center space-x-2.5">
              <a
                href="#"
                className="w-9 h-9 bg-white/5 hover:bg-[#C9A84C]/20 border border-white/10 hover:border-gold rounded-lg flex items-center justify-center text-white hover:text-gold transition-all duration-300 transform hover:-translate-y-0.5"
                title="Siga no Instagram"
              >
                <Instagram className="h-4.5 w-4.5" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-white/5 hover:bg-[#C9A84C]/20 border border-white/10 hover:border-gold rounded-lg flex items-center justify-center text-white hover:text-gold transition-all duration-300 transform hover:-translate-y-0.5"
                title="Inscreva-se no Youtube"
              >
                <Youtube className="h-4.5 w-4.5" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-white/5 hover:bg-[#C9A84C]/20 border border-white/10 hover:border-gold rounded-lg flex items-center justify-center text-white hover:text-gold transition-all duration-300 transform hover:-translate-y-0.5"
                title="Acompanhe no Twitter"
              >
                <Twitter className="h-4.5 w-4.5" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-white/5 hover:bg-[#C9A84C]/20 border border-white/10 hover:border-gold rounded-lg flex items-center justify-center text-white hover:text-gold transition-all duration-300 transform hover:-translate-y-0.5"
                title="Conecte-se no LinkedIn"
              >
                <Linkedin className="h-4.5 w-4.5" />
              </a>
            </div>

            {/* Newsletter subscriber small count visual inside footer */}
            <div className="bg-white/5 border border-white/5 px-3 py-2.5 rounded-lg flex items-center space-x-2 text-[10px] text-slate-400">
              <Check className="h-3.5 w-3.5 text-[#C9A84C] flex-shrink-0" />
              <span>Participe de 12k+ leitores ativos</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar Segment with Back to Top button */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 gap-4 font-sans text-xs text-slate-500 text-center sm:text-left">
          
          <div className="space-y-1">
            <span>© 2026 Capital Inteligente. Todos os direitos reservados.</span>
            <div className="text-[10px] text-slate-600 block">
              CNPJs vinculados às pesquisas: 11.238.902/0001-44 e parceiros regulados autorizados.
            </div>
          </div>

          <button
            onClick={onScrollToTop}
            className="group flex items-center gap-1.5 bg-white/5 hover:bg-gold px-4 py-2.5 rounded-lg text-white hover:text-brand-navy border border-white/10 hover:border-gold transition-all duration-300 text-xs font-semibold shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
            aria-label="Voltar para o topo"
            id="footer-back-to-top"
          >
            <span>Voltar ao Topo</span>
            <ArrowUp className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-1" />
          </button>
        </div>

      </div>
    </footer>
  );
}
