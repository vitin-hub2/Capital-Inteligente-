import React, { useState } from "react";
import { FEATURED_ARTICLE, ARTICLES, TICKER_ITEMS } from "./data";
import { Article } from "./types";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MarketTicker from "./components/MarketTicker";
import FeaturedArticle from "./components/FeaturedArticle";
import LatestArticles from "./components/LatestArticles";
import Newsletter from "./components/Newsletter";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import ArticleModal from "./components/ArticleModal";
import { Sparkles, Mail, CheckCircle, X } from "lucide-react";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [showNotification, setShowNotification] = useState(false);

  const handleSearch = (q: string) => {
    setSearchQuery(q);
  };

  const handleFilterCategory = (category: string | null) => {
    setSelectedCategory(category);
  };

  const handleOpenArticle = (article: Article) => {
    setSelectedArticle(article);
  };

  const handleOpenNewsletterModal = () => {
    setIsNewsletterOpen(true);
  };

  const handleSubscribeSuccess = (email: string) => {
    setNewsletterEmail(email);
    setIsNewsletterOpen(false);
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 5000);
  };

  const scrollToAbout = () => {
    const element = document.getElementById("about-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToArticles = () => {
    const element = document.getElementById("latest-articles-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 flex flex-col justify-between selection:bg-gold/30 selection:text-brand-navy">
      
      {/* 1. Navbar */}
      <Header
        onSearch={handleSearch}
        onFilterCategory={handleFilterCategory}
        activeCategory={selectedCategory}
        onOpenNewsletter={handleOpenNewsletterModal}
        onScrollToAbout={scrollToAbout}
        allArticles={ARTICLES}
        onOpenArticle={handleOpenArticle}
      />

      {/* 2. Hero Section */}
      <Hero
        onExploreClick={scrollToArticles}
        onFeaturedClick={() => handleOpenArticle(FEATURED_ARTICLE)}
      />

      {/* 3. Market Ticker strip */}
      <MarketTicker tickerItems={TICKER_ITEMS} />

      {/* 4. Featured Article Banner */}
      <FeaturedArticle
        article={FEATURED_ARTICLE}
        onReadArticle={handleOpenArticle}
      />

      {/* 5. Latest Articles Grid with search and category filter */}
      <LatestArticles
        articles={ARTICLES}
        selectedCategory={selectedCategory}
        onSelectCategory={handleFilterCategory}
        onReadArticle={handleOpenArticle}
        searchFilter={searchQuery}
      />

      {/* 6. Centered Newsletter Block */}
      <Newsletter onSubscribeSuccess={handleSubscribeSuccess} />

      {/* 7. About and Editorial detail column */}
      <AboutSection />

      {/* 8. Footer Block */}
      <Footer
        onNavClick={handleFilterCategory}
        onScrollToTop={scrollToTop}
        onOpenNewsletter={handleOpenNewsletterModal}
        onScrollToAbout={scrollToAbout}
      />

      {/* 9. Render detailed Article Portal reading Modal */}
      <ArticleModal
        article={selectedArticle}
        isOpen={selectedArticle !== null}
        onClose={() => setSelectedArticle(null)}
      />

      {/* Elegant Independent Newsletter Registration POPUP Modal */}
      {isNewsletterOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            
            <div
              className="fixed inset-0 bg-brand-navy/60 backdrop-blur-xs transition-opacity"
              onClick={() => setIsNewsletterOpen(false)}
            />

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            <div className="inline-block align-middle bg-white rounded-2xl text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:align-middle sm:max-w-md sm:w-full p-6 relative">
              <button
                onClick={() => setIsNewsletterOpen(false)}
                className="absolute top-4 right-4 p-1 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-400"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="space-y-4 pt-2">
                <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center mx-auto shadow-inner text-gold">
                  <Mail className="h-6 w-6" />
                </div>

                <div className="text-center space-y-1">
                  <span className="text-[9px] font-mono text-gold-hover font-bold tracking-widest uppercase block">CONTEÚDO PREMIUM</span>
                  <h3 className="font-serif text-lg sm:text-xl text-brand-navy font-bold">
                    Assinar Newsletter Semanal
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed max-w-xs mx-auto">
                    Receba toda sexta-feira pela manhã as atualizações de taxas e as melhores oportunidades explicadas de forma didática.
                  </p>
                </div>

                {/* Submitting form using custom callback */}
                <NewsletterFormInlined onSubmit={handleSubscribeSuccess} />
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Success registration alert notification banner toast */}
      {showNotification && (
        <div className="fixed bottom-6 right-6 z-50 bg-brand-navy border border-gold text-white p-4 rounded-xl shadow-2xl flex items-center space-x-3 max-w-md animate-slide-in">
          <div className="h-8 w-8 rounded-full bg-[#C9A84C]/10 flex items-center justify-center text-gold flex-shrink-0">
            <CheckCircle className="h-5 w-5" />
          </div>
          <div className="text-left">
            <span className="font-serif text-xs font-bold block text-gold">Inscrição Eficiente!</span>
            <span className="text-[11px] text-slate-300 block">Enviamos as primeiras instruções para {newsletterEmail}</span>
          </div>
        </div>
      )}

    </div>
  );
}

// Inline helper helper component for independent modal registration
interface NewsletterFormInlinedProps {
  onSubmit: (email: string) => void;
}

function NewsletterFormInlined({ onSubmit }: NewsletterFormInlinedProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMess, setErrorMess] = useState("");

  const handleInlinedSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMess("");

    if (!name.trim()) {
      setErrorMess("Insira o seu primeiro nome.");
      return;
    }

    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMess("Insira um endereço de e-mail autêntico.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onSubmit(email);
    }, 1000);
  };

  return (
    <form onSubmit={handleInlinedSubmit} className="space-y-3 pt-2">
      <div className="space-y-2.5">
        <input
          type="text"
          required
          placeholder="Seu nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 focus:outline-none focus:ring-1 focus:ring-gold focus:bg-white text-slate-800"
        />
        <input
          type="email"
          required
          placeholder="Seu melhor e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 focus:outline-none focus:ring-1 focus:ring-gold focus:bg-white text-slate-800"
        />
      </div>

      {errorMess && (
        <span className="text-[10px] text-red-500 font-bold block text-center">
          ⚠ {errorMess}
        </span>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-gold hover:bg-gold-hover text-brand-navy font-bold py-2.5 rounded-lg text-xs transition-colors flex items-center justify-center"
      >
        {loading ? (
          <span className="h-4.5 w-4.5 border-2 border-brand-navy border-t-transparent rounded-full animate-spin" />
        ) : (
          "Inscrever Grátis"
        )}
      </button>

      <span className="text-[9px] text-slate-400 block text-center">
        ✓ Sem propagandas ✓ Descadastramento automático a qualquer tempo
      </span>
    </form>
  );
}
