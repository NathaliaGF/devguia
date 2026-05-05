(function (root, factory) {
  const data = factory();
  if (typeof module !== 'undefined' && module.exports) module.exports = data;
  root.DEVGUIA_DATA = root.DEVGUIA_DATA || {};
  root.DEVGUIA_DATA.questions = data;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
const BLOCKS = {
  'Sobre você':           { chip: 'chip-purple' },
  'Perfil técnico':       { chip: 'chip-teal' },
  'Preferências de área': { chip: 'chip-blue' },
  'Sua situação atual':   { chip: 'chip-amber' },
};

const QUESTIONS = [
  {
    id: 'prazer', block: 'Sobre você',
    text: 'Quando você precisa resolver um problema complicado, como você normalmente age?',
    hint: 'Seja honesto. Não existe resposta certa.',
    options: [
      { text: 'Gosto de analisar o problema com calma, quebrar em partes e ir testando soluções', scores: { logica: 3, analitico: 3, path_codigo: 1, path_dados: 1 } },
      { text: 'Prefiro pedir ajuda a alguém que já passou por isso, sem querer reinventar a roda.', scores: { social: 2, pratico: 1, suporte: 1 } },
      { text: 'Começo a experimentar aleatoriamente até algo funcionar', scores: { pratico: 2, criativo: 1, sp_pentest: 1 } },
      { text: 'Fico travado e procrastino até ser obrigado a resolver', scores: { bloqueio: 3 } },
    ]
  },
  {
    id: 'estudo', block: 'Sobre você',
    text: 'Como você aprende melhor?',
    hint: 'Pense em como você aprendeu algo de verdade na vida.',
    options: [
      { text: 'Lendo documentação, artigos, livros. Gosto de entender a teoria antes de praticar.', scores: { autodidata: 3, logica: 1, path_dados: 1, path_infra: 1 } },
      { text: 'Fazendo: aprendo construindo coisas, mesmo sem entender tudo', scores: { pratico: 3, criativo: 1, path_codigo: 1 } },
      { text: 'Com pessoas: cursos, aulas, alguém me explicando', scores: { social: 3, suporte: 1 } },
      { text: 'Tenho muita dificuldade de aprender qualquer coisa nova por conta própria', scores: { bloqueio: 3, social: 1 } },
    ]
  },
  {
    id: 'frustracao', block: 'Sobre você',
    text: 'Um código que você escreveu para de funcionar sem motivo aparente. Como você reage?',
    hint: 'Esse tipo de situação é o dia a dia de qualquer desenvolvedor.',
    options: [
      { text: 'Fico frustrado no começo mas viro um detetive: preciso entender o porquê.', scores: { logica: 3, analitico: 2, path_codigo: 1, path_seguranca: 1 } },
      { text: 'Procuro no Google e Stack Overflow até achar a solução', scores: { pratico: 3, autodidata: 1, path_codigo: 1 } },
      { text: 'Me estresso muito e tenho vontade de largar tudo', scores: { bloqueio: 2, estresse: 2 } },
      { text: 'Peço ajuda imediatamente para alguém mais experiente', scores: { social: 2, bloqueio: 1, suporte: 1 } },
    ]
  },
  {
    id: 'atencao', block: 'Sobre você',
    text: 'Você consegue se concentrar por períodos longos em um problema técnico?',
    hint: 'Programar exige blocos de concentração de 1–3 horas com frequência.',
    options: [
      { text: "Sim, entro em 'estado de fluxo' e horas passam sem eu perceber", scores: { foco: 3, logica: 1, path_codigo: 1, path_dados: 1 } },
      { text: 'Consigo, mas preciso de pausas frequentes e tenho dias melhores que outros', scores: { foco: 1, pratico: 1 } },
      { text: 'Tenho muita dificuldade com isso, me distraio facilmente.', scores: { bloqueio: 2, estresse: 1 } },
      { text: 'Depende muito do assunto: em coisas que gosto, sim; no resto, não.', scores: { criativo: 1, foco: 1 } },
    ]
  },
  {
    id: 'mat', block: 'Perfil técnico',
    text: 'Como você se relaciona com matemática e lógica?',
    hint: 'Não estamos falando de cálculo avançado, mas de raciocínio lógico e abstração.',
    options: [
      { text: 'Gosto muito. Resolver problemas lógicos é estimulante para mim.', scores: { logica: 3, analitico: 2, path_dados: 1, path_seguranca: 1 } },
      { text: 'Não tenho horror, consigo me virar, mas não é meu ponto forte', scores: { logica: 1 } },
      { text: 'Nunca gostei de matemática e sempre tive dificuldade', scores: { bloqueio: 2, estresse: 1 } },
      { text: 'Nunca precisei disso na vida e não sei avaliar', scores: {} },
    ]
  },
  {
    id: 'detalhe', block: 'Perfil técnico',
    text: 'Você é do tipo que nota pequenos detalhes e inconsistências?',
    hint: 'Uma vírgula no lugar errado pode derrubar um sistema inteiro.',
    options: [
      { text: 'Sim. Tenho um lado perfeccionista que não deixa coisas erradas passarem.', scores: { analitico: 3, logica: 1, qa: 1, path_seguranca: 1 } },
      { text: 'Às vezes. Depende da situação e de como estou.', scores: { analitico: 1 } },
      { text: 'Não muito. Prefiro o panorama geral ao invés de detalhes.', scores: { gestao: 1, criativo: 1, produto: 1 } },
      { text: 'Nunca fui assim. Erros de detalhe sempre me passaram batido.', scores: { bloqueio: 1 } },
    ]
  },
  {
    id: 'abstrato', block: 'Perfil técnico',
    text: 'Você consegue pensar em sistemas abstratos, coisas que não dá para tocar ou ver diretamente?',
    hint: 'Como imaginar o fluxo de dados entre servidores, ou como uma função transforma dados.',
    options: [
      { text: 'Sim. Consigo visualizar sistemas complexos na cabeça com facilidade.', scores: { logica: 3, analitico: 2, path_infra: 1, path_codigo: 1 } },
      { text: 'Com algum esforço, mas consigo quando me dedico', scores: { logica: 1, analitico: 1 } },
      { text: 'Tenho dificuldade com coisas abstratas e preciso ver para entender.', scores: { pratico: 2, bloqueio: 1, sp_frontend: 1, sp_product_design: 1 } },
      { text: 'Nunca testei isso de forma séria', scores: { pratico: 1 } },
    ]
  },
  {
    id: 'area_pref', block: 'Preferências de área',
    text: 'O que mais te atrai dentro de tecnologia?',
    hint: 'Pode ser algo que você já conhece ou apenas intuição.',
    options: [
      { text: 'Criar interfaces: sites, apps, telas bonitas e bem pensadas.', scores: { front: 3, criativo: 2, ux: 2, path_codigo: 2, sp_frontend: 2, sp_mobile: 1, sp_product_design: 1 } },
      { text: "A 'máquina por baixo': servidores, dados, sistemas que fazem tudo rodar.", scores: { back: 3, infra: 2, logica: 1, path_codigo: 1, path_infra: 2, sp_backend: 2, sp_apis: 1 } },
      { text: 'Entender padrões em dados, fazer análises e tirar conclusões', scores: { dados: 3, analitico: 2, logica: 1, path_dados: 3, sp_bi: 2, sp_ds: 1 } },
      { text: 'Garantir que sistemas não quebrem e que pessoas usem bem', scores: { qa: 2, ux: 2, gestao: 1, produto: 1, sp_qa_auto: 1, sp_product_design: 1 } },
    ]
  },
  {
    id: 'visual', block: 'Preferências de área',
    text: 'Quando você usa um produto digital com problema de usabilidade, o que você faz?',
    hint: 'Pense em como você reage a um app com interface ruim.',
    options: [
      { text: 'Fico incomodado e já penso em como melhoraria o design', scores: { ux: 3, front: 2, criativo: 2, produto: 1, sp_product_design: 2, sp_frontend: 1 } },
      { text: 'Anoto o problema mas não me incomodo tanto: o que importa é funcionar.', scores: { back: 2, logica: 1, path_codigo: 1 } },
      { text: 'Me pergunto por que tecnicamente aquilo falhou', scores: { qa: 2, back: 2, logica: 1, sp_qa_auto: 1, sp_backend: 1 } },
      { text: 'Não costumo notar muito, uso e sigo em frente', scores: {} },
    ]
  },
  {
    id: 'dados_int', block: 'Preferências de área',
    text: 'Se você pudesse escolher um projeto para trabalhar, qual seria mais interessante?',
    hint: 'Ignore limitações técnicas. Pense apenas no que te animaria.',
    options: [
      { text: 'Construir um aplicativo do zero que resolve um problema real', scores: { front: 2, back: 2, pratico: 2, criativo: 1, path_codigo: 3, sp_fullstack: 2, sp_mobile: 1 } },
      { text: 'Analisar dados de uma empresa e descobrir padrões escondidos', scores: { dados: 3, analitico: 3, logica: 1, path_dados: 3, sp_ds: 2, sp_bi: 1 } },
      { text: 'Criar uma infraestrutura que aguenta milhões de acessos sem cair', scores: { infra: 3, back: 2, logica: 2, path_infra: 3, sp_sre: 2, sp_cloud: 1 } },
      { text: 'Testar exaustivamente um sistema para encontrar todos os pontos fracos', scores: { qa: 3, analitico: 2, logica: 1, path_seguranca: 1, sp_qa_auto: 2, sp_pentest: 1 } },
    ]
  },
  {
    id: 'social_trab', block: 'Preferências de área',
    text: 'Qual modelo de trabalho faz mais sentido para você?',
    hint: '',
    options: [
      { text: 'Trabalhar sozinho na maior parte do tempo. Foco total, sem interrupções.', scores: { back: 1, infra: 1, dados: 1, autodidata: 1, path_codigo: 1, path_dados: 1 } },
      { text: 'Em equipe técnica: pair programming, code review, colaboração constante.', scores: { front: 1, back: 1, social: 2, path_codigo: 1 } },
      { text: 'Conversando muito com pessoas não-técnicas: clientes, designers, gestores.', scores: { ux: 2, gestao: 2, social: 2, produto: 2, sp_pm: 2 } },
      { text: 'Ensinando e compartilhando conhecimento com outros', scores: { ensino: 3, social: 2, advocacy: 2, sp_devrel: 2 } },
    ]
  },
  {
    id: 'situacao', block: 'Sua situação atual',
    text: 'Como você descreveria sua situação atual em relação a TI?',
    hint: '',
    options: [
      { text: 'Sou iniciante total, nunca escrevi uma linha de código na vida.', scores: { iniciante: 3, suporte: 1 } },
      { text: 'Estou estudando há algum tempo mas ainda não trabalho na área', scores: { estudando: 3 } },
      { text: 'Trabalho em outra área e quero mudar para TI', scores: { transicao: 3 } },
      { text: 'Já trabalho com tecnologia e quero me especializar ou mudar de ramo dentro de TI', scores: { especializar: 3, lideranca: 1 } },
    ]
  },
  {
    id: 'motivacao', block: 'Sua situação atual',
    text: 'O que te motivou a considerar ou estar em TI?',
    hint: 'Honestidade total aqui faz diferença no diagnóstico.',
    options: [
      { text: 'Sempre fui apaixonado por tecnologia. Não é sobre dinheiro.', scores: { vocacao: 3, foco: 1 } },
      { text: 'Vi que paga bem e tem vagas. Foi uma decisão prática.', scores: { pratico: 2, bloqueio: 1 } },
      { text: 'Alguém me indicou ou vi influencer falando que era fácil', scores: { bloqueio: 2, estresse: 1 } },
      { text: 'Quero criar coisas: software é um meio de materializar ideias.', scores: { criativo: 3, vocacao: 2, path_codigo: 1, produto: 1 } },
    ]
  },
  {
    id: 'ensino_int', block: 'Sua situação atual',
    text: 'Você tem vontade de compartilhar o que sabe com outras pessoas?',
    hint: 'Alguns perfis se encaixam melhor em educação do que em desenvolvimento.',
    options: [
      { text: 'Sim. Sinto prazer em explicar coisas e ver outras pessoas entendendo.', scores: { ensino: 3, social: 2, advocacy: 2, sp_devrel: 2 } },
      { text: 'Às vezes, mas prefiro focar em construir do que ensinar', scores: { pratico: 1, criativo: 1 } },
      { text: 'Não. Prefiro aprender e criar sem me preocupar em ensinar.', scores: { autodidata: 1 } },
      { text: 'Nunca pensei nisso de forma séria', scores: {} },
    ]
  },
  {
    id: 'lp', block: 'Sua situação atual',
    text: 'O que melhor descreve sua relação atual com programação prática?',
    hint: '',
    options: [
      { text: 'Nunca programei, zero experiência.', scores: { iniciante: 2, suporte: 1 } },
      { text: 'Já fiz tutoriais e cursinho, mas nunca construí nada próprio', scores: { estudando: 2, bloqueio: 1 } },
      { text: 'Já tenho projetos, mesmo que pequenos e imperfeitos', scores: { pratico: 2, autodidata: 1, path_codigo: 1 } },
      { text: 'Programo profissionalmente ou com consistência há algum tempo', scores: { especializar: 2, pratico: 2, lideranca: 1 } },
    ]
  },
  {
    id: 'ambiguidade', block: 'Preferências de área',
    text: 'Quando ninguém te dá uma resposta exata, em qual cenário você se sente mais confortável?',
    hint: 'Algumas áreas vivem de hipótese e investigação; outras preferem processo definido.',
    options: [
      { text: 'Explorando padrões em dados até a resposta aparecer', scores: { path_dados: 3, analitico: 2, sp_ds: 1, sp_ml: 1 } },
      { text: 'Montando uma solução técnica mesmo com muitas peças abstratas', scores: { path_codigo: 2, path_infra: 1, logica: 2, sp_backend: 1, sp_fullstack: 1 } },
      { text: 'Seguindo processo, checklist e evidência até reduzir risco', scores: { qa: 2, path_infra: 1, path_seguranca: 2, sp_soc: 1, sp_qa_auto: 1 } },
      { text: 'Falando com pessoas para entender o problema antes de decidir', scores: { social: 2, produto: 2, ux: 1, sp_pm: 1 } },
    ]
  },
  {
    id: 'risco', block: 'Preferências de área',
    text: 'Qual dessas situações te anima mais?',
    hint: 'Pense no tipo de risco que você tolera repetir por anos.',
    options: [
      { text: 'Quebrar o sistema de propósito para descobrir fraquezas antes de alguém explorar', scores: { path_seguranca: 3, sp_pentest: 2, sp_redteam: 1 } },
      { text: 'Construir uma funcionalidade nova visível para o usuário final', scores: { path_codigo: 3, front: 1, back: 1, sp_frontend: 1, sp_fullstack: 1 } },
      { text: 'Estabilizar um serviço crítico para ele parar de cair', scores: { path_infra: 3, infra: 2, sp_sre: 2, sp_devops: 1 } },
      { text: 'Encontrar padrão em números que muda decisão de produto', scores: { path_dados: 3, dados: 2, sp_bi: 1, sp_ds: 1 } },
    ]
  },
  {
    id: 'seguranca_int', block: 'Perfil técnico',
    text: 'Qual afirmação sobre segurança, privacidade e ameaças mais combina com você?',
    hint: 'Não pense em glamour. Pense no trabalho real.',
    options: [
      { text: 'Gosto de pensar como alguém mal-intencionado para antecipar ataque', scores: { path_seguranca: 3, sp_pentest: 2, sp_redteam: 2 } },
      { text: 'Prefiro criar controles, monitorar alerta e fechar brecha com disciplina', scores: { path_seguranca: 3, sp_soc: 2, sp_blueteam: 2 } },
      { text: 'Vejo segurança como parte da arquitetura de sistemas e cloud', scores: { path_seguranca: 2, path_infra: 2, sp_cloudsec: 2, sp_incident: 1 } },
      { text: 'Segurança importa, mas não é o que eu mais gostaria de estudar a fundo', scores: {} },
    ]
  },
  {
    id: 'infra_auto', block: 'Preferências de área',
    text: 'O que você faria com mais prazer em uma semana de trabalho?',
    hint: '',
    options: [
      { text: 'Automatizar deploy, pipeline e configuração para ninguém depender de ritual manual', scores: { path_infra: 3, infra: 2, sp_devops: 2, sp_containers: 1, sp_cloud: 1 } },
      { text: 'Criar API, regra de negócio e integrações entre sistemas', scores: { path_codigo: 3, back: 2, sp_backend: 2, sp_apis: 2 } },
      { text: 'Modelar dados, limpar base bagunçada e entregar análise confiável', scores: { path_dados: 3, dados: 2, sp_de: 1, sp_bi: 1 } },
      { text: 'Ajudar usuários internos a resolver incidente e evitar que volte', scores: { suporte: 3, social: 2, sp_helpdesk: 2, sp_incident: 1 } },
    ]
  },
  {
    id: 'numeros', block: 'Perfil técnico',
    text: 'Como você reage quando precisa lidar com números, métricas ou estatística?',
    hint: '',
    options: [
      { text: 'Gosto. Métricas me ajudam a pensar melhor e tomar decisão.', scores: { path_dados: 3, dados: 2, analitico: 2, sp_bi: 2, sp_ds: 1 } },
      { text: 'Consigo lidar bem se isso melhorar produto ou operação', scores: { path_dados: 1, path_infra: 1, produto: 1 } },
      { text: 'Prefiro interface, fluxo e clareza visual a números', scores: { ux: 2, criativo: 1, sp_product_design: 1 } },
      { text: 'Evito ao máximo, números me drenam rápido.', scores: { bloqueio: 1 } },
    ]
  },
  {
    id: 'cliente', block: 'Preferências de área',
    text: 'Para quem você prefere trabalhar, no fim das contas?',
    hint: 'Usuário final e outros devs exigem tipos diferentes de empatia.',
    options: [
      { text: 'Para usuário final: quero melhorar experiência direta de quem usa', scores: { front: 2, ux: 2, path_codigo: 1, produto: 1, sp_frontend: 1, sp_product_design: 1 } },
      { text: 'Para outros devs: gosto de ferramenta interna, plataforma e API bem feita', scores: { path_infra: 2, path_codigo: 2, sp_platform: 2, sp_apis: 1, sp_devops: 1 } },
      { text: 'Para decisão de negócio: quero dar clareza com dados e indicadores', scores: { path_dados: 3, sp_bi: 2, sp_pm: 1 } },
      { text: 'Para times sob pressão: quero ajudar quando algo quebra ou está confuso', scores: { suporte: 2, path_seguranca: 1, path_infra: 1, sp_helpdesk: 2, sp_soc: 1 } },
    ]
  },
  {
    id: 'rotina', block: 'Preferências de área',
    text: 'Que tipo de rotina te parece mais sustentável no longo prazo?',
    hint: '',
    options: [
      { text: 'Iterar produto, interface e feedback de usuário o tempo todo', scores: { path_codigo: 2, ux: 2, produto: 1, sp_frontend: 1, sp_product_design: 1 } },
      { text: 'Manter ambiente crítico estável, com alerta, automação e observabilidade', scores: { path_infra: 3, sp_sre: 2, sp_platform: 1 } },
      { text: 'Investigar padrão, testar hipótese e explicar o que os dados contam', scores: { path_dados: 3, sp_ds: 1, sp_bi: 1, sp_bigdata: 1 } },
      { text: 'Responder a ameaça, incidente ou comportamento suspeito com disciplina', scores: { path_seguranca: 3, sp_soc: 1, sp_incident: 2, sp_forense: 1 } },
    ]
  },
  {
    id: 'processo', block: 'Perfil técnico',
    text: 'Em um trabalho técnico, o que te incomoda mais?',
    hint: '',
    options: [
      { text: 'Ter que repetir tarefa manual que poderia ser automatizada', scores: { path_infra: 2, path_codigo: 1, sp_devops: 2, sp_lowcode: 1 } },
      { text: 'Ver decisão sendo tomada sem dado confiável', scores: { path_dados: 2, sp_bi: 2, analitico: 1 } },
      { text: 'Perceber vulnerabilidade óbvia ou acesso mal configurado', scores: { path_seguranca: 3, sp_cloudsec: 1, sp_blueteam: 1 } },
      { text: 'Usar produto confuso e mal desenhado', scores: { ux: 2, produto: 1, sp_product_design: 1 } },
    ]
  },
  {
    id: 'lideranca', block: 'Sua situação atual',
    text: 'Se você virar referência técnica em um time, o que faria com mais naturalidade?',
    hint: '',
    options: [
      { text: 'Mentorar pessoas, revisar arquitetura e destravar decisões difíceis', scores: { lideranca: 3, gestao: 2, sp_techlead: 2 } },
      { text: 'Traduzir necessidade de negócio para time técnico e priorizar bem', scores: { produto: 3, social: 2, sp_pm: 2 } },
      { text: 'Documentar, ensinar e representar a tecnologia para a comunidade', scores: { advocacy: 3, ensino: 2, sp_devrel: 2 } },
      { text: 'Prefiro continuar especialista individual sem puxar coordenação', scores: { foco: 1, autodidata: 1 } },
    ]
  },
  {
    id: 'pesquisa', block: 'Preferências de área',
    text: 'O que mais te atrai: novidade ou estabilidade?',
    hint: 'Ambas têm custo e exigem perfis diferentes.',
    options: [
      { text: 'Pesquisar coisa nova, protótipo, IA e ferramenta que ainda está nascendo', scores: { path_dados: 2, path_codigo: 1, sp_genai: 2, sp_nlp: 1, sp_web3: 1 } },
      { text: 'Dominar stack estável e manter sistema confiável por muito tempo', scores: { path_infra: 2, path_codigo: 1, sp_sysadmin: 2, sp_backend: 1 } },
      { text: 'Equilibrar novidade com risco controlado e rollout gradual', scores: { path_infra: 1, path_seguranca: 1, produto: 1 } },
      { text: 'Tanto faz, desde que o impacto no usuário ou no negócio seja claro', scores: { produto: 1, path_codigo: 1, path_dados: 1 } },
    ]
  },
];

  return { BLOCKS, QUESTIONS };
});
