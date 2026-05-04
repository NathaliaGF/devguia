(function (root, factory) {
  const data = factory();
  if (typeof module !== 'undefined' && module.exports) module.exports = data;
  root.DEVGUIA_DATA = root.DEVGUIA_DATA || {};
  root.DEVGUIA_DATA.roadmap = data;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
const PHASES = [
  {
    id: 'fase1',
    title: 'Fase 1: Fundamentos que não têm atalho',
    color: 'var(--purple)',
    duration: '3–6 meses',
    skills: [
      { name: 'Lógica de programação e algoritmos', why: 'A base de tudo. Sem isso, frameworks e linguagens não fazem sentido.', faqId: 'f-logica' },
      { name: 'Terminal e linha de comando', why: 'Todo ambiente profissional exige isso. Não é opcional.', faqId: 'f-terminal' },
      { name: 'Git e controle de versão', why: 'Você vai perder código se não usar. É o mínimo profissional.', faqId: 'f-git' },
      { name: 'Inglês técnico (leitura)', why: '90% da documentação boa está em inglês. Sem isso você depende de traduções erradas.', faqId: null },
      { name: 'Matemática de programador', why: 'Não é cálculo. É raciocínio abstrato, booleana e entender por que algoritmos funcionam.', faqId: 'f-mat' },
    ],
    resources: [
      { name: 'Khan Academy', desc: 'Lógica e matemática base sem custo.', url: 'https://pt.khanacademy.org/', free: true },
      { name: 'CS50', desc: 'Curso introdutório forte para base computacional.', url: 'https://cs50.harvard.edu/', free: true },
      { name: 'Think Like a Programmer', desc: 'Livro excelente para raciocínio, mas costuma ser pago.', free: false },
    ],
  },
  {
    id: 'fase2',
    title: 'Fase 2: Primeira linguagem de verdade',
    color: 'var(--teal)',
    duration: '4–8 meses',
    skills: [
      { name: 'Python ou JavaScript — escolha um', why: 'Profundidade em uma linguagem vale mais do que rascunho em cinco.', faqId: 'f-lang' },
      { name: 'Estruturas de dados básicas', why: 'Arrays, dicionários, listas. Você vai usar isso todo dia.', faqId: null },
      { name: 'Depuração e leitura de erros', why: 'Saber ler um erro é metade da solução. Devs que sabem depurar são muito mais produtivos.', faqId: null },
      { name: 'Construir projetos próprios pequenos', why: 'Tutoriais ensinam a copiar. Projetos próprios ensinam a pensar.', faqId: 'f-proj' },
    ],
    resources: [
      { name: 'MDN Web Docs', desc: 'Referência gratuita para HTML, CSS e JavaScript.', url: 'https://developer.mozilla.org/', free: true },
      { name: 'Exercism', desc: 'Exercícios práticos guiados em várias linguagens.', url: 'https://exercism.org/', free: true },
      { name: 'JavaScript: The Good Parts', desc: 'Livro curto e útil, mas normalmente pago.', free: false },
    ],
  },
  {
    id: 'fase3',
    title: 'Fase 3: Construindo coisas reais',
    color: 'var(--amber)',
    duration: '6–12 meses',
    skills: [
      { name: 'Área de especialização', why: 'Generalista demais é difícil de contratar. Escolha uma direção.', faqId: 'f-areas' },
      { name: 'SQL e banco de dados relacional', why: 'Quase todo sistema usa banco. É transversal a todas as áreas.', faqId: null },
      { name: 'Portfólio com 3+ projetos reais', why: 'Certificado não contrata ninguém. Projeto funcionando, sim.', faqId: 'f-port' },
      { name: 'Contribuição em open source', why: 'Mostra que você sabe trabalhar com código de outras pessoas — habilidade subestimada.', faqId: 'f-oss' },
    ],
    resources: [
      { name: 'roadmap.sh', desc: 'Trilhas visuais abertas por área.', url: 'https://roadmap.sh/', free: true },
      { name: 'SQLBolt', desc: 'SQL introdutório gratuito, direto ao ponto.', url: 'https://sqlbolt.com/', free: true },
      { name: 'Designing Data-Intensive Applications', desc: 'Livro forte para maturidade técnica, mas pago.', free: false },
    ],
  },
  {
    id: 'fase4',
    title: 'Fase 4: Preparação para o mercado',
    color: 'var(--blue)',
    duration: 'Contínuo',
    skills: [
      { name: 'Comunicação técnica e escrita', why: 'Devs que comunicam bem avançam mais rápido que os que só codificam bem.', faqId: 'f-soft' },
      { name: 'Entrevistas técnicas', why: 'Saber programar e saber ser entrevistado são habilidades completamente diferentes.', faqId: null },
      { name: 'CLT x PJ, salários, negociação', why: 'Você vai perder dinheiro se não entender os números do seu próprio contrato.', faqId: 'f-clt' },
      { name: 'Networking real', why: 'A maioria das vagas boas não é anunciada. Pessoas contratam pessoas.', faqId: 'f-net' },
    ],
    resources: [
      { name: 'Levels.fyi', desc: 'Faixas salariais e nivelamento de carreira.', url: 'https://levels.fyi/', free: true },
      { name: 'Glassdoor', desc: 'Avaliações e faixas de salário por empresa.', url: 'https://glassdoor.com/', free: true },
      { name: 'Cracking the Coding Interview', desc: 'Clássico para preparação, mas geralmente pago.', free: false },
    ],
  },
];

const PROFILE_ROADMAP_PHASE = {
  dev_nato: 'fase1',
  analitico: 'fase3',
  ux_design: 'fase2',
  educador: 'fase1',
  infra_cloud: 'fase2',
  seguranca: 'fase2',
  qa_teste: 'fase3',
  produto: 'fase3',
  tech_lead: 'fase4',
  developer_advocate: 'fase4',
  suporte: 'fase1',
  transicao: 'fase1',
  repensar: 'fase1',
};

const PROFILE_ROADMAP_HINT = {
  dev_nato: 'Seu perfil combina com estudo profundo: use a Fase 1 como trilha semanal (lógica, terminal, Git) antes de acelerar em framework ou linguagem.',
  analitico: 'Dados e SQL aparecem com força na Fase 3 — abra essa fase no roadmap e volte à Fase 1 só para tapar lacunas de base.',
  ux_design: 'A Fase 2 (primeira linguagem + projetos pequenos) é o melhor encaixe para quem pensa em produto e interface; complemente com HTML/CSS do glossário.',
  educador: 'Antes de ensinar em público, consolide uma base técnica na Fase 1 — alunos percebem quando o professor não pratica o que explica.',
  infra_cloud: 'Linux, automação e primeira linguagem concentram-se na Fase 2; use a Fase 1 para o que ainda não for hábito (terminal, Git, lógica).',
  seguranca: 'Segurança séria nasce de base técnica. Use a Fase 2 para linguagem e ambiente real, depois volte ao FAQ e ao glossário para autenticação, redes e cloud.',
  qa_teste: 'A Fase 3 é a melhor porta para QA forte: projetos, SQL e leitura de sistemas reais ajudam mais do que decorar ferramenta de teste.',
  produto: 'Abra a Fase 3 para conectar projeto real, SQL e portfólio narrável. Produto forte depende de contexto técnico e clareza de decisão.',
  tech_lead: 'A Fase 4 é a mais útil para o seu momento: comunicação técnica, entrevista, mercado e networking sustentam liderança com credibilidade.',
  developer_advocate: 'Seu melhor uso do site está na Fase 4: escrita, comunicação e posicionamento. Sem base técnica sólida nas fases anteriores, advocacy vira marketing vazio.',
  suporte: 'Comece pela Fase 1 para consolidar terminal, lógica e Git. Isso transforma suporte de script repetitivo em porta real para crescer dentro de tecnologia.',
  transicao: 'A Fase 1 organiza o básico que sustenta a transição; na Fase 3 você transforma experiência prévia + TI em portfólio narrável.',
  repensar: 'Trate a Fase 1 como experimento honesto de 30 dias: se lógica e frustração técnica não gerarem curiosidade, revise o plano antes de gastar muito.',
};

  return { PHASES, PROFILE_ROADMAP_PHASE, PROFILE_ROADMAP_HINT };
});
