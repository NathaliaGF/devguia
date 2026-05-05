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
    timeEstimate: '1h/dia → ~24 semanas | 2h/dia → ~12 semanas',
    skills: [
      { name: 'Lógica de programação e algoritmos', why: 'A base de tudo. Sem isso, frameworks e linguagens não fazem sentido.', faqId: 'f-logica', highlights: ['dev_nato', 'generalista', 'qa_teste'] },
      { name: 'Terminal e linha de comando', why: 'Todo ambiente profissional exige isso. Não é opcional.', faqId: 'f-terminal', highlights: ['infra_cloud', 'seguranca', 'suporte'] },
      { name: 'Git e controle de versão', why: 'Você vai perder código se não usar. É o mínimo profissional.', faqId: 'f-git', highlights: ['dev_nato', 'infra_cloud', 'qa_teste'] },
      { name: 'Inglês técnico (leitura)', why: '90% da documentação boa está em inglês. Sem isso você depende de traduções erradas.', faqId: null, highlights: ['generalista', 'transicao'] },
      { name: 'Matemática de programador', why: 'Não é cálculo. É raciocínio abstrato, booleana e entender por que algoritmos funcionam.', faqId: 'f-mat', highlights: ['analitico', 'seguranca'] },
    ],
    readiness: [
      'Escrever um algoritmo de ordenação simples do zero sem consultar documentação',
      'Navegar, criar e deletar arquivos pelo terminal sem hesitar',
      'Criar um repositório, fazer commits e abrir um pull request no GitHub',
      'Ler um erro em inglês e identificar onde está o problema sem tradução automática',
    ],
    pitfalls: [
      'Pular para linguagem antes de entender lógica: a maioria que abandona faz exatamente isso.',
      'Ignorar o terminal achando que IDE substitui. Em servidor Linux de produção não tem interface gráfica.',
      'Traduzir tudo com IA sem treinar a leitura direta. Isso cria dependência que vai cobrar caro depois.',
    ],
    projetos: [
      { nome: 'Calculadora de CLI', desc: 'Programa que roda no terminal e aceita operações matemáticas via entrada de dados. Exige lógica, controle de fluxo e tratamento de erro.' },
      { nome: 'To-do list no terminal', desc: 'Lista de tarefas que salva em arquivo de texto. Treina leitura e escrita de arquivo, lógica e organização de código sem framework.' },
    ],
    resources: [
      { topic: 'lógica e matemática base', name: 'Khan Academy', desc: 'Lógica e matemática base sem custo.', url: 'https://pt.khanacademy.org/', free: true },
      { topic: 'fundamentos de computação', name: 'CS50 (Harvard)', desc: 'Curso introdutório forte para base computacional.', url: 'https://cs50.harvard.edu/', free: true },
      { topic: 'primeiros exercícios em português', name: 'Curso em Vídeo', desc: 'Lógica e Python em português, didático e gratuito.', url: 'https://www.cursoemvideo.com/', free: true, lang: 'pt' },
    ],
  },
  {
    id: 'fase2',
    title: 'Fase 2: Primeira linguagem de verdade',
    color: 'var(--teal)',
    duration: '4–8 meses',
    timeEstimate: '1h/dia → ~32 semanas | 2h/dia → ~16 semanas',
    skills: [
      { name: 'Python ou JavaScript: escolha um', why: 'Profundidade em uma linguagem vale mais do que rascunho em cinco.', faqId: 'f-lang', highlights: ['dev_nato', 'analitico', 'generalista'] },
      { name: 'Estruturas de dados básicas', why: 'Arrays, dicionários, listas. Você vai usar isso todo dia.', faqId: null, highlights: ['dev_nato', 'qa_teste'] },
      { name: 'Depuração e leitura de erros', why: 'Saber ler um erro é metade da solução. Devs que sabem depurar são muito mais produtivos.', faqId: null, highlights: ['qa_teste', 'infra_cloud', 'seguranca'] },
      { name: 'Construir projetos próprios pequenos', why: 'Tutoriais ensinam a copiar. Projetos próprios ensinam a pensar.', faqId: 'f-proj', highlights: ['dev_nato', 'generalista', 'transicao'] },
    ],
    readiness: [
      'Construir um projeto completo do zero, com entrada, processamento e saída, sem seguir tutorial passo a passo',
      'Ler uma mensagem de erro e localizar o arquivo e a linha do problema sem ajuda',
      'Explicar a diferença entre lista, dicionário e função para alguém que não programa',
      'Ter um projeto no GitHub com README que explica o que ele resolve e como rodar',
    ],
    pitfalls: [
      'Tutorial hell: assistir 40h de curso sem construir nada próprio. Isso não é aprender, é só sentir que aprende.',
      'Trocar de linguagem antes de terminar um projeto. Profundidade vence variedade.',
      'Não usar Git desde o primeiro projeto. Hábito de versionamento se cria cedo ou vira dívida técnica.',
    ],
    projetos: [
      { nome: 'Scraper de notícias ou produtos', desc: 'Coleta dados de um site e salva em CSV ou JSON. Exige requests, parsing HTML e estrutura de dados básica.' },
      { nome: 'Bot de Telegram ou Discord', desc: 'Responde a comandos simples via API da plataforma. Exige HTTP, lógica condicional e gestão de estado básica.' },
      { nome: 'Dashboard de despesas pessoais', desc: 'Lê planilha ou CSV, processa e gera gráficos simples. Treina dados, visualização e lógica de negócio com contexto real.' },
    ],
    resources: [
      { topic: 'JavaScript e web', name: 'MDN Web Docs', desc: 'Referência gratuita para HTML, CSS e JavaScript.', url: 'https://developer.mozilla.org/', free: true },
      { topic: 'prática guiada de linguagem', name: 'Exercism', desc: 'Exercícios práticos guiados em várias linguagens.', url: 'https://exercism.org/', free: true },
      { topic: 'Python do zero em português', name: 'Python para Zumbis (YouTube)', desc: 'Python do zero em português, com exercícios e clareza didática.', url: 'https://www.youtube.com/playlist?list=PLUukMN0DTKCtbdbDVqV98R2ck04HQvqv2', free: true, lang: 'pt' },
    ],
  },
  {
    id: 'fase3',
    title: 'Fase 3: Construindo coisas reais',
    color: 'var(--amber)',
    duration: '6–12 meses',
    timeEstimate: '1h/dia → ~48 semanas | 2h/dia → ~24 semanas',
    skills: [
      { name: 'Área de especialização', why: 'Generalista demais é difícil de contratar. Escolha uma direção.', faqId: 'f-areas', highlights: ['generalista', 'transicao'] },
      { name: 'SQL e banco de dados relacional', why: 'Quase todo sistema usa banco. É transversal a todas as áreas.', faqId: null, highlights: ['analitico', 'dev_nato', 'produto'] },
      { name: 'Portfólio com 3+ projetos reais', why: 'Certificado não contrata ninguém. Projeto funcionando, sim.', faqId: 'f-port', highlights: ['dev_nato', 'transicao', 'generalista'] },
      { name: 'Contribuição em open source', why: 'Mostra que você sabe trabalhar com código de outras pessoas, habilidade subestimada.', faqId: 'f-oss', highlights: ['dev_nato', 'developer_advocate'] },
    ],
    readiness: [
      'Ter 2+ projetos no GitHub com problema real, README claro e código que outra pessoa consegue entender',
      'Escrever e otimizar uma query SQL com JOIN, filtro de data e agregação',
      'Explicar em entrevista o que cada projeto resolve e por que você tomou as decisões que tomou',
      'Ter revisado o código de outra pessoa com comentário técnico útil',
    ],
    pitfalls: [
      'Acumular certificados sem construir projetos. Recrutadores abrem o GitHub, não o PDF de certificado.',
      'Evitar banco de dados achando que front ou back-end resolve. SQL aparece em toda área técnica.',
      'Não documentar projetos. Código sem contexto parece trabalho escolar, não trabalho profissional.',
    ],
    projetos: [
      { nome: 'API REST com autenticação', desc: 'Back-end com login, JWT e pelo menos um endpoint protegido. Exige banco, rotas, middleware e segurança básica.' },
      { nome: 'Dashboard com dados públicos', desc: 'Consome API ou dataset aberto, processa e exibe em interface. Exige integração real, não dados inventados.' },
      { nome: 'Clone funcional de uma feature conhecida', desc: 'Reimplementar uma funcionalidade específica, como encurtador de URL ou sistema de autenticação. Mostra que você entende o problema, não só a interface.' },
    ],
    resources: [
      { topic: 'trilha por especialidade', name: 'roadmap.sh', desc: 'Trilhas visuais abertas por área.', url: 'https://roadmap.sh/', free: true },
      { topic: 'SQL de verdade', name: 'SQLBolt', desc: 'SQL introdutório gratuito, direto ao ponto.', url: 'https://sqlbolt.com/', free: true },
      { topic: 'projetos maiores em português', name: 'Full Cycle (YouTube)', desc: 'Back-end, microsserviços e DevOps em português, com profundidade real.', url: 'https://www.youtube.com/@fullcycle', free: true, lang: 'pt' },
    ],
  },
  {
    id: 'fase4',
    title: 'Fase 4: Preparação para o mercado',
    color: 'var(--blue)',
    duration: 'Contínuo',
    timeEstimate: 'Prática contínua integrada ao trabalho ou à busca ativa',
    skills: [
      { name: 'Comunicação técnica e escrita', why: 'Devs que comunicam bem avançam mais rápido que os que só codificam bem.', faqId: 'f-soft', highlights: ['tech_lead', 'developer_advocate', 'educador'] },
      { name: 'Entrevistas técnicas', why: 'Saber programar e saber ser entrevistado são habilidades completamente diferentes.', faqId: null, highlights: ['dev_nato', 'generalista', 'transicao'] },
      { name: 'CLT x PJ, salários, negociação', why: 'Você vai perder dinheiro se não entender os números do seu próprio contrato.', faqId: 'f-clt', highlights: ['transicao', 'suporte'] },
      { name: 'Networking real', why: 'A maioria das vagas boas não é anunciada. Pessoas contratam pessoas.', faqId: 'f-net', highlights: ['developer_advocate', 'transicao', 'generalista'] },
    ],
    readiness: [
      'Explicar um projeto seu em 2 minutos de forma clara para alguém de fora da área',
      'Resolver um problema de algoritmo básico em entrevista sem travar, explicando o raciocínio em voz alta',
      'Calcular a diferença líquida entre uma proposta CLT e uma PJ equivalente',
      'Ter pelo menos 3 contatos do setor com quem consegue conversar sobre vagas sem precisar de apresentação formal',
    ],
    pitfalls: [
      'Mandar currículo sem revisar LinkedIn e GitHub. São o primeiro ponto de contato com recrutadores.',
      'Aceitar a primeira oferta sem negociar. Toda proposta tem margem, especialmente as que chegam sem histórico.',
      'Não praticar entrevista em voz alta. Escrever solução é diferente de explicar enquanto resolve.',
    ],
    projetos: [
      { nome: 'Site pessoal com portfólio', desc: 'Apresentação profissional com projetos selecionados, links e forma de contato. Exige HTML/CSS funcional e copywriting técnico.' },
      { nome: 'Post técnico sobre um problema que você resolveu', desc: 'Escreva sobre o problema, a solução e o que aprendeu. Treina comunicação, posicionamento e ajuda quem vem depois.' },
    ],
    resources: [
      { topic: 'faixa salarial realista', name: 'Levels.fyi', desc: 'Faixas salariais e nivelamento de carreira.', url: 'https://levels.fyi/', free: true },
      { topic: 'empresa e cultura antes da entrevista', name: 'Glassdoor', desc: 'Avaliações e faixas de salário por empresa.', url: 'https://glassdoor.com/', free: true },
      { topic: 'mercado e entrevistas em português', name: 'Programadores Brasil (YouTube)', desc: 'Dicas de carreira, entrevistas e mercado de trabalho em português.', url: 'https://www.youtube.com/@programadoresbrasil', free: true, lang: 'pt' },
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
  generalista: 'fase1',
  repensar: 'fase1',
};

const PROFILE_ROADMAP_HINT = {
  dev_nato: 'Seu perfil combina com estudo profundo: use a Fase 1 como trilha semanal (lógica, terminal, Git) antes de acelerar em framework ou linguagem.',
  analitico: 'Dados e SQL aparecem com força na Fase 3. Abra essa fase no roadmap e volte à Fase 1 só para tapar lacunas de base.',
  ux_design: 'A Fase 2 (primeira linguagem + projetos pequenos) é o melhor encaixe para quem pensa em produto e interface; complemente com HTML/CSS do glossário.',
  educador: 'Antes de ensinar em público, consolide uma base técnica na Fase 1. Alunos percebem quando o professor não pratica o que explica.',
  infra_cloud: 'Linux, automação e primeira linguagem concentram-se na Fase 2; use a Fase 1 para o que ainda não for hábito (terminal, Git, lógica).',
  seguranca: 'Segurança séria nasce de base técnica. Use a Fase 2 para linguagem e ambiente real, depois volte ao FAQ e ao glossário para autenticação, redes e cloud.',
  qa_teste: 'A Fase 3 é a melhor porta para QA forte: projetos, SQL e leitura de sistemas reais ajudam mais do que decorar ferramenta de teste.',
  produto: 'Abra a Fase 3 para conectar projeto real, SQL e portfólio narrável. Produto forte depende de contexto técnico e clareza de decisão.',
  tech_lead: 'A Fase 4 é a mais útil para o seu momento: comunicação técnica, entrevista, mercado e networking sustentam liderança com credibilidade.',
  developer_advocate: 'Seu melhor uso do site está na Fase 4: escrita, comunicação e posicionamento. Sem base técnica sólida nas fases anteriores, advocacy vira marketing vazio.',
  suporte: 'Comece pela Fase 1 para consolidar terminal, lógica e Git. Isso transforma suporte de script repetitivo em porta real para crescer dentro de tecnologia.',
  transicao: 'A Fase 1 organiza o básico que sustenta a transição; na Fase 3 você transforma experiência prévia + TI em portfólio narrável.',
  generalista: 'Você ainda está descobrindo sua direção. Use a Fase 1 como base sólida e, em paralelo, explore os testes rápidos por área para identificar onde o interesse é mais genuíno.',
  repensar: 'Trate a Fase 1 como experimento honesto de 30 dias: se lógica e frustração técnica não gerarem curiosidade, revise o plano antes de gastar muito.',
};

  return { PHASES, PROFILE_ROADMAP_PHASE, PROFILE_ROADMAP_HINT };
});
