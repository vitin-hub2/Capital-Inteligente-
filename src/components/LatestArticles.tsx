import React from "react";
import { Clock, Calendar, ArrowUpRight, Search, FileText } from "lucide-react";
import { Article } from "../types";

interface LatestArticlesProps {
  articles: Article[];
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
  onReadArticle: (article: Article) => void;
  searchFilter: string;
}

export default function LatestArticles({
  articles,
  selectedCategory,
  onSelectCategory,
  onReadArticle,
  searchFilter
}: LatestArticlesProps) {
  
  // Custom color mapper from specific colors requested in guidelines
  const getCategoryStyles = (category: string) => {
    switch (category) {
      case "RENDA FIXA":
        return "bg-[#C9A84C]/10 text-[#A88C35] border-[#C9A84C]/30";
      case "AÇÕES":
        return "bg-[#0A1628]/10 text-[#0A1628] border-[#0A1628]/20";
      case "FUNDOS":
        return "bg-[#2D7A4F]/10 text-[#2D7A4F] border-[#2D7A4F]/25";
      case "EDUCAÇÃO":
        return "bg-[#6B4FBB]/10 text-[#6B4FBB] border-[#6B4FBB]/25";
      case "MERCADOS":
        return "bg-[#D4622A]/10 text-[#D4622A] border-[#D4622A]/25";
      default:
        return "bg-slate-100 text-slate-700 border-slate-200";
    }
  };

  const categories: Array<string | null> = [
    null,
    "RENDA FIXA",
    "AÇÕES",
    "FUNDOS",
    "EDUCAÇÃO",
    "MERCADOS"
  ];

  // Apply filters
  const filteredArticles = articles.filter((article) => {
    const matchesCategory = selectedCategory ? article.category === selectedCategory : true;
    const matchesSearch = searchFilter
      ? article.title.toLowerCase().includes(searchFilter.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchFilter.toLowerCase()) ||
        article.category.toLowerCase().includes(searchFilter.toLowerCase())
      : true;
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="bg-[#F5F7FA] py-16 md:py-24" id="latest-articles-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-12 flex flex-col space-y-3">
          <span className="text-[11px] font-bold text-[#C9A84C] tracking-widest uppercase">
            Artigos Recentes
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-brand-navy font-bold tracking-tight">
            Últimas do Mercado & Análises
          </h2>
          <p className="text-sm text-slate-500 leading-relaxed">
            Conteúdo prático, ético e aprofundado elaborado por quem entende de finanças pessoais e investimentos para descomplicar seu caminho até a liberdade financeira.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat || "todos"}
              onClick={() => onSelectCategory(cat)}
              className={`text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-brand-navy border-brand-navy text-white shadow-md shadow-brand-navy/10"
                  : "bg-white border-slate-200 text-slate-600 hover:text-brand-navy hover:border-slate-300 shadow-xs"
              }`}
            >
              {cat === null ? "Todos os Temas" : cat}
            </button>
          ))}
        </div>

        {/* Dynamic Empty State Indicator */}
        {filteredArticles.length === 0 ? (
          <div className="bg-white rounded-xl p-16 text-center max-w-md mx-auto border border-slate-100 shadow-sm">
            <Search className="h-10 w-10 text-slate-300 mx-auto mb-3" />
            <span className="block font-medium text-slate-800 text-base">Nenhum artigo encontrado</span>
            <span className="block text-xs text-slate-400 mt-1">
              Experimente alterar os filtros de busca ou escolher outro tema de investimento.
            </span>
            <button
              onClick={() => {
                onSelectCategory(null);
                onSelectCategory(null);
              }}
              className="mt-4 text-xs font-bold text-gold hover:text-gold-hover flex items-center gap-1 mx-auto underline"
            >
              Limpar Todos os Filtros
            </button>
          </div>
        ) : (
          /* Grid list representation */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                onClick={() => onReadArticle(article)}
                className="bg-white rounded-xl overflow-hidden border border-slate-100/80 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between cursor-pointer group"
                id={`article-card-${article.id}`}
              >
                {/* Visual Area */}
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <img
                      src={article.imageUrl}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 font-sans"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Category Overlay Badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <span
                        className={`text-[9px] font-bold px-2.5 py-1 rounded border shadow-sm font-sans tracking-wider ${getCategoryStyles(
                          article.category
                        )}`}
                      >
                        {article.category}
                      </span>
                    </div>

                    <div className="absolute inset-0 bg-brand-navy/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Body textual content */}
                  <div className="p-5 sm:p-6 text-left space-y-3">
                    <div className="flex items-center space-x-1 text-[11px] text-slate-400 font-mono">
                      <Calendar className="h-3 w-3 text-gold" />
                      <span>{article.date}</span>
                    </div>

                    <h3 className="font-serif text-lg sm:text-xl font-bold text-brand-navy tracking-tight line-clamp-2 leading-snug group-hover:text-gold transition-colors duration-300">
                      {article.title}
                    </h3>

                    <p className="font-sans text-xs sm:text-sm text-slate-500 line-clamp-3 leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                {/* Footer block containing Author details and read length */}
                <div className="px-5 sm:p-6 pt-0 pb-5 border-t border-slate-50 mt-auto flex items-center justify-between">
                  {/* Author Profile */}
                  <div className="flex items-center space-x-2.5">
                    <img
                      src={article.author.avatar}
                      alt={article.author.name}
                      className="w-8 h-8 rounded-full object-cover border border-slate-100"
                      referrerPolicy="no-referrer"
                    />
                    <div className="text-left">
                      <span className="block text-[11px] font-semibold text-slate-700 leading-tight">
                        {article.author.name}
                      </span>
                      <span className="block text-[9px] text-[#2D7A4F] font-mono leading-none mt-0.5">
                        {article.author.role.split(" ")[0]}
                      </span>
                    </div>
                  </div>

                  {/* Estimated read length */}
                  <div className="flex items-center space-x-1 text-[10px] text-slate-400 font-mono scale-95 origin-right">
                    <Clock className="h-3 w-3 text-gold" />
                    <span>{article.readTime}</span>
                    <ArrowUpRight className="h-3 w-3 text-slate-300 group-hover:text-gold transition-colors" />
                  </div>
                </div>

              </article>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
