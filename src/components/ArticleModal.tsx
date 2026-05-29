import React, { useState } from "react";
import { X, Calendar, Clock, Share2, Award, Copy, Check, MessageCircle, Star, Sparkles } from "lucide-react";
import { Article } from "../types";

interface ArticleModalProps {
  article: Article | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ArticleModal({ article, isOpen, onClose }: ArticleModalProps) {
  const [copied, setCopied] = useState(false);
  const [rating, setRating] = useState<number | null>(null);
  const [hoverRating, setHoverRating] = useState<number | null>(null);

  if (!isOpen || !article) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "RENDA FIXA":
        return "bg-[#C9A84C]/10 text-[#A88C35] border-[#C9A84C]/20";
      case "AÇÕES":
        return "bg-blue-50 text-brand-navy border-blue-100";
      case "FUNDOS":
        return "bg-emerald-50 text-[#2D7A4F] border-emerald-100";
      case "EDUCAÇÃO":
        return "bg-purple-50 text-[#6B4FBB] border-purple-100";
      case "MERCADOS":
        return "bg-orange-50 text-[#D4622A] border-orange-100";
      default:
        return "bg-slate-50 text-slate-700 border-slate-100";
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex items-center justify-center min-h-screen pt-4 px-3 pb-12 sm:pb-20 text-center sm:block sm:p-0">
        
        {/* Backdrop overlay blur */}
        <div
          className="fixed inset-0 bg-brand-navy/60 backdrop-blur-xs transition-opacity"
          onClick={onClose}
        />

        {/* Browser viewport center spacing trick */}
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        {/* Modal Window Container */}
        <div className="inline-block align-bottom bg-white rounded-2xl text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full p-4 sm:p-8 md:p-10 relative">
          
          {/* Circular Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors z-30"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Core Layout Structure */}
          <div className="space-y-6">
            
            {/* Header Column: Meta data and badges */}
            <div className="space-y-3.5 text-left pt-3">
              <div className="flex items-center space-x-2">
                <span className={`text-[9px] font-bold px-2.5 py-1 rounded border tracking-wider uppercase font-sans ${getCategoryColor(article.category)}`}>
                  {article.category}
                </span>
                <span className="text-[10px] font-mono text-slate-400 tracking-wider">
                  PUBLICAÇÃO ID: CI-{article.id.toUpperCase()}
                </span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-brand-navy font-bold leading-tight tracking-tight">
                {article.title}
              </h2>

              {/* Subtitle / Excerpt descriptor */}
              <p className="text-sm text-slate-500 font-sans italic leading-relaxed">
                "{article.excerpt}"
              </p>

              {/* Meta information grid */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-3 border-t border-slate-100 text-[11px] sm:text-xs text-slate-400">
                <div className="flex items-center space-x-2">
                  <img
                    src={article.author.avatar}
                    alt={article.author.name}
                    className="w-8 h-8 rounded-full border border-slate-100 object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <span className="block font-semibold text-slate-800 leading-none">{article.author.name}</span>
                    <span className="block text-[9px] text-slate-400 leading-none mt-0.5">{article.author.role}</span>
                  </div>
                </div>

                <span className="text-slate-200">|</span>

                <div className="flex items-center space-x-1 font-mono">
                  <Calendar className="h-3.5 w-3.5 text-gold/80" />
                  <span>{article.date}</span>
                </div>

                <span className="text-slate-200">|</span>

                <div className="flex items-center space-x-1 font-mono">
                  <Clock className="h-3.5 w-3.5 text-gold/80" />
                  <span>{article.readTime}</span>
                </div>
              </div>
            </div>

            {/* Visual Header Banner image */}
            <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden shadow-md">
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Key Takeaway box */}
            {article.keyTakeaway && (
              <div className="bg-[#C9A84C]/5 border-l-4 border-[#C9A84C] p-4.5 rounded-r-xl text-left space-y-1">
                <span className="font-serif text-xs font-bold text-[#A88C35] uppercase tracking-wider flex items-center gap-1">
                  <Award className="h-4 w-4" /> Destaque Estratégico
                </span>
                <p className="text-xs sm:text-sm text-[#5C4A1A] font-medium leading-relaxed font-sans">
                  {article.keyTakeaway}
                </p>
              </div>
            )}

            {/* Full paragraphs map */}
            <div className="space-y-4 max-w-none text-left">
              {article.content.map((paragraph, index) => (
                <p
                  key={index}
                  className={`font-sans text-sm sm:text-base text-slate-700 leading-relaxed font-light ${
                    index === 0 ? "first-letter:text-4xl first-letter:font-serif first-letter:font-bold first-letter:text-brand-navy first-letter:float-left first-letter:mr-2 أول" : ""
                  }`}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Post Tags Row */}
            {article.tags && article.tags.length > 0 && (
              <div className="flex flex-wrap items-center gap-1.5 pt-4 border-t border-slate-50 justify-start">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mr-1">Tags:</span>
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-slate-100 hover:bg-slate-200 text-slate-500 font-mono text-[10px] px-2.5 py-1 rounded transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* Social Share actions and Star grading segment */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-slate-100 items-center justify-between text-left">
              
              {/* Rating block */}
              <div className="space-y-1.5">
                <span className="font-sans font-bold text-slate-700 text-xs flex items-center gap-1">
                  <Sparkles className="h-3.5 w-3.5 text-gold" />
                  Esta leitura agregou inteligência financeira?
                </span>
                
                <div className="flex items-center space-x-1.5">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <button
                      key={num}
                      onMouseEnter={() => setHoverRating(num)}
                      onMouseLeave={() => setHoverRating(null)}
                      onClick={() => setRating(num)}
                      className="p-1 focus:outline-none transition-transform hover:scale-110 active:scale-95"
                      title={`Avaliar com ${num} estrela(s)`}
                    >
                      <Star
                        className={`h-5 w-5 transition-all ${
                          num <= (hoverRating || rating || 0)
                            ? "text-gold fill-gold"
                            : "text-slate-300"
                        }`}
                      />
                    </button>
                  ))}
                  {rating && (
                    <span className="text-[10px] font-mono text-[#2D7A4F] bg-emerald-50 px-2 py-0.5 rounded font-bold animate-pulse">
                      Obrigado pela nota {rating}!
                    </span>
                  )}
                </div>
              </div>

              {/* Share block */}
              <div className="space-y-1.5 md:text-right">
                <span className="font-sans font-bold text-slate-700 text-xs block">
                  Compartilhe este conhecimento
                </span>
                
                <div className="flex items-center md:justify-end gap-2 pt-0.5">
                  <button
                    onClick={handleCopyLink}
                    className="px-3.5 py-2.5 rounded-lg border border-slate-200 text-slate-600 hover:text-brand-navy hover:bg-slate-50 text-xs font-semibold flex items-center space-x-1.5 transition-all"
                  >
                    {copied ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-emerald-600" />
                        <span className="text-emerald-600">Copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        <span>Copiar link</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                      `Confira esta análise fantástica de Capital Inteligente: "${article.title}"`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2.5 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold flex items-center space-x-1.5 transition-all"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
