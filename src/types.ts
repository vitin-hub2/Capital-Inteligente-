export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string[]; // List of paragraphs for full reading
  category: "RENDA FIXA" | "AÇÕES" | "FUNDOS" | "EDUCAÇÃO" | "MERCADOS";
  imageUrl: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  date: string;
  readTime: string;
  featured?: boolean;
  tags?: string[];
  keyTakeaway?: string;
}

export interface TickerItem {
  id: string;
  name: string;
  value: string;
  change: string;
  type: "positive" | "negative" | "neutral";
}

export interface NewsletterForm {
  email: string;
  name: string;
}
