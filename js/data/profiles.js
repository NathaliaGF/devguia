(function (root, factory) {
  const data = factory();
  if (typeof module !== 'undefined' && module.exports) module.exports = data;
  root.DEVGUIA_DATA = root.DEVGUIA_DATA || {};
  root.DEVGUIA_DATA.profiles = data;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
const PROFILES = {
  dev_nato: {
    key: 'dev_nato',
    icon: '💻',
    name: 'Dev Nato',
    sub: 'Seu perfil vocacional',
    color: 'var(--purple)',
    desc: `Você tem os traços que definem bons desenvolvedores: pensamento lógico-analítico, tolerância à frustração, curiosidade genuína e capacidade de concentração. TI não é só viável para você — é onde vai se destacar. O risco para seu perfil não é fracassar: é se desperdiçar em áreas rasas demais para o seu potencial.`,
    attention: [
      'Cuidado com o perfeccionismo: código bom entregue é melhor que código perfeito no seu HD.',
      'Não negligencie comunicação — devs que não se expressam travam na carreira mais cedo do que imaginam.',
    ],
    steps: [
      'Escolha uma linguagem e vá fundo nela antes de diversificar.',
      'Construa projetos com problemas reais — não apenas tutoriais de YouTube.',
      'Entenda fundamentos: como a memória funciona, o que acontece quando você roda código.',
    ],
  },
  analitico: {
    key: 'analitico',
    icon: '📊',
    name: 'Analítico de Dados',
    sub: 'Seu perfil vocacional',
    color: 'var(--blue)',
    desc: `Você tem raciocínio analítico acima da média e gosta de entender padrões. Isso te coloca naturalmente na trilha de dados — análise, ciência de dados, BI ou engenharia de dados. Programação é necessária, mas não precisa ser o foco principal. Seu diferencial está em traduzir dados em decisões, não em escrever sistemas complexos do zero.`,
    attention: [
      'Dados sem contexto de negócio são inúteis. Aprenda a trabalhar com pessoas não-técnicas.',
      'Não pule para Machine Learning antes de dominar SQL e estatística básica.',
    ],
    steps: [
      'Comece com SQL e Excel/Sheets avançado.',
      'Python para análise: Pandas, Matplotlib, visualização.',
      'Estatística aplicada — não decorada.',
    ],
  },
  ux_design: {
    key: 'ux_design',
    icon: '🎨',
    name: 'Designer de Produto',
    sub: 'Seu perfil vocacional',
    color: 'var(--pink)',
    desc: `Você pensa primeiro na experiência da pessoa usando o produto — isso é raro e valioso. Não precisa necessariamente programar (mas ajuda saber o básico de HTML/CSS). Seu lugar natural é UX Design, Product Design ou pesquisa com usuários. É uma área menos saturada que dev e com boa demanda para quem combina sensibilidade com raciocínio analítico.`,
    attention: [
      'UX não é só deixar bonito — envolve pesquisa, testes e dados de comportamento real.',
      'Saber HTML/CSS básico te torna muito mais eficaz colaborando com desenvolvedores.',
    ],
    steps: [
      'Fundamentos de UX: heurísticas de Nielsen, pesquisa com usuário, prototipagem.',
      'Aprenda Figma — é o padrão atual do mercado.',
      'Portfólio com estudos de caso reais, não só telas bonitas.',
    ],
  },
  educador: {
    key: 'educador',
    icon: '🎓',
    name: 'Educador Tech',
    sub: 'Seu perfil vocacional',
    color: 'var(--teal)',
    desc: `Você tem perfil de quem gosta de transmitir conhecimento — e isso é escasso e valioso em TI. O mercado de educação tecnológica é enorme e mal servido de bons professores. Ser educador tech não significa abrir mão de ser técnico: os melhores continuam praticando. Sua vocação de ensinar pode ser um diferencial extraordinário.`,
    attention: [
      'Educadores que não praticam perdem a credibilidade rapidamente. Continue construindo.',
      'Não confunda gostar de explicar com saber ensinar — são habilidades diferentes que precisam ser desenvolvidas.',
    ],
    steps: [
      'Solidifique uma área técnica antes de ensinar.',
      'Crie conteúdo sobre o que está aprendendo — isso reforça seu próprio aprendizado.',
      'Estude didática e como pessoas aprendem programação (andragogia técnica).',
    ],
  },
  infra_cloud: {
    key: 'infra_cloud',
    icon: '⚙️',
    name: 'Engenheiro de Infra',
    sub: 'Seu perfil vocacional',
    color: 'var(--amber)',
    desc: `Você pensa em sistemas, confiabilidade e escala — não apenas em escrever código. Isso é o perfil de DevOps, SRE e engenharia de plataforma. Essas áreas pagam muito bem e têm escassez real de profissionais qualificados. Você gosta que as coisas funcionem de verdade, não apenas que pareçam funcionar.`,
    attention: [
      'Infra moderna exige programação. Não é só configurar servidores — scripting é essencial.',
      'A curva de aprendizado é íngreme e cheia de conceitos abstratos. Paciência não é opcional.',
    ],
    steps: [
      'Linux de verdade — não só os comandos básicos.',
      'Docker, depois Kubernetes.',
      'Cloud: escolha AWS, GCP ou Azure e se aprofunde antes de diversificar.',
    ],
  },
  transicao: {
    key: 'transicao',
    icon: '🔄',
    name: 'Em Transição de Carreira',
    sub: 'Seu perfil vocacional',
    color: 'var(--coral)',
    desc: `Você tem algo que iniciantes não têm: experiência de mercado, maturidade e contexto de negócio. Isso é um trunfo real — especialmente em dados, produto, UX, QA e gestão. O erro mais comum de quem faz transição é querer entrar como dev júnior quando poderia usar sua experiência para entrar em posições mais sênior em áreas adjacentes.`,
    attention: [
      'Não subestime o que você já sabe. Sua experiência tem valor real em tech.',
      'Transição séria leva 12 a 24 meses de dedicação real. Quem promete menos está vendendo ilusão.',
    ],
    steps: [
      'Identifique a intersecção entre sua área anterior e TI.',
      'Construa projetos que usem suas duas bagagens ao mesmo tempo.',
      'Considere PM, Data Analyst, QA ou UX antes de ir direto para dev.',
    ],
  },
  repensar: {
    key: 'repensar',
    icon: '🤔',
    name: 'Vale Repensar',
    sub: 'Seu perfil vocacional',
    color: 'var(--text3)',
    desc: `Alguns dos seus padrões sugerem que TI pode não ser o caminho mais natural para você agora — não porque seja incapaz, mas porque os traços mais presentes (resistência à abstração, baixa tolerância à frustração, dificuldade de aprender de forma independente) são exatamente os que mais pesam negativamente na área. Isso não é sentença: é honestidade que pode te poupar anos de frustração.`,
    attention: [
      'Entrar em TI por dinheiro sem curiosidade genuína costuma gerar abandono em 6 a 12 meses.',
      'Isso não é uma porta fechada — é um convite para investigar melhor antes de investir tempo e dinheiro.',
    ],
    steps: [
      'Antes de decidir, faça um projeto de 30 dias com programação real, sem tutorial.',
      'Se após isso ainda não sentiu curiosidade, explore áreas que usam tecnologia sem programar.',
      'Considere gestão de projetos, operações, suporte técnico como ponto de entrada mais honesto.',
    ],
  },
};

  return { PROFILES };
});
