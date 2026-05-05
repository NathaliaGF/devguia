(function (root, factory) {
  const data = factory();
  if (typeof module !== 'undefined' && module.exports) module.exports = data;
  root.DEVGUIA_DATA = root.DEVGUIA_DATA || {};
  root.DEVGUIA_DATA.catalog = data;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
const SCREEN_ORDER = ['home', 'testes', 'quiz', 'result', 'roadmap', 'faq', 'glossario', 'mitos'];
const GITHUB_REPO = 'nathaliagf/devguia';
const GOATCOUNTER_CODE = 'SEU-CODIGO';
const QUIZ_PROGRESS_KEY = 'quiz_progress_v2';
const EASY_READ_KEY = 'easy_read';
const APP_STATE_KEY = 'devguia_state_v1';
const CHECKLIST_KEY = 'devguia_checklist_v1';
const FREE_FILTER_KEY = 'devguia_free_only_v1';
const DIAGNOSTIC_RESULT_KEY = 'devguia_diagnostic_result_v1';
const CAT_TOOLTIPS = {
  fundamentos: 'Conceitos base que todo dev precisa dominar',
  ferramentas: 'Ferramentas do dia a dia de desenvolvimento',
  linguagens: 'Dúvidas sobre linguagens de programação',
  carreira: 'Como crescer e se posicionar no mercado',
  educação: 'Faculdade, cursos e formas de aprender',
  mercado: 'Vagas, salários e realidade do setor',
};
const CAT_COLORS = {
  geral: 'var(--purple)',
  'front-end': 'var(--pink)',
  'back-end': 'var(--blue)',
  infra: 'var(--amber)',
  fundamentos: 'var(--teal)',
  seguranca: 'var(--coral)',
  dados: 'var(--teal)',
  cloud: 'var(--blue)',
  qa: 'var(--amber)',
  produto: 'var(--pink)',
};
const AREAS_INFO = {
  front: { name: 'Front-end', desc: 'Interfaces e experiência visual do usuário' },
  back: { name: 'Back-end', desc: 'Lógica de sistemas, APIs e dados' },
  dados: { name: 'Dados', desc: 'Análise, métricas e insights' },
  ux: { name: 'UX/Design', desc: 'Produto centrado na experiência de uso' },
  infra: { name: 'Infra/Cloud', desc: 'Confiabilidade, deploy e escala' },
  seguranca: { name: 'Segurança', desc: 'Defesa, monitoramento e resposta a incidentes' },
  qa: { name: 'QA', desc: 'Qualidade e testes de software' },
  ensino: { name: 'Educação Tech', desc: 'Ensino e mentoria em tecnologia' },
};
const AREA_COMPARISONS = [
  {
    key: 'front',
    name: 'Front-end',
    accent: 'var(--pink)',
    badge: 'Interface e experiência',
    rotina: 'Você vai lidar com estados de tela, acessibilidade, APIs, responsividade e inconsistências entre navegadores.',
    dificuldade: 'Média. Parece fácil no começo, mas cresce rápido quando entram estados, performance e acessibilidade.',
    curva: 'Rápida para ver resultado, mas longa para ficar realmente bom.',
    tipo: 'Visual, iterativo, com bastante contato com UX, produto e comportamento do usuário.',
  },
  {
    key: 'back',
    name: 'Back-end',
    accent: 'var(--blue)',
    badge: 'Lógica e sistemas',
    rotina: 'Você vai viver entre APIs, autenticação, banco de dados, filas, performance e efeitos colaterais em produção.',
    dificuldade: 'Média para alta. A complexidade aparece menos na tela e mais em consistência, segurança e escala.',
    curva: 'Mais lenta no início, porque muito valor está em abstração e modelagem.',
    tipo: 'Analítico, abstrato e orientado a regra de negócio, dados e confiabilidade.',
  },
  {
    key: 'dados',
    name: 'Dados',
    accent: 'var(--teal)',
    badge: 'Análise e decisão',
    rotina: 'Você vai limpar dados ruins, escrever SQL, montar análises, discutir métricas e defender interpretação correta.',
    dificuldade: 'Média. Menos foco em arquitetura de produto, mais em qualidade da pergunta e leitura correta do contexto.',
    curva: 'Boa para quem já vem de negócio ou gosta de números; ruim para quem espera resposta exata sempre.',
    tipo: 'Investigativo, orientado a métricas, contexto de negócio e comunicação de achados.',
  },
  {
    key: 'infra',
    name: 'Infra/Cloud',
    accent: 'var(--amber)',
    badge: 'Escala e confiabilidade',
    rotina: 'Você vai cuidar de deploy, pipelines, Linux, containers, incidentes, permissões e sistemas distribuídos.',
    dificuldade: 'Alta. Exige conforto com operação, troubleshooting longo e responsabilidade por ambiente real.',
    curva: 'Mais íngreme. O começo pode ser seco, mas a vantagem aparece muito quando você ganha base.',
    tipo: 'Operacional, sistêmico, com peso forte em automação, risco e resiliência.',
  },
  {
    key: 'seguranca',
    name: 'Segurança',
    accent: 'var(--coral)',
    badge: 'Risco e defesa',
    rotina: 'Você vai analisar vulnerabilidades, acesso, logs, incidentes, hardening, permissão e comportamento suspeito.',
    dificuldade: 'Alta. Cobra base técnica de sistema, rede, cloud e muita disciplina de processo.',
    curva: 'Íngreme. O glamour de internet some rápido e sobra muito estudo de fundamento e investigação.',
    tipo: 'Investigativo, adversarial e orientado a risco, prevenção, detecção e resposta.',
  },
  {
    key: 'qa',
    name: 'QA',
    accent: 'var(--teal)',
    badge: 'Qualidade e confiança',
    rotina: 'Você vai desenhar cenários, automatizar testes, investigar regressão, validar release e reduzir risco de produção.',
    dificuldade: 'Média para alta. Parece simples para quem olha de fora, mas fica técnico rápido quando entra API, automação e performance.',
    curva: 'Boa para entrada, mas só cresce de verdade quando você aprende sistema, evidência e estratégia de teste.',
    tipo: 'Analítico, detalhista e orientado a comportamento real do produto sob pressão.',
  },
  {
    key: 'produto',
    name: 'Produto',
    accent: 'var(--pink)',
    badge: 'Prioridade e direção',
    rotina: 'Você vai transformar problema difuso em hipótese, prioridade, alinhamento com time e decisão de escopo.',
    dificuldade: 'Média. Menos sobre escrever código, mais sobre decidir bem com contexto incompleto e custo real.',
    curva: 'Boa para quem já vem de negócio, comunicação ou operação; ruim para quem quer resposta técnica exata o tempo todo.',
    tipo: 'Colaborativo, ambíguo e orientado a impacto, negociação e clareza de problema.',
  },
  {
    key: 'suporte',
    name: 'Suporte',
    accent: 'var(--amber)',
    badge: 'Entrada prática',
    rotina: 'Você vai lidar com incidente, acesso, ambiente, documentação, triagem e muita interação com usuário interno ou externo.',
    dificuldade: 'Média. Menos abstrato que outras trilhas no começo, mas exige calma, organização e leitura boa de contexto.',
    curva: 'Boa porta de entrada para quem precisa aprender sistema em uso real antes de aprofundar trilha técnica.',
    tipo: 'Prático, comunicativo e orientado a resolver problema concreto sem romance técnico.',
  },
];
const QUICK_AREA_TESTS = {
  dados: {
    title: 'Teste rápido: Dados combina com você?',
    intro: 'Microdiagnóstico curto para ver se você gosta mais de pergunta, métrica e interpretação do que de interface ou operação.',
    questions: [
      { text: 'Quando aparece um problema no negócio, o que mais te atrai?', options: [{ text: 'Entender padrão nos números', score: 2 }, { text: 'Corrigir a implementação técnica', score: 0 }, { text: 'Melhorar a experiência da tela', score: 0 }] },
      { text: 'Você lida bem com resposta incompleta e hipótese?', options: [{ text: 'Sim, se eu puder investigar com dado', score: 2 }, { text: 'Prefiro processo fechado e previsível', score: 0 }, { text: 'Só se o usuário final estiver visível na solução', score: 1 }] },
      { text: 'Qual atividade parece menos cansativa?', options: [{ text: 'Limpar base bagunçada até ela ficar confiável', score: 2 }, { text: 'Configurar ambiente e deploy', score: 0 }, { text: 'Debugar CSS e estado visual', score: 0 }] },
      { text: 'O que te dá mais sensação de progresso?', options: [{ text: 'Transformar métrica em decisão melhor', score: 2 }, { text: 'Subir sistema sem cair', score: 0 }, { text: 'Entregar tela nova para o usuário', score: 0 }] },
    ],
    bands: [
      { min: 7, label: 'Fit forte com Dados & IA', copy: 'Vale testar SQL, análise exploratória, dashboard e estatística aplicada antes de cair em hype de IA.' },
      { min: 4, label: 'Sinal misto', copy: 'Dados pode combinar como trilha secundária, especialmente se você também gosta de produto ou back-end.' },
      { min: 0, label: 'Fit fraco por enquanto', copy: 'Talvez você prefira construir sistema, operar ambiente ou trabalhar mais perto da interface.' },
    ],
  },
  seguranca: {
    title: 'Teste rápido: Segurança combina com você?',
    intro: 'Aqui a pergunta real não é se você acha a área “legal”, e sim se você tolera investigação, risco e base técnica chata.',
    questions: [
      { text: 'O que mais desperta sua atenção em um sistema?', options: [{ text: 'Brecha, permissão estranha e comportamento suspeito', score: 2 }, { text: 'Performance e escala', score: 1 }, { text: 'Visual e usabilidade', score: 0 }] },
      { text: 'Como você reage a regra rígida e checklist?', options: [{ text: 'Se reduz risco, faz sentido para mim', score: 2 }, { text: 'Tolero, mas prefiro liberdade total', score: 1 }, { text: 'Detesto processo detalhado', score: 0 }] },
      { text: 'O que parece mais interessante?', options: [{ text: 'Investigar log e incidente até fechar causa', score: 2 }, { text: 'Criar feature nova', score: 0 }, { text: 'Montar dashboard executivo', score: 0 }] },
      { text: 'Qual desconforto você tolera melhor?', options: [{ text: 'Ler documentação e protocolo por horas', score: 2 }, { text: 'Conversar com cliente o dia todo', score: 0 }, { text: 'Ajustar pixel e microinteração', score: 0 }] },
    ],
    bands: [
      { min: 7, label: 'Fit forte com Segurança', copy: 'Vale experimentar trilha de autenticação, redes, logs, hardening e laboratório controlado antes de qualquer fantasia de “hacker”.' },
      { min: 4, label: 'Sinal misto', copy: 'Segurança pode funcionar como especialização futura se você construir base em infra, back-end ou QA primeiro.' },
      { min: 0, label: 'Fit fraco por enquanto', copy: 'Talvez você prefira trilhas menos adversariais e menos centradas em risco e processo rígido.' },
    ],
  },
  produto: {
    title: 'Teste rápido: Produto combina com você?',
    intro: 'Esse teste mede tolerância a ambiguidade, priorização e conversa difícil, não amor por post-it.',
    questions: [
      { text: 'Quando um time trava, o que você tende a fazer?', options: [{ text: 'Organizar problema e priorizar caminho', score: 2 }, { text: 'Ir direto para a implementação', score: 0 }, { text: 'Esperar alguém decidir', score: 0 }] },
      { text: 'Você lida bem com decisão sem resposta perfeita?', options: [{ text: 'Sim, desde que eu tenha contexto suficiente', score: 2 }, { text: 'Mais ou menos', score: 1 }, { text: 'Não, prefiro certo ou errado', score: 0 }] },
      { text: 'O que te parece mais útil em uma reunião boa?', options: [{ text: 'Sair com hipótese, dono e próximo passo claro', score: 2 }, { text: 'Sair com tarefa técnica definida', score: 1 }, { text: 'Nem gosto de reunião', score: 0 }] },
      { text: 'Qual atividade parece mais natural?', options: [{ text: 'Traduzir necessidade de negócio para time técnico', score: 2 }, { text: 'Escrever automação de teste', score: 0 }, { text: 'Operar ambiente de produção', score: 0 }] },
    ],
    bands: [
      { min: 7, label: 'Fit forte com Produto', copy: 'Vale testar discovery, priorização, escrita de problema e análise de métrica com um time ou projeto real.' },
      { min: 4, label: 'Sinal misto', copy: 'Produto pode combinar se você também gosta de UX, dados ou comunicação entre áreas.' },
      { min: 0, label: 'Fit fraco por enquanto', copy: 'Talvez você prefira uma trilha mais técnica, com menos ambiguidade e menos coordenação entre áreas.' },
    ],
  },
  infra: {
    title: 'Teste rápido: Infra combina com você?',
    intro: 'Infra parece invisível para quem está começando, mas o trabalho real mistura automação, incidentes e responsabilidade operacional.',
    questions: [
      { text: 'O que parece mais satisfatório?', options: [{ text: 'Eliminar tarefa manual com script ou pipeline', score: 2 }, { text: 'Desenhar interface nova', score: 0 }, { text: 'Escrever texto de documentação pública', score: 0 }] },
      { text: 'Como você lida com sistema crítico fora do horário ideal?', options: [{ text: 'Se eu tiver contexto e ferramenta, encaro', score: 2 }, { text: 'Tolero pouco', score: 1 }, { text: 'Evito ao máximo esse tipo de responsabilidade', score: 0 }] },
      { text: 'Qual cenário te atrai mais?', options: [{ text: 'Deploy confiável, observabilidade e rollback', score: 2 }, { text: 'Pesquisa com usuário', score: 0 }, { text: 'Modelagem estatística', score: 0 }] },
      { text: 'Você tolera curva de aprendizado seca e abstrata?', options: [{ text: 'Sim, se o sistema ficar mais robusto', score: 2 }, { text: 'Depende', score: 1 }, { text: 'Não, preciso de retorno visual rápido', score: 0 }] },
    ],
    bands: [
      { min: 7, label: 'Fit forte com Infra & Cloud', copy: 'Vale testar Linux, containers, pipeline e ambiente real em nuvem com projeto pequeno de ponta a ponta.' },
      { min: 4, label: 'Sinal misto', copy: 'Infra pode combinar como especialização futura se você já gosta de back-end, QA ou segurança.' },
      { min: 0, label: 'Fit fraco por enquanto', copy: 'Talvez você prefira trilhas com retorno mais visual ou mais próximas de negócio e produto.' },
    ],
  },
};
const HONESTY_FILTERS = [
  'Você quer entrar só pelo salário, mas não tolera frustração técnica nem estudo contínuo.',
  'Você odeia problemas abstratos e espera motivação instantânea toda vez que algo trava.',
  'Você precisa de validação rápida o tempo todo e se desmonta quando um bug leva horas para fechar.',
  'Você quer “decorar ferramenta” sem construir base de lógica, leitura, escrita técnica e autonomia.',
];
const FAQ_TAGS = {
  'f-logica': ['iniciante', 'transição'],
  'f-terminal': ['iniciante', 'entrevista'],
  'f-git': ['iniciante', 'entrevista'],
  'f-mat': ['iniciante', 'transição'],
  'f-lang': ['iniciante', 'transição'],
  'f-proj': ['iniciante', 'entrevista'],
  'f-port': ['iniciante', 'mercado', 'entrevista'],
  'f-oss': ['iniciante', 'mercado'],
  'f-areas': ['iniciante', 'transição'],
  'f-ia': ['iniciante', 'mercado'],
  'f-facul': ['iniciante', 'transição', 'mercado'],
  'f-clt': ['mercado', 'transição'],
  'f-soft': ['mercado', 'entrevista'],
  'f-net': ['mercado', 'entrevista', 'iniciante'],
  'f-trans': ['transição', 'mercado'],
  'f-ai-job': ['mercado', 'transição'],
  'f-qa': ['iniciante', 'mercado'],
  'f-seg-base': ['iniciante', 'transição'],
  'f-pentest': ['mercado', 'entrevista'],
  'f-soc': ['mercado', 'transição'],
  'f-produto': ['transição', 'mercado'],
  'f-po-pm': ['mercado', 'transição'],
  'f-suporte': ['iniciante', 'transição'],
  'f-helpdesk': ['mercado', 'transição'],
  'f-dados-inicio': ['iniciante', 'transição'],
  'f-bi-ds': ['iniciante', 'mercado'],
  'f-cloud': ['iniciante', 'entrevista'],
  'f-devops-jr': ['mercado', 'transição'],
  'f-techlead': ['mercado', 'entrevista'],
  'f-devrel': ['mercado', 'transição'],
  'f-entrevista-dados': ['entrevista', 'mercado'],
  'f-entrevista-seg': ['entrevista', 'mercado'],
  'f-salario-dados': ['mercado', 'transição'],
  'f-freela': ['mercado', 'iniciante'],
};
const RECURSOS = {
  dev_nato: {
    livros: [
      { nome: 'The Pragmatic Programmer', autor: 'Hunt & Thomas', desc: 'O livro de carreira mais recomendado por devs sérios. Atemporal.' },
      { nome: 'Clean Code', autor: 'Robert C. Martin', desc: 'Como escrever código que outras pessoas conseguem ler e manter.' },
      { nome: 'Structure and Interpretation of Computer Programs', autor: 'Abelson & Sussman', desc: 'Gratuito online. Base de pensamento computacional.' },
    ],
    sites: [
      { nome: 'roadmap.sh', url: 'https://roadmap.sh', desc: 'Guias visuais de trilhas para especialidades.' },
      { nome: 'CS50 (Harvard)', url: 'https://cs50.harvard.edu', desc: 'Curso introdutório de ciência da computação gratuito.' },
      { nome: 'MDN Web Docs', url: 'https://developer.mozilla.org', desc: 'Documentação de referência para web.' },
    ],
    comunidades: [
      { nome: 'Dev.to', url: 'https://dev.to', desc: 'Comunidade de devs para ler e publicar artigos técnicos.' },
      { nome: 'Lobste.rs', url: 'https://lobste.rs', desc: 'Links técnicos de alta qualidade.' },
    ],
  },
  analitico: {
    livros: [
      { nome: 'Storytelling with Data', autor: 'Cole Nussbaumer', desc: 'Visualizações que comunicam decisões.' },
      { nome: 'Python for Data Analysis', autor: 'Wes McKinney', desc: 'Pandas explicado por seu criador.' },
      { nome: 'Naked Statistics', autor: 'Charles Wheelan', desc: 'Estatística aplicada sem complicação.' },
    ],
    sites: [
      { nome: 'Kaggle', url: 'https://kaggle.com', desc: 'Datasets e competições para praticar análise.' },
      { nome: 'Mode Analytics Blog', url: 'https://mode.com/blog', desc: 'Artigos práticos de SQL e análise.' },
      { nome: 'StatQuest', url: 'https://youtube.com/@statquest', desc: 'Canal didático de estatística e ML.' },
    ],
    comunidades: [
      { nome: 'r/dataengineering', url: 'https://reddit.com/r/dataengineering', desc: 'Comunidade técnica de engenharia de dados.' },
      { nome: 'dbt Community', url: 'https://community.getdbt.com', desc: 'Fórum da ferramenta dbt.' },
    ],
  },
  ux_design: {
    livros: [
      { nome: 'The Design of Everyday Things', autor: 'Don Norman', desc: 'Livro fundacional de design centrado no usuário.' },
      { nome: "Don't Make Me Think", autor: 'Steve Krug', desc: 'Guia direto de usabilidade web.' },
      { nome: 'Continuous Discovery Habits', autor: 'Teresa Torres', desc: 'Pesquisa contínua em produto.' },
    ],
    sites: [
      { nome: 'Nielsen Norman Group', url: 'https://nngroup.com', desc: 'Referência em pesquisa de UX.' },
      { nome: 'Figma Community', url: 'https://figma.com/community', desc: 'Templates e componentes para estudar design.' },
      { nome: 'Laws of UX', url: 'https://lawsofux.com', desc: 'Leis psicológicas aplicadas a interfaces.' },
    ],
    comunidades: [
      { nome: 'UX Collective', url: 'https://uxdesign.cc', desc: 'Publicação com conteúdo de UX e produto.' },
      { nome: 'Designer Hangout', url: 'https://www.designerhangout.co', desc: 'Comunidade global de UX.' },
    ],
  },
  educador: {
    livros: [
      { nome: 'Make It Stick', autor: 'Brown, Roediger & McDaniel', desc: 'Ciência do aprendizado eficaz.' },
      { nome: 'Teaching Tech Together', autor: 'Greg Wilson', desc: 'Guia definitivo para ensinar tecnologia.' },
      { nome: 'The Courage to Teach', autor: 'Parker Palmer', desc: 'Sobre identidade no ato de ensinar.' },
    ],
    sites: [
      { nome: 'Teaching Tech Together', url: 'https://teachtogether.tech', desc: 'Livro e recursos gratuitos de didática tech.' },
      { nome: 'Carpentries', url: 'https://carpentries.org', desc: 'Metodologia aberta para ensino de programação.' },
    ],
    comunidades: [
      { nome: 'CodeNewbie', url: 'https://codenewbie.org', desc: 'Comunidade para iniciantes em programação.' },
      { nome: 'Dev.to', url: 'https://dev.to', desc: 'Espaço para ensinar escrevendo conteúdo.' },
    ],
  },
  infra_cloud: {
    livros: [
      { nome: 'The Phoenix Project', autor: 'Kim, Behr & Spafford', desc: 'Conceitos de DevOps em narrativa.' },
      { nome: 'Site Reliability Engineering', autor: 'Google', desc: 'Como operar sistemas em produção.' },
      { nome: 'Linux Command Line', autor: 'William Shotts', desc: 'Guia completo de linha de comando Linux.' },
    ],
    sites: [
      { nome: 'Linux Journey', url: 'https://linuxjourney.com', desc: 'Linux interativo gratuito.' },
      { nome: 'Cloud Native Landscape', url: 'https://landscape.cncf.io', desc: 'Mapa do ecossistema cloud native.' },
      { nome: 'AWS Skill Builder', url: 'https://skillbuilder.aws', desc: 'Cursos oficiais gratuitos da AWS.' },
    ],
    comunidades: [
      { nome: 'DevOps Subreddit', url: 'https://reddit.com/r/devops', desc: 'Discussões de infraestrutura e DevOps.' },
      { nome: 'Hacker News', url: 'https://news.ycombinator.com', desc: 'Notícias técnicas de sistemas e infra.' },
    ],
  },
  seguranca: {
    livros: [
      { nome: 'The Web Application Hacker’s Handbook', autor: 'Stuttard & Pinto', desc: 'Base forte para entender segurança web de verdade.' },
      { nome: 'Security Engineering', autor: 'Ross Anderson', desc: 'Livro denso sobre sistemas, risco e defesa.' },
      { nome: 'Blue Team Handbook', autor: 'Don Murdoch', desc: 'Resumo prático para defesa, monitoramento e resposta.' },
    ],
    sites: [
      { nome: 'PortSwigger Web Security Academy', url: 'https://portswigger.net/web-security', desc: 'Laboratórios gratuitos de segurança web.' },
      { nome: 'OWASP', url: 'https://owasp.org', desc: 'Referência aberta para riscos e boas práticas de segurança.' },
      { nome: 'TryHackMe', url: 'https://tryhackme.com', desc: 'Trilhas guiadas de laboratório para iniciantes e intermediários.' },
    ],
    comunidades: [
      { nome: 'r/netsec', url: 'https://reddit.com/r/netsec', desc: 'Discussões e notícias da área de segurança.' },
      { nome: 'OWASP Chapters', url: 'https://owasp.org/chapters/', desc: 'Comunidades locais e eventos ligados à OWASP.' },
    ],
  },
  qa_teste: {
    livros: [
      { nome: 'Lessons Learned in Software Testing', autor: 'Kaner, Bach & Pettichord', desc: 'Livro clássico para pensar teste com profundidade.' },
      { nome: 'Agile Testing', autor: 'Lisa Crispin & Janet Gregory', desc: 'Qualidade integrada ao fluxo do time.' },
      { nome: 'Foundations of Software Testing', autor: 'Black, Van Veenendaal & Graham', desc: 'Base técnica e de processo para QA sério.' },
    ],
    sites: [
      { nome: 'Ministry of Testing', url: 'https://www.ministryoftesting.com', desc: 'Conteúdo prático, comunidade e eventos para QA.' },
      { nome: 'Playwright Docs', url: 'https://playwright.dev', desc: 'Documentação forte para automação moderna de testes.' },
      { nome: 'Cypress Docs', url: 'https://docs.cypress.io', desc: 'Referência útil para automação de interface e fluxo.' },
    ],
    comunidades: [
      { nome: 'r/softwaretesting', url: 'https://reddit.com/r/softwaretesting', desc: 'Comunidade com dúvidas, prática e mercado de QA.' },
      { nome: 'Test Automation University', url: 'https://testautomationu.applitools.com', desc: 'Cursos gratuitos para automação de testes.' },
    ],
  },
  produto: {
    livros: [
      { nome: 'Inspired', autor: 'Marty Cagan', desc: 'Livro-base para produto digital com contexto real de mercado.' },
      { nome: 'Continuous Discovery Habits', autor: 'Teresa Torres', desc: 'Como descobrir problema certo de forma contínua.' },
      { nome: 'Escaping the Build Trap', autor: 'Melissa Perri', desc: 'Produto guiado por resultado, não só por backlog.' },
    ],
    sites: [
      { nome: 'SVPG', url: 'https://www.svpg.com', desc: 'Artigos fortes de produto, descoberta e times digitais.' },
      { nome: 'Lenny’s Newsletter', url: 'https://www.lennysnewsletter.com', desc: 'Conteúdo de produto, growth e carreira.' },
      { nome: 'Amplitude Blog', url: 'https://amplitude.com/blog', desc: 'Métricas de produto e análise aplicada.' },
    ],
    comunidades: [
      { nome: 'Mind the Product', url: 'https://www.mindtheproduct.com', desc: 'Comunidade global de produto digital.' },
      { nome: 'r/ProductManagement', url: 'https://reddit.com/r/ProductManagement', desc: 'Discussões práticas sobre carreira e rotina em produto.' },
    ],
  },
  tech_lead: {
    livros: [
      { nome: 'Staff Engineer', autor: 'Will Larson', desc: 'Como crescer em influência técnica sem virar gestão clássica.' },
      { nome: 'The Manager’s Path', autor: 'Camille Fournier', desc: 'Livro útil para quem lidera ou está perto disso.' },
      { nome: 'Fundamentals of Software Architecture', autor: 'Richards & Ford', desc: 'Arquitetura e decisão técnica com trade-off real.' },
    ],
    sites: [
      { nome: 'LeadDev', url: 'https://leaddev.com', desc: 'Conteúdo sobre liderança técnica, times e decisão de engenharia.' },
      { nome: 'Will Larson Blog', url: 'https://lethain.com', desc: 'Reflexões fortes sobre staff+, org e influência técnica.' },
      { nome: 'High Scalability', url: 'http://highscalability.com', desc: 'Casos práticos de arquitetura e sistemas em escala.' },
    ],
    comunidades: [
      { nome: 'r/ExperiencedDevs', url: 'https://reddit.com/r/ExperiencedDevs', desc: 'Discussões mais maduras sobre carreira e liderança técnica.' },
      { nome: 'LeadDev Community', url: 'https://leaddev.com', desc: 'Eventos e conversas sobre liderança em engenharia.' },
    ],
  },
  developer_advocate: {
    livros: [
      { nome: 'Everybody Writes', autor: 'Ann Handley', desc: 'Escrita clara e útil para conteúdo técnico e comunidade.' },
      { nome: 'The Business Value of Developer Relations', autor: 'Mary Thengvall', desc: 'Visão de DevRel para dentro de empresa e produto.' },
      { nome: 'Docs for Developers', autor: 'Jared Bhatti, Zachary Sarah Corleissen, et al.', desc: 'Documentação técnica como produto de verdade.' },
    ],
    sites: [
      { nome: 'Write the Docs', url: 'https://www.writethedocs.org', desc: 'Comunidade e referência forte para documentação técnica.' },
      { nome: 'DevRel Collective', url: 'https://devrelcollective.fun', desc: 'Conteúdo e comunidade para developer advocacy.' },
      { nome: 'GitHub Docs Style Guide', url: 'https://docs.github.com/en/contributing/style-guide-and-content-model/style-guide', desc: 'Bom material para escrita técnica e clareza.' },
    ],
    comunidades: [
      { nome: 'Write the Docs Slack', url: 'https://www.writethedocs.org/slack/', desc: 'Comunidade internacional de documentação técnica.' },
      { nome: 'DevRelX', url: 'https://devrelx.com', desc: 'Rede e discussões sobre DevRel e comunidade técnica.' },
    ],
  },
  suporte: {
    livros: [
      { nome: 'Time Management for System Administrators', autor: 'Tom Limoncelli', desc: 'Organização e resposta melhor para quem vive interrupção e incidente.' },
      { nome: 'The Practice of System and Network Administration', autor: 'Limoncelli, Hogan & Chalup', desc: 'Base forte para operação, suporte e ambiente.' },
      { nome: 'The Phoenix Project', autor: 'Kim, Behr & Spafford', desc: 'Bom para entender fluxo, gargalo e incidente em operação.' },
    ],
    sites: [
      { nome: 'Microsoft Learn', url: 'https://learn.microsoft.com', desc: 'Base útil para suporte, sistemas e troubleshooting.' },
      { nome: 'Linux Journey', url: 'https://linuxjourney.com', desc: 'Fundamentos de Linux importantes para suporte técnico.' },
      { nome: 'Google IT Support', url: 'https://grow.google/certificates/it-support/', desc: 'Referência prática de base para suporte e troubleshooting.' },
    ],
    comunidades: [
      { nome: 'r/sysadmin', url: 'https://reddit.com/r/sysadmin', desc: 'Discussões reais sobre rotina de suporte, ambiente e operação.' },
      { nome: 'Spiceworks Community', url: 'https://community.spiceworks.com', desc: 'Comunidade prática de suporte, redes e infraestrutura.' },
    ],
  },
  transicao: {
    livros: [
      { nome: 'So Good They Cannot Ignore You', autor: 'Cal Newport', desc: 'Carreira por competência, não por paixão.' },
      { nome: 'The First 90 Days', autor: 'Michael Watkins', desc: 'Como entrar em um novo papel com impacto.' },
      { nome: 'Designing Your Life', autor: 'Burnett & Evans', desc: 'Metodologia para redesenhar carreira.' },
    ],
    sites: [
      { nome: 'Levels.fyi', url: 'https://levels.fyi', desc: 'Faixas salariais reais em tech.' },
      { nome: 'Glassdoor', url: 'https://glassdoor.com', desc: 'Avaliações e salários por empresa.' },
    ],
    comunidades: [
      { nome: 'cscareerquestions', url: 'https://reddit.com/r/cscareerquestions', desc: 'Relatos reais de transição para tech.' },
      { nome: 'Women in Tech Slack', url: 'https://witchat.github.io', desc: 'Rede de apoio para mulheres em tech.' },
    ],
  },
  repensar: {
    livros: [
      { nome: 'Thinking, Fast and Slow', autor: 'Daniel Kahneman', desc: 'Como tomamos decisões e vieses.' },
      { nome: 'Range', autor: 'David Epstein', desc: 'Por que generalistas também triunfam.' },
    ],
    sites: [
      { nome: '80,000 Hours', url: 'https://80000hours.org', desc: 'Escolha de carreira com impacto real.' },
      { nome: 'CanalTech Carreiras', url: 'https://canaltech.com.br/carreira', desc: 'Contexto brasileiro de mercado tech.' },
    ],
    comunidades: [
      { nome: 'r/brdev', url: 'https://reddit.com/r/brdev', desc: 'Comunidade brasileira com relatos de carreira.' },
    ],
  },
};

const GLOSSARIO = [
  { id:'api', termo:'API', fonetico:'éi-pi-áj', categoria:'back-end', curta:'É o contrato público pelo qual um sistema expõe dados ou ações para outro programa, sem abrir o código interno. Sem APIs, cada app precisaria duplicar bancos inteiros ou integrações frágeis via telas automatizadas.', longa:'API (Application Programming Interface) descreve URLs, formatos de dados e regras de autenticação que outro time ou outro serviço deve seguir. Ela pode ser REST, GraphQL, fila de mensagens ou gRPC; o ponto comum é padronizar a conversa entre sistemas. Boas APIs versionam mudanças, documentam erros e pensam em segurança desde o primeiro dia, porque qualquer cliente externo vai confiar no comportamento documentado.', exemplo:'No delivery, ao tocar em "pagar com cartão", o app não acessa o mainframe do banco: ele chama a API de pagamentos, recebe um status e mostra o resultado. Se a API mudar sem aviso, vários apps quebram ao mesmo tempo. Por isso contrato e testes importam tanto.', relacionados:['backend','deploy','servidor'] },
  { id:'backend', termo:'Back-end', fonetico:'béki-end', categoria:'back-end', curta:'É a camada que roda fora do navegador do usuário: servidores, regras de negócio, integrações e persistência. O usuário não "vê" o back-end, mas sente quando ele está lento, inconsistente ou inseguro.', longa:'Back-end recebe requisições (HTTP, filas, jobs agendados), valida permissões, fala com bancos e serviços externos e devolve respostas confiáveis. Ele também é onde moram preocupações como transações, concorrência, idempotência e auditoria. Times grandes separam camadas (API, domínio, infraestrutura), mas no início o importante é entender o fluxo ponta a ponta: pedido entra, dado é validado, efeito colateral é controlado, resposta sai.', exemplo:'Quando você redefine senha, o front só coleta o formulário; o back-end gera token seguro, envia e-mail, invalida sessões antigas e registra o evento. Se algo falhar no meio, o sistema precisa falhar de forma previsível, não corromper dados.', relacionados:['frontend','api','banco-de-dados','servidor'] },
  { id:'frontend', termo:'Front-end', fonetico:'frónti-end', categoria:'front-end', curta:'É tudo o que roda no dispositivo da pessoa: layout, estados de tela, formulários, animações e acessibilidade. Bom front-end não é só estética: é engenharia de interface que lida com latência, erros de rede e diferentes tamanhos de tela.', longa:'Front-end tradicionalmente combina HTML semântico, CSS e JavaScript, hoje frequentemente com frameworks que gerenciam estado e roteamento. O trabalho inclui performance (menos JavaScript desnecessário, imagens adequadas), compatibilidade entre navegadores e testes de usabilidade. Em produtos reais, front-end conversa com design e produto para traduzir requisitos em componentes reutilizáveis.', exemplo:'No banco pelo celular, o extrato que você vê é front-end; o saldo veio de uma API, mas quem decide como mostrar loading, retry e mensagem de erro é a camada de interface. Uma tela bonita que trava com 500 linhas na lista não passa em revisão séria.', relacionados:['backend','html','css','javascript'] },
  { id:'deploy', termo:'Deploy', fonetico:'di-plói', categoria:'infra', curta:'É o ato de levar uma versão testada do software para um ambiente onde usuários ou outros sistemas acessam. Deploy manual existe, mas em empresas maduras ele é repetível, rastreável e reversível.', longa:'Deploy envolve empacotar artefatos (binários, assets estáticos, migrações de banco), aplicar configurações por ambiente (dev, homologação, produção) e validar saúde após publicar. Ferramentas modernas usam pipelines: build, testes, análise de segurança, liberação gradual (canary) e rollback automático se métricas piorarem. Sem disciplina de deploy, cada correção vira medo e cada sexta-feira vira apagão.', exemplo:'Você corrigiu um bug no cálculo de frete: após merge na branch principal, o pipeline publica nova versão no servidor, roda smoke tests e só então o tráfego passa a usar o build novo. Se o erro voltar, você reverte para o artefato anterior em minutos.', relacionados:['servidor','ci-cd','versionamento'] },
  { id:'servidor', termo:'Servidor', fonetico:'ser-vi-dór', categoria:'infra', curta:'É um computador (físico ou virtual) que fica escutando pedidos de rede e responde com processamento ou arquivos. Na nuvem, "servidor" muitas vezes é uma VM, container ou função gerenciada, mas o conceito permanece.', longa:'Servidores rodam sistemas operacionais enxutos, serviços web (como nginx), runtimes de linguagem e agentes de monitoramento. Eles precisam de endereço IP, DNS, certificados TLS e políticas de firewall. Em escala, você pensa em balanceamento de carga, saúde das instâncias e custo por hora. Por isso infra não é só "subir uma máquina", é operação contínua.', exemplo:'Quando mil pessoas abrem o mesmo site ao mesmo tempo, várias instâncias de servidor atrás de um load balancer dividem o tráfego. Se uma instância morre, o balanceador para de enviar requisições para ela e sobe outra.', relacionados:['backend','deploy','cloud','devops'] },
  { id:'banco-de-dados', termo:'Banco de dados', fonetico:'', categoria:'back-end', curta:'É o sistema onde dados duráveis ficam organizados, indexados e protegidos por regras (tipos, constraints, transações). Sem banco bem modelado, o aplicativo vira planilha compartilhada com concorrência e perda de informação.', longa:'Bancos relacionais (PostgreSQL, MySQL) usam tabelas e SQL; NoSQL (MongoDB, Redis) favorecem documentos, chave-valor ou grafos conforme o caso. A escolha impacta consistência, velocidade de leitura e complexidade de consultas. Migrações de esquema, backups e replicação fazem parte do trabalho real, não só "criar tabela" uma vez.', exemplo:'Em e-commerce, estoque e pedidos precisam ser transacionais: dois clientes não podem comprar o último item ao mesmo tempo sem regra no banco. O back-end escreve em transação; se falhar, nada fica pela metade.', relacionados:['backend','sql','api'] },
  { id:'framework', termo:'Framework', fonetico:'fréimi-uórki', categoria:'geral', curta:'É um esqueleto opinativo que define como organizar pastas, rotas, injeção de dependências e ciclo de vida da aplicação. Você preenche os vazios; o framework chama seu código nos momentos certos.', longa:'Frameworks aceleram porque já resolvem problemas comuns: roteamento, autenticação, ORM, build e testes. O custo é acoplar decisões ao ecossistema escolhido e acompanhar atualizações. Biblioteca, em contraste, você chama quando precisa; framework costuma inverter o controle. Escolher errado no início não é tragédia, mas trocar depois dói. Por isso times documentam critérios de escolha.', exemplo:'Em vez de configurar servidor HTTP do zero, você usa Express ou Fastify em Node, ou Django em Python, e foca nas rotas do seu domínio. O framework já traz middlewares, parsing de JSON e convenções de erro.', relacionados:['frontend','backend','biblioteca'] },
  { id:'biblioteca', termo:'Biblioteca (lib)', fonetico:'', categoria:'geral', curta:'É código reutilizável que você importa para uma tarefa pontual: datas, validação, gráficos, HTTP client. Você decide quando chamar; a biblioteca não manda na arquitetura inteira.', longa:'Bibliotecas bem mantidas têm semver, changelog e testes; ruins viram dívida técnica silenciosa. Em JavaScript, npm distribui pacotes. Sempre verifique licença, tamanho no bundle e última atualização. Combinar dezenas de libs pequenas sem critério explode a superfície de vulnerabilidades e o tempo de build.', exemplo:'Para formatar moeda em real e timezone de Brasília, uma lib como date-fns ou Intl API evita reimplementar calendário. Você importa a função, usa no componente e segue, sem precisar de framework novo.', relacionados:['framework','javascript','frontend'] },
  { id:'versionamento', termo:'Controle de versão (Git)', fonetico:'', categoria:'geral', curta:'É o sistema que registra cada mudança no código: quem alterou, quando e por quê. Git é o padrão de mercado; hospedar no GitHub/GitLab é só camada colaborativa em cima.', longa:'Com Git você cria branches para features, revisa diffs antes de integrar e volta no tempo quando necessário. Fluxos como trunk-based ou Gitflow organizam como merges acontecem. Integração com CI roda testes a cada push. Sem versionamento, isso simplesmente não existe de forma confiável.', exemplo:'Você quebrou produção sexta à noite: o histórico mostre o commit culpado, você abre revert ou hotfix branch, e o time discute em PR o que aprender. Sem Git, você caça cópia "final_v2_really.zip".', relacionados:['deploy','ci-cd','open-source'] },
  { id:'open-source', termo:'Open source', fonetico:'ópen-sórs', categoria:'geral', curta:'É software cujo código-fonte é público sob licença que permite estudar, modificar e redistribuir, dentro de regras legais claras. Não confundir com "grátis": muitas empresas lucram com suporte e serviços em cima de open source.', longa:'Projetos como Linux, Kubernetes e React movem a indústria porque milhares de olhos acham bugs e porque empresas compartilham custo de manutenção. Contribuir com documentação ou testes já conta como participação legítima. Entender licenças (MIT, Apache, GPL) evita surpresas quando você incorpora código em produto comercial.', exemplo:'Sua empresa usa PostgreSQL sem pagar licença, mas paga consultoria e suporte. O código é aberto; a operação 24x7 com SLA é que tem preço.', relacionados:['versionamento','cloud','devops'] },
  { id:'cloud', termo:'Cloud (nuvem)', fonetico:'cláudi', categoria:'cloud', curta:'É consumir computação, armazenamento e rede como serviço pago pelo uso, em vez de comprar hardware próprio. AWS, GCP e Azure são os grandes provedores; há também opções menores e especializadas.', longa:'Na cloud você provisiona máquinas em minutos, anexa discos, configura VPC e integra serviços gerenciados (banco, fila, CDN). O modelo shifta custo de CAPEX para OPEX e exige disciplina financeira: recursos esquecidos geram conta alta. Boas equipes usam infraestrutura como código (Terraform, Pulumi) para não clicar manualmente em console.', exemplo:'Black Friday: auto scaling adiciona instâncias quando CPU sobe e reduz depois do pico. Em datacenter próprio, você teria capacidade ociosa o ano inteiro ou risco de queda no pico.', relacionados:['servidor','deploy','devops','ci-cd'] },
  { id:'devops', termo:'DevOps', fonetico:'dévi-ops', categoria:'infra', curta:'É cultura e prática de encurtar o caminho entre ideia e produção, com feedback rápido e responsabilidade compartilhada. Não é um cargo único em todos os lugares; às vezes é time de plataforma, às vezes há SRE separado.', longa:'DevOps incentiva automação de build, testes, deploy, observabilidade (logs, métricas, traces) e postmortem sem culpar indivíduo. Ferramentas são meio: Docker, Kubernetes, GitHub Actions, Prometheus. O fim é reduzir lead time e aumentar confiabilidade percebida pelo usuário.', exemplo:'Antes, deploy era evento mensal com checklist de medo; depois de DevOps maduro, deploys pequenos e frequentes reduzem risco porque mudanças são isoladas e monitoradas.', relacionados:['deploy','cloud','ci-cd','servidor'] },
  { id:'ci-cd', termo:'CI/CD', fonetico:'si-áj / si-di', categoria:'infra', curta:'CI integra código novo continuamente e roda verificações automáticas; CD estende isso até entrega ou deploy, quando os gates de qualidade passam. Juntos, reduzem surpresas na véspera de release.', longa:'Pipeline típico: lint, testes unitários, build, análise de segurança (SAST), publicação de artefato e promoção entre ambientes. CD pode ser "delivery" (humano aprova) ou "deployment" totalmente automático. Sem CI, bugs regressivos voltam sem ser notados; sem CD, correções urgentes demoram horas por burocracia manual.', exemplo:'Cada pull request roda 200 testes em minutos; merge na main gera imagem Docker versionada e atualiza homologação. Produção só recebe tag aprovada pelo time, seja com botão ou política automática.', relacionados:['deploy','devops','versionamento'] },
  { id:'html', termo:'HTML', fonetico:'éitch-ti-émi-éli', categoria:'front-end', curta:'É a camada de marcação que dá estrutura e significado ao conteúdo: títulos, listas, formulários, landmarks para leitores de tela. HTML não é linguagem de lógica; combina com CSS e JS.', longa:'HTML5 trouxe tags semânticas (header, nav, main, article) que melhoram SEO e acessibilidade. Atributos como alt em imagens e labels em inputs não são detalhe cosmético: são requisitos legais e de inclusão em muitos mercados. Validar HTML ajuda a evitar comportamento estranho entre navegadores.', exemplo:'Um botão deve ser <button>, não <div> com onclick, para funcionar com teclado e leitor de tela. Pequenas escolhas de marcação definem se seu produto é profissional ou frágil.', relacionados:['css','javascript','frontend'] },
  { id:'css', termo:'CSS', fonetico:'si-és-és', categoria:'front-end', curta:'É a folha de estilo que controla aparência e, em parte, layout responsivo: cores, tipografia, grid, flexbox, animações. CSS "simples" esconde anos de pegadinhas entre navegadores e especificidade.', longa:'Design systems modernos usam tokens, variáveis e componentes para manter consistência. Performance importa: seletores pesados, animações que disparam layout thrashing e imagens sem tamanho definido prejudicem Core Web Vitals. Pré-processadores (Sass) e frameworks (Tailwind) são opcionais; o fundamento é o cascade e o box model.', exemplo:'Mesmo conteúdo HTML pode virar layout mobile-first com media queries: menu vira ícone, colunas viram pilha, fonte aumenta para leitura confortável. Isso é trabalho de CSS, não só "deixar bonito no Figma".', relacionados:['html','javascript','frontend'] },
  { id:'javascript', termo:'JavaScript', fonetico:'djéva-escrípt', categoria:'front-end', curta:'É a linguagem que roda nos navegadores para eventos, estado e comunicação com APIs; com Node.js, também roda em servidores e ferramentas de build. Ecossistema enorme exige curadoria do que você instala.', longa:'JS moderno (ES modules, async/await, fetch) simplifica código assíncrono, mas exige entender promises e fila de eventos. Tipagem opcional com TypeScript reduz bugs em projetos médios e grandes. Bundlers (Vite, Webpack) transformam e otimizam código para produção.', exemplo:'Ao digitar em uma busca, JS debounce evita disparar requisição a cada tecla; ao receber JSON da API, JS atualiza o DOM ou framework reativo re-renderiza só o necessário.', relacionados:['html','css','frontend','api'] },
  { id:'sql', termo:'SQL', fonetico:'és-quiú-éli', categoria:'back-end', curta:'É a linguagem declarativa para consultar e transformar dados em bancos relacionais. Você descreve o que quer; o otimizador do banco pensa em como buscar.', longa:'SQL cobre SELECT com JOINs, agregações, subconsultas, transações (BEGIN/COMMIT) e DDL (CREATE TABLE). Boas consultas usam índices adequados; más consultas travam produção com full table scan. ORMs ajudam, mas em performance crítica o SQL manual volta.', exemplo:'Relatório de vendas por região no último trimestre: você junta pedidos, clientes e filiais em uma query, filtra por data e agrupa. Errar JOIN duplica linhas e infla números. Por isso analistas revisam plano de execução.', relacionados:['banco-de-dados','backend','algoritmo'] },
  { id:'algoritmo', termo:'Algoritmo', fonetico:'al-go-rít-mo', categoria:'fundamentos', curta:'É uma receita finita e não ambígua que transforma entrada em saída. Em entrevistas, pedem algoritmos não por sadismo, mas para ver se você raciocina sobre custo e casos extremos.', longa:'Analisar complexidade (Big O) responde como tempo e memória crescem quando o input dobra. Estruturas de dados (filas, heaps, árvores) escolhidas certas tornam operações baratas. No trabalho diário, algoritmo aparece em caches, agendadores, deduplicação e roteamento, não só em exercícios de livro.', exemplo:'Encontrar duplicatas em milhões de registros: hash set O(n) bate força bruta O(n²). Escolher errado significa job que rodava em minutos passar a rodar em horas.', relacionados:['sql','debug','javascript'] },
  { id:'debug', termo:'Debug (depuração)', fonetico:'di-bágui', categoria:'geral', curta:'É o processo sistemático de reproduzir falha, isolar causa e provar a correção. Boa depuração mistura leitura de stack trace, logs, breakpoints e hipóteses testáveis.', longa:'Debug não é "tentar coisas até funcionar" indefinidamente. É reduzir o espaço de busca. Você bissecta commits, minimiza caso de teste e adiciona instrumentação temporária. Em sistemas distribuídos, correlacionar request IDs entre serviços é parte do ofício. Documentar a causa raiz evita que o bug volte disfarçado.', exemplo:'Produção retorna 500 só para alguns usuários: você compara payload, descobre string vazia onde número era esperado, adiciona validação no back-end e teste de regressão. Sem debug disciplinado, alguém coloca if espalhado que mascara o sintoma.', relacionados:['algoritmo','backend','javascript'] },
  { id:'ux', termo:'UX (User Experience)', fonetico:'iú-éks', categoria:'produto', curta:'É o efeito combinado de usabilidade, performance percebida, copy e confiança ao longo da jornada. UX não é só wireframe bonito: é reduzir erro humano e ansiedade em tarefas reais.', longa:'Pesquisa com usuários, testes de usabilidade e métricas (taxa de conclusão, tempo na tarefa) informam decisões. UX trabalha com acessibilidade, design de informação e feedback de sistema (loading, erros recuperáveis). Em squads, UX negocia trade-offs com engenharia: nem todo polimento vale o custo de implementação agora.', exemplo:'Formulário de cadastro longo gera abandono; UX propõe dividir em passos, salvar rascunho e mostrar progresso. Engenharia implementa validação inline e mensagens claras, com resultado medido em conversão.', relacionados:['frontend','html','css'] },
];

function glossaryTerm(id, termo, categoria, curta, longa, exemplo, relacionados = [], fonetico = '') {
  return { id, termo, categoria, curta, longa, exemplo, relacionados, fonetico };
}

function normalizeGlossaryTerm(value) {
  return String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}

const GLOSSARIO_EXTRA = [
  glossaryTerm('ab-test', 'A/B Test', 'produto', 'Teste que compara duas versões de uma mesma experiência para medir qual funciona melhor.', 'Ele é usado para decidir com dado real em vez de opinião quando duas hipóteses parecem plausíveis.', 'Ex.: testar dois textos de botão de cadastro e ver qual gera mais conclusão.'),
  glossaryTerm('agile', 'Agile', 'produto', 'Forma de organizar trabalho em ciclos curtos, com entrega frequente e feedback constante.', 'No dia a dia aparece em sprint, refinamento, retrospectiva e ajuste de rota conforme aprendizado do time.', 'Ex.: dividir uma funcionalidade grande em entregas menores para validar valor antes de investir meses.'),
  glossaryTerm('api-gateway', 'API Gateway', 'cloud', 'Camada que centraliza entrada de APIs, autenticação, roteamento e políticas comuns.', 'Ela evita repetir controle de acesso, rate limit e observabilidade em cada serviço isolado.', 'Ex.: várias APIs internas ficam atrás de um gateway que valida token antes de repassar a chamada.'),
  glossaryTerm('autenticacao', 'Autenticação', 'seguranca', 'Processo de provar quem você é antes de usar um sistema.', 'Senha, MFA, biometria e login social são meios de autenticação com níveis diferentes de risco.', 'Ex.: usuário informa senha e código do autenticador antes de entrar no painel.'),
  glossaryTerm('autorizacao', 'Autorização', 'seguranca', 'Regra que define o que cada pessoa ou serviço pode fazer depois de autenticado.', 'Autenticar não basta; o sistema ainda precisa limitar ação, escopo e acesso conforme o papel.', 'Ex.: analista vê pedido, mas só gerente pode aprovar reembolso.'),
  glossaryTerm('big-data', 'Big Data', 'dados', 'Conjunto de técnicas e arquitetura para lidar com volume, velocidade ou variedade muito altos.', 'Big Data importa quando ferramenta simples deixa de dar conta com segurança, tempo ou custo aceitável.', 'Ex.: processar bilhões de eventos de navegação por dia para análise e recomendação.'),
  glossaryTerm('branch', 'Branch (Git)', 'geral', 'Linha paralela de trabalho em um repositório para mudar algo sem tocar direto na base principal.', 'Branch permite experimentar, revisar e isolar uma entrega antes de mesclar no fluxo principal.', 'Ex.: criar branch da nova feature para trabalhar sem quebrar a versão estável.'),
  glossaryTerm('bug', 'Bug', 'qa', 'Erro de comportamento entre o que o sistema faz e o que deveria fazer.', 'Bug pode nascer de código, requisito ambíguo, integração ruim ou dado inesperado.', 'Ex.: desconto é aplicado duas vezes quando a página recarrega.'),
  glossaryTerm('cache', 'Cache', 'infra', 'Cópia temporária de dado usado com frequência para reduzir tempo e custo de acesso.', 'Cache acelera leitura, mas também cria desafio de invalidação e consistência entre camadas.', 'Ex.: guardar lista de produtos populares em cache para não consultar o banco a cada visita.'),
  glossaryTerm('cli', 'CLI', 'infra', 'Interface de linha de comando usada por texto em vez de interface gráfica.', 'CLI é comum em servidor, automação, cloud e ferramentas que precisam ser scriptáveis.', 'Ex.: usar CLI da AWS para criar recursos em lote sem clicar no console.'),
  glossaryTerm('cloud-computing', 'Cloud Computing', 'cloud', 'Modelo de computação em que processamento, rede e armazenamento são consumidos como serviço.', 'Ele amplia elasticidade e terceiriza parte da operação física do datacenter.', 'Ex.: aumentar capacidade de processamento em campanha sem comprar hardware novo.'),
  glossaryTerm('cluster', 'Cluster', 'cloud', 'Grupo de máquinas ou instâncias trabalhando juntas como um conjunto coordenado.', 'Cluster aparece em banco, containers e processamento distribuído para ganhar escala e resiliência.', 'Ex.: um cluster de Kubernetes distribui pods entre vários nós.'),
  glossaryTerm('commit', 'Commit', 'geral', 'Registro versionado de um conjunto de mudanças com mensagem descritiva.', 'Commit bom explica intenção e facilita review, bisect e entendimento histórico do projeto.', 'Ex.: separar correção de bug de refatoração em commits diferentes melhora rastreabilidade.'),
  glossaryTerm('container', 'Container', 'cloud', 'Empacotamento leve de aplicação com dependências e configuração de execução.', 'Container ajuda a rodar o mesmo software em ambientes diferentes com menos surpresa.', 'Ex.: app sobe em container igual no notebook, na pipeline e em produção.'),
  glossaryTerm('cors', 'CORS', 'back-end', 'Regra do navegador que controla quando uma origem pode acessar recurso de outra.', 'CORS existe para limitar acesso cruzado e precisa ser configurado de forma explícita na API.', 'Ex.: front em um domínio faz chamada para API em outro e recebe bloqueio por política de origem.'),
  glossaryTerm('crud', 'CRUD', 'back-end', 'Conjunto básico de operações de criar, ler, atualizar e apagar dados.', 'Muita aplicação começa com CRUD, mas produto real logo adiciona regra, permissão e auditoria em cima.', 'Ex.: painel administrativo cadastra, lista, edita e remove clientes.'),
  glossaryTerm('data-lake', 'Data Lake', 'dados', 'Repositório para armazenar dados brutos em grande volume e formatos variados.', 'Ele é útil quando você ainda não sabe todas as perguntas futuras, mas precisa governança para não virar bagunça.', 'Ex.: guardar logs, eventos e arquivos de várias fontes para análise posterior.'),
  glossaryTerm('data-warehouse', 'Data Warehouse', 'dados', 'Base organizada para consulta analítica, com modelagem pensada para relatório e BI.', 'Warehouse privilegia leitura confiável e histórica para decisão de negócio.', 'Ex.: financeiro e produto consultam o mesmo repositório consolidado de vendas mensais.'),
  glossaryTerm('dns', 'DNS', 'cloud', 'Sistema que traduz nome amigável em endereço de rede.', 'Sem DNS, pessoas teriam de decorar IP; com DNS mal configurado, site some mesmo com servidor vivo.', 'Ex.: dominio.com aponta para o balanceador correto por registro DNS.'),
  glossaryTerm('docker', 'Docker', 'cloud', 'Ferramenta popular para construir e rodar containers.', 'Docker empacota aplicação e dependências em imagem reproduzível para vários ambientes.', 'Ex.: pipeline gera imagem Docker do app e publica em um registry antes do deploy.'),
  glossaryTerm('endpoint', 'Endpoint', 'back-end', 'Ponto específico de acesso de uma API, normalmente identificado por rota e método.', 'Cada endpoint representa uma operação exposta e deve ser documentado com entrada, saída e erros.', 'Ex.: POST /pedidos cria um novo pedido no sistema.'),
  glossaryTerm('etl', 'ETL', 'dados', 'Processo de extrair, transformar e carregar dados entre sistemas.', 'ETL aparece quando dado vem sujo ou espalhado e precisa virar fonte confiável de análise.', 'Ex.: juntar vendas de loja, site e marketplace em uma tabela única para BI.'),
  glossaryTerm('feature-flag', 'Feature Flag', 'produto', 'Chave que liga ou desliga uma funcionalidade sem redeploy completo.', 'Ela ajuda rollout gradual, teste controlado e reversão rápida de comportamento.', 'Ex.: liberar novo checkout só para 10 por cento dos usuários antes da abertura total.'),
  glossaryTerm('firewall', 'Firewall', 'seguranca', 'Camada que filtra tráfego de rede conforme regra definida.', 'Firewall reduz superfície de ataque ao bloquear portas, origens ou protocolos indevidos.', 'Ex.: banco aceita conexão só da sub-rede da aplicação, não da internet inteira.'),
  glossaryTerm('git', 'Git', 'geral', 'Ferramenta de controle de versão usada para histórico, branches, merges e colaboração.', 'Git permite experimentar com segurança e saber exatamente quando e por que algo mudou.', 'Ex.: bug em produção é rastreado até o commit que alterou a regra de desconto.'),
  glossaryTerm('graphql', 'GraphQL', 'back-end', 'Forma de API em que cliente pede exatamente os campos que precisa.', 'GraphQL reduz excesso de dados em algumas integrações, mas exige atenção extra com custo de consulta e cache.', 'Ex.: tela de perfil busca só nome e avatar sem baixar objeto inteiro de usuário.'),
  glossaryTerm('hash', 'Hash', 'seguranca', 'Saída curta e determinística gerada a partir de um dado de entrada.', 'Hash é usado em integridade, senha, cache e identificação; não serve como criptografia reversível.', 'Ex.: sistema guarda hash da senha em vez da senha em texto puro.'),
  glossaryTerm('http-https', 'HTTP/HTTPS', 'back-end', 'Protocolo usado na web para troca de requisição e resposta, com ou sem camada segura.', 'HTTPS adiciona TLS para proteger dados em trânsito e evitar interceptação simples.', 'Ex.: navegador envia GET para buscar página e recebe HTML como resposta.'),
  glossaryTerm('iac', 'IaC (Infrastructure as Code)', 'cloud', 'Definição de infraestrutura em arquivo versionado, em vez de clique manual.', 'IaC melhora repetibilidade, revisão e recuperação de ambiente, além de reduzir configuração invisível.', 'Ex.: Terraform cria VPC, banco e balanceador a partir de código revisado em PR.'),
  glossaryTerm('ide', 'IDE', 'geral', 'Ambiente integrado de desenvolvimento com editor, debug, terminal e navegação de código.', 'IDE aumenta produtividade quando usada para entender projeto, testar e refatorar com segurança.', 'Ex.: VS Code ou IntelliJ ajudam a renomear função em vários arquivos sem erro manual.'),
  glossaryTerm('idempotencia', 'Idempotência', 'back-end', 'Propriedade de repetir a mesma operação sem mudar o resultado além da primeira vez.', 'Idempotência evita efeito colateral duplicado em reprocessamento, retry ou timeout de rede.', 'Ex.: reenvio do mesmo pedido de pagamento não pode cobrar duas vezes o cartão.'),
  glossaryTerm('integracao-continua', 'Integração Contínua', 'infra', 'Prática de integrar mudanças pequenas com validação automatizada frequente.', 'O objetivo é descobrir erro cedo, antes de ele virar surpresa grande na release.', 'Ex.: cada push roda testes e impede merge de código que quebrou a build.'),
  glossaryTerm('ip', 'IP', 'cloud', 'Endereço numérico usado para identificar dispositivo ou serviço na rede.', 'IP pode ser público ou privado e influencia roteamento, firewall e acesso entre máquinas.', 'Ex.: servidor interno usa IP privado e só o balanceador possui IP público.'),
  glossaryTerm('json', 'JSON', 'back-end', 'Formato textual simples muito usado para trocar dados entre sistemas.', 'JSON aparece em API, config, fila e armazenamento leve por ser legível e amplamente suportado.', 'Ex.: front envia um objeto JSON com nome, e-mail e telefone para criar cadastro.'),
  glossaryTerm('jwt', 'JWT', 'seguranca', 'Token assinado que carrega claims e pode representar autenticação ou autorização temporária.', 'JWT facilita integrações, mas precisa expiração curta, assinatura válida e cuidado com dado sensível.', 'Ex.: API recebe JWT no header para identificar usuário autenticado.'),
  glossaryTerm('kubernetes', 'Kubernetes', 'cloud', 'Plataforma de orquestração de containers para escalar, distribuir e recuperar aplicações.', 'Kubernetes resolve operação complexa em escala, mas cobra curva de aprendizado e disciplina alta.', 'Ex.: cluster redistribui pods quando um nó cai.'),
  glossaryTerm('latencia', 'Latência', 'infra', 'Tempo que um pedido leva para sair, viajar e voltar com resposta.', 'Latência afeta experiência percebida e pode vir de rede, banco, código ou dependência externa.', 'Ex.: busca demora 800 ms porque consulta bate API externa lenta em cascata.'),
  glossaryTerm('load-balancer', 'Load Balancer', 'cloud', 'Camada que distribui tráfego entre várias instâncias de serviço.', 'Balanceador melhora escala e disponibilidade, além de permitir health check e failover.', 'Ex.: tráfego do site é dividido entre três servidores de aplicação ativos.'),
  glossaryTerm('log', 'Log', 'infra', 'Registro textual ou estruturado de eventos relevantes do sistema.', 'Log bom ajuda debug, auditoria e investigação; log ruim gera barulho sem contexto.', 'Ex.: request id no log permite seguir a mesma chamada por vários serviços.'),
  glossaryTerm('machine-learning', 'Machine Learning', 'dados', 'Uso de modelos que aprendem padrão a partir de dados para prever ou classificar algo.', 'Machine learning depende muito mais de dado, pergunta e validação do que de algoritmo glamouroso.', 'Ex.: classificar e-mail como spam com base em histórico rotulado.'),
  glossaryTerm('merge', 'Merge', 'geral', 'Ato de combinar mudanças de uma branch em outra.', 'Merge exige entender conflito e intenção, não só clicar em aceitar tudo.', 'Ex.: branch de feature entra na main depois de review e testes.'),
  glossaryTerm('microsservicos', 'Microsserviços', 'back-end', 'Arquitetura em que o sistema é dividido em serviços menores e independentes.', 'Microsserviços ajudam autonomia em escala, mas aumentam integração, observabilidade e custo operacional.', 'Ex.: serviço de pagamento evolui separado do serviço de catálogo.'),
  glossaryTerm('migration', 'Migration (banco de dados)', 'back-end', 'Arquivo versionado que altera esquema ou dado de banco de forma rastreável.', 'Migration evita mudança manual esquecida entre ambientes e ajuda rollback planejado.', 'Ex.: adicionar coluna status na tabela de pedidos por migration revisada em PR.'),
  glossaryTerm('monolito', 'Monolito', 'back-end', 'Aplicação concentrada em um único deploy ou base principal de código.', 'Monolito não é sinônimo de ruim; muitas empresas saudáveis preferem monolito bem cuidado a microsserviço prematuro.', 'Ex.: back-end inteiro publica junto em um único artefato e banco principal.'),
  glossaryTerm('mvc', 'MVC', 'fundamentos', 'Padrão que separa modelo, visão e controlador em papéis diferentes.', 'MVC ajuda organização em projetos tradicionais, embora frameworks modernos adaptem a ideia de formas diferentes.', 'Ex.: controller recebe requisição, model busca dado e view monta resposta.'),
  glossaryTerm('mvp', 'MVP', 'produto', 'Versão mínima de um produto que já permite aprender com usuário real.', 'MVP não é produto malfeito; é recorte consciente para testar hipótese com o menor custo útil.', 'Ex.: lançar agenda simples antes de construir suíte inteira de gestão clínica.'),
  glossaryTerm('nosql', 'NoSQL', 'back-end', 'Família de bancos que não segue o modelo relacional tradicional como regra central.', 'NoSQL pode ser ótimo para documento, chave-valor, cache ou grafo, mas não substitui modelagem.', 'Ex.: usar Redis para sessão e MongoDB para documento flexível de catálogo.'),
  glossaryTerm('oauth', 'OAuth', 'seguranca', 'Protocolo de autorização usado para conceder acesso controlado entre aplicações.', 'OAuth é comum em login com terceiros e integrações em que a senha do usuário não deve ser compartilhada.', 'Ex.: aplicativo conecta conta Google sem pedir a senha do Gmail.'),
  glossaryTerm('oop', 'OOP (Orientação a Objetos)', 'fundamentos', 'Estilo de modelagem baseado em objetos com estado e comportamento.', 'OOP ajuda em certos domínios, mas vira problema quando usada por ritual sem clareza do problema.', 'Ex.: classe Pedido concentra regra de fechamento e cálculo de desconto.'),
  glossaryTerm('orm', 'ORM', 'back-end', 'Ferramenta que traduz objetos ou estruturas da linguagem para operação no banco.', 'ORM acelera CRUD comum, mas não elimina a necessidade de entender SQL e custo de consulta.', 'Ex.: framework gera query para buscar usuário por e-mail sem escrever SQL manual em todo lugar.'),
  glossaryTerm('payload', 'Payload', 'back-end', 'Parte útil dos dados transportados em uma requisição, resposta ou mensagem.', 'Payload precisa ser validado e documentado para evitar quebra silenciosa entre sistemas.', 'Ex.: webhook envia payload JSON com id do pedido, status e horário da mudança.'),
  glossaryTerm('pipeline', 'Pipeline', 'infra', 'Sequência automatizada de etapas para validar, empacotar ou publicar software e dados.', 'Pipeline reduz erro manual e garante que cada mudança passe pelo mesmo fluxo mínimo.', 'Ex.: pipeline roda testes, gera imagem e publica deploy após merge.'),
  glossaryTerm('pod', 'Pod (Kubernetes)', 'cloud', 'Menor unidade de execução no Kubernetes, podendo conter um ou mais containers relacionados.', 'Pod encapsula processo, rede e volume em torno da aplicação que o cluster vai agendar.', 'Ex.: API sobe em pods replicados para atender mais tráfego.'),
  glossaryTerm('polimorfismo', 'Polimorfismo', 'fundamentos', 'Capacidade de tratar implementações diferentes sob a mesma interface ou contrato.', 'Polimorfismo ajuda extensão e teste quando o sistema precisa variar comportamento sem copiar tudo.', 'Ex.: meios de pagamento diferentes expõem o mesmo método processar.'),
  glossaryTerm('pull-request', 'Pull Request', 'geral', 'Pedido formal para revisar e integrar mudanças de uma branch em outra.', 'PR é espaço de revisão técnica, contexto e discussão antes de mergear código.', 'Ex.: dev abre PR explicando escopo, risco e prints da funcionalidade nova.'),
  glossaryTerm('query', 'Query', 'dados', 'Instrução para buscar, filtrar ou transformar dados em um sistema de armazenamento.', 'Query pode ser SQL, GraphQL ou linguagem própria; o importante é custo e precisão do resultado.', 'Ex.: query busca usuários ativos nos últimos 30 dias por plano.'),
  glossaryTerm('queue', 'Queue (Fila de mensagens)', 'back-end', 'Mecanismo para processar trabalho de forma assíncrona e desacoplada.', 'Fila ajuda a absorver pico, retentar tarefa e tirar peso do fluxo síncrono principal.', 'Ex.: após compra, sistema enfileira envio de e-mail e geração de nota fiscal.'),
  glossaryTerm('raid', 'RAID', 'infra', 'Combinação de discos para melhorar redundância, desempenho ou ambos.', 'RAID protege contra falha de disco individual, mas não substitui backup nem estratégia de recuperação.', 'Ex.: servidor mantém espelhamento entre discos para continuar operando se um falhar.'),
  glossaryTerm('recursao', 'Recursão', 'fundamentos', 'Técnica em que uma função chama a si mesma até atingir condição de parada.', 'Recursão é elegante em árvore e divisão de problema, mas precisa de base clara para não quebrar.', 'Ex.: percorrer pastas dentro de pastas até listar todos os arquivos.'),
  glossaryTerm('redis', 'Redis', 'cloud', 'Banco em memória muito usado para cache, fila leve, sessão e estrutura rápida.', 'Redis é excelente em velocidade, mas não deve ser tratado como banco relacional genérico.', 'Ex.: salvar sessão de login no Redis para leitura rápida entre várias instâncias.'),
  glossaryTerm('refatoracao', 'Refatoração', 'geral', 'Mudança interna no código para melhorar clareza ou estrutura sem alterar comportamento esperado.', 'Refatorar reduz dívida técnica quando feito com teste e intenção clara.', 'Ex.: extrair função repetida em três arquivos para um módulo comum.'),
  glossaryTerm('rest', 'REST', 'back-end', 'Estilo comum de API baseado em recursos, verbos HTTP e representação simples.', 'REST funciona bem para muitos casos, desde que contrato, idempotência e erros sejam pensados de verdade.', 'Ex.: GET lista pedidos, POST cria pedido, PATCH atualiza status.'),
  glossaryTerm('rollback', 'Rollback', 'infra', 'Retorno para uma versão anterior depois de falha ou risco detectado.', 'Rollback rápido reduz impacto de release ruim, desde que artefato e banco tenham estratégia compatível.', 'Ex.: deploy novo aumenta erro e o time volta para a versão estável em minutos.'),
  glossaryTerm('runtime', 'Runtime', 'infra', 'Ambiente que executa uma linguagem ou aplicação em tempo de execução.', 'Runtime inclui processo, memória, bibliotecas e comportamento da aplicação enquanto ela roda.', 'Ex.: Node.js é o runtime que executa JavaScript fora do navegador.'),
  glossaryTerm('sdk', 'SDK', 'geral', 'Kit com bibliotecas, exemplos e documentação para integrar uma plataforma.', 'SDK reduz trabalho repetitivo e oferece contrato oficial para quem vai consumir um serviço.', 'Ex.: provedor de pagamento entrega SDK para criar cobrança sem montar requisição manual toda vez.'),
  glossaryTerm('serverless', 'Serverless', 'cloud', 'Modelo em que você publica função ou serviço sem gerenciar servidor explicitamente.', 'Serverless reduz operação inicial, mas ainda exige cuidado com custo, latência e observabilidade.', 'Ex.: função processa upload quando arquivo chega no bucket sem servidor sempre ligado.'),
  glossaryTerm('ssh', 'SSH', 'seguranca', 'Protocolo seguro para acesso remoto e execução de comandos em outra máquina.', 'SSH é base de operação e automação, mas precisa controle de chave, permissão e auditoria.', 'Ex.: administrador acessa servidor Linux por SSH para investigar incidente.'),
  glossaryTerm('ssl-tls', 'SSL/TLS', 'seguranca', 'Camada criptográfica que protege comunicação em trânsito na web e em outros protocolos.', 'Hoje TLS é o termo correto, embora muita gente ainda diga SSL por costume.', 'Ex.: navegador mostra cadeado quando o site usa HTTPS com certificado válido.'),
  glossaryTerm('stack', 'Stack', 'geral', 'Conjunto de tecnologias usadas em uma aplicação ou produto.', 'Falar em stack é resumir linguagem, framework, banco, cloud e ferramentas principais do time.', 'Ex.: stack de um app pode ser React, Node, PostgreSQL e AWS.'),
  glossaryTerm('state', 'State (estado)', 'front-end', 'Informação mutável que a interface usa para decidir o que mostrar e como reagir.', 'Estado mal controlado cria tela inconsistente e bug difícil de reproduzir.', 'Ex.: botão muda para loading enquanto a compra está sendo enviada.'),
  glossaryTerm('subdominio', 'Subdomínio', 'cloud', 'Parte de um domínio usada para separar aplicações ou áreas do mesmo site.', 'Subdomínio ajuda organizar tráfego, certificado e responsabilidade entre serviços distintos.', 'Ex.: api.exemplo.com e app.exemplo.com apontam para componentes diferentes.'),
  glossaryTerm('tdd', 'TDD', 'qa', 'Prática de escrever teste antes do código de produção em ciclos curtos.', 'TDD força clareza de comportamento e design testável, mas não substitui pensamento sobre risco real.', 'Ex.: criar teste de cálculo de frete antes de implementar a função.'),
  glossaryTerm('throughput', 'Throughput', 'infra', 'Quantidade de trabalho concluído por unidade de tempo.', 'Throughput ajuda medir capacidade do sistema, especialmente em fila, rede e processamento em lote.', 'Ex.: worker processa 5 mil mensagens por minuto em horário de pico.'),
  glossaryTerm('token', 'Token', 'seguranca', 'Credencial curta usada para representar acesso, sessão ou autorização temporária.', 'Token precisa expirar, ser validado e nunca ficar exposto onde não deveria.', 'Ex.: app mobile envia token Bearer para chamar API autenticada.'),
  glossaryTerm('uptime', 'Uptime', 'infra', 'Tempo em que um sistema permanece disponível e operacional.', 'Uptime alto importa, mas sem contexto de erro e latência ele pode enganar sobre qualidade real.', 'Ex.: site ficou disponível 99,95 por cento do mês, mesmo com picos de lentidão.'),
  glossaryTerm('uuid', 'UUID', 'fundamentos', 'Identificador único longo gerado para reduzir colisão entre registros.', 'UUID é útil quando você não quer expor sequência previsível ou depende de geração distribuída.', 'Ex.: pedido recebe UUID para ser referenciado por vários serviços sem conflito.'),
  glossaryTerm('vpc', 'VPC', 'cloud', 'Rede virtual isolada dentro de um provedor de cloud.', 'VPC organiza sub-redes, rotas, gateways e políticas de acesso entre recursos internos.', 'Ex.: banco fica em sub-rede privada da VPC e não recebe acesso direto da internet.'),
  glossaryTerm('webhook', 'Webhook', 'back-end', 'Chamada automática enviada por um sistema para avisar outro sobre um evento.', 'Webhook é push de evento: você registra URL e o sistema notifica quando algo acontece.', 'Ex.: plataforma de pagamento chama seu webhook quando o boleto foi quitado.'),
  glossaryTerm('websocket', 'WebSocket', 'back-end', 'Canal de comunicação persistente e bidirecional entre cliente e servidor.', 'WebSocket é útil quando a aplicação precisa de atualização quase em tempo real.', 'Ex.: chat mantém conexão aberta para entregar mensagem sem polling constante.'),
  glossaryTerm('xml', 'XML', 'back-end', 'Formato textual estruturado ainda usado em integrações legadas e documentos formais.', 'XML é mais verboso que JSON, mas segue forte em contextos governamentais e corporativos antigos.', 'Ex.: nota fiscal eletrônica trafega em XML com esquema validado.'),
  glossaryTerm('yaml', 'YAML', 'cloud', 'Formato de configuração legível por humanos, muito usado em DevOps e Kubernetes.', 'YAML é simples de ler, mas sensível a indentação e fácil de quebrar com espaço errado.', 'Ex.: manifesto Kubernetes define imagem, réplicas e variáveis em YAML.'),
  glossaryTerm('zero-trust', 'Zero Trust', 'seguranca', 'Modelo de segurança que parte do princípio de não confiar automaticamente em nada.', 'Zero Trust exige verificar identidade, contexto e permissão continuamente, mesmo dentro da rede.', 'Ex.: colaborador autenticado ainda precisa MFA e política específica para acessar dado sensível.'),
  glossaryTerm('qa', 'QA', 'qa', 'Prática e área focadas em qualidade, prevenção de regressão e confiança no software.', 'QA bom combina caso de teste, automação, exploração e análise de risco.', 'Ex.: antes da release, QA valida checkout, login e pagamento em cenários críticos.'),
  glossaryTerm('index', 'Índice', 'dados', 'Estrutura auxiliar que acelera busca em banco de dados.', 'Índice melhora leitura, mas custa espaço e escrita; escolher demais ou de menos dá problema.', 'Ex.: indexar e-mail acelera login por usuário sem varrer tabela inteira.'),
  glossaryTerm('join', 'JOIN', 'dados', 'Operação SQL que combina linhas de tabelas diferentes por uma relação comum.', 'JOIN é poderoso, mas join mal feito duplica dado, distorce métrica e piora performance.', 'Ex.: juntar pedidos e clientes para saber ticket médio por cidade.'),
  glossaryTerm('observabilidade', 'Observabilidade', 'infra', 'Capacidade de entender o estado interno do sistema por sinais externos como log, métrica e trace.', 'Observabilidade boa reduz tempo de diagnóstico quando o sistema falha em produção.', 'Ex.: trace mostra que lentidão veio do serviço de recomendação e não do banco.'),
  glossaryTerm('key-pair', 'Par de chaves', 'seguranca', 'Conjunto de chave pública e chave privada usado em criptografia assimétrica.', 'Esse modelo permite autenticar ou criptografar sem compartilhar o mesmo segredo em ambos os lados.', 'Ex.: SSH usa chave privada local e chave pública no servidor para liberar acesso.'),
  glossaryTerm('feature-branch', 'Feature Branch', 'geral', 'Branch criada para desenvolver uma funcionalidade isolada da base principal.', 'Ela facilita revisão, teste e rollback sem misturar trabalho inacabado com código estável.', 'Ex.: checkout novo vive em feature branch até ficar pronto para PR.'),
  glossaryTerm('cookie', 'Cookie', 'front-end', 'Pequeno dado salvo no navegador para sessão, preferência ou rastreamento.', 'Cookie precisa ser tratado com cuidado porque pode carregar informação sensível ou sujeita a consentimento.', 'Ex.: login persiste sessão por cookie HttpOnly definido pelo servidor.'),
  glossaryTerm('cdn', 'CDN', 'cloud', 'Rede distribuída que entrega arquivos mais perto do usuário final.', 'CDN reduz latência, alivia servidor principal e melhora disponibilidade para conteúdo estático.', 'Ex.: imagens do site são servidas por uma CDN em vez de sair sempre do mesmo servidor.'),
  glossaryTerm('dashboard', 'Dashboard', 'dados', 'Tela que resume métricas e sinais importantes para tomada de decisão.', 'Dashboard bom mostra contexto, tendência e ação; dashboard ruim vira painel bonito sem prioridade.', 'Ex.: produto acompanha conversão, retenção e erro em um único painel diário.'),
  glossaryTerm('data-visualization', 'Data Visualization', 'dados', 'Transformação de dados em gráficos ou visuais que ajudam a entender padrão e exceção.', 'Boa visualização reduz ruído e ajuda a pessoa certa a agir mais rápido.', 'Ex.: trocar tabela gigante por gráfico de tendência semanal para evidenciar queda de conversão.'),
  glossaryTerm('helpdesk', 'Help Desk', 'qa', 'Ponto de atendimento técnico para incidentes, dúvidas e problemas operacionais.', 'Help desk é porta de entrada comum em tecnologia porque expõe sistema, usuário e processo ao mesmo tempo.', 'Ex.: colaborador abre chamado porque perdeu acesso ao e-mail e o time de suporte investiga.'),
  glossaryTerm('rate-limit', 'Rate Limit', 'seguranca', 'Limite de requisições aceitas em certo período para um cliente ou origem.', 'Rate limit ajuda a controlar abuso, proteger serviço e evitar explosão de custo.', 'Ex.: API pública permite até 100 chamadas por minuto por chave.'),
  glossaryTerm('replica', 'Réplica', 'cloud', 'Cópia sincronizada de instância ou banco usada para redundância ou leitura distribuída.', 'Réplica ajuda disponibilidade e escala, mas introduz desafio de atraso entre primária e secundária.', 'Ex.: relatório pesado consulta réplica de leitura para não travar banco principal.'),
  glossaryTerm('sla', 'SLA', 'produto', 'Acordo formal sobre nível de serviço prometido, normalmente visto por cliente ou contrato.', 'SLA define expectativa de disponibilidade, tempo de resposta e penalidade em contexto comercial.', 'Ex.: contrato promete 99,9 por cento de disponibilidade mensal para clientes pagos.'),
  glossaryTerm('slo', 'SLO', 'infra', 'Meta interna de qualidade de serviço usada para orientar engenharia e operação.', 'SLO traduz confiabilidade em número acionável antes de virar quebra contratual de SLA.', 'Ex.: API deve responder em menos de 300 ms para 95 por cento das requisições.'),
  glossaryTerm('snapshot', 'Snapshot', 'cloud', 'Captura do estado de um volume, disco ou sistema em certo momento.', 'Snapshot ajuda recuperação, clonagem e auditoria, mas não substitui plano de restauração testado.', 'Ex.: criar snapshot do banco antes de migração arriscada.')
];

const MITOS = [
  { id:'m1', afirmacao:'Programador ganha 30k por mês logo de cara', veredicto:'mito', curta:'No Brasil, a maioria dos primeiros empregos paga faixas bem menores que os números virais de redes sociais; salários altos existem, mas costumam exigir anos de experiência, inglês ou empresa internacional.', explicacao:'Os 30 mil de influencer quase sempre misturam remuneração total, senioridade ou vaga no exterior. Para júnior local, é mais realista pensar em evolução em etapas: primeiro estágio ou primeira CLT, depois troca com portfólio forte. Comparar-se só com exceções gera ansiedade e decisões financeiras ruins (bootcamp caro sem reserva).', fonte:'State of JS, Stack Overflow Developer Survey e Glassdoor Brasil.' },
  { id:'m2', afirmacao:'Qualquer um aprende a programar em 3 meses', veredicto:'mito', curta:'Em três meses dá para aprender sintaxe e clonar tutoriais; isso não é o mesmo que sustentar um sistema real com bugs, prazos e código de outras pessoas.', explicacao:'O mercado paga por resolver problemas novos, ler documentação técnica e se comunicar com time. São habilidades que levam meses de prática deliberada. Cursos que prometem "mercado em 90 dias" costumam entregar conteúdo, não maturidade. Por isso projetos próprios pequenos, revisão de código alheio e estágio/mentoria ainda são os atalhos mais honestos.', fonte:null },
  { id:'m3', afirmacao:'Não precisa de matemática para programar', veredicto:'mito', curta:'Você raramente usa integral na web, mas usa lógica, contagem, conjuntos e raciocínio sobre custo de algoritmo o tempo todo, mas não costuma chamar de "matemática de prova".', explicacao:'Condições, loops aninhados, consultas SQL com JOIN e análise de dados exigem pensamento estruturado. Quem ignora isso fica preso em código que "funciona no exemplo" e quebra em escala. O caminho sensato é fortalecer bases com problemas reais, não decorar fórmulas sem contexto.', fonte:null },
  { id:'m4', afirmacao:'Faculdade de TI é perda de tempo', veredicto:'depende', curta:'Faculdade forte dá rede, fundamentos e ritmo de entrega que cursinho isolado não replica; faculdade fraca pode ser diploma caro com pouco retorno prático.', explicacao:'O que importa é corpo docente ativo, grade atualizada e alunos construindo projeto, não o nome na parede sozinho. Quem não faz faculdade precisa substituir isso com disciplina feroz, comunidade e portfólio auditável; quem faz faculdade ruim sem se esforçar também sai despreparado. A decisão é financeira e de perfil, não religião de mercado.', fonte:null },
  { id:'m5', afirmacao:'IA vai substituir programadores em breve', veredicto:'parcial', curta:'IA acelera quem já sabe avaliar resultado; ela não elimina responsabilidade por segurança, arquitetura e consequências de negócio.', explicacao:'Automatizar CRUD ou boilerplate é diferente de manter legado crítico, negociar trade-off com produto ou apagar incêndio em produção com logs incompletos. Profissionais que só aceitam código sem entender ficam mais vulneráveis, com ou sem IA. O antídoto continua sendo fundamentos, leitura de código e prática de depuração.', fonte:'https://survey.stackoverflow.co/' },
  { id:'m6', afirmacao:'É preciso ter computador caro para aprender a programar', veredicto:'mito', curta:'Para trilhas web e Python iniciais, 8 GB de RAM e SSD já permitem anos de estudo; o gargalo costuma ser consistência, não MHz.', explicacao:'Exceções existem: edição de vídeo pesada, modelos locais grandes ou Android nativo podem exigir mais. Mas a maioria dos iniciantes pode usar ambientes online, WSL ou máquinas modestas até clarificar objetivo. Gastar antes de formar hábito de estudo é má alocação de dinheiro.', fonte:null },
  { id:'m7', afirmacao:'Inglês fluente é obrigatório para trabalhar em TI', veredicto:'depende', curta:'Ler documentação e issues em inglês é quase inevitável; já falar fluentemente depende se você mira empresa nacional, remota BR ou exterior.', explicacao:'Muitas empresas brasileiras operam em português no dia a dia, mas ainda assim você vai depender de material técnico em inglês. Para dólar/euro, conversação e escrita viram filtro duro. Estratégia comum: fortalecer leitura primeiro e praticar conversação quando o objetivo de carreira internacional ficar claro.', fonte:null },
  { id:'m8', afirmacao:'Front-end é mais fácil que back-end', veredicto:'mito', curta:'Front tem complexidade visível (layout, acessibilidade, performance); back tem complexidade invisível (consistência, segurança, escala) e nenhum lado é "só mais fácil".', explicacao:'Achar front fácil porque "dá para ver na hora" ignora CSS difícil, estados assíncronos e compatibilidade. Achar back fácil porque "não tem pixel" ignora transações, filas e observabilidade. Escolha pela curiosidade que sustenta anos, não por meme de internet.', fonte:null },
  { id:'m9', afirmacao:'Certificações valem mais que experiência prática', veredicto:'mito', curta:'Certificado pode abrir triagem de RH, mas time técnico quer ver decisões suas em código, não só selo de curso.', explicacao:'Há certificações respeitadas em cloud e segurança porque o exame é difícil. Mesmo assim, elas complementam, não substituem portfólio. Para iniciante, três projetos explicáveis costumam vencer dez certificados genéricos. Combine os dois se fizer sentido financeiro, mas não confunda papel com competência demonstrada.', fonte:null },
  { id:'m10', afirmacao:'Programar é trabalho solitário', veredicto:'mito', curta:'Há foco individual, mas o trabalho profissional inclui alinhamento, revisão de código, pareamento e escrita de especificação. Silêncio total é exceção, não regra.', explicacao:'Quem não comunica bem trava promoção porque não consegue negociar escopo nem explicar risco. Por isso soft skills aparecem em toda vaga sênior: não é modinha de RH, é custo real de coordenação em time. Aprender a escrever bem é treinável e tem ROI alto.', fonte:null },
  { id:'m11', afirmacao:'Você precisa saber tudo antes de aplicar para vagas', veredicto:'mito', curta:'Listas de requisitos descrevem o candidato idealizado; contratações reais aceitam gaps quando há aprendizado rápido e base sólida.', explicacao:'Esperar 100% de aderência é receita para nunca enviar currículo. O equilíbrio é candidatar com honestidade: mostrar o que sabe, o que está estudando e um projeto que prove execução. Feedback de entrevista, mesmo negativo, vale ouro para priorizar estudo.', fonte:null },
  { id:'m12', afirmacao:'Trabalho remoto em TI é fácil de conseguir logo no início', veredicto:'parcial', curta:'Remoto existe, mas vagas júnior remotas disputam candidatos de vários estados; sem portfólio ou indicação, a fila é longa.', explicacao:'Empresas que pagam bem em remoto esperam autonomia, comunicação escrita e às vezes overlap de fuso. Presencial ou híbrido pode ser porta de entrada mais realista para primeiro emprego. Depois de 1–2 anos com entregas comprovadas, o remoto internacional fica mais plausível.', fonte:null },
  { id:'m13', afirmacao:'Segurança é só hackear coisas e usar ferramenta famosa', veredicto:'mito', curta:'Segurança profissional passa mais tempo em fundamento, processo, evidência, correção e risco do que em “ataque cinematográfico”.', explicacao:'Quem entra na área só pela fantasia ofensiva descobre rápido que a rotina envolve autenticação, logs, hardening, política, relatório e conversa difícil com times. Ferramenta ajuda, mas sem base de sistema e rede ela só cospe ruído. Segurança forte é engenharia de prevenção, detecção e resposta, não coleção de comandos soltos.', fonte:null },
  { id:'m14', afirmacao:'Dados é basicamente Excel com nome bonito', veredicto:'mito', curta:'Planilha pode ser parte do trabalho, mas dados profissionais envolvem SQL, modelagem, qualidade, métrica, contexto e comunicação de decisão.', explicacao:'O problema não é usar Excel; o problema é achar que a área termina ali. Em time sério, dado ruim custa dinheiro, dashboard errado muda prioridade e análise rasa convence gente a tomar decisão ruim. Quem dura em dados aprende a perguntar melhor, limpar melhor e sustentar a conclusão com método.', fonte:null },
  { id:'m15', afirmacao:'DevOps é cargo de júnior para quem “sabe um pouco de tudo”', veredicto:'mito', curta:'DevOps costuma cobrar contexto operacional, automação e maturidade técnica que raramente aparecem logo no primeiro passo da carreira.', explicacao:'Existem vagas de entrada com esse nome, mas muitas esperam repertório acumulado em suporte, infra, back-end ou cloud. O rótulo virou moda e esconde exigência alta de ambiente real. A porta pode ser júnior, mas a rotina não é rasa: deploy, observabilidade, incidente e pipeline cobram responsabilidade rápido.', fonte:null },
  { id:'m16', afirmacao:'Product Manager manda no time e não precisa entender tecnologia', veredicto:'mito', curta:'Produto sem repertório técnico mínimo e sem capacidade de influência vira só fila de pedido com nome bonito.', explicacao:'PM não “manda” em time maduro; ele organiza contexto, prioridade e decisão. Para isso funcionar, precisa entender custo, dependência, risco e como engenharia pensa sobre entrega. Sem essa base, o papel gera ruído, backlog inflado e promessa impossível para cliente ou liderança.', fonte:null },
  { id:'m17', afirmacao:'Suporte técnico é beco sem saída para quem quer crescer em TI', veredicto:'depende', curta:'Suporte vira teto quando o trabalho é repetição cega; vira base forte quando ensina sistema real, incidente, ambiente e comunicação sob pressão.', explicacao:'Muita gente entra por suporte e cresce para infra, segurança, produto técnico e operações porque ganhou repertório de produção cedo. O divisor é se você transforma recorrência em entendimento, documentação e automação, ou se só repete procedimento sem aprender sistema. Não é uma trilha glamourosa, mas pode ser uma porta muito honesta.', fonte:null },
];

  return {
    SCREEN_ORDER,
    GITHUB_REPO,
    GOATCOUNTER_CODE,
    QUIZ_PROGRESS_KEY,
    EASY_READ_KEY,
    APP_STATE_KEY,
    CHECKLIST_KEY,
    FREE_FILTER_KEY,
    DIAGNOSTIC_RESULT_KEY,
    CAT_TOOLTIPS,
    CAT_COLORS,
    AREAS_INFO,
    AREA_COMPARISONS,
    QUICK_AREA_TESTS,
    HONESTY_FILTERS,
    FAQ_TAGS,
    RECURSOS,
    GLOSSARIO: [...GLOSSARIO, ...GLOSSARIO_EXTRA].sort((a, b) => normalizeGlossaryTerm(a.termo).localeCompare(normalizeGlossaryTerm(b.termo), 'pt-BR')),
    MITOS
  };
});
