export type MediaItem = {
  src: string
  alt: string
  label: string
  ratio: '1:1' | '2:3' | '3:2' | '3:4'
  srcSet?: string
  sizes?: string
}
export type ProductItem = MediaItem & { eyebrow: string; title: string; description: string }

export const pageContent = {
  urgencyBar: {
    enabled: true,
    text: 'Oferta por tempo limitado, até',
  },
  hero: {
    image: '/images/hero-desktop.webp',
    mobileImage: '/images/hero-mobile.webp',
    imageAlt: 'Caixa de presente com Cápsulas Gourmet artesanais, flores secas e xícara de chá',
    headline: 'Transforme café e chá\nem Cápsulas Gourmet que viram\npresentes delicados e inesquecíveis.',
    body: 'Aprenda a criar cápsulas em formatos de flores, corações e muito mais,\nusando ingredientes fáceis de encontrar e utensílios simples,\nmesmo que você não tenha experiência.',
    ctaLabel: 'Quero aprender agora',
    securityImage: '/images/selos-seguranca-compra.svg',
    securityImageAlt: 'Selos de compra segura, satisfação garantida e privacidade protegida',
  },
  results: {
    title: 'Imagine entregar um presente tão charmoso, que as pessoas nem vão acreditar que é comestível. Veja as reações de quem já passou por isso.',
    items: [
      { src: '/images/depoimento-01-optimized.webp', alt: 'Placeholder: Depoimento 01', label: 'Depoimento 01', ratio: '2:3' as const },
      { src: '/images/depoimento-02-optimized.webp', alt: 'Placeholder: Depoimento 02', label: 'Depoimento 02', ratio: '2:3' as const },
      { src: '/images/depoimento-03-optimized.webp', alt: 'Placeholder: Depoimento 03', label: 'Depoimento 03', ratio: '2:3' as const },
      { src: '/images/depoimento-04-optimized.webp', alt: 'Placeholder: Depoimento 04', label: 'Depoimento 04', ratio: '2:3' as const },
      { src: '/images/depoimento-05-optimized.webp', alt: 'Placeholder: Depoimento 05', label: 'Depoimento 05', ratio: '2:3' as const },
    ],
  },
  modulesSection: { title: '3 módulos para aprender a fazer as Cápsulas Gourmet e embalar para presente' },
  modules: [
    { src: '/images/modulo-01-optimized.webp', alt: 'Imagem do módulo 01', label: 'Imagem do módulo 01', ratio: '1:1' as const, eyebrow: 'Módulo 01', title: 'Preparo das cápsulas', description: 'Conheça o processo de preparo e aprenda a produzir suas cápsulas de café e chá com orientações práticas, mesmo que nunca tenha feito algo parecido.' },
    { src: '/images/modulo-02-optimized.webp', alt: 'Imagem do módulo 02', label: 'Imagem do módulo 02', ratio: '1:1' as const, eyebrow: 'Módulo 02', title: 'Formatos e personalização', description: 'Descubra diferentes formatos e decorações para transformar suas cápsulas em presentes criativos, delicados e personalizados para cada ocasião. Chá • Café • Flores • Ursinhos • Borboletas • Outros formatos' },
    { src: '/images/modulo-03-optimized.webp', alt: 'Imagem do módulo 03', label: 'Imagem do módulo 03', ratio: '1:1' as const, eyebrow: 'Módulo 03', title: 'Acabamento e embalagem', description: 'Aprenda a dar os toques finais nas suas criações e preparar apresentações encantadoras para montar presentes e kits gourmet.' },
  ],
  bonusesSection: { title: 'E para criar presentes ainda mais especiais, você ainda recebe 3 bônus' },
  bonuses: [
    { src: '/images/bonus-01-optimized.webp', alt: 'Imagem do bônus 01', label: 'Imagem do bônus 01', ratio: '1:1' as const, eyebrow: 'Bônus 01', title: 'Cápsulas Gourmet Sem Açúcar', description: 'Aprenda a preparar versões sem açúcar e amplie suas possibilidades de criação com novas opções de café e chá para presentear ou oferecer aos seus clientes.', value: 'R$ 19,90' },
    { src: '/images/bonus-02-optimized.webp', alt: 'Imagem do bônus 02', label: 'Imagem do bônus 02', ratio: '1:1' as const, eyebrow: 'Bônus 02', title: 'Cápsulas de Cristal & Latte Cremoso', description: 'Descubra novas possibilidades de formatos e combinações com cápsulas de cristal e latte cremoso, criando presentes gourmet ainda mais diferenciados.', value: 'R$ 27,90' },
    { src: '/images/bonus-03-optimized.webp', alt: 'Imagem do bônus 03', label: 'Imagem do bônus 03', ratio: '1:1' as const, eyebrow: 'Bônus 03', title: 'Acesso à comunidade VIP no WhatsApp', description: 'Participe de uma comunidade exclusiva para trocar ideias, tirar dúvidas e se inspirar em novas criações.', value: 'R$ 47,90' },
  ],
  offersSection: {
    title: 'Escolha o kit ideal para suas criações',
    paymentSecurityImage: '/images/metodos-pagamento-seguranca.svg',
    paymentSecurityAlt: 'Métodos de pagamento e selos de compra segura, satisfação garantida e privacidade protegida',
  },
  offers: {
    simple: {
      title: 'Kit Cápsulas Gourmet em Casa',
      items: ['Preparo das cápsulas', 'Formatos e personalização', 'Acabamento e embalagem'],
      previousPrice: 'R$ 97,00', installmentCount: 4, installmentValue: 'R$ 5,57', cashValue: 'R$ 19,90', ctaLabel: 'Quero o plano básico',
    },
    complete: {
      badge: 'Mais vendido', title: 'Cápsulas Gourmet Completo',
      items: [
        { label: 'Preparo das cápsulas' },
        { label: 'Formatos e personalização' },
        { label: 'Acabamento e embalagem' },
        { label: 'Cápsulas Gourmet Sem Açúcar', value: 'R$ 19,90' },
        { label: 'Cápsulas de Cristal & Latte Cremoso', value: 'R$ 27,90' },
        { label: 'Acesso à comunidade VIP no WhatsApp', value: 'R$ 47,90' },
      ],
      previousPrice: 'R$ 194,00', installmentCount: 9, installmentValue: 'R$ 5,15', cashValue: 'R$ 37,90', ctaLabel: 'Quero a oferta completa',
    },
    popup: {
      eyebrow: 'Espere! Não saia ainda...',
      message: 'Você escolheu a oferta simples. Mas existe uma condição especial antes de finalizar: em vez de ficar apenas com as 7 mágicas, você pode desbloquear agora o Combo 7 Mágicas, os 3 módulos, acesso vitalício e os 3 bônus.',
      title: 'Oferta especial', previousPrice: 'R$ 19,90', installmentCount: 3, installmentValue: 'R$ 5,46', cashValue: 'R$ 14,90',
      ctaLabel: 'Sim! Quero a oferta completa por R$ 14,90', secondaryLabel: 'Não, quero continuar com a oferta simples.',
    },
  },
  guarantee: {
    image: '/images/selo-garantia-7-dias.svg',
    imageAlt: 'Selo de garantia de 7 dias',
    days: 7,
    title: 'Você pode conhecer o conteúdo com tranquilidade',
    body: 'Você terá 7 dias de garantia para conhecer o conteúdo. Se dentro desse período você entender que o material não é para você, poderá solicitar o reembolso.',
  },
  faqSection: { title: 'Perguntas frequentes' },
  faq: [
    { question: 'Preciso ter experiência com confeitaria?', answer: 'Não. O conteúdo foi pensado para quem está começando e apresenta o processo passo a passo.' },
    { question: 'Preciso de uma cozinha profissional?', answer: 'Não. A proposta é justamente mostrar como começar utilizando uma cozinha doméstica e materiais acessíveis.' },
    { question: 'Como vou receber o conteúdo?', answer: 'O envio é feito pelo e-mail.' },
    { question: 'Por quanto tempo terei acesso?', answer: 'Acesso vitalício' },
    { question: 'Existe garantia?', answer: 'Sim. Você terá 7 dias de garantia para conhecer o conteúdo. Se dentro desse período você entender que o material não é para você, poderá solicitar o reembolso.' },
  ],
  footer: { brand: 'Cápsulas Gourmet', copyright: '© 2026 Cápsulas Gourmet' },
}
