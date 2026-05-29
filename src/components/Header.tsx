import React, { useState, useEffect } from "react";
import { Menu, X, Mail, Search, Sparkles, TrendingUp, BookOpen, User, Phone } from "lucide-react";
import { Article } from "../types";

interface HeaderProps {
  onSearch: (q: string) => void;
  onFilterCategory: (category: string | null) => void;
  activeCategory: string | null;
  onOpenNewsletter: () => void;
  onScrollToAbout: () => void;
  allArticles: Article[];
  onOpenArticle: (article: Article) => void;
}

export default function Header({
  onSearch,
  onFilterCategory,
  activeCategory,
  onOpenNewsletter,
  onScrollToAbout,
  allArticles,
  onOpenArticle
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [searchResults, setSearchResults] = useState<Article[]>([]);

  // Track page scroll to toggle sticky glassmorphism style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update real-time search suggestions
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      onSearch("");
      return;
    }
    const filtered = allArticles.filter(
      (a) =>
        a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        a.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        a.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filtered.slice(0, 5));
    onSearch(searchQuery);
  }, [searchQuery, allArticles]);

  const handleNavClick = (category: string | null, sectionId?: string) => {
    onFilterCategory(category);
    setIsMobileMenuOpen(false);
    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-brand-navy/95 backdrop-blur-md shadow-lg border-b border-white/10 py-3"
            : "bg-white/95 md:bg-white/80 backdrop-blur-sm border-b border-slate-100 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Logo and Icon */}
            <div
              onClick={() => handleNavClick(null)}
              className="flex items-center cursor-pointer group"
              id="header-logo"
            >
              <div className="flex items-center mr-1">
                <span className="w-[3px] h-6 bg-gold mr-[2px] rounded-full transition-transform duration-300 group-hover:scale-y-125"></span>
                <span className="w-[5px] h-4 bg-gold mr-[3px] rounded-full transition-transform duration-300 group-hover:scale-y-110"></span>
                <span className="w-[3px] h-5 bg-gold mr-2.5 rounded-full transition-transform duration-300 group-hover:scale-y-120"></span>
              </div>
              <span
                className={`font-serif text-xl sm:text-2xl font-bold tracking-tight transition-colors duration-300 ${
                  isScrolled ? "text-white" : "text-brand-navy"
                }`}
              >
                Capital
                <span className="text-gold font-normal"> Inteligente</span>
                <span className="text-gold">.</span>
              </span>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <button
                onClick={() => handleNavClick(null)}
                className={`text-sm font-medium transition-colors hover:text-gold ${
                  activeCategory === null
                    ? "text-gold underline underline-offset-8 decoration-2"
                    : isScrolled
                    ? "text-slate-300"
                    : "text-slate-700 hover:text-brand-navy"
                }`}
              >
                Início
              </button>
              
              <button
                onClick={() => handleNavClick("AÇÕES", "latest-articles-section")}
                className={`text-sm font-medium transition-colors hover:text-gold flex items-center gap-1 ${
                  activeCategory === "AÇÕES" || activeCategory === "FUNDOS"
                    ? "text-gold underline underline-offset-8 decoration-2"
                    : isScrolled
                    ? "text-slate-300"
                    : "text-slate-700 hover:text-brand-navy"
                }`}
              >
                Investimentos
              </button>

              <button
                onClick={() => handleNavClick("EDUCAÇÃO", "latest-articles-section")}
                className={`text-sm font-medium transition-colors hover:text-gold ${
                  activeCategory === "EDUCAÇÃO"
                    ? "text-gold underline underline-offset-8 decoration-2"
                    : isScrolled
                    ? "text-slate-300"
                    : "text-slate-700 hover:text-brand-navy"
                }`}
              >
                Educação Financeira
              </button>

              <button
                onClick={() => handleNavClick("MERCADOS", "latest-articles-section")}
                className={`text-sm font-medium transition-colors hover:text-gold ${
                  activeCategory === "MERCADOS"
                    ? "text-gold underline underline-offset-8 decoration-2"
                    : isScrolled
                    ? "text-slate-300"
                    : "text-slate-700 hover:text-brand-navy"
                }`}
              >
                Mercados
              </button>

              <button
                onClick={onScrollToAbout}
                className={`text-sm font-medium transition-colors hover:text-gold ${
                  isScrolled ? "text-slate-300" : "text-slate-700 hover:text-brand-navy"
                }`}
              >
                Sobre
              </button>
            </nav>

            {/* Search Field and Action Buttons */}
            <div className="flex items-center space-x-2 md:space-x-4 flex-1 max-w-xs md:max-w-sm justify-end">
              {/* Search Container */}
              <div className="relative w-full hidden sm:block">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <Search className={`h-4 w-4 ${isScrolled ? "text-slate-400" : "text-slate-500"}`} />
                </div>
                <input
                  type="text"
                  placeholder="Pesquisar artigos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                  className={`w-full text-xs pl-9 pr-4 py-2 rounded-full border transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-gold ${
                    isScrolled
                      ? "bg-white/10 border-white/10 text-white placeholder-slate-400 focus:bg-white/15"
                      : "bg-slate-50 border-slate-200 text-brand-navy placeholder-slate-500 focus:bg-white focus:border-gold"
                  }`}
                />

                {/* Search suggestion popover */}
                {isSearchFocused && searchResults.length > 0 && (
                  <div className="absolute right-0 left-0 mt-2 bg-white border border-slate-100 shadow-xl rounded-lg overflow-hidden text-slate-800 text-left z-50">
                    <div className="p-2 border-b border-slate-50 text-[10px] uppercase font-bold tracking-wider text-slate-400 flex items-center justify-between">
                      <span>Sugestões Encontradas</span>
                      <Sparkles className="h-3 w-3 text-gold" />
                    </div>
                    {searchResults.map((article) => (
                      <button
                        key={article.id}
                        onMouseDown={() => {
                          onOpenArticle(article);
                          setSearchQuery("");
                        }}
                        className="w-full text-left p-3 hover:bg-slate-50 transition-colors flex flex-col border-b border-slate-50 last:border-b-0"
                      >
                        <span className="text-[10px] font-bold text-gold tracking-wider mb-0.5">
                          {article.category}
                        </span>
                        <span className="text-xs font-semibold text-brand-navy line-clamp-1">
                          {article.title}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Newsletter Call-to-Action */}
              <button
                onClick={onOpenNewsletter}
                className="bg-gold hover:bg-gold-hover text-brand-navy text-[11px] sm:text-xs font-bold px-3 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all duration-300 flex items-center gap-1.5 shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
                id="header-newsletter-cta"
              >
                <Mail className="h-3.5 w-3.5" />
                <span className="hidden xs:inline">Assinar Newsletter</span>
                <span className="xs:hidden">Newsletter</span>
              </button>

              {/* Mobile menu trigger */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-1.5 rounded-md md:hidden ${
                  isScrolled ? "text-white" : "text-brand-navy"
                }`}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Floating Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 right-0 h-0.5 bg-slate-100 z-50">
        <div
          className="h-full bg-gold transition-all duration-75"
          style={{
            width: `${
              typeof window !== "undefined"
                ? (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
                : 0
            }%`,
          }}
        />
      </div>

      {/* Mobile Drawer (Overlay) */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex justify-end">
          {/* Backdrop screen split */}
          <div
            className="fixed inset-0 bg-brand-navy/60 backdrop-blur-xs transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Core Menu Panel */}
          <div className="relative w-80 max-w-full bg-white h-full shadow-2xl z-50 flex flex-col justify-between p-6 transform transition-transform duration-300 ease-out animate-slide-in">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                <div className="flex items-center">
                  <div className="w-1.5 h-6 bg-gold mr-2.5 rounded-full" />
                  <span className="font-serif text-lg font-bold text-brand-navy">
                    Capital<span className="text-gold font-normal"> Inteligente</span>
                  </span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1.5 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-500"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Mobile Search field */}
              <div className="mt-5 relative">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-slate-400" />
                </div>
                <input
                  type="text"
                  placeholder="Buscar artigos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full text-xs pl-9 pr-4 py-2 bg-slate-50 border border-slate-100 rounded-lg text-slate-800 placeholder-slate-400"
                />
              </div>

              {/* Mobile navigation items list */}
              <div className="mt-6 flex flex-col space-y-4">
                <button
                  onClick={() => handleNavClick(null)}
                  className={`text-left text-sm font-semibold p-2.5 rounded-lg flex items-center gap-3 transition-colors ${
                    activeCategory === null
                      ? "bg-slate-50 text-gold"
                      : "text-slate-800 hover:bg-slate-50"
                  }`}
                >
                  <TrendingUp className="h-4 w-4 text-slate-400" />
                  Início
                </button>

                <button
                  onClick={() => handleNavClick("AÇÕES", "latest-articles-section")}
                  className={`text-left text-sm font-semibold p-2.5 rounded-lg flex items-center gap-3 transition-colors ${
                    activeCategory === "AÇÕES" || activeCategory === "FUNDOS"
                      ? "bg-slate-50 text-gold"
                      : "text-slate-800 hover:bg-slate-50"
                  }`}
                >
                  <TrendingUp className="h-4 w-4 text-slate-400" />
                  Investimentos (Ações / FIIs)
                </button>

                <button
                  onClick={() => handleNavClick("EDUCAÇÃO", "latest-articles-section")}
                  className={`text-left text-sm font-semibold p-2.5 rounded-lg flex items-center gap-3 transition-colors ${
                    activeCategory === "EDUCAÇÃO"
                      ? "bg-slate-50 text-gold"
                      : "text-slate-800 hover:bg-slate-50"
                  }`}
                >
                  <BookOpen className="h-4 w-4 text-slate-400" />
                  Educação Financeira
                </button>

                <button
                  onClick={() => handleNavClick("MERCADOS", "latest-articles-section")}
                  className={`text-left text-sm font-semibold p-2.5 rounded-lg flex items-center gap-3 transition-colors ${
                    activeCategory === "MERCADOS"
                      ? "bg-slate-50 text-gold"
                      : "text-slate-800 hover:bg-slate-50"
                  }`}
                >
                  <TrendingUp className="h-4 w-4 text-slate-400" />
                  Mercados Financeiros
                </button>

                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onScrollToAbout();
                  }}
                  className="text-left text-sm font-semibold p-2.5 rounded-lg flex items-center gap-3 text-slate-800 hover:bg-slate-50"
                >
                  <User className="h-4 w-4 text-slate-400" />
                  Sobre Editorial
                </button>
              </div>
            </div>

            {/* Bottom info banner */}
            <div className="pt-6 border-t border-slate-100 flex flex-col space-y-3">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenNewsletter();
                }}
                className="w-full bg-gold text-brand-navy font-bold text-center py-3 rounded-lg flex items-center justify-center gap-2 shadow-sm"
              >
                <Mail className="h-4 w-4" />
                Assinar Newsletter
              </button>
              <div className="text-center text-[11px] text-slate-400 font-serif">
                © 2026 Capital Inteligente
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
