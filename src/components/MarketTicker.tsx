import React from "react";
import { ArrowUp, ArrowDown, Activity } from "lucide-react";
import { TickerItem } from "../types";

interface MarketTickerProps {
  tickerItems: TickerItem[];
}

export default function MarketTicker({ tickerItems }: MarketTickerProps) {
  // Duplicate ticker sequence twice to achieve a seamless loop
  const duplicatedSequence = [...tickerItems, ...tickerItems, ...tickerItems];

  const getValueColor = (type: "positive" | "negative" | "neutral") => {
    switch (type) {
      case "positive":
        return "text-[#C9A84C]";
      case "negative":
        return "text-red-400";
      default:
        return "text-white";
    }
  };

  const getArrowIcon = (type: "positive" | "negative" | "neutral") => {
    switch (type) {
      case "positive":
        return "🔺";
      case "negative":
        return "🔻";
      default:
        return "─";
    }
  };

  return (
    <div
      className="w-full bg-brand-navy border-y border-white/5 py-4 overflow-hidden select-none z-30"
      id="market-ticker-banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center mb-1 text-[10px] text-slate-400 font-mono tracking-widest uppercase gap-2">
        <Activity className="h-3 w-3 text-gold animate-pulse" />
        <span>Cotações de Mercado em Tempo Real</span>
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
        <span className="text-[9px] lowercase text-slate-500">atualização automática</span>
      </div>

      <div className="ticker-container relative w-full flex items-center bg-brand-navy py-1.5">
        <div className="ticker-track">
          {duplicatedSequence.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="inline-flex items-center space-x-2.5 mx-8 font-mono text-xs sm:text-sm"
            >
              <span className="text-white/60 font-semibold">{item.name}</span>
              <span className={`font-bold ${getValueColor(item.type)}`}>
                {getArrowIcon(item.type)} {item.value}
              </span>
              <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded-xs ${
                item.type === "positive"
                  ? "bg-[#C9A84C]/10 text-[#C9A84C]"
                  : item.type === "negative"
                  ? "bg-red-500/10 text-red-400"
                  : "bg-white/5 text-white/55"
              }`}>
                {item.change}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
