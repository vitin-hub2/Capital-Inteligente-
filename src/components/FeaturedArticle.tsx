import React from "react";
import { Clock, Calendar, ArrowRight, Bookmark } from "lucide-react";
import { Article } from "../types";

interface FeaturedArticleProps {
  article: Article;
  onReadArticle: (article: Article) => void;
}

export default function FeaturedArticle({ article, onReadArticle }: FeaturedArticleProps) {
  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10" id="featured-article-section">
      
      {/* Container Panel with shadow and custom color overlay */}
      <div className="relative rounded-2xl overflow-hidden bg-brand-navy text-white shadow-2xl transition-all duration-500 hover:shadow-gold/10 hover:shadow-3xl group">
        
        {/* Background Image Overlay with gradient */}
        <div className="absolute inset-0 z-0">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-full object-cover opacity-25 md:opacity-30 group-hover:scale-[1.03] transition-transform duration-700 select-none"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/95 to-transparent md:to-brand-navy/10 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-brand-navy to-transparent pointer-events-none" />
        </div>

        {/* Content Layout */}
        <div className="relative z-10 p-6 sm:p-10 md:p-16 lg:py-24 max-w-3xl flex flex-col space-y-5 text-left">
          
          {/* Highlight Badge */}
          <div className="flex items-center space-x-2">
            <span className="bg-gold text-brand-navy text-[10px] font-bold px-3 py-1 rounded-sm uppercase tracking-wider font-sans shadow-md">
              Destaque da Semana
            </span>
            <span className="text-[10px] font-mono tracking-widest text-[#9AA5B4] uppercase hidden sm:inline">
              ANÁLISE ESTRATÉGICA
            </span>
          </div>

          {/* Title and Excerpt */}
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15] group-hover:text-gold transition-colors duration-300">
            {article.title}
          </h2>

          <p className="font-sans text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl font-light">
            {article.excerpt}
          </p>

          {/* Meta Information Footer (author, read time, date) */}
          <div className="flex flex-wrap items-center gap-y-4 gap-x-6 pt-4 border-t border-white/10 text-xs sm:text-sm text-slate-300">
            {/* Author */}
            <div className="flex items-center space-x-3">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="w-10 h-10 rounded-full border border-gold/30 object-cover"
                referrerPolicy="no-referrer"
              />
              <div>
                <span className="block font-medium text-white">{article.author.name}</span>
                <span className="text-[10px] text-slate-400 block -mt-0.5">{article.author.role}</span>
              </div>
            </div>

            {/* Separator */}
            <span className="hidden sm:inline text-white/20">|</span>

            {/* Date */}
            <div className="flex items-center space-x-1.5 text-slate-400">
              <Calendar className="h-4 w-4 text-gold/80" />
              <span>{article.date}</span>
            </div>

            {/* Read Time */}
            <div className="flex items-center space-x-1.5 text-slate-400">
              <Clock className="h-4 w-4 text-gold/85" />
              <span>{article.readTime}</span>
            </div>
          </div>

          {/* Action Trigger Link */}
          <div className="pt-4">
            <button
              onClick={() => onReadArticle(article)}
              className="inline-flex items-center justify-center space-x-2.5 bg-gold hover:bg-gold-hover text-brand-navy font-bold text-xs sm:text-sm px-6 py-3.5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:translate-x-1"
              id="featured-read-button"
            >
              <span>Ler Artigo Integral</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

        </div>

        {/* Small corner detail bookmark graphic */}
        <div className="absolute top-0 right-10 w-12 h-14 bg-gradient-to-b from-gold to-gold-hover hover:h-16 transition-all duration-300 flex items-center justify-center rounded-b shadow-md">
          <Bookmark className="h-5 w-5 text-brand-navy fill-brand-navy" />
        </div>

      </div>
    </section>
  );
}
