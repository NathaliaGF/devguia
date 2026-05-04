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
    hint: 'Seja honesto — não existe resposta certa.',
    options: [
      { text: 'Gosto de analisar o problema com calma, quebrar em partes e ir testando soluções', scores: {logica:3,analitico:3} },
      { text: 'Prefiro pedir ajuda a alguém que já passou por isso — não quero reinventar a roda', scores: {social:2,pratico:1} },
      { text: 'Começo a experimentar aleatoriamente até algo funcionar', scores: {pratico:2,criativo:1} },
      { text: 'Fico travado e procrastino até ser obrigado a resolver', scores: {bloqueio:3} },
    ]
  },
  {
    id: 'estudo', block: 'Sobre você',
    text: 'Como você aprende melhor?',
    hint: 'Pense em como você aprendeu algo de verdade na vida.',
    options: [
      { text: 'Lendo documentação, artigos, livros — gosto de entender a teoria antes de praticar', scores: {autodidata:3,logica:1} },
      { text: 'Fazendo: aprendo construindo coisas, mesmo sem entender tudo', scores: {pratico:3,criativo:1} },
      { text: 'Com pessoas: cursos, aulas, alguém me explicando', scores: {social:3} },
      { text: 'Tenho muita dificuldade de aprender qualquer coisa nova por conta própria', scores: {bloqueio:3,social:1} },
    ]
  },
  {
    id: 'frustracao', block: 'Sobre você',
    text: 'Um código que você escreveu para de funcionar sem motivo aparente. Como você reage?',
    hint: 'Esse tipo de situação é o dia a dia de qualquer desenvolvedor.',
    options: [
      { text: 'Fico frustrado no começo mas viro um detetive — preciso entender o porquê', scores: {logica:3,analitico:2} },
      { text: 'Procuro no Google e Stack Overflow até achar a solução', scores: {pratico:3,autodidata:1} },
      { text: 'Me estresso muito e tenho vontade de largar tudo', scores: {bloqueio:2,estresse:2} },
      { text: 'Peço ajuda imediatamente para alguém mais experiente', scores: {social:2,bloqueio:1} },
    ]
  },
  {
    id: 'atencao', block: 'Sobre você',
    text: 'Você consegue se concentrar por períodos longos em um problema técnico?',
    hint: 'Programar exige blocos de concentração de 1–3 horas com frequência.',
    options: [
      { text: "Sim, entro em 'estado de fluxo' e horas passam sem eu perceber", scores: {foco:3,logica:1} },
      { text: 'Consigo, mas preciso de pausas frequentes e tenho dias melhores que outros', scores: {foco:1,pratico:1} },
      { text: 'Tenho muita dificuldade com isso — me distraio facilmente', scores: {bloqueio:2,estresse:1} },
      { text: 'Depende muito do assunto — em coisas que gosto, sim; no resto, não', scores: {criativo:1,foco:1} },
    ]
  },
  {
    id: 'mat', block: 'Perfil técnico',
    text: 'Como você se relaciona com matemática e lógica?',
    hint: 'Não estamos falando de cálculo avançado — mas de raciocínio lógico e abstração.',
    options: [
      { text: 'Gosto muito — resolver problemas lógicos é estimulante para mim', scores: {logica:3,analitico:2} },
      { text: 'Não tenho horror, consigo me virar, mas não é meu ponto forte', scores: {logica:1} },
      { text: 'Nunca gostei de matemática e sempre tive dificuldade', scores: {bloqueio:2,estresse:1} },
      { text: 'Nunca precisei disso na vida e não sei avaliar', scores: {} },
    ]
  },
  {
    id: 'detalhe', block: 'Perfil técnico',
    text: 'Você é do tipo que nota pequenos detalhes e inconsistências?',
    hint: 'Uma vírgula no lugar errado pode derrubar um sistema inteiro.',
    options: [
      { text: 'Sim — tenho um lado perfeccionista que não deixa coisas erradas passarem', scores: {analitico:3,logica:1} },
      { text: 'Às vezes — depende da situação e de como estou', scores: {analitico:1} },
      { text: 'Não muito — prefiro o panorama geral ao invés de detalhes', scores: {gestao:1,criativo:1} },
      { text: 'Nunca fui assim — erros de detalhe sempre me passaram batido', scores: {bloqueio:1} },
    ]
  },
  {
    id: 'abstrato', block: 'Perfil técnico',
    text: 'Você consegue pensar em sistemas abstratos — coisas que não dá para tocar ou ver diretamente?',
    hint: 'Como imaginar o fluxo de dados entre servidores, ou como uma função transforma dados.',
    options: [
      { text: 'Sim — consigo visualizar sistemas complexos na cabeça com facilidade', scores: {logica:3,analitico:2} },
      { text: 'Com algum esforço, mas consigo quando me dedico', scores: {logica:1,analitico:1} },
      { text: 'Tenho dificuldade com coisas abstratas — preciso ver para entender', scores: {pratico:2,bloqueio:1} },
      { text: 'Nunca testei isso de forma séria', scores: {pratico:1} },
    ]
  },
  {
    id: 'area_pref', block: 'Preferências de área',
    text: 'O que mais te atrai dentro de tecnologia?',
    hint: 'Pode ser algo que você já conhece ou apenas intuição.',
    options: [
      { text: 'Criar interfaces — sites, apps, telas bonitas e bem pensadas', scores: {front:3,criativo:2,ux:2} },
      { text: "A 'máquina por baixo' — servidores, dados, sistemas que fazem tudo rodar", scores: {back:3,infra:2,logica:1} },
      { text: 'Entender padrões em dados, fazer análises e tirar conclusões', scores: {dados:3,analitico:2,logica:1} },
      { text: 'Garantir que sistemas não quebrem e que pessoas usem bem', scores: {qa:2,ux:2,gestao:1} },
    ]
  },
  {
    id: 'visual', block: 'Preferências de área',
    text: 'Quando você usa um produto digital com problema de usabilidade, o que você faz?',
    hint: 'Pense em como você reage a um app com interface ruim.',
    options: [
      { text: 'Fico incomodado e já penso em como melhoraria o design', scores: {ux:3,front:2,criativo:2} },
      { text: 'Anoto o problema mas não me incomodo tanto — o que importa é funcionar', scores: {back:2,logica:1} },
      { text: 'Me pergunto por que tecnicamente aquilo falhou', scores: {qa:2,back:2,logica:1} },
      { text: 'Não costumo notar muito, uso e sigo em frente', scores: {} },
    ]
  },
  {
    id: 'dados_int', block: 'Preferências de área',
    text: 'Se você pudesse escolher um projeto para trabalhar, qual seria mais interessante?',
    hint: 'Ignore limitações técnicas — pense apenas no que te animaria.',
    options: [
      { text: 'Construir um aplicativo do zero que resolve um problema real', scores: {front:2,back:2,pratico:2,criativo:1} },
      { text: 'Analisar dados de uma empresa e descobrir padrões escondidos', scores: {dados:3,analitico:3,logica:1} },
      { text: 'Criar uma infraestrutura que aguenta milhões de acessos sem cair', scores: {infra:3,back:2,logica:2} },
      { text: 'Testar exaustivamente um sistema para encontrar todos os pontos fracos', scores: {qa:3,analitico:2,logica:1} },
    ]
  },
  {
    id: 'social_trab', block: 'Preferências de área',
    text: 'Qual modelo de trabalho faz mais sentido para você?',
    hint: '',
    options: [
      { text: 'Trabalhar sozinho na maior parte do tempo — foco total, sem interrupções', scores: {back:1,infra:1,dados:1,autodidata:1} },
      { text: 'Em equipe técnica — pair programming, code review, colaboração constante', scores: {front:1,back:1,social:2} },
      { text: 'Conversando muito com pessoas não-técnicas — clientes, designers, gestores', scores: {ux:2,gestao:2,social:2} },
      { text: 'Ensinando e compartilhando conhecimento com outros', scores: {ensino:3,social:2} },
    ]
  },
  {
    id: 'situacao', block: 'Sua situação atual',
    text: 'Como você descreveria sua situação atual em relação a TI?',
    hint: '',
    options: [
      { text: 'Sou iniciante total — nunca escrevi uma linha de código na vida', scores: {iniciante:3} },
      { text: 'Estou estudando há algum tempo mas ainda não trabalho na área', scores: {estudando:3} },
      { text: 'Trabalho em outra área e quero mudar para TI', scores: {transicao:3} },
      { text: 'Já trabalho com tecnologia e quero me especializar ou mudar de ramo dentro de TI', scores: {especializar:3} },
    ]
  },
  {
    id: 'motivacao', block: 'Sua situação atual',
    text: 'O que te motivou a considerar ou estar em TI?',
    hint: 'Honestidade total aqui faz diferença no diagnóstico.',
    options: [
      { text: 'Sempre fui apaixonado por tecnologia — não é sobre dinheiro', scores: {vocacao:3,foco:1} },
      { text: 'Vi que paga bem e tem vagas — foi uma decisão prática', scores: {pratico:2,bloqueio:1} },
      { text: 'Alguém me indicou ou vi influencer falando que era fácil', scores: {bloqueio:2,estresse:1} },
      { text: 'Quero criar coisas — software é um meio de materializar ideias', scores: {criativo:3,vocacao:2} },
    ]
  },
  {
    id: 'ensino_int', block: 'Sua situação atual',
    text: 'Você tem vontade de compartilhar o que sabe com outras pessoas?',
    hint: 'Alguns perfis se encaixam melhor em educação do que em desenvolvimento.',
    options: [
      { text: 'Sim — sinto prazer em explicar coisas e ver outras pessoas entendendo', scores: {ensino:3,social:2} },
      { text: 'Às vezes, mas prefiro focar em construir do que ensinar', scores: {pratico:1,criativo:1} },
      { text: 'Não — prefiro aprender e criar sem me preocupar em ensinar', scores: {autodidata:1} },
      { text: 'Nunca pensei nisso de forma séria', scores: {} },
    ]
  },
  {
    id: 'lp', block: 'Sua situação atual',
    text: 'O que melhor descreve sua relação atual com programação prática?',
    hint: '',
    options: [
      { text: 'Nunca programei — zero experiência', scores: {iniciante:2} },
      { text: 'Já fiz tutoriais e cursinho, mas nunca construí nada próprio', scores: {estudando:2,bloqueio:1} },
      { text: 'Já tenho projetos, mesmo que pequenos e imperfeitos', scores: {pratico:2,autodidata:1} },
      { text: 'Programo profissionalmente ou com consistência há algum tempo', scores: {especializar:2,pratico:2} },
    ]
  },
];

  return { BLOCKS, QUESTIONS };
});
