(function (root, factory) {
  const data = factory();
  if (typeof module !== 'undefined' && module.exports) module.exports = data;
  root.DEVGUIA_DATA = root.DEVGUIA_DATA || {};
  root.DEVGUIA_DATA.catalog = data;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
const SCREEN_ORDER = ['home', 'quiz', 'result', 'roadmap', 'faq', 'glossario', 'mitos'];
const GITHUB_REPO = 'nathaliagf/devguia';
const GOATCOUNTER_CODE = 'SEU-CODIGO';
const QUIZ_PROGRESS_KEY = 'quiz_progress_v2';
const EASY_READ_KEY = 'easy_read';
const APP_STATE_KEY = 'devguia_state_v1';
const CHECKLIST_KEY = 'devguia_checklist_v1';
const FREE_FILTER_KEY = 'devguia_free_only_v1';
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
  design: 'var(--coral)',
};
const AREAS_INFO = {
  front: { name: 'Front-end', desc: 'Interfaces e experiência visual do usuário' },
  back: { name: 'Back-end', desc: 'Lógica de sistemas, APIs e dados' },
  dados: { name: 'Dados', desc: 'Análise, métricas e insights' },
  ux: { name: 'UX/Design', desc: 'Produto centrado na experiência de uso' },
  infra: { name: 'Infra/Cloud', desc: 'Confiabilidade, deploy e escala' },
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
];
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
  { id:'api', termo:'API', fonetico:'éi-pi-áj', categoria:'back-end', curta:'É o contrato público pelo qual um sistema expõe dados ou ações para outro programa, sem abrir o código interno. Sem APIs, cada app precisaria duplicar bancos inteiros ou integrações frágeis via telas automatizadas.', longa:'API (Application Programming Interface) descreve URLs, formatos de dados e regras de autenticação que outro time ou outro serviço deve seguir. Ela pode ser REST, GraphQL, fila de mensagens ou gRPC — o ponto comum é padronizar a conversa entre sistemas. Boas APIs versionam mudanças, documentam erros e pensam em segurança desde o primeiro dia, porque qualquer cliente externo vai confiar no comportamento documentado.', exemplo:'No delivery, ao tocar em "pagar com cartão", o app não acessa o mainframe do banco: ele chama a API de pagamentos, recebe um status e mostra o resultado. Se a API mudar sem aviso, vários apps quebram ao mesmo tempo — por isso contrato e testes importam tanto.', relacionados:['backend','deploy','servidor'] },
  { id:'backend', termo:'Back-end', fonetico:'béki-end', categoria:'geral', curta:'É a camada que roda fora do navegador do usuário: servidores, regras de negócio, integrações e persistência. O usuário não "vê" o back-end, mas sente quando ele está lento, inconsistente ou inseguro.', longa:'Back-end recebe requisições (HTTP, filas, jobs agendados), valida permissões, fala com bancos e serviços externos e devolve respostas confiáveis. Ele também é onde moram preocupações como transações, concorrência, idempotência e auditoria. Times grandes separam camadas (API, domínio, infraestrutura), mas no início o importante é entender o fluxo ponta a ponta: pedido entra, dado é validado, efeito colateral é controlado, resposta sai.', exemplo:'Quando você redefine senha, o front só coleta o formulário; o back-end gera token seguro, envia e-mail, invalida sessões antigas e registra o evento. Se algo falhar no meio, o sistema precisa falhar de forma previsível, não corromper dados.', relacionados:['frontend','api','banco-de-dados','servidor'] },
  { id:'frontend', termo:'Front-end', fonetico:'frónti-end', categoria:'geral', curta:'É tudo o que roda no dispositivo da pessoa: layout, estados de tela, formulários, animações e acessibilidade. Bom front-end não é só estética — é engenharia de interface que lida com latência, erros de rede e diferentes tamanhos de tela.', longa:'Front-end tradicionalmente combina HTML semântico, CSS e JavaScript, hoje frequentemente com frameworks que gerenciam estado e roteamento. O trabalho inclui performance (menos JavaScript desnecessário, imagens adequadas), compatibilidade entre navegadores e testes de usabilidade. Em produtos reais, front-end conversa com design e produto para traduzir requisitos em componentes reutilizáveis.', exemplo:'No banco pelo celular, o extrato que você vê é front-end; o saldo veio de uma API, mas quem decide como mostrar loading, retry e mensagem de erro é a camada de interface. Uma tela bonita que trava com 500 linhas na lista não passa em revisão séria.', relacionados:['backend','html','css','javascript'] },
  { id:'deploy', termo:'Deploy', fonetico:'di-plói', categoria:'geral', curta:'É o ato de levar uma versão testada do software para um ambiente onde usuários ou outros sistemas acessam. Deploy manual existe, mas em empresas maduras ele é repetível, rastreável e reversível.', longa:'Deploy envolve empacotar artefatos (binários, assets estáticos, migrações de banco), aplicar configurações por ambiente (dev, homologação, produção) e validar saúde após publicar. Ferramentas modernas usam pipelines: build, testes, análise de segurança, liberação gradual (canary) e rollback automático se métricas piorarem. Sem disciplina de deploy, cada correção vira medo e cada sexta-feira vira apagão.', exemplo:'Você corrigiu um bug no cálculo de frete: após merge na branch principal, o pipeline publica nova versão no servidor, roda smoke tests e só então o tráfego passa a usar o build novo. Se o erro voltar, você reverte para o artefato anterior em minutos.', relacionados:['servidor','ci-cd','versionamento'] },
  { id:'servidor', termo:'Servidor', fonetico:'ser-vi-dór', categoria:'infra', curta:'É um computador (físico ou virtual) que fica escutando pedidos de rede e responde com processamento ou arquivos. Na nuvem, "servidor" muitas vezes é uma VM, container ou função gerenciada — o conceito permanece.', longa:'Servidores rodam sistemas operacionais enxutos, serviços web (como nginx), runtimes de linguagem e agentes de monitoramento. Eles precisam de endereço IP, DNS, certificados TLS e políticas de firewall. Em escala, você pensa em balanceamento de carga, saúde das instâncias e custo por hora — por isso infra não é só "subir uma máquina", é operação contínua.', exemplo:'Quando mil pessoas abrem o mesmo site ao mesmo tempo, várias instâncias de servidor atrás de um load balancer dividem o tráfego. Se uma instância morre, o balanceador para de enviar requisições para ela e sobe outra.', relacionados:['backend','deploy','cloud','devops'] },
  { id:'banco-de-dados', termo:'Banco de dados', fonetico:'', categoria:'back-end', curta:'É o sistema onde dados duráveis ficam organizados, indexados e protegidos por regras (tipos, constraints, transações). Sem banco bem modelado, o aplicativo vira planilha compartilhada com concorrência e perda de informação.', longa:'Bancos relacionais (PostgreSQL, MySQL) usam tabelas e SQL; NoSQL (MongoDB, Redis) favorecem documentos, chave-valor ou grafos conforme o caso. A escolha impacta consistência, velocidade de leitura e complexidade de consultas. Migrações de esquema, backups e replicação fazem parte do trabalho real — não só "criar tabela" uma vez.', exemplo:'Em e-commerce, estoque e pedidos precisam ser transacionais: dois clientes não podem comprar o último item ao mesmo tempo sem regra no banco. O back-end escreve em transação; se falhar, nada fica pela metade.', relacionados:['backend','sql','api'] },
  { id:'framework', termo:'Framework', fonetico:'fréimi-uórki', categoria:'geral', curta:'É um esqueleto opinativo que define como organizar pastas, rotas, injeção de dependências e ciclo de vida da aplicação. Você preenche os vazios; o framework chama seu código nos momentos certos.', longa:'Frameworks aceleram porque já resolvem problemas comuns: roteamento, autenticação, ORM, build e testes. O custo é acoplar decisões ao ecossistema escolhido e acompanhar atualizações. Biblioteca, em contraste, você chama quando precisa; framework costuma inverter o controle. Escolher errado no início não é tragédia, mas trocar depois dói — por isso times documentam critérios de escolha.', exemplo:'Em vez de configurar servidor HTTP do zero, você usa Express ou Fastify em Node, ou Django em Python, e foca nas rotas do seu domínio. O framework já traz middlewares, parsing de JSON e convenções de erro.', relacionados:['frontend','backend','biblioteca'] },
  { id:'biblioteca', termo:'Biblioteca (lib)', fonetico:'', categoria:'geral', curta:'É código reutilizável que você importa para uma tarefa pontual: datas, validação, gráficos, HTTP client. Você decide quando chamar; a biblioteca não manda na arquitetura inteira.', longa:'Bibliotecas bem mantidas têm semver, changelog e testes; ruins viram dívida técnica silenciosa. Em JavaScript, npm distribui pacotes — sempre verifique licença, tamanho no bundle e última atualização. Combinar dezenas de libs pequenas sem critério explode a superfície de vulnerabilidades e o tempo de build.', exemplo:'Para formatar moeda em real e timezone de Brasília, uma lib como date-fns ou Intl API evita reimplementar calendário. Você importa a função, usa no componente e segue — sem precisar de framework novo.', relacionados:['framework','javascript','frontend'] },
  { id:'versionamento', termo:'Controle de versão (Git)', fonetico:'', categoria:'geral', curta:'É o sistema que registra cada mudança no código: quem alterou, quando e por quê. Git é o padrão de mercado; hospedar no GitHub/GitLab é só camada colaborativa em cima.', longa:'Com Git você cria branches para features, revisa diffs antes de integrar e volta no tempo quando necessário. Fluxos como trunk-based ou Gitflow organizam como merges acontecem. Integração com CI roda testes a cada push — sem versionamento, isso simplesmente não existe de forma confiável.', exemplo:'Você quebrou produção sexta à noite: o histórico mostre o commit culpado, você abre revert ou hotfix branch, e o time discute em PR o que aprender. Sem Git, você caça cópia "final_v2_really.zip".', relacionados:['deploy','ci-cd','open-source'] },
  { id:'open-source', termo:'Open source', fonetico:'ópen-sórs', categoria:'geral', curta:'É software cujo código-fonte é público sob licença que permite estudar, modificar e redistribuir — dentro de regras legais claras. Não confundir com "grátis": muitas empresas lucram com suporte e serviços em cima de open source.', longa:'Projetos como Linux, Kubernetes e React movem a indústria porque milhares de olhos acham bugs e porque empresas compartilham custo de manutenção. Contribuir com documentação ou testes já conta como participação legítima. Entender licenças (MIT, Apache, GPL) evita surpresas quando você incorpora código em produto comercial.', exemplo:'Sua empresa usa PostgreSQL sem pagar licença, mas paga consultoria e suporte. O código é aberto; a operação 24x7 com SLA é que tem preço.', relacionados:['versionamento','cloud','devops'] },
  { id:'cloud', termo:'Cloud (nuvem)', fonetico:'cláudi', categoria:'infra', curta:'É consumir computação, armazenamento e rede como serviço pago pelo uso, em vez de comprar hardware próprio. AWS, GCP e Azure são os grandes provedores; há também opções menores e especializadas.', longa:'Na cloud você provisiona máquinas em minutos, anexa discos, configura VPC e integra serviços gerenciados (banco, fila, CDN). O modelo shifta custo de CAPEX para OPEX e exige disciplina financeira: recursos esquecidos geram conta alta. Boas equipes usam infraestrutura como código (Terraform, Pulumi) para não clicar manualmente em console.', exemplo:'Black Friday: auto scaling adiciona instâncias quando CPU sobe e reduz depois do pico. Em datacenter próprio, você teria capacidade ociosa o ano inteiro ou risco de queda no pico.', relacionados:['servidor','deploy','devops','ci-cd'] },
  { id:'devops', termo:'DevOps', fonetico:'dévi-ops', categoria:'infra', curta:'É cultura e prática de encurtar o caminho entre ideia e produção, com feedback rápido e responsabilidade compartilhada. Não é um cargo único em todos os lugares — às vezes é time de plataforma, às vezes há SRE separado.', longa:'DevOps incentiva automação de build, testes, deploy, observabilidade (logs, métricas, traces) e postmortem sem culpar indivíduo. Ferramentas são meio: Docker, Kubernetes, GitHub Actions, Prometheus. O fim é reduzir lead time e aumentar confiabilidade percebida pelo usuário.', exemplo:'Antes, deploy era evento mensal com checklist de medo; depois de DevOps maduro, deploys pequenos e frequentes reduzem risco porque mudanças são isoladas e monitoradas.', relacionados:['deploy','cloud','ci-cd','servidor'] },
  { id:'ci-cd', termo:'CI/CD', fonetico:'si-áj / si-di', categoria:'infra', curta:'CI integra código novo continuamente e roda verificações automáticas; CD estende isso até entrega ou deploy, quando os gates de qualidade passam. Juntos, reduzem surpresas na véspera de release.', longa:'Pipeline típico: lint, testes unitários, build, análise de segurança (SAST), publicação de artefato e promoção entre ambientes. CD pode ser "delivery" (humano aprova) ou "deployment" totalmente automático. Sem CI, bugs regressivos voltam sem ser notados; sem CD, correções urgentes demoram horas por burocracia manual.', exemplo:'Cada pull request roda 200 testes em minutos; merge na main gera imagem Docker versionada e atualiza homologação. Produção só recebe tag aprovada pelo time — com botão ou política automática.', relacionados:['deploy','devops','versionamento'] },
  { id:'html', termo:'HTML', fonetico:'éitch-ti-émi-éli', categoria:'front-end', curta:'É a camada de marcação que dá estrutura e significado ao conteúdo: títulos, listas, formulários, landmarks para leitores de tela. HTML não é linguagem de lógica — combina com CSS e JS.', longa:'HTML5 trouxe tags semânticas (header, nav, main, article) que melhoram SEO e acessibilidade. Atributos como alt em imagens e labels em inputs não são detalhe cosmético: são requisitos legais e de inclusão em muitos mercados. Validar HTML ajuda a evitar comportamento estranho entre navegadores.', exemplo:'Um botão deve ser <button>, não <div> com onclick, para funcionar com teclado e leitor de tela. Pequenas escolhas de marcação definem se seu produto é profissional ou frágil.', relacionados:['css','javascript','frontend'] },
  { id:'css', termo:'CSS', fonetico:'si-és-és', categoria:'front-end', curta:'É a folha de estilo que controla aparência e, em parte, layout responsivo: cores, tipografia, grid, flexbox, animações. CSS "simples" esconde anos de pegadinhas entre navegadores e especificidade.', longa:'Design systems modernos usam tokens, variáveis e componentes para manter consistência. Performance importa: seletores pesados, animações que disparam layout thrashing e imagens sem tamanho definido prejudicem Core Web Vitals. Pré-processadores (Sass) e frameworks (Tailwind) são opcionais — o fundamento é o cascade e o box model.', exemplo:'Mesmo conteúdo HTML pode virar layout mobile-first com media queries: menu vira ícone, colunas viram pilha, fonte aumenta para leitura confortável. Isso é trabalho de CSS, não só "deixar bonito no Figma".', relacionados:['html','javascript','frontend'] },
  { id:'javascript', termo:'JavaScript', fonetico:'djéva-escrípt', categoria:'front-end', curta:'É a linguagem que roda nos navegadores para eventos, estado e comunicação com APIs; com Node.js, também roda em servidores e ferramentas de build. Ecossistema enorme exige curadoria do que você instala.', longa:'JS moderno (ES modules, async/await, fetch) simplifica código assíncrono, mas exige entender promises e fila de eventos. Tipagem opcional com TypeScript reduz bugs em projetos médios e grandes. Bundlers (Vite, Webpack) transformam e otimizam código para produção.', exemplo:'Ao digitar em uma busca, JS debounce evita disparar requisição a cada tecla; ao receber JSON da API, JS atualiza o DOM ou framework reativo re-renderiza só o necessário.', relacionados:['html','css','frontend','api'] },
  { id:'sql', termo:'SQL', fonetico:'és-quiú-éli', categoria:'back-end', curta:'É a linguagem declarativa para consultar e transformar dados em bancos relacionais. Você descreve o que quer; o otimizador do banco pensa em como buscar.', longa:'SQL cobre SELECT com JOINs, agregações, subconsultas, transações (BEGIN/COMMIT) e DDL (CREATE TABLE). Boas consultas usam índices adequados; más consultas travam produção com full table scan. ORMs ajudam, mas em performance crítica o SQL manual volta.', exemplo:'Relatório de vendas por região no último trimestre: você junta pedidos, clientes e filiais em uma query, filtra por data e agrupa. Errar JOIN duplica linhas e infla números — por isso analistas revisam plano de execução.', relacionados:['banco-de-dados','backend','algoritmo'] },
  { id:'algoritmo', termo:'Algoritmo', fonetico:'al-go-rít-mo', categoria:'fundamentos', curta:'É uma receita finita e não ambígua que transforma entrada em saída. Em entrevistas, pedem algoritmos não por sadismo, mas para ver se você raciocina sobre custo e casos extremos.', longa:'Analisar complexidade (Big O) responde como tempo e memória crescem quando o input dobra. Estruturas de dados (filas, heaps, árvores) escolhidas certas tornam operações baratas. No trabalho diário, algoritmo aparece em caches, agendadores, deduplicação e roteamento — não só em exercícios de livro.', exemplo:'Encontrar duplicatas em milhões de registros: hash set O(n) bate força bruta O(n²). Escolher errado significa job que rodava em minutos passar a rodar em horas.', relacionados:['sql','debug','javascript'] },
  { id:'debug', termo:'Debug (depuração)', fonetico:'di-bágui', categoria:'geral', curta:'É o processo sistemático de reproduzir falha, isolar causa e provar a correção. Boa depuração mistura leitura de stack trace, logs, breakpoints e hipóteses testáveis.', longa:'Debug não é "tentar coisas até funcionar" indefinidamente — é reduzir o espaço de busca. Você bissecta commits, minimiza caso de teste e adiciona instrumentação temporária. Em sistemas distribuídos, correlacionar request IDs entre serviços é parte do ofício. Documentar a causa raiz evita que o bug volte disfarçado.', exemplo:'Produção retorna 500 só para alguns usuários: você compara payload, descobre string vazia onde número era esperado, adiciona validação no back-end e teste de regressão. Sem debug disciplinado, alguém coloca if espalhado que mascara o sintoma.', relacionados:['algoritmo','backend','javascript'] },
  { id:'ux', termo:'UX (User Experience)', fonetico:'iú-éks', categoria:'design', curta:'É o efeito combinado de usabilidade, performance percebida, copy e confiança ao longo da jornada. UX não é só wireframe bonito — é reduzir erro humano e ansiedade em tarefas reais.', longa:'Pesquisa com usuários, testes de usabilidade e métricas (taxa de conclusão, tempo na tarefa) informam decisões. UX trabalha com acessibilidade, design de informação e feedback de sistema (loading, erros recuperáveis). Em squads, UX negocia trade-offs com engenharia: nem todo polimento vale o custo de implementação agora.', exemplo:'Formulário de cadastro longo gera abandono; UX propõe dividir em passos, salvar rascunho e mostrar progresso. Engenharia implementa validação inline e mensagens claras — resultado medido em conversão.', relacionados:['frontend','html','css'] },
];

