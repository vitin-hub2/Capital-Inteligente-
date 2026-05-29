import { Article, TickerItem } from "./types";

export const FEATURED_ARTICLE: Article = {
  id: "featured-1",
  title: "Taxa Selic a 10,5%: O que muda na sua carteira de investimentos?",
  excerpt: "Com a manutenção da taxa básica de juros, o cenário macroeconômico brasileiro exige um reposicionamento estratégico. Descubra onde estão as melhores oportunidades na relação risco-retorno entre renda fixa e variável.",
  content: [
    "A decisão do Comitê de Política Monetária (Copom) de manter a taxa Selic em 10,5% ao ano consolida um patamar de juros reais extremamente atrativo para o investidor brasileiro. Diante de um cenário inflacionário global persistente e incertezas fiscais domésticas, o Banco Central optou pela cautela, mantendo o juro básico em dois dígitos.",
    "Para quem busca rentabilidade com segurança, o momento atual favorece significativamente as alocações em renda fixa. Títulos pós-fixados indexados ao CDI continuam oferecendo retornos gordos e liquidez diária, sendo ideais para a reserva de emergência e caixa de curto prazo. Contudo, as verdadeiras oportunidades de multiplicação patrimonial estão nos títulos IPCA+ de médio e longo prazo.",
    "Com taxas reais de juros pagando de IPCA + 6,0% a IPCA + 6,5% ao ano na curva secundária, o investidor consegue garantir um ganho real formidável por décadas. Esse patamar historicamente blinda a carteira contra o desgaste do poder de compra e cria um efeito bola de neve nos juros compostos difíceis de bater por quase qualquer negócio.",
    "Por outro lado, o mercado de ações exige seletividade cirúrgica. Empresas de setores perenes com baixa alavancagem financeira, alta conversão de caixa e distribuição de proventos robustos (como concessionárias de energia elétrica, saneamento e grandes bancos) operam como excelentes amortecedores na carteira, enquanto as ações de crescimento (growth) sofrem com o custo de capital elevado por mais tempo.",
    "A lição principal para este semestre é a diversificação equilibrada. Não corra para apenas um lado. O investidor inteligente deve carregar posições de crédito privado de excelente rating (LCI, LCA, Debêntures Incentivadas) para isenção fiscal, fundos de papel bem geridos e ativos dolarizados que servem de colchão em tempestades geopolíticas."
  ],
  category: "RENDA FIXA",
  imageUrl: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=1200",
  author: {
    name: "Ana Beatriz Costa",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
    role: "Analista de Investimentos CNPI"
  },
  date: "24 mai. 2026",
  readTime: "8 min de leitura",
  featured: true,
  tags: ["Taxa Selic", "Copom", "Macroeconomia", "Alocação de Ativos"],
  keyTakeaway: "Com a Selic mantida em 10,5%, o investidor deve travar rendimentos reais acima de 6% em ativos atrelados ao IPCA+ e manter caixa de oportunidade líquido em pós-fixados."
};

