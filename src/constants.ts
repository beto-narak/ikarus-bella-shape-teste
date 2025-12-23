import { Flame, Activity, ShieldCheck, Heart } from "lucide-react";
import { BenefitItem, FAQItem, StepItem, TestimonialItem } from "../src/types";

export const SHOPIFY_URL = "#pricing";
export const WHATSAPP_LINK = "https://wa.me/5511999999999";

export const CHECKOUT_URL_1_UNIT = "https://sua-loja.com/checkout/1-unidade";
export const CHECKOUT_URL_3_UNITS = "https://sua-loja.com/checkout/3-unidades";
export const CHECKOUT_URL_5_UNITS = "https://sua-loja.com/checkout/5-unidades";

export const BENEFITS: BenefitItem[] = [
  {
    title: "Ativação Metabólica",
    description:
      "Auxilia no metabolismo de proteínas, carboidratos e gorduras, ajudando seu corpo a trabalhar melhor.",
    icon: Flame,
  },
  {
    title: "Controle & Bem-estar",
    description:
      "Suporte para momentos de reeducação alimentar, contribuindo para a sensação de saciedade e equilíbrio.",
    icon: Activity,
  },
  {
    title: "Manutenção Saudável",
    description:
      "Apoio auxiliar na manutenção de níveis saudáveis de colesterol quando aliado a hábitos saudáveis.",
    icon: Heart,
  },
  {
    title: "Fórmula Natural",
    description:
      "Ingredientes selecionados rigorosamente para oferecer suporte ao seu corpo sem agredir.",
    icon: ShieldCheck,
  },
];

export const STEPS: StepItem[] = [
  {
    number: "01",
    title: "Cápsula Diária",
    description:
      "Tome apenas 01 cápsula por dia. A consistência é a chave para o sucesso.",
  },
  {
    number: "02",
    title: "Momento Certo",
    description:
      "Ingerir após uma refeição (café da manhã ou almoço). Nunca tome em jejum.",
  },
  {
    number: "03",
    title: "Hidratação",
    description:
      "Beba no mínimo 2 litros de água ao longo do dia para potencializar a absorção.",
  },
];

export const FAQS: FAQItem[] = [
  {
    question: "Como devo tomar o Bella Shape?",
    answer:
      "A recomendação é de 1 cápsula ao dia, preferencialmente após o café da manhã ou almoço. É fundamental não ingerir o produto em jejum e manter uma boa ingestão de água.",
  },
  {
    question: "Em quanto tempo vejo resultados?",
    answer:
      "Os resultados variam de pessoa para pessoa, pois cada organismo é único. Muitos clientes relatam sensação de bem-estar nas primeiras semanas, mas o uso contínuo aliado a hábitos saudáveis traz os melhores benefícios.",
  },
  {
    question: "Existem contraindicações?",
    answer:
      "Sim. O produto não é indicado para gestantes, lactantes, menores de 19 anos e pessoas com condições médicas severas sem acompanhamento. Sempre consulte um profissional de saúde.",
  },
  {
    question: "O Bella Shape substitui refeições?",
    answer:
      "Não. Ele é um suplemento alimentar destinado a complementar a dieta, e não a substituir alimentos.",
  },
  {
    question: "Qual a garantia da compra?",
    answer:
      "Oferecemos garantia de 7 dias após o recebimento do produto para devolução em caso de arrependimento, conforme o Código de Defesa do Consumidor.",
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    name: "Mariana S.",
    role: "Cliente Verificada",
    rating: 5,
    text: "Senti uma diferença enorme na minha disposição e no controle da vontade de comer doces. O Bella Shape entrou pra minha rotina matinal!",
    image: "https://picsum.photos/100/100?random=1",
  },
  {
    name: "Fernanda L.",
    role: "Cliente Verificada",
    rating: 5,
    text: "Produto chegou super rápido. A embalagem é linda e senti que meu metabolismo 'acordou'. Recomendo muito.",
    image: "https://picsum.photos/100/100?random=2",
  },
  {
    name: "Juliana R.",
    role: "Cliente Verificada",
    rating: 4,
    text: "Estou no segundo frasco. Me ajuda muito a manter o foco na dieta e a não jacar no fim de semana. Excelente.",
    image: "https://picsum.photos/100/100?random=3",
  },
];
