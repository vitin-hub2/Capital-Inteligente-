import React, { useState } from "react";
import { Users, Award, ShieldCheck, HeartHandshake, X, Linkedin, Calendar, CheckSquare } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  credentials: string;
  bio: string;
  avatar: string;
  linkedin: string;
}

export default function AboutSection() {
  const [isTeamOpen, setIsTeamOpen] = useState(false);

  const team: TeamMember[] = [
    {
      name: "Ana Beatriz Costa",
      role: "Fundadora e Especialista de macroeconomia",
      credentials: "Acreditação CNPI (Reg. 3290) | Economista formada pela USP",
      bio: "Ana conta com mais de 8 anos atuando em mesas de trading de grandes bancos corporativos e análise independente. Apaixonada por traduzir análises complexas sobre juros mundiais em estratégias eficientes.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
      linkedin: "#"
    },
    {
      name: "Carlos Mendes",
      role: "Estrategista-Chefe de Alocação de Ativos",
      credentials: "Analista CEA | Planejador certificado internacionalmente",
      bio: "Especialista em diversificação patrimonial nacional e global. Desenha carteiras com foco em resiliência estrutural, conciliando fundos, renda fixa complexa e exposição a moedas fortes.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
      linkedin: "#"
    },
    {
      name: "Marina Figueiredo",
      role: "Especialista em Bolsa & Renda Variável",
      credentials: "Analista de portfólios CNPI | MBA Executivo de Finanças",
      bio: "Pesquisa empresas negligenciadas de dividendos na B3. Marina orienta carteiras focadas em fluxo recorrente e proventos isentos sob metodologias robustas de valuation empresarial.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
      linkedin: "#"
    }
  ];

  return (
    <section className="bg-white py-16 md:py-24 overflow-hidden border-t border-slate-100" id="about-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column Image Component */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/2] sm:aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border-4 border-slate-50">
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800"
                alt="Equipe do Capital Inteligente trabalhando em reunião"
                className="w-full h-full object-cover grayscale-[10%]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/30 to-transparent pointer-events-none" />
            </div>
            
            {/* Background design accents */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gold/5 rounded-full z-0 -translate-x-3 pointer-events-none" />
            <div className="absolute -top-6 -right-6 w-40 h-40 bg-slate-50 rounded-full z-0 pointer-events-none" />
          </div>

          {/* Right Column Text Component */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            <span className="text-[11px] font-bold text-[#C9A84C] tracking-widest uppercase">
              Sobre o Capital Inteligente
            </span>
            
            <h2 className="font-serif text-3xl sm:text-4xl text-brand-navy font-bold tracking-tight">
              Jornalismo financeiro verdadeiramente independente.
            </h2>

            <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed font-light">
              Somos uma equipe multidisciplinar formada por analistas de investimentos credenciados, economistas formados nas principais universidades brasileiras e jornalistas de mercado dedicados. Nosso compromisso absoluto é com a clareza didática, a profundidade ética de nossas teses de investimentos e a independência editorial inegociável.
            </p>

            {/* Three inline Stat Cards */}
            <div className="grid grid-cols-3 gap-3 md:gap-4 pt-4">
              <div className="p-3 sm:p-4 bg-[#F5F7FA] border border-slate-100 rounded-xl text-center shadow-xs">
                <span className="block font-mono font-bold text-lg sm:text-xl text-brand-navy leading-none">5 anos</span>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block mt-1">no ar</span>
              </div>
              <div className="p-3 sm:p-4 bg-[#F5F7FA] border border-slate-100 rounded-xl text-center shadow-xs">
                <span className="block font-mono font-bold text-lg sm:text-xl text-brand-navy leading-none">200+</span>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block mt-1">artigos</span>
              </div>
              <div className="p-3 sm:p-4 bg-[#F5F7FA] border border-slate-100 rounded-xl text-center shadow-xs">
                <span className="block font-mono font-bold text-lg sm:text-xl text-brand-navy leading-none">12k</span>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block mt-1">leitores</span>
              </div>
            </div>

            {/* Commitment Value Items */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center space-x-2.5 text-xs text-slate-600">
                <ShieldCheck className="h-4.5 w-4.5 text-gold flex-shrink-0" />
                <span>Analistas credenciados com selos da Apimec e CVM</span>
              </div>
              <div className="flex items-center space-x-2.5 text-xs text-slate-600">
                <Award className="h-4.5 w-4.5 text-gold flex-shrink-0" />
                <span>Análises isentas de incentivos de bancos ou corretoras</span>
              </div>
            </div>

            {/* CTA Anchor Action link */}
            <div className="pt-2">
              <button
                onClick={() => setIsTeamOpen(true)}
                className="text-sm font-bold text-brand-navy hover:text-gold flex items-center gap-1 hover:gap-2 transition-all group underline underline-offset-4 decoration-gold decoration-2"
                id="about-team-link"
              >
                Conheça nossa equipe de especialistas
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Team Bios Slideout Drawer Modal */}
      {isTeamOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-end sm:items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            
            {/* Backdrop filter */}
            <div
              className="fixed inset-0 bg-brand-navy/60 backdrop-blur-xs transition-opacity"
              onClick={() => setIsTeamOpen(false)}
            />

            {/* Center placement spacing */}
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            {/* Main Details Panel */}
            <div className="inline-block align-bottom bg-white rounded-2xl text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full p-6 sm:p-10 relative">
              
              {/* Close Button element */}
              <button
                onClick={() => setIsTeamOpen(false)}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 p-1.5 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-500 transition-colors"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="space-y-6">
                <div>
                  <span className="text-[10px] uppercase font-bold text-gold tracking-widest font-mono">Consed de Especialistas</span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-brand-navy font-black mt-1">
                    Nosso Time Editorial
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Nossos profissionais produzem e validam com extremo rigor técnico todas as métricas contidas em nossos artigos.
                  </p>
                </div>

                {/* Team Roster Map */}
                <div className="divide-y divide-slate-100 space-y-6">
                  {team.map((member, idx) => (
                    <div
                      key={member.name}
                      className={`flex flex-col sm:flex-row gap-4 sm:gap-6 pt-6 first:pt-0 ${
                        idx !== 0 ? "border-t border-slate-100" : ""
                      }`}
                    >
                      {/* Avatar */}
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="w-14 h-14 rounded-full object-cover border-2 border-slate-50 shadow-sm"
                        referrerPolicy="no-referrer"
                      />

                      {/* Bio Details */}
                      <div className="space-y-1.5 text-left flex-1">
                        <div className="flex items-baseline justify-between">
                          <h4 className="font-serif text-base sm:text-lg font-bold text-brand-navy">
                            {member.name}
                          </h4>
                          <span className="text-[10px] text-emerald-700 font-mono bg-emerald-50 px-2 py-0.5 rounded tracking-wide font-medium">
                            Verificado
                          </span>
                        </div>
                        
                        <div className="text-[11px] font-semibold text-gold tracking-wide">
                          {member.role}
                        </div>
                        
                        <div className="text-[9px] text-slate-400 font-mono">
                          {member.credentials}
                        </div>

                        <p className="text-xs text-slate-500 leading-relaxed font-light pt-1">
                          {member.bio}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer Commit Note */}
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-start space-x-3 text-[11px] text-slate-500 mt-4 leading-relaxed">
                  <ShieldCheck className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                  <span>
                    O Capital Inteligente segue com rigor os requisitos da Deliberação CVM nº 2 e as melhores condutas éticas. Não prestamos recomendação de compra personalizada de ativos nem administramos fundos terceiros.
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
}