export const ARTICLES: Article[] = [
  {
    id: "card-1",
    title: "Tesouro Direto em 2026: Qual título escolher agora?",
    excerpt: "Com a Selic em queda gradual e incertezas fiscais, entenda quais papéis oferecem melhor relação risco-retorno para o seu perfil e prazo de investimentos.",
    content: [
      "O Tesouro Direto continua sendo o porto seguro do pequeno e médio investidor brasileiro. No entanto, escolher entre o Tesouro Selic, Prefixado e IPCA+ requer uma leitura refinada do cenário macroeconômico atual.",
      "Para horizontes curtos (até 2 anos), o Tesouro Selic continua sendo imbatível pela liquidez diária D+0 e pela previsibilidade de rendimento, capturando a rentabilidade de dois dígitos ainda de forma limpa.",
      "Para objetivos com datas marcadas de médio prazo (como compra de imóvel ou viagem em 3 a 5 anos), o Tesouro Prefixado pode parecer convidativo, mas carrega o risco inflacionário. Portanto, se preferir usá-lo, limite a no máximo 15% do portfólio.",
      "O destaque absoluto fica para os títulos IPCA+. Ao render a inflação do período acrescida de uma taxa fixa real expressiva, esses títulos garantem que seu planejamento previdenciário ou de longo prazo não seja corroído pelo aumento de preços, garantindo um padrão de vida sólido amanhã."
    ],
    category: "RENDA FIXA",
    imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600",
    author: {
      name: "Carlos Mendes",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
      role: "Estrategista de Alocação de Ativos"
    },
    date: "22 mai. 2026",
    readTime: "6 min de leitura",
    tags: ["Tesouro Direto", "Renda Fixa", "Preservação de Capital", "IPCA+"],
    keyTakeaway: "Priorize Tesouro IPCA+ de longo prazo para independência financeira e utilize Tesouro Selic para reserva de emergência."
  },
  {
    id: "card-2",
    title: "Dividendos: 5 ações que pagaram mais de 12% em 12 meses",
    excerpt: "Levantamos as empresas listadas na B3 que distribuíram os maiores proventos aos seus acionistas e analisamos a sustentabilidade desses pagamentos para o futuro.",
    content: [
      "Viver de renda passiva é o grande objetivo de quase todo investidor de ações de longo prazo. No entanto, olhar apenas para o Dividend Yield passado (conhecido como olhar o retrovisor) pode induzir a erros clássicos, como cair na armadilha do dividendo não-recorrente.",
      "Neste levantamento exclusivo, identificamos 5 empresas brasileiras que registraram pagamentos consistentes acima da taxa Selic nos últimos 12 meses: empresas de energia, mineração e do setor financeiro.",
      "Analisamos quesitos cruciais para a longevidade dessa renda: a estabilidade das receitas operacionais, a taxa de payout (porcentagem do lucro distribuída), os níveis de endividamento da companhia e seu histórico de crescimento de lucros.",
      "Constatamos que setores defensivos regulados se sobressaem. Empresas transmissoras de energia, por exemplo, possuem contratos de longo prazo corrigidos pela inflação, permitindo uma distribuição de fluxo de caixa incrivelmente previsível e resiliente, o que as torna excelentes escolhas para carteiras previdenciárias."
    ],
    category: "AÇÕES",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600",
    author: {
      name: "Marina Figueiredo",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
      role: "Especialista em Renda Variável"
    },
    date: "20 mai. 2026",
    readTime: "9 min de leitura",
    tags: ["Ações", "Dividendos", "Renda Passiva", "Bolsa de Valores"],
    keyTakeaway: "Investir para dividendos exige focar em companhias geradoras de caixa de setores perenes com baixo endividamento líquido."
  },
  {
    id: "card-3",
    title: "FIIs ou CRI/CRA? Como montar uma carteira de renda passiva sólida",
    excerpt: "A escolha entre fundos imobiliários e títulos de crédito privado pode definir sua renda mensal isenta de IR. Saiba como calibrar a proporção correta destes ativos.",
    content: [
      "Tanto Fundos de Investimento Imobiliário (FIIs) quanto Certificados de Recebíveis Imobiliários e Agrícolas (CRI/CRA) oferecem isenção de Imposto de Renda para pessoas físicas sobre os rendimentos distribuídos, mas as semelhanças param por aí.",
      "FIIs de tijolo oferecem participações em imóveis físicos reais (shoppings, lajes corporativas, galpões logísticos) que tendem a se valorizar ao longo do tempo junto com os aluguéis reajustados ciclicamente. Isso fornece um hedge natural contra a inflação e real valorização de tijolo.",
      "CRI e CRA, por outro lado, são títulos de dívida privada corporativa lastreados em recebíveis imobiliários ou do agronegócio. Eles entregam uma taxa pactuada (como IPCA + 7%) que costuma pagar dividendos frequentes em fluxo de caixa líquido direto na conta do investidor.",
      "O segredo do investidor sofisticado reside em combinar os dois: CRIs/CRAs de excelente nível de crédito corporativo para acelerar os ganhos de curto prazo, e FIIs de tijolos de alta qualidade locados para grandes corporações multinacionais para construir patrimônio perene de longo prazo."
    ],
    category: "FUNDOS",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600",
    author: {
      name: "Lucas Andrade",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
      role: "Analista de Real Estate e FIIs"
    },
    date: "18 mai. 2026",
    readTime: "11 min de leitura",
    tags: ["FIIs", "CRI", "CRA", "Renda Passiva", "Imóveis"],
    keyTakeaway: "Equilibre títulos de crédito privado como CRI/CRA para aceleração de rendimentos junto com FIIs de tijolo de primeiríssima linha para preservação real."
  },
  {
    id: "card-4",
    title: "O erro que 90% dos investidores iniciantes cometem no primeiro ano",
    excerpt: "Analisamos bases estatísticas e identificamos o padrão comportamental e de alocação mais destrutivo para quem está dando os primeiros passos nas finanças.",
    content: [
      "A psicologia comportamental aplicada às finanças nos mostra que o maior risco para o patrimônio de um investidor não são os mercados em oscilação, mas sim seus próprios impulsos e reações irracionais.",
      "Ao acompanhar a jornada de milhares de investidores em seu primeiro ano, constatamos que cerca de 90% comete o erro de girar a carteira freneticamente na tentativa de obter enriquecimento rápido através de operações especulativas de trading ou ativos hiper-alavancados.",
      "Esse comportamento gera altos custos operacionais de corretagem e taxas de administração, além do pagamento desnecessário de impostos de renda que corroem as margens. Somado a isso, o investidor novato costuma vender ativos excelentes na primeira correção do mercado por puro pânico natural.",
      "Para contornar este viés destrutivo, adote o lema 'Buy and Hold' (Comprar e Manter) e automatize seus aportes mensais em ativos estruturais robustos, distanciando-se do ruído diário das cotações que apenas estimulam a ansiedade."
    ],
    category: "EDUCAÇÃO",
    imageUrl: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=600",
    author: {
      name: "Ana Beatriz Costa",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
      role: "Analista de Investimentos CNPI"
    },
    date: "15 mai. 2026",
    readTime: "7 min de leitura",
    tags: ["Psicologia Financeira", "Erros de Iniciantes", "Mentalidade de Longo Prazo", "A aportes"],
    keyTakeaway: "Evite girar a carteira desnecessariamente e concentre sua energia no aumento de sua capacidade de aporte e consistência mensal."
  },
  {
    id: "card-5",
    title: "Dólar, euro e libra: Como proteger seu patrimônio da desvalorização cambial",
    excerpt: "Diversificação internacional não é um privilégio apenas para milionários. Conheça formas simples e acessíveis de se expor a moedas fortes no Brasil.",
    content: [
      "Viver inteiramente exposto ao real brasileiro significa manter todo o seu esforço financeiro em uma moeda emergente sujeita a constantes riscos de volatilidade política e desvalorização estrutural de inflação perante moedas fortes.",
      "Hoje em dia, a descentralização de serviços financeiros e a popularização das contas globais e corretoras internacionais no Brasil tornaram o processo de dolarização extremamente acessível, permitindo transações rápidas com spread baixo e IOF reduzido.",
      "As principais estratégias compreendem o investimento direto em ETFs e REITs americanos através de contas globais de investimento, ETFs atrelados a índices estrangeiros negociados diretamente na B3 brasileira (como o IVVB11 para o S&P 500), ou mesmo investimentos diretos em títulos da dívida americana (Treasuries) pagando taxas históricas fantásticas.",
      "Manter entre 10% a 30% do portfólio global exposto ao dólar é uma barreira de proteção de poder de compra mundial insubstituível, garantindo que suas futuras viagens internacionais, aquisições de eletrônicos ou serviços não fiquem excessivamente caras."
    ],
    category: "MERCADOS",
    imageUrl: "https://images.unsplash.com/photo-1642790551116-18e150f248e3?w=600",
    author: {
      name: "Carlos Mendes",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
      role: "Estrategista de Alocação de Ativos"
    },
    date: "12 mai. 2026",
    readTime: "8 min de leitura",
    tags: ["Investimentos Internacionais", "Dólar", "ETFs", "Proteção de Patrimônio"],
    keyTakeaway: "A internacionalização da carteira não serve apenas para buscar retornos fantásticos, mas prioritariamente para proteger o encargo cambial de consumo internacional."
  },
  {
    id: "card-6",
    title: "CDB, LCI ou LCA: Um guia definitivo para 2026",
    excerpt: "Colocamos na ponta do lápis os prós e contras das principais opções bancárias de renda fixa, calculando o peso do imposto de renda e garantias do FGC.",
    content: [
      "Os títulos de crédito bancário figuram como os queridinhos de qualquer planejador financeiro clássico pela facilidade técnica, solidez do Fundo Garantidor de Crédito (FGC) que assegura até R$ 250 mil por CPF e instituição financeira, e ampla diversidade de distribuidores.",
      "Contudo, a dúvida paira eternamente sobre qual vale mais a pena: CDBs que pagam uma taxa nominal bruta maior porém sofrem a tabela regressiva do Imposto de Renda (de 22,5% a 15%), ou as isentas LCIs e LCAs direcionadas aos setores imobiliário e do agronegócio.",
      "Para fazer essa conta de forma rápida e precisa sem erros de ilusão: divida a taxa líquida desejada da LCI/LCA pela fórmula (1 - Alíquota Estimada de IR) para obter a taxa bruta equivalente necessária de um CDB concorrente direto.",
      "Geralmente, para prazos curtos inferiores a 6 meses, as LCIs e LCAs costumam se sobressair brilhantemente, enquanto para recursos que repousarão por mais de 2 anos (com o IR no piso definitivo de 15%), CDBs de bancos médios consolidados entregando mais de 115% do CDI tornam-se de altíssima rentabilidade comparativa."
    ],
    category: "RENDA FIXA",
    imageUrl: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600",
    author: {
      name: "Marina Figueiredo",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
      role: "Especialista em Renda Variável"
    },
    date: "10 mai. 2026",
    readTime: "10 min de leitura",
    tags: ["CDB", "LCI", "LCA", "FGC", "Alíquotas de IR"],
    keyTakeaway: "Sempre faça a conta de equivalência de isenção de imposto antes de investir em taxas puramente nominais de juros."
  }
];

export const TICKER_ITEMS: TickerItem[] = [
  { id: "t1", name: "IBOVESPA", value: "128.450", change: "+1,2%", type: "positive" },
  { id: "t2", name: "Dólar Comercial", value: "R$ 5,18", change: "-0,3%", type: "negative" },
  { id: "t3", name: "Taxa Selic", value: "10,50%", change: "10,50%", type: "neutral" },
  { id: "t4", name: "Ouro Grama", value: "R$ 312,40", change: "+0,8%", type: "positive" },
  { id: "t5", name: "IFIX IPCA", value: "3.182", change: "+0,5%", type: "positive" },
  { id: "t6", name: "IPCA Proj.", value: "4,2% a.a.", change: "Estável", type: "neutral" },
  { id: "t7", name: "Bitcoin BTC", value: "R$ 485.200", change: "+2,1%", type: "positive" },
  { id: "t8", name: "CDI DI", value: "10,40%", change: "Estável", type: "neutral" }
];