const MITOS = [
  { id:'m1', afirmacao:'Programador ganha 30k por mês logo de cara', veredicto:'mito', curta:'No Brasil, a maioria dos primeiros empregos paga faixas bem menores que os números virais de redes sociais; salários altos existem, mas costumam exigir anos de experiência, inglês ou empresa internacional.', explicacao:'Os 30 mil de influencer quase sempre misturam remuneração total, senioridade ou vaga no exterior. Para júnior local, é mais realista pensar em evolução em etapas: primeiro estágio ou primeira CLT, depois troca com portfólio forte. Comparar-se só com exceções gera ansiedade e decisões financeiras ruins (bootcamp caro sem reserva).', fonte:'State of JS, Stack Overflow Developer Survey e Glassdoor Brasil.' },
  { id:'m2', afirmacao:'Qualquer um aprende a programar em 3 meses', veredicto:'mito', curta:'Em três meses dá para aprender sintaxe e clonar tutoriais; isso não é o mesmo que sustentar um sistema real com bugs, prazos e código de outras pessoas.', explicacao:'O mercado paga por resolver problemas novos, ler documentação técnica e se comunicar com time — habilidades que levam meses de prática deliberada. Cursos que prometem "mercado em 90 dias" costumam entregar conteúdo, não maturidade. Por isso projetos próprios pequenos, revisão de código alheio e estágio/mentoria ainda são os atalhos mais honestos.', fonte:null },
  { id:'m3', afirmacao:'Não precisa de matemática para programar', veredicto:'mito', curta:'Você raramente usa integral na web, mas usa lógica, contagem, conjuntos e raciocínio sobre custo de algoritmo o tempo todo — só não chama de "matemática de prova".', explicacao:'Condições, loops aninhados, consultas SQL com JOIN e análise de dados exigem pensamento estruturado. Quem ignora isso fica preso em código que "funciona no exemplo" e quebra em escala. O caminho sensato é fortalecer bases com problemas reais, não decorar fórmulas sem contexto.', fonte:null },
  { id:'m4', afirmacao:'Faculdade de TI é perda de tempo', veredicto:'depende', curta:'Faculdade forte dá rede, fundamentos e ritmo de entrega que cursinho isolado não replica; faculdade fraca pode ser diploma caro com pouco retorno prático.', explicacao:'O que importa é corpo docente ativo, grade atualizada e alunos construindo projeto — não o nome na parede sozinho. Quem não faz faculdade precisa substituir isso com disciplina feroz, comunidade e portfólio auditável; quem faz faculdade ruim sem se esforçar também sai despreparado. A decisão é financeira e de perfil, não religião de mercado.', fonte:null },
  { id:'m5', afirmacao:'IA vai substituir programadores em breve', veredicto:'parcial', curta:'IA acelera quem já sabe avaliar resultado; ela não elimina responsabilidade por segurança, arquitetura e consequências de negócio.', explicacao:'Automatizar CRUD ou boilerplate é diferente de manter legado crítico, negociar trade-off com produto ou apagar incêndio em produção com logs incompletos. Profissionais que só aceitam código sem entender ficam mais vulneráveis — com ou sem IA. O antídoto continua sendo fundamentos, leitura de código e prática de depuração.', fonte:'https://survey.stackoverflow.co/' },
  { id:'m6', afirmacao:'É preciso ter computador caro para aprender a programar', veredicto:'mito', curta:'Para trilhas web e Python iniciais, 8 GB de RAM e SSD já permitem anos de estudo; o gargalo costuma ser consistência, não MHz.', explicacao:'Exceções existem: edição de vídeo pesada, modelos locais grandes ou Android nativo podem exigir mais. Mas a maioria dos iniciantes pode usar ambientes online, WSL ou máquinas modestas até clarificar objetivo. Gastar antes de formar hábito de estudo é má alocação de dinheiro.', fonte:null },
  { id:'m7', afirmacao:'Inglês fluente é obrigatório para trabalhar em TI', veredicto:'depende', curta:'Ler documentação e issues em inglês é quase inevitável; já falar fluentemente depende se você mira empresa nacional, remota BR ou exterior.', explicacao:'Muitas empresas brasileiras operam em português no dia a dia, mas ainda assim você vai depender de material técnico em inglês. Para dólar/euro, conversação e escrita viram filtro duro. Estratégia comum: fortalecer leitura primeiro e praticar conversação quando o objetivo de carreira internacional ficar claro.', fonte:null },
  { id:'m8', afirmacao:'Front-end é mais fácil que back-end', veredicto:'mito', curta:'Front tem complexidade visível (layout, acessibilidade, performance); back tem complexidade invisível (consistência, segurança, escala) — nenhum lado é "só mais fácil".', explicacao:'Achar front fácil porque "dá para ver na hora" ignora CSS difícil, estados assíncronos e compatibilidade. Achar back fácil porque "não tem pixel" ignora transações, filas e observabilidade. Escolha pela curiosidade que sustenta anos, não por meme de internet.', fonte:null },
  { id:'m9', afirmacao:'Certificações valem mais que experiência prática', veredicto:'mito', curta:'Certificado pode abrir triagem de RH, mas time técnico quer ver decisões suas em código, não só selo de curso.', explicacao:'Há certificações respeitadas em cloud e segurança porque o exame é difícil — mesmo assim elas complementam, não substituem portfólio. Para iniciante, três projetos explicáveis costumam vencer dez certificados genéricos. Combine os dois se fizer sentido financeiro, mas não confunda papel com competência demonstrada.', fonte:null },
  { id:'m10', afirmacao:'Programar é trabalho solitário', veredicto:'mito', curta:'Há foco individual, mas o trabalho profissional inclui alinhamento, revisão de código, pareamento e escrita de especificação — silêncio total é exceção, não regra.', explicacao:'Quem não comunica bem trava promoção porque não consegue negociar escopo nem explicar risco. Por isso soft skills aparecem em toda vaga sênior: não é modinha de RH, é custo real de coordenação em time. Aprender a escrever bem é treinável e tem ROI alto.', fonte:null },
  { id:'m11', afirmacao:'Você precisa saber tudo antes de aplicar para vagas', veredicto:'mito', curta:'Listas de requisitos descrevem o candidato idealizado; contratações reais aceitam gaps quando há aprendizado rápido e base sólida.', explicacao:'Esperar 100% de aderência é receita para nunca enviar currículo. O equilíbrio é candidatar com honestidade: mostrar o que sabe, o que está estudando e um projeto que prove execução. Feedback de entrevista — mesmo negativo — vale ouro para priorizar estudo.', fonte:null },
  { id:'m12', afirmacao:'Trabalho remoto em TI é fácil de conseguir logo no início', veredicto:'parcial', curta:'Remoto existe, mas vagas júnior remotas disputam candidatos de vários estados; sem portfólio ou indicação, a fila é longa.', explicacao:'Empresas que pagam bem em remoto esperam autonomia, comunicação escrita e às vezes overlap de fuso. Presencial ou híbrido pode ser porta de entrada mais realista para primeiro emprego. Depois de 1–2 anos com entregas comprovadas, o remoto internacional fica mais plausível.', fonte:null },
];

  return { SCREEN_ORDER, GITHUB_REPO, GOATCOUNTER_CODE, QUIZ_PROGRESS_KEY, EASY_READ_KEY, APP_STATE_KEY, CHECKLIST_KEY, FREE_FILTER_KEY, CAT_TOOLTIPS, CAT_COLORS, AREAS_INFO, AREA_COMPARISONS, HONESTY_FILTERS, FAQ_TAGS, RECURSOS, GLOSSARIO, MITOS };
});
