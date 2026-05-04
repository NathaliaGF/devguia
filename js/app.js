// ============================================================
// STATE
// ============================================================
const state = {
  currentScreen: 'home',
  currentQuestion: 0,
  answers: {},
  scores: {},
  profileKey: null,
  faqFilter: { cat: 'all', search: '' },
  openFaqId: null,
  openPhaseId: null,
  glossarioFilter: { cat: 'all', search: '' },
  openGlossarioId: null,
  mitosFilter: 'all',
  openMitoId: null,
  recursosTab: 'livros',
  currentShareUrl: '',
  areaScores: [],
  pathScores: [],
  suggestedSubprofiles: [],
};

const { BLOCKS, QUESTIONS } = window.DEVGUIA_DATA.questions;
const { PROFILES } = window.DEVGUIA_DATA.profiles;
const { PHASES, PROFILE_ROADMAP_PHASE, PROFILE_ROADMAP_HINT } = window.DEVGUIA_DATA.roadmap;
const { FAQS } = window.DEVGUIA_DATA.faq;
const {
  SCREEN_ORDER,
  GITHUB_REPO,
  GOATCOUNTER_CODE,
  QUIZ_PROGRESS_KEY,
  EASY_READ_KEY,
  APP_STATE_KEY,
  CHECKLIST_KEY,
  FREE_FILTER_KEY,
  CAT_TOOLTIPS,
  CAT_COLORS,
  AREAS_INFO,
  RECURSOS,
  GLOSSARIO,
  MITOS,
  AREA_COMPARISONS,
  HONESTY_FILTERS,
  FAQ_TAGS,
} = window.DEVGUIA_DATA.catalog;

state.freeOnly = localStorage.getItem(FREE_FILTER_KEY) === '1';
state.checklist = {};
state.resultHash = '';
const QUIZ_TTL = 7 * 24 * 60 * 60 * 1000;
const ANALYTICS_SCRIPT_ID = 'goatcounter-script';
let analyticsLoaded = false;

function normalizeText(value) {
  return String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}

function sortByNormalizedLabel(a, b, key) {
  return normalizeText(a[key]).localeCompare(normalizeText(b[key]), 'pt-BR');
}

const PATH_INFO = {
  codigo: { label: 'Código', desc: 'Construção de software, produto digital e APIs' },
  dados: { label: 'Dados & IA', desc: 'Análise, BI, engenharia de dados e machine learning' },
  infra: { label: 'Infra & Cloud', desc: 'Operação, automação, plataforma e confiabilidade' },
  seguranca: { label: 'Segurança', desc: 'Defesa, monitoramento, resposta a incidente e cloud security' },
};

const SUBPROFILE_LABELS = {
  sp_frontend: 'Front-end',
  sp_backend: 'Back-end',
  sp_fullstack: 'Full Stack',
  sp_mobile: 'Mobile',
  sp_jogos: 'Jogos',
  sp_apis: 'APIs',
  sp_lowcode: 'Low-code',
  sp_embarcados: 'Embarcados',
  sp_web3: 'Web3 / Blockchain',
  sp_ds: 'Ciência de Dados',
  sp_de: 'Engenharia de Dados',
  sp_bi: 'BI',
  sp_ml: 'ML Engineer',
  sp_genai: 'IA Generativa',
  sp_nlp: 'NLP',
  sp_bigdata: 'Big Data',
  sp_devops: 'DevOps',
  sp_sre: 'SRE',
  sp_cloud: 'Cloud Engineer',
  sp_sysadmin: 'Sysadmin',
  sp_containers: 'Containers',
  sp_platform: 'Plataforma',
  sp_network: 'Redes',
  sp_pentest: 'Pentest',
  sp_soc: 'Analista SOC',
  sp_blueteam: 'Blue Team',
  sp_redteam: 'Red Team',
  sp_forense: 'Forense Digital',
  sp_incident: 'Resposta a Incidentes',
  sp_cloudsec: 'Cloud Security',
  sp_qa_auto: 'QA Automação',
  sp_qa_perf: 'QA Performance',
  sp_product_design: 'UX/UI / Product Design',
  sp_pm: 'Product Manager / Product Owner',
  sp_techlead: 'Tech Lead',
  sp_devrel: 'Developer Advocate / Technical Writer',
  sp_helpdesk: 'Suporte Técnico / Help Desk',
};

const PATH_TO_SUBPROFILE_PREFIXES = {
  codigo: ['sp_frontend', 'sp_backend', 'sp_fullstack', 'sp_mobile', 'sp_jogos', 'sp_apis', 'sp_lowcode', 'sp_embarcados', 'sp_web3', 'sp_qa_auto', 'sp_qa_perf', 'sp_product_design', 'sp_pm', 'sp_techlead', 'sp_devrel'],
  dados: ['sp_ds', 'sp_de', 'sp_bi', 'sp_ml', 'sp_genai', 'sp_nlp', 'sp_bigdata', 'sp_pm'],
  infra: ['sp_devops', 'sp_sre', 'sp_cloud', 'sp_sysadmin', 'sp_containers', 'sp_platform', 'sp_network', 'sp_helpdesk'],
  seguranca: ['sp_pentest', 'sp_soc', 'sp_blueteam', 'sp_redteam', 'sp_forense', 'sp_incident', 'sp_cloudsec'],
};

// ============================================================
// NAVIGATION
// ============================================================
function navigate(screen) { go(screen, 'fade'); }

function syncHashForNav(destino, options = {}) {
  if (destino === 'result') return;
  const base = location.pathname + location.search;
  if (destino === 'home') {
    if (location.hash && !location.hash.startsWith('#result=')) history.replaceState(null, '', base);
    return;
  }
  const suffix = options.hashSuffix ? '/' + options.hashSuffix : '';
  const target = '#' + destino + suffix;
  if (location.hash !== target) history.replaceState(null, '', base + target);
}

function focusScreenMain(destino) {
  const section = document.getElementById('screen-' + destino);
  if (!section) return;
  const el = section.querySelector('h1') || section.querySelector('.section-header h2');
  if (!el) return;
  if (!el.hasAttribute('tabindex')) el.setAttribute('tabindex', '-1');
  el.focus({ preventScroll: true });
}

function go(destino, forceDirection = null, options = {}) {
  document.getElementById('mobileMenu')?.classList.remove('open');
  document.querySelector('.nav-hamburger')?.setAttribute('aria-expanded', 'false');

  const atual = state.currentScreen;
  const idxAtual = SCREEN_ORDER.indexOf(atual);
  const idxDest = SCREEN_ORDER.indexOf(destino);
  let animClass = 'enter-fade';
  if (forceDirection === 'forward' || (forceDirection === null && idxDest > idxAtual)) animClass = 'enter-right';
  if (forceDirection === 'back' || (forceDirection === null && idxDest < idxAtual)) animClass = 'enter-left';

  document.querySelectorAll('.screen').forEach(el => el.classList.remove('active', 'enter-right', 'enter-left', 'enter-fade'));
  const next = document.getElementById('screen-' + destino);
  if (!next) return;
  if (destino === 'faq' && !options.keepListState) state.openFaqId = null;
  if (destino === 'glossario' && !options.keepListState) state.openGlossarioId = null;
  if (destino === 'mitos' && !options.keepListState) state.openMitoId = null;

  next.classList.add('active', animClass);
  state.currentScreen = destino;
  document.querySelectorAll('.nav-tab[data-screen]').forEach(t => {
    const isActive = t.dataset.screen === destino;
    t.classList.toggle('active', isActive);
    if (isActive) t.setAttribute('aria-current', 'page');
    else t.removeAttribute('aria-current');
  });
  if (destino === 'quiz') renderQuizEntry();
  if (destino === 'roadmap') renderRoadmap();
  if (destino === 'faq') renderFaq();
  if (destino === 'glossario') renderGlossario();
  if (destino === 'mitos') renderMitos();
  if (options.forceTop) window.scrollTo(0, 0);
  if (!options.skipHashSync) syncHashForNav(destino, { hashSuffix: options.hashSuffix || null });
  saveAppState();
  if (destino !== 'result') requestAnimationFrame(() => focusScreenMain(destino));
}

function applyHashRoute(options = {}) {
  const raw = (location.hash || '').replace(/^#/, '');
  if (raw.startsWith('result=')) return;
  if (!raw || raw === 'home') {
    go('home', 'fade', { skipHashSync: true });
    return;
  }
  const parts = raw.split('/').map(s => s.trim()).filter(Boolean);
  const base = parts[0];
  const rest = parts[1] || null;
  const simpleScreens = ['quiz', 'roadmap', 'faq', 'glossario', 'mitos'];
  if (!simpleScreens.includes(base)) {
    go('home', 'fade', { skipHashSync: true });
    return;
  }
  if (!rest) {
    go(base, 'fade', { skipHashSync: true });
    return;
  }
  if (base === 'faq') {
    go('faq', 'fade', { skipHashSync: true });
    setTimeout(() => openFaqItem(rest, { skipNav: true }), 50);
  } else if (base === 'glossario') {
    go('glossario', 'fade', { skipHashSync: true });
    setTimeout(() => {
      state.openGlossarioId = rest;
      renderGlossario();
      document.getElementById('gi-' + rest)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 50);
  } else if (base === 'mitos') {
    go('mitos', 'fade', { skipHashSync: true });
    setTimeout(() => {
      state.openMitoId = rest;
      renderMitos();
      document.getElementById('mito-' + rest)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 50);
  } else if (base === 'roadmap') {
    go('roadmap', 'fade', { skipHashSync: true });
    setTimeout(() => openRoadmapPhase(rest, { skipNav: true }), 50);
  } else {
    go(base, 'fade', { skipHashSync: true });
  }
}

function openRoadmapPhase(phaseId, options = {}) {
  if (!options.skipNav) go('roadmap', 'forward');
  const open = () => {
    const item = document.getElementById('phase-' + phaseId);
    if (!item) return;
    document.querySelectorAll('.phase-item.open').forEach(el => {
      el.classList.remove('open');
      const h = el.querySelector('.phase-header');
      if (h) h.setAttribute('aria-expanded', 'false');
    });
    item.classList.add('open');
    const hdr = item.querySelector('.phase-header');
    if (hdr) hdr.setAttribute('aria-expanded', 'true');
    item.scrollIntoView({ behavior: 'smooth', block: 'start' });
    const base = location.pathname + location.search;
    history.replaceState(null, '', base + '#roadmap/' + phaseId);
  };
  if (options.skipNav) setTimeout(open, 30);
  else setTimeout(open, 60);
}

function scrollToMainTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  const m = document.getElementById('main-content');
  if (m) m.focus({ preventScroll: true });
}

function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;
  const onScroll = () => btn.classList.toggle('visible', window.scrollY > 360);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

function toggleMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  const btn = document.querySelector('.nav-hamburger');
  const isOpen = menu.classList.toggle('open');
  btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
}

function getTodayLocalIso() {
  const now = new Date();
  const offsetMs = now.getTimezoneOffset() * 60000;
  return new Date(now.getTime() - offsetMs).toISOString().slice(0, 10);
}

function hasLgpdConsent() {
  try {
    return !!localStorage.getItem('lgpd_consent');
  } catch {
    return false;
  }
}

function ensureAnalyticsLoaded() {
  if (analyticsLoaded || !hasLgpdConsent() || GOATCOUNTER_CODE === 'SEU-CODIGO') return;
  analyticsLoaded = true;
  window.goatcounter = {
    endpoint: `https://${GOATCOUNTER_CODE}.goatcounter.com/count`,
    no_onload: true,
  };
  if (document.getElementById(ANALYTICS_SCRIPT_ID)) return;
  const script = document.createElement('script');
  script.id = ANALYTICS_SCRIPT_ID;
  script.async = true;
  script.src = 'https://gc.zgo.at/count.js';
  script.integrity = 'sha384-OLBgp1GsljhM2TJ+sbHjaiH9txEUvgdDTAzHv2P24donTt6/529l+9Ua0vFImLlb';
  script.crossOrigin = 'anonymous';
  document.body.appendChild(script);
}

function initLgpdBanner() {
  const banner = document.getElementById('lgpd-banner');
  const button = document.getElementById('lgpd-accept');
  if (!banner || !button) return;
  if (hasLgpdConsent()) {
    banner.hidden = true;
    document.documentElement.setAttribute('data-lgpd-consent', 'accepted');
    ensureAnalyticsLoaded();
    return;
  }
  button.addEventListener('click', () => {
    try {
      localStorage.setItem('lgpd_consent', String(Date.now()));
    } catch (e) {
      console.warn('[devguia] Não foi possível salvar consentimento LGPD:', e.message);
    }
    document.documentElement.setAttribute('data-lgpd-consent', 'accepted');
    banner.style.transition = 'opacity 0.3s';
    banner.style.opacity = '0';
    setTimeout(() => { banner.hidden = true; }, 320);
    ensureAnalyticsLoaded();
    atualizarBadgeAnalytics();
  });
}

function loadChecklistState() {
  try {
    return JSON.parse(localStorage.getItem(CHECKLIST_KEY) || '{}');
  } catch {
    return {};
  }
}

function saveChecklistState() {
  localStorage.setItem(CHECKLIST_KEY, JSON.stringify(state.checklist));
}

function loadAppState() {
  try {
    return JSON.parse(localStorage.getItem(APP_STATE_KEY) || '{}');
  } catch {
    return {};
  }
}

function saveAppState() {
  const payload = {
    currentScreen: state.currentScreen,
    faqFilter: state.faqFilter,
    openFaqId: state.openFaqId,
    openPhaseId: state.openPhaseId,
    glossarioFilter: state.glossarioFilter,
    openGlossarioId: state.openGlossarioId,
    mitosFilter: state.mitosFilter,
    openMitoId: state.openMitoId,
    recursosTab: state.recursosTab,
    freeOnly: state.freeOnly,
    resultHash: state.resultHash || (location.hash.startsWith('#result=') ? location.hash : ''),
  };
  localStorage.setItem(APP_STATE_KEY, JSON.stringify(payload));
}

function restoreAppState() {
  const saved = loadAppState();
  state.checklist = loadChecklistState();
  if (typeof saved.freeOnly === 'boolean') state.freeOnly = saved.freeOnly;
  if (saved.faqFilter) state.faqFilter = saved.faqFilter;
  if (saved.openFaqId) state.openFaqId = saved.openFaqId;
  if (saved.openPhaseId) state.openPhaseId = saved.openPhaseId;
  if (saved.glossarioFilter) state.glossarioFilter = saved.glossarioFilter;
  if (saved.openGlossarioId) state.openGlossarioId = saved.openGlossarioId;
  if (saved.mitosFilter) state.mitosFilter = saved.mitosFilter;
  if (saved.openMitoId) state.openMitoId = saved.openMitoId;
  if (saved.recursosTab) state.recursosTab = saved.recursosTab;
  if (saved.resultHash) state.resultHash = saved.resultHash;
  return saved;
}

// ============================================================
// QUIZ
// ============================================================
function salvarProgresso() {
  try {
    localStorage.setItem(QUIZ_PROGRESS_KEY, JSON.stringify({
      currentQuestion: state.currentQuestion,
      answers: state.answers,
      savedAt: Date.now(),
    }));
  } catch (e) {
    console.warn('[devguia] Não foi possível salvar progresso:', e.message);
  }
}

function restaurarProgresso() {
  try {
    const salvo = localStorage.getItem(QUIZ_PROGRESS_KEY);
    if (!salvo) return false;
    const data = JSON.parse(salvo);
    if (Date.now() - (data.savedAt || data.timestamp || 0) > QUIZ_TTL) {
      localStorage.removeItem(QUIZ_PROGRESS_KEY);
      return false;
    }
    return data;
  } catch {
    return false;
  }
}

function limparProgresso() {
  try {
    localStorage.removeItem(QUIZ_PROGRESS_KEY);
  } catch (e) {
    console.warn('[devguia] Não foi possível limpar progresso:', e.message);
  }
}

function recomputeScoresFromAnswers() {
  state.scores = {};
  Object.entries(state.answers).forEach(([qid, idx]) => {
    const q = QUESTIONS.find(item => item.id === qid);
    if (!q || q.options[idx] === undefined) return;
    Object.entries(q.options[idx].scores).forEach(([k, v]) => {
      state.scores[k] = (state.scores[k] || 0) + v;
    });
  });
}

function getScore(scores, key) {
  return scores[key] || 0;
}

function getPathScores(scores) {
  const paths = [
    ['codigo', getScore(scores, 'path_codigo') + getScore(scores, 'front') + getScore(scores, 'back') + getScore(scores, 'pratico') + getScore(scores, 'criativo')],
    ['dados', getScore(scores, 'path_dados') + getScore(scores, 'dados') + getScore(scores, 'analitico') + getScore(scores, 'logica')],
    ['infra', getScore(scores, 'path_infra') + getScore(scores, 'infra') + getScore(scores, 'back') + getScore(scores, 'logica')],
    ['seguranca', getScore(scores, 'path_seguranca') + getScore(scores, 'analitico') + getScore(scores, 'logica') + getScore(scores, 'qa')],
  ];
  return paths.sort((a, b) => b[1] - a[1]);
}

function getSuggestedSubprofiles(scores, profileKey, primaryPath) {
  const allowed = PATH_TO_SUBPROFILE_PREFIXES[primaryPath] || [];
  const top = allowed
    .map(key => [key, getScore(scores, key)])
    .filter(([, value]) => value > 0)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([key]) => SUBPROFILE_LABELS[key])
    .filter(Boolean);
  if (top.length) return top;
  return PROFILES[profileKey]?.defaultSubprofiles || [];
}

function getShareUrl(profileKey, scores) {
  const url = new URL(window.location.origin + window.location.pathname);
  url.searchParams.set('resultado', profileKey);
  if (scores && Object.keys(scores).length) url.searchParams.set('dados', encodeResult(scores, profileKey));
  return url.toString();
}

function getSharedScoresForProfile(profileKey) {
  return { ...(PROFILES[profileKey]?.shareScores || {}) };
}

function getQueryResultParam() {
  const params = new URLSearchParams(window.location.search);
  return params.get('resultado');
}

function getQueryResultData() {
  const params = new URLSearchParams(window.location.search);
  return params.get('dados');
}

function renderQuizEntry() {
  const saved = restaurarProgresso();
  if (!saved) return initQuiz();
  const quizCard = document.getElementById('quizCard');
  document.getElementById('btnBack').style.visibility = 'hidden';
  document.getElementById('btnNext').style.visibility = 'hidden';
  document.getElementById('quizCounter').textContent = '';
  quizCard.innerHTML = `
      <div class="resume-card">
      <div class="resume-card-title">Você tem um diagnóstico em andamento</div>
      <div class="resume-card-copy">Você estava na pergunta ${Math.min((saved.currentQuestion || 0) + 1, QUESTIONS.length)} de ${QUESTIONS.length}. O progresso fica salvo neste navegador por até 7 dias. Quer retomar de onde parou?</div>
      <div style="display:flex;gap:8px;">
        <button class="btn btn-primary" onclick="continuarQuiz()">Continuar</button>
        <button class="btn btn-ghost" onclick="recomecarQuiz()">Começar do zero</button>
      </div>
    </div>
  `;
}

function continuarQuiz() {
  const saved = restaurarProgresso();
  if (!saved) return initQuiz();
  state.currentQuestion = Math.max(0, Math.min(saved.currentQuestion || 0, QUESTIONS.length - 1));
  state.answers = saved.answers || {};
  recomputeScoresFromAnswers();
  document.getElementById('btnBack').style.visibility = 'visible';
  document.getElementById('btnNext').style.visibility = 'visible';
  renderQuestion();
}

function recomecarQuiz() {
  limparProgresso();
  initQuiz();
}

function initQuiz() {
  state.currentQuestion = 0;
  state.answers = {};
  state.scores = {};
  state.profileKey = null;
  document.getElementById('btnBack').style.visibility = 'visible';
  document.getElementById('btnNext').style.visibility = 'visible';
  renderQuestion();
}

function renderQuestion() {
  const q = QUESTIONS[state.currentQuestion];
  const block = BLOCKS[q.block];
  const chipClass = block.chip;
  const pct = Math.round((state.currentQuestion / QUESTIONS.length) * 100);

  const bar = document.getElementById('progressBar');
  const wrap = document.getElementById('progressbarWrap');
  bar.style.width = pct + '%';
  wrap.setAttribute('aria-valuenow', pct);

  document.getElementById('quizCounter').textContent =
    (state.currentQuestion + 1) + ' de ' + QUESTIONS.length;

  const selected = state.answers[q.id];
  const isLast = state.currentQuestion === QUESTIONS.length - 1;

  const btnNext = document.getElementById('btnNext');
  btnNext.textContent = isLast ? 'Ver resultado →' : 'Próxima →';
  btnNext.disabled = selected === undefined;
  btnNext.setAttribute('aria-label', isLast ? 'Ver resultado do diagnóstico' : 'Ir para a próxima pergunta');

  const btnBack = document.getElementById('btnBack');
  btnBack.style.visibility = state.currentQuestion === 0 ? 'hidden' : 'visible';
  btnBack.setAttribute('aria-label', 'Voltar para a pergunta anterior');

  const optionsHtml = q.options.map((opt, i) =>
    `<button class="quiz-option${selected === i ? ' selected' : ''}" onclick="selectOption(${i})">${opt.text}</button>`
  ).join('');

  document.getElementById('quizCard').innerHTML = `
    <div class="quiz-block-chip">
      <span class="chip ${chipClass}">${q.block}</span>
    </div>
    <div class="quiz-q-text">${q.text}</div>
    ${q.hint ? `<div class="quiz-q-hint">${q.hint}</div>` : ''}
    <div class="quiz-options">${optionsHtml}</div>
  `;
}

function selectOption(idx) {
  const q = QUESTIONS[state.currentQuestion];
  state.answers[q.id] = idx;
  salvarProgresso();
  document.getElementById('btnNext').disabled = false;
  document.querySelectorAll('.quiz-option').forEach((el, i) => {
    el.classList.toggle('selected', i === idx);
  });
}

function quizNext() {
  const q = QUESTIONS[state.currentQuestion];
  if (state.answers[q.id] === undefined) return;

  const opt = q.options[state.answers[q.id]];
  Object.entries(opt.scores).forEach(([k, v]) => {
    state.scores[k] = (state.scores[k] || 0) + v;
  });

  if (state.currentQuestion < QUESTIONS.length - 1) {
    state.currentQuestion++;
    salvarProgresso();
    renderQuestion();
  } else {
    state.profileKey = calcularPerfil(state.scores);
    showResult(state.scores, state.profileKey);
  }
}

function quizBack() {
  if (state.currentQuestion === 0) return go('home', 'back');
  const prevQ = QUESTIONS[state.currentQuestion];
  const prevOpt = prevQ.options[state.answers[prevQ.id]];
  if (prevOpt) {
    Object.entries(prevOpt.scores).forEach(([k, v]) => {
      state.scores[k] = (state.scores[k] || 0) - v;
      if (state.scores[k] <= 0) delete state.scores[k];
    });
  }
  delete state.answers[prevQ.id];
  state.currentQuestion--;
  salvarProgresso();
  renderQuestion();
}

// ============================================================
// PROFILE ALGORITHM
// ============================================================
function calcularPerfil(scores) {
  const get = k => getScore(scores, k);
  const bloqueio = get('bloqueio') + get('estresse');
  const vocacao = get('vocacao') + get('foco') + get('autodidata');
  const pathScores = getPathScores(scores);
  const [primaryPath, primaryValue] = pathScores[0];

  if (bloqueio >= 6 && vocacao < 3 && primaryValue < 8) return 'repensar';
  if (get('advocacy') >= 6 && get('social') >= 5) return 'developer_advocate';
  if (get('lideranca') >= 6 && get('gestao') >= 4 && get('especializar') >= 2) return 'tech_lead';
  if (get('produto') >= 6 && get('social') >= 4) return 'produto';
  if (get('suporte') >= 6 && get('iniciante') + get('transicao') >= 3) return 'suporte';
  if (get('qa') >= 5 && get('analitico') >= 4) return 'qa_teste';
  if (primaryPath === 'seguranca' && primaryValue >= 8) return 'seguranca';
  if (get('ensino') >= 5 && get('social') >= 5) return 'educador';
  if (get('transicao') >= 3 && primaryValue < 13) return 'transicao';
  if (get('ux') >= 4 && get('criativo') >= 4) return 'ux_design';
  if (primaryPath === 'dados' && primaryValue >= 8) return 'analitico';
  if (primaryPath === 'infra' && primaryValue >= 8) return 'infra_cloud';
  return 'dev_nato';
}

// ============================================================
// RESULT
// ============================================================
function encodeResult(scores, profileKey) {
  const payload = JSON.stringify({ s: scores, p: profileKey, v: 1 });
  return btoa(unescape(encodeURIComponent(payload)));
}

function decodeResult(hash) {
  try {
    const encoded = hash.replace(/^#?result=/, '');
    const decoded = decodeURIComponent(escape(atob(encoded)));
    return JSON.parse(decoded);
  } catch {
    return null;
  }
}

function getAreaScores(scores) {
  const get = k => scores[k] || 0;
  return [
    ['front', get('front') + get('criativo') + get('ux')],
    ['back', get('back') + get('logica') + get('analitico')],
    ['dados', get('dados') + get('analitico') + get('logica')],
    ['ux', get('ux') + get('criativo') + get('social')],
    ['infra', get('infra') + get('back') + get('logica')],
    ['seguranca', get('path_seguranca') + get('analitico') + get('qa')],
    ['qa', get('qa') + get('analitico') + get('pratico')],
    ['ensino', get('ensino') + get('social') + get('vocacao')],
  ].sort((a, b) => b[1] - a[1]).slice(0, 4);
}

function gerarTextoResultado(profileKey, areasSorted, shareUrl) {
  const prof = PROFILES[profileKey];
  const emojisFit = ['🥇', '🥈', '🥉', ''];
  const areasTexto = areasSorted.map(([k], i) => `${emojisFit[i] || '-'} ${AREAS_INFO[k].name} — ${AREAS_INFO[k].desc}`).join('\n- ');
  const pathScores = getPathScores(state.scores);
  const primaryPath = pathScores[0]?.[0] || prof.primaryPath || 'codigo';
  const secondaryPath = pathScores[1]?.[0] || prof.defaultSecondaryPath || 'dados';
  const subprofiles = getSuggestedSubprofiles(state.scores, profileKey, primaryPath);
  const phaseId = PROFILE_ROADMAP_PHASE[profileKey] || 'fase1';
  const phase = PHASES.find(item => item.id === phaseId);
  const roadmapPassos = (phase?.skills || []).slice(0, 3).map(item => `- ${item.name}`).join('\n');
  return `# Meu resultado no devguia.dev

Perfil: ${prof.name} ${prof.icon}
${prof.sub}

${prof.desc}

Caminho principal: ${PATH_INFO[primaryPath]?.label || primaryPath}
Caminho secundário: ${PATH_INFO[secondaryPath]?.label || secondaryPath}
Subperfis sugeridos: ${subprofiles.join(', ')}

Compatibilidade por área
- ${areasTexto}

Próximos passos do roadmap
${roadmapPassos}

Próximos passos recomendados
${prof.steps.map(step => `- ${step}`).join('\n')}

Faça o seu diagnóstico gratuito: ${shareUrl}`;
}

function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(text);
  return new Promise((resolve, reject) => {
    try {
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      const copied = document.execCommand('copy');
      document.body.removeChild(ta);
      if (copied) resolve();
      else reject(new Error('Falha ao copiar texto'));
    } catch (e) { reject(e); }
  });
}

function flashButtonState(buttonId, nextLabel, revertLabel, timeout = 2000) {
  const btn = document.getElementById(buttonId);
  if (!btn) return;
  btn.textContent = nextLabel;
  window.setTimeout(() => {
    const liveBtn = document.getElementById(buttonId);
    if (liveBtn) liveBtn.textContent = revertLabel;
  }, timeout);
}

function trackDiagnostico(profileKey) {
  if (sessionStorage.getItem('diagnostico_tracked')) return;
  if (window.goatcounter && window.goatcounter.count) {
    window.goatcounter.count({
      path: 'diagnostico-completo',
      title: 'Diagnóstico completo — perfil: ' + profileKey,
      event: true,
    });
    sessionStorage.setItem('diagnostico_tracked', '1');
  }
}

function isResourceFree(item, tabKey) {
  if (typeof item.free === 'boolean') return item.free;
  if (tabKey !== 'livros') return true;
  return /gratuit|free|aberto|open|online/i.test(`${item.nome} ${item.desc || ''}`);
}

function buildRecursoCardsHtml(profile, tabKey) {
  const data = RECURSOS[profile.key] || RECURSOS[profile.resourceBase] || { livros: [], sites: [], comunidades: [] };
  const items = (data[tabKey] || []).filter(item => !state.freeOnly || isResourceFree(item, tabKey));
  return items.map(item => {
    const badge = `<div class="recurso-flag">${isResourceFree(item, tabKey) ? 'Grátis' : 'Pago'}</div>`;
    if (item.url) return `<a href="${item.url}" target="_blank" rel="noopener noreferrer" class="recurso-card">${badge}<div class="recurso-nome">${item.nome}</div>${item.autor ? `<div class="recurso-autor">${item.autor}</div>` : ''}<div class="recurso-desc">${item.desc}</div></a>`;
    return `<div class="recurso-card">${badge}<div class="recurso-nome">${item.nome}</div>${item.autor ? `<div class="recurso-autor">${item.autor}</div>` : ''}<div class="recurso-desc">${item.desc}</div></div>`;
  }).join('');
}

function renderRecursos(profile, activeTab = 'livros') {
  const tabs = [{ key: 'livros', label: '📚 Livros' }, { key: 'sites', label: '🌐 Sites' }, { key: 'comunidades', label: '👥 Comunidades' }];
  const tabsHtml = tabs.map(t => {
    const isActive = activeTab === t.key;
    return `<button type="button" class="recursos-tab${isActive ? ' active' : ''}" role="tab" id="rec-tab-${t.key}" aria-selected="${isActive ? 'true' : 'false'}" aria-controls="recursos-panel" tabindex="${isActive ? '0' : '-1'}" onclick="setRecursosTab('${t.key}')">${t.label}</button>`;
  }).join('');
  const cards = buildRecursoCardsHtml(profile, activeTab) || '<div class="faq-empty" style="padding:24px">Nenhum recurso visível com o filtro atual.</div>';
  return `<div class="recursos-section"><div class="recursos-header"><span class="recursos-title">Recursos para o seu perfil</span><div class="recursos-controls"><button type="button" class="budget-toggle${state.freeOnly ? ' active' : ''}" id="freeOnlyToggleResult" onclick="toggleFreeOnly()">${state.freeOnly ? 'Só gratuitos: ligado' : 'Só gratuitos'}</button><div class="recursos-tabs" role="tablist" aria-label="Recursos sugeridos">${tabsHtml}</div></div></div><div class="recursos-body" role="tabpanel" id="recursos-panel" aria-labelledby="rec-tab-${activeTab}">${cards}</div></div>`;
}

function syncFreeOnlyUi() {
  document.querySelectorAll('.budget-toggle').forEach(btn => {
    btn.classList.toggle('active', state.freeOnly);
    btn.textContent = state.freeOnly ? 'Só gratuitos: ligado' : 'Só gratuitos';
  });
}

function toggleFreeOnly() {
  state.freeOnly = !state.freeOnly;
  localStorage.setItem(FREE_FILTER_KEY, state.freeOnly ? '1' : '0');
  if (state.currentScreen === 'roadmap') renderRoadmap();
  if (state.currentScreen === 'result' && state.profileKey) showResult(state.scores, state.profileKey, { restoreState: true });
  syncFreeOnlyUi();
  saveAppState();
}

function showResult(scores, profileKey, options = {}) {
  limparProgresso();
  if (!(options.restoreState && state.currentScreen === 'result')) {
    go('result', options.fromShare ? 'fade' : 'forward', { preserveScroll: !!options.preserveScroll });
  }
  state.scores = scores;
  state.profileKey = profileKey;
  state.recursosTab = state.recursosTab || 'livros';
  const profile = PROFILES[profileKey];
  if (!profile) return;
  const get = k => scores[k] || 0;
  const encoded = encodeResult(scores, profileKey);
  const shareUrl = getShareUrl(profileKey, scores);
  if (!options.preserveExternalUrl) history.replaceState(null, '', '#result=' + encoded);
  state.resultHash = '#result=' + encoded;
  state.currentShareUrl = shareUrl;
  state.areaScores = getAreaScores(scores);
  state.pathScores = getPathScores(scores);
  const primaryPath = state.pathScores[0]?.[0] || profile.primaryPath || 'codigo';
  const secondaryPath = state.pathScores[1]?.[0] || profile.defaultSecondaryPath || 'dados';
  state.suggestedSubprofiles = getSuggestedSubprofiles(scores, profileKey, primaryPath);
  const perfilAnterior = options.fromShare ? null : sessionStorage.getItem('ultimo_perfil');
  if (!options.fromShare) sessionStorage.setItem('ultimo_perfil', profileKey);
  const isRefazendo = !!perfilAnterior;
  const mesmoPeril = perfilAnterior === profileKey;
  if (!options.skipTrack) trackDiagnostico(profileKey);

  const bars = [
    { label: 'Raciocínio lógico', val: Math.min(100, Math.round(((get('logica') + get('analitico')) / 14) * 100)), color: 'var(--blue)' },
    { label: 'Criatividade visual', val: Math.min(100, Math.round(((get('criativo') + get('ux')) / 10) * 100)), color: 'var(--pink)' },
    { label: 'Perfil social / ensino', val: Math.min(100, Math.round(((get('social') + get('ensino')) / 12) * 100)), color: 'var(--teal)' },
    { label: 'Orientação prática', val: Math.min(100, Math.round(((get('pratico') + get('autodidata')) / 10) * 100)), color: 'var(--amber)' },
  ];
  const fitLabels = ['Melhor fit', 'Bom fit', 'Fit razoável', 'Fit razoável'];
  const fitClasses = ['fit-best', 'fit-good', 'fit-ok', 'fit-ok'];
  const barsHtml = bars.map((b, i) => `<div class="compat-bar-item"><div class="compat-bar-label"><span>${b.label}</span><span>${b.val}%</span></div><div class="compat-bar-track"><div class="compat-bar-fill" id="bar${i}" style="background:${b.color}" data-val="${b.val}"></div></div></div>`).join('');
  const areasHtml = state.areaScores.map(([k], i) => `<div class="area-card${i === 0 ? ' top' : ''}"><h4>${AREAS_INFO[k].name}</h4><p>${AREAS_INFO[k].desc}</p><span class="fit-badge ${fitClasses[i]}">${fitLabels[i]}</span></div>`).join('');
  const journeyHtml = `
    <div class="areas-grid" style="margin-bottom:20px">
      <div class="area-card top">
        <h4>Caminho principal</h4>
        <p>${PATH_INFO[primaryPath]?.label || primaryPath}</p>
        <span class="fit-badge fit-best">${PATH_INFO[primaryPath]?.desc || ''}</span>
      </div>
      <div class="area-card">
        <h4>Caminho secundário</h4>
        <p>${PATH_INFO[secondaryPath]?.label || secondaryPath}</p>
        <span class="fit-badge fit-good">${PATH_INFO[secondaryPath]?.desc || ''}</span>
      </div>
    </div>
    <div class="result-steps" style="margin-bottom:20px">
      <h3>Subperfis sugeridos</h3>
      <ul>${state.suggestedSubprofiles.map(item => `<li>${item}</li>`).join('')}</ul>
    </div>
  `;
  const attentionHtml = profile.attention.map(a => `<li>${a}</li>`).join('');
  const stepsHtml = profile.steps.map(st => `<li>${st}</li>`).join('');
  const shareBanner = options.fromShare ? `<div style="margin-top:8px;background:var(--amber-bg);border:1px solid var(--amber-dim);border-radius:8px;padding:8px 12px;color:var(--amber);font-size:12px;">👁 Você está vendo o resultado de outra pessoa — <button class="btn-inline" style="color:var(--amber)" onclick="go('quiz', 'forward')">fazer o seu</button></div>` : '';
  const revisitMsg = isRefazendo ? (mesmoPeril ? `<div style="background: var(--teal-bg); border: 1px solid var(--teal-dim); border-radius: 8px; padding: 8px 14px; font-size: 12px; color: var(--teal); margin-top:8px;">Você respondeu diferente desta vez — mas chegou ao mesmo resultado. Isso é um bom sinal de consistência.</div>` : `<div style="background: var(--amber-bg); border: 1px solid var(--amber-dim); border-radius: 8px; padding: 8px 14px; font-size: 12px; color: var(--amber); margin-top:8px;">Perfil diferente desta vez! Antes você era <strong style="color: var(--amber)">${PROFILES[perfilAnterior]?.name || 'outro perfil'}</strong>. Isso pode indicar que você está pensando diferente — ou que respondeu com mais honestidade.</div>`) : '';

  const phaseId = PROFILE_ROADMAP_PHASE[profileKey] || 'fase1';
  const phaseMeta = PHASES.find(p => p.id === phaseId);
  const hint = PROFILE_ROADMAP_HINT[profileKey] || 'Use o roadmap em fases e o FAQ quando um conceito travar — cada habilidade tem o porquê explicado.';
  const nextStepCard = `
    <div class="next-step-card">
      <h3>Seu próximo passo neste site</h3>
      <p>${hint}</p>
      <p class="next-step-meta">Sugerimos abrir agora: <strong>${phaseMeta ? phaseMeta.title : 'Fase 1 — Fundamentos'}</strong>. Nos cards do roadmap, use “ver no FAQ →” quando quiser aprofundar.</p>
      <div class="next-step-actions">
        <button type="button" class="btn btn-primary" onclick="openRoadmapPhase('${phaseId}')">Abrir esta fase no roadmap</button>
        <button type="button" class="btn btn-ghost" onclick="navigate('faq')">Ir ao FAQ</button>
      </div>
    </div>`;

  document.getElementById('resultContent').innerHTML = `
    <div class="card" style="margin-bottom:16px">
      <div class="result-header">
        <div class="result-icon" aria-hidden="true">${profile.icon}</div>
        <div>
          <div class="result-title" style="color:${profile.color}">${profile.name}</div>
          <div class="result-subtitle">${profile.sub}</div>
          ${shareBanner}
          ${revisitMsg}
        </div>
      </div>
      <div class="result-desc">${profile.desc}</div>
      ${journeyHtml}
      <h3 style="font-size:14px;margin-bottom:16px;color:var(--text2)">Compatibilidade por dimensão</h3>
      <div class="compat-bars">${barsHtml}</div>
      <h3 style="font-size:14px;margin-bottom:12px;color:var(--text2)">Áreas de maior fit</h3>
      <div class="areas-grid">${areasHtml}</div>
      ${nextStepCard}
    </div>
    <div class="result-attention"><h3>⚠ Pontos de atenção</h3><ul>${attentionHtml}</ul></div>
    <div class="result-steps"><h3>✓ Próximos passos</h3><ul>${stepsHtml}</ul></div>
    ${renderRecursos(profile, state.recursosTab)}
    <div class="result-ctas">
      <button class="btn btn-primary" onclick="go('roadmap', 'forward')">Ver Roadmap</button>
      <button class="btn btn-ghost" id="copyLinkBtn" onclick="copiarLink()">⛓ Copiar link</button>
      <button class="btn btn-ghost" id="copyResultBtn" onclick="copiarResultado()">📋 Copiar resultado em TXT</button>
      <button class="btn btn-ghost" onclick="go('quiz', 'back')">Refazer o diagnóstico</button>
    </div>
  `;
  requestAnimationFrame(() => {
    const titleEl = document.querySelector('#screen-result .result-title');
    if (titleEl) {
      titleEl.setAttribute('tabindex', '-1');
      titleEl.focus({ preventScroll: true });
    }
    requestAnimationFrame(() => {
      bars.forEach((b, i) => {
        const el = document.getElementById('bar' + i);
        if (el) { el.style.transition = `width 0.8s ease ${i * 100}ms`; el.style.width = b.val + '%'; }
      });
    });
  });
  saveAppState();
}

function setRecursosTab(tab) {
  state.recursosTab = tab;
  const profile = PROFILES[state.profileKey];
  const section = document.querySelector('#resultContent .recursos-section');
  if (!profile || !section) return;
  const panel = document.getElementById('recursos-panel');
  if (!panel) return;
  panel.innerHTML = buildRecursoCardsHtml(profile, tab);
  panel.setAttribute('aria-labelledby', 'rec-tab-' + tab);
  section.querySelectorAll('.recursos-tab[role="tab"]').forEach(btn => {
    const isSel = btn.id === 'rec-tab-' + tab;
    btn.classList.toggle('active', isSel);
    btn.setAttribute('aria-selected', isSel ? 'true' : 'false');
    btn.setAttribute('tabindex', isSel ? '0' : '-1');
  });
  syncFreeOnlyUi();
  saveAppState();
}

function copiarLink() {
  const original = '⛓ Copiar link';
  copyText(state.currentShareUrl)
    .then(() => flashButtonState('copyLinkBtn', 'Copiado!', original))
    .catch(error => {
      console.warn('[devguia] Falha ao copiar link:', error.message);
      flashButtonState('copyLinkBtn', 'Falhou', original);
    });
}

function copiarResultado() {
  const texto = gerarTextoResultado(state.profileKey, state.areaScores, state.currentShareUrl);
  const original = '📋 Copiar resultado em TXT';
  copyText(texto)
    .then(() => flashButtonState('copyResultBtn', 'Copiado!', original))
    .catch(error => {
      console.warn('[devguia] Falha ao copiar resultado:', error.message);
      flashButtonState('copyResultBtn', 'Falhou', original);
    });
}

// ============================================================
// HOME CONTENT
// ============================================================
function renderAreaComparisons() {
  const container = document.getElementById('areaCompareGrid');
  if (!container) return;
  container.innerHTML = AREA_COMPARISONS.map(area => `
    <article class="area-compare-card">
      <span class="area-compare-badge" style="color:${area.accent}">${area.badge}</span>
      <h3>${area.name}</h3>
      <p><strong>Rotina real:</strong> ${area.rotina}</p>
      <p><strong>Dificuldade:</strong> ${area.dificuldade}</p>
      <p><strong>Curva de aprendizado:</strong> ${area.curva}</p>
      <p><strong>Tipo de trabalho:</strong> ${area.tipo}</p>
    </article>
  `).join('');
}

function renderHonestyFilters() {
  const list = document.getElementById('honestyList');
  if (!list) return;
  list.innerHTML = HONESTY_FILTERS.map(item => `<li>${item}</li>`).join('');
}

// ============================================================
// ROADMAP
// ============================================================
function renderRoadmap() {
  const container = document.getElementById('roadmapPhases');
  if (!container) return;
  container.innerHTML = PHASES.map(phase => {
    const completed = phase.skills.filter((skill, skillIndex) => state.checklist[getChecklistKey(phase.id, skillIndex)]).length;
    const progress = `${completed}/${phase.skills.length}`;
    const visibleResources = (phase.resources || []).filter(item => !state.freeOnly || item.free !== false);
    return `
    <div class="phase-item" id="phase-${phase.id}">
      <button
        class="phase-header"
        onclick="togglePhase('${phase.id}')"
        aria-expanded="${state.openPhaseId === phase.id ? 'true' : 'false'}"
        aria-controls="phasebody-${phase.id}"
      >
        <div class="phase-header-left">
          <div class="phase-dot" style="background:${phase.color}"></div>
          <div>
            <div class="phase-title">${phase.title}</div>
            <div class="phase-duration">${phase.duration} · progresso ${progress}</div>
          </div>
        </div>
        <span class="phase-chevron" aria-hidden="true">▾</span>
      </button>
      <div class="phase-body" id="phasebody-${phase.id}" role="region">
        <div class="phase-content">
          ${phase.skills.map((skill, skillIndex) => `
            <div class="phase-skill">
              <div class="phase-skill-row">
                <label class="phase-check">
                  <input type="checkbox" ${state.checklist[getChecklistKey(phase.id, skillIndex)] ? 'checked' : ''} onchange="toggleChecklistItem('${phase.id}', '${skillIndex}')">
                  <span class="phase-checkmark">${state.checklist[getChecklistKey(phase.id, skillIndex)] ? '✓' : ''}</span>
                </label>
                <h4>${skill.name}</h4>
              </div>
              <p class="phase-skill-why">"${skill.why}"</p>
              ${skill.faqId ? `<button class="btn-faq-link" onclick="openFaqItem('${skill.faqId}')">ver no FAQ →</button>` : ''}
            </div>
          `).join('')}
          <div class="phase-resource-wrap">
            <div class="phase-resource-head">Recursos sugeridos${state.freeOnly ? ' · modo sem dinheiro' : ''}</div>
            <div class="phase-resource-grid">
              ${visibleResources.length ? visibleResources.map(item => item.url
                ? `<a class="phase-resource-card" href="${item.url}" target="_blank" rel="noopener noreferrer"><span class="phase-resource-badge">${item.free === false ? 'Pago' : 'Grátis'}</span><strong>${item.name}</strong><p>${item.desc}</p></a>`
                : `<div class="phase-resource-card"><span class="phase-resource-badge">${item.free === false ? 'Pago' : 'Grátis'}</span><strong>${item.name}</strong><p>${item.desc}</p></div>`
              ).join('') : `<div class="phase-resource-empty">Nenhum recurso gratuito visível nesta fase com o filtro atual.</div>`}
            </div>
          </div>
        </div>
      </div>
    </div>
  `; }).join('');
  document.querySelectorAll('.phase-item').forEach(item => item.classList.toggle('open', item.id === `phase-${state.openPhaseId}`));
  syncFreeOnlyUi();
}

function togglePhase(id) {
  const item = document.getElementById('phase-' + id);
  const header = item.querySelector('.phase-header');
  const isOpen = item.classList.toggle('open');
  state.openPhaseId = isOpen ? id : null;
  header.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  if (state.currentScreen === 'roadmap') {
    const base = location.pathname + location.search;
    if (isOpen) history.replaceState(null, '', base + '#roadmap/' + id);
    else history.replaceState(null, '', base + '#roadmap');
  }
  saveAppState();
}

function getChecklistKey(phaseId, skillId) {
  return `${phaseId}::${skillId}`;
}

function toggleChecklistItem(phaseId, skillId) {
  const key = getChecklistKey(phaseId, skillId);
  state.checklist[key] = !state.checklist[key];
  if (!state.checklist[key]) delete state.checklist[key];
  saveChecklistState();
  renderRoadmap();
  saveAppState();
}

// ============================================================
// FAQ
// ============================================================
function renderFaq() {
  filterFaq();
}

function linkGlossario(texto) {
  const termos = [
    ['banco de dados', 'banco-de-dados'],
    ['open source', 'open-source'],
    ['CI/CD', 'ci-cd'],
    ['front-end', 'frontend'],
    ['back-end', 'backend'],
    ['Node.js', 'javascript'],
    ['TypeScript', 'javascript'],
    ['PostgreSQL', 'banco-de-dados'],
    ['Kubernetes', 'devops'],
    ['JavaScript', 'javascript'],
    ['DevOps', 'devops'],
    ['HTML', 'html'],
    ['CSS', 'css'],
    ['SQL', 'sql'],
    ['REST', 'api'],
    ['API', 'api'],
    ['Git', 'versionamento'],
    ['Docker', 'devops'],
    ['UX', 'ux'],
    ['framework', 'framework'],
    ['deploy', 'deploy'],
    ['servidor', 'servidor'],
    ['cloud', 'cloud'],
    ['algoritmo', 'algoritmo'],
    ['debug', 'debug'],
  ];
  const chunks = texto.split(/(<button class="glossario-link"[\s\S]*?<\/button>)/gi);
  return chunks.map(chunk => {
    if (/^<button class="glossario-link"/i.test(chunk)) return chunk;
    let resultado = chunk;
    termos.forEach(([termo, id]) => {
      const escaped = termo.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(`(?<![\\w-])${escaped}(?![\\w-])`, 'gi');
      resultado = resultado.replace(regex, match => `<button class="glossario-link" onclick="abrirGlossario('${id}')" title="Ver no glossário">${match}</button>`);
    });
    return resultado;
  }).join('');
}

function faqTagsHtml(id) {
  const tags = FAQ_TAGS[id] || [];
  return tags.map(tag => `<span class="faq-tag">${tag}</span>`).join('');
}

function faqMetaFooterHtml(item) {
  const tags = faqTagsHtml(item.id);
  return `<div class="faq-card-tags"><span class="faq-cat-badge faq-badge" data-tooltip="${CAT_TOOLTIPS[item.cat] || ''}">${item.cat}</span>${tags ? `<span class="faq-tag-wrap">${tags}</span>` : ''}</div>`;
}

function filterFaq() {
  const search = document.getElementById('faqSearch')?.value || '';
  const normalizedSearch = normalizeText(search);
  const terms = normalizedSearch.split(/\s+/).filter(Boolean);
  const cat = state.faqFilter.cat;
  state.faqFilter.search = search;

  const filtered = FAQS.filter(f => {
    const catMatch = cat === 'all' || f.cat === cat;
    const haystack = normalizeText(`${f.q} ${f.answer.replace(/<[^>]+>/g, ' ')} ${(FAQ_TAGS[f.id] || []).join(' ')} ${f.cat}`);
    const searchMatch = !terms.length || terms.every(term => haystack.includes(term));
    return catMatch && searchMatch;
  });

  const list = document.getElementById('faqList');
  if (!list) return;

  if (filtered.length === 0) {
    list.innerHTML = `<div class="faq-empty">Nenhuma pergunta encontrada para "<strong>${search || cat}</strong>".</div>`;
    saveAppState();
    return;
  }

  list.innerHTML = filtered.map(f => `
    <div class="faq-item${state.openFaqId === f.id ? ' open' : ''}" id="faqitem-${f.id}">
      <button
        type="button"
        class="faq-q"
        onclick="toggleFaq('${f.id}')"
        aria-expanded="${state.openFaqId === f.id ? 'true' : 'false'}"
        aria-controls="faqbody-${f.id}"
      >
        <span class="faq-q-text">${f.q}</span>
        <span class="faq-q-meta">
          <span class="faq-chevron" aria-hidden="true">▾</span>
        </span>
      </button>
      <div class="faq-body" id="faqbody-${f.id}" role="region">
        <div class="faq-answer">${linkGlossario(f.answer)}${faqMetaFooterHtml(f)}</div>
      </div>
    </div>
  `).join('');
  saveAppState();
}

function setFaqCat(cat) {
  state.faqFilter.cat = cat;
  document.querySelectorAll('[data-cat]').forEach(b => {
    b.classList.toggle('active', b.dataset.cat === cat);
  });
  filterFaq();
  syncSugestaoContext();
  saveAppState();
}

function toggleFaq(id) {
  const prevId = state.openFaqId;
  state.openFaqId = prevId === id ? null : id;

  if (prevId && prevId !== id) {
    const prevItem = document.getElementById('faqitem-' + prevId);
    if (prevItem) {
      prevItem.classList.remove('open');
      prevItem.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
    }
  }

  const item = document.getElementById('faqitem-' + id);
  if (item) {
    const isOpen = state.openFaqId === id;
    item.classList.toggle('open', isOpen);
    item.querySelector('.faq-q').setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  }

  if (state.currentScreen === 'faq') {
    const base = location.pathname + location.search;
    if (state.openFaqId) history.replaceState(null, '', base + '#faq/' + state.openFaqId);
    else history.replaceState(null, '', base + '#faq');
  }
  saveAppState();
}

function openFaqItem(faqId, options = {}) {
  if (!options.skipNav) go('faq', 'forward', { keepListState: true });
  state.faqFilter.cat = 'all';
  state.faqFilter.search = '';

  setTimeout(() => {
    renderFaq();

    document.querySelectorAll('[data-cat]').forEach(b => {
      b.classList.toggle('active', b.dataset.cat === 'all');
    });

    const searchEl = document.getElementById('faqSearch');
    if (searchEl) searchEl.value = '';

    setTimeout(() => {
      state.openFaqId = faqId;
      const item = document.getElementById('faqitem-' + faqId);
      if (item) {
        item.classList.add('open', 'highlighted');
        item.querySelector('.faq-q').setAttribute('aria-expanded', 'true');
        item.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      const base = location.pathname + location.search;
      history.replaceState(null, '', base + '#faq/' + faqId);
      saveAppState();
    }, 100);
  }, 50);
}

function getFaqSuggestionContext() {
  const categoria = state.faqFilter?.cat && state.faqFilter.cat !== 'all' ? state.faqFilter.cat : 'não filtrada';
  const busca = state.faqFilter?.search ? `"${state.faqFilter.search}"` : 'sem busca ativa';
  const itemAberto = state.openFaqId ? FAQS.find(f => f.id === state.openFaqId)?.q || state.openFaqId : 'nenhum item aberto';
  return `FAQ | categoria: ${categoria} | busca: ${busca} | item aberto: ${itemAberto}`;
}

function syncSugestaoContext() {
  const categoryEl = document.getElementById('suggestCategory');
  const contextEl = document.getElementById('suggestContext');
  if (categoryEl && state.faqFilter?.cat && state.faqFilter.cat !== 'all') {
    categoryEl.value = state.faqFilter.cat;
  }
  if (contextEl) contextEl.value = getFaqSuggestionContext();
}

function toggleSugestaoForm(forceState) {
  const form = document.getElementById('suggestForm');
  if (!form) return;
  const nextHidden = typeof forceState === 'boolean' ? !forceState : !form.hidden;
  form.hidden = nextHidden;
  if (!nextHidden) {
    syncSugestaoContext();
    document.getElementById('suggestQuestion')?.focus();
  }
}

function enviarSugestaoPergunta(event) {
  event.preventDefault();
  const categoria = document.getElementById('suggestCategory')?.value || 'carreira';
  const contexto = document.getElementById('suggestContext')?.value || getFaqSuggestionContext();
  const pergunta = document.getElementById('suggestQuestion')?.value.trim();
  const porque = document.getElementById('suggestWhy')?.value.trim();
  const resposta = document.getElementById('suggestAnswer')?.value.trim();
  if (!pergunta || !porque) return;
  const titulo = encodeURIComponent(`Sugestão de pergunta para o FAQ: ${pergunta}`);
  const corpo = encodeURIComponent(`## Pergunta sugerida

**Pergunta:** ${pergunta}

**Categoria:** ${categoria}

**Contexto da navegação:** ${contexto}

**Por que essa pergunta é importante?**
${porque}

**Você tem uma resposta sugerida?**
${resposta || '(sem resposta sugerida)'}

---
*Aberto via formulário "Sugerir uma pergunta" no devguia.dev*`);
  const url = `https://github.com/${GITHUB_REPO}/issues/new?title=${titulo}&body=${corpo}&labels=sugestao-faq`;
  window.open(url, '_blank', 'noopener,noreferrer');
}

function setGlossarioCat(cat) {
  state.glossarioFilter = state.glossarioFilter || { cat: 'all', search: '' };
  state.glossarioFilter.cat = cat;
  document.querySelectorAll('[data-gcat]').forEach(b => b.classList.toggle('active', b.dataset.gcat === cat));
  filterGlossario();
  saveAppState();
}

function filterGlossario() {
  state.glossarioFilter = state.glossarioFilter || { cat: 'all', search: '' };
  const search = document.getElementById('glossarySearch')?.value || '';
  const terms = normalizeText(search).split(/\s+/).filter(Boolean);
  state.glossarioFilter.search = search;
  const cat = state.glossarioFilter.cat;
  const list = document.getElementById('glossarioList');
  if (!list) return;
  const items = [...GLOSSARIO]
    .sort((a, b) => sortByNormalizedLabel(a, b, 'termo'))
    .filter(g => {
      const catMatch = cat === 'all' || g.categoria === cat;
      const haystack = normalizeText(`${g.termo} ${g.curta} ${g.longa} ${g.categoria} ${(g.relacionados || []).join(' ')}`);
      const searchMatch = !terms.length || terms.every(term => haystack.includes(term));
      return catMatch && searchMatch;
    });
  list.innerHTML = items.map(g => {
    const isOpen = state.openGlossarioId === g.id;
    const rel = (g.relacionados || []).map(r => {
      const alvo = GLOSSARIO.find(x => x.id === r || x.termo.toLowerCase() === r.toLowerCase() || x.termo.toLowerCase().includes(r.toLowerCase()));
      return alvo ? `<button class="glossario-pill" onclick="abrirGlossario('${alvo.id}')">${alvo.termo}</button>` : '';
    }).join('');
    return `<div class="glossario-item${isOpen ? ' open' : ''}" id="gi-${g.id}"><button type="button" class="glossario-head" onclick="toggleGlossario('${g.id}')" aria-expanded="${isOpen ? 'true' : 'false'}" aria-controls="glossario-body-${g.id}" id="glossario-head-${g.id}"><span class="glossario-term">${g.termo}</span><span class="glossario-curta">${g.curta}</span><span class="mito-toggle-hint" aria-hidden="true">Ver definição completa ▾</span></button><div class="glossario-body" id="glossario-body-${g.id}" role="region" aria-labelledby="glossario-head-${g.id}"><div class="glossario-content"><p class="glossario-longa">${g.longa}</p><div class="glossario-exemplo"><strong style="color:var(--text);display:block;margin-bottom:6px">Exemplo</strong>${g.exemplo}</div>${rel ? `<div class="glossario-pill-wrap">${rel}</div>` : ''}<div class="glossario-meta"><span class="faq-cat-badge">${g.categoria}</span>${g.fonetico ? `<span class="glossario-fonetico">${g.fonetico}</span>` : ''}</div></div></div></div>`;
  }).join('');
  saveAppState();
}

function renderGlossario() { filterGlossario(); }
function toggleGlossario(id) {
  state.openGlossarioId = state.openGlossarioId === id ? null : id;
  renderGlossario();
  if (state.currentScreen === 'glossario') {
    const base = location.pathname + location.search;
    if (state.openGlossarioId) history.replaceState(null, '', base + '#glossario/' + state.openGlossarioId);
    else history.replaceState(null, '', base + '#glossario');
  }
  saveAppState();
}
function abrirGlossario(id) {
  go('glossario', 'forward', { keepListState: true });
  setTimeout(() => {
    state.openGlossarioId = id;
    renderGlossario();
    const base = location.pathname + location.search;
    history.replaceState(null, '', base + '#glossario/' + id);
    document.getElementById('gi-' + id)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    saveAppState();
  }, 80);
}

function formatMitoFonte(fonte) {
  const t = (fonte || '').trim();
  if (!t) return '';
  if (/^https?:\/\//i.test(t)) {
    return `<div class="mito-fonte">Fonte: <a href="${t}" class="mito-fonte-link" target="_blank" rel="noopener noreferrer">${t}</a></div>`;
  }
  return `<div class="mito-fonte">Fonte: ${t}</div>`;
}

function mitoBadge(veredicto) {
  if (veredicto === 'mito') return ['badge-mito', 'Mito'];
  if (veredicto === 'verdade') return ['badge-verdade', 'Verdade'];
  if (veredicto === 'depende') return ['badge-depende', 'Depende'];
  return ['badge-parcial', 'Parcialmente verdade'];
}
function setMitosFilter(filter) {
  state.mitosFilter = filter;
  document.querySelectorAll('[data-mito]').forEach(b => b.classList.toggle('active', b.dataset.mito === filter));
  renderMitos();
  saveAppState();
}
function toggleMito(id) {
  state.openMitoId = state.openMitoId === id ? null : id;
  renderMitos();
  if (state.currentScreen === 'mitos') {
    const base = location.pathname + location.search;
    if (state.openMitoId) history.replaceState(null, '', base + '#mitos/' + state.openMitoId);
    else history.replaceState(null, '', base + '#mitos');
  }
  saveAppState();
}
function renderMitos() {
  const list = document.getElementById('mitosList');
  if (!list) return;
  const filter = state.mitosFilter || 'all';
  const items = MITOS.filter(m => filter === 'all' || m.veredicto === filter);
  list.innerHTML = items.map(m => {
    const [badgeClass, badgeText] = mitoBadge(m.veredicto);
    const open = state.openMitoId === m.id;
    return `<div class="mito-card${open ? ' open' : ''}" id="mito-${m.id}"><button type="button" class="mito-head" onclick="toggleMito('${m.id}')" aria-expanded="${open ? 'true' : 'false'}" aria-controls="mito-body-${m.id}" id="mito-head-${m.id}"><span class="${badgeClass}">${badgeText}</span><span class="mito-affirmation">"${m.afirmacao}"</span><span class="mito-curta">${m.curta}</span><span class="mito-toggle-hint" aria-hidden="true">Ver explicação completa ▾</span></button><div class="mito-body" id="mito-body-${m.id}" role="region" aria-labelledby="mito-head-${m.id}"><div class="mito-content"><p>${m.explicacao}</p>${formatMitoFonte(m.fonte)}</div></div></div>`;
  }).join('');
}

function renderStructuredData() {
  const jsonLdEl = document.getElementById('structured-data');
  if (!jsonLdEl) return;
  const faqEntities = FAQS.slice(0, 10).map(item => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim(),
    },
  }));
  const payload = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'devguia.dev',
      url: 'https://nathaliagf.github.io/devguia/',
      inLanguage: 'pt-BR',
      description: 'Guia vocacional para TI com diagnóstico, roadmap, FAQ, glossário e mitos.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqEntities,
    },
  ];
  jsonLdEl.textContent = JSON.stringify(payload);
}

function atualizarBadgeAnalytics() {
  const textEl = document.getElementById('counter-text');
  if (!textEl) return;
  const hoje = getTodayLocalIso();
  textEl.textContent = hasLgpdConsent()
    ? `Analytics anônimos ativos com consentimento salvo em ${hoje}. O contador público diário foi removido para não expor credenciais no frontend.`
    : 'Analytics anônimos desativados até seu consentimento. Nenhum dado é coletado antes do aceite.';
}

function toggleEasyRead() {
  const isActive = document.body.classList.toggle('easy-read');
  const btn = document.getElementById('easy-read-toggle');
  btn.textContent = isActive ? 'Aa ✓' : 'Aa';
  btn.style.borderColor = isActive ? 'var(--purple)' : 'var(--border2)';
  btn.style.color = isActive ? 'var(--purple)' : 'var(--text2)';
  sessionStorage.setItem(EASY_READ_KEY, isActive ? '1' : '0');
}

function showResultFromQueryParam(profileKey) {
  if (!profileKey || !PROFILES[profileKey]) return false;
  const encoded = getQueryResultData();
  const decoded = encoded ? decodeResult('result=' + encoded) : null;
  const scores = decoded && decoded.p === profileKey && decoded.s ? decoded.s : getSharedScoresForProfile(profileKey);
  showResult(scores, profileKey, { fromShare: true, skipTrack: true, preserveExternalUrl: true });
  return true;
}

// ============================================================
// INIT
// ============================================================
renderRoadmap();
const restoredState = restoreAppState();

window.addEventListener('beforeunload', (e) => {
  if (state.currentScreen !== 'quiz') return;
  if (!localStorage.getItem(QUIZ_PROGRESS_KEY)) return;
  e.preventDefault();
  e.returnValue = '';
});

window.addEventListener('hashchange', () => {
  const raw = (location.hash || '').replace(/^#/, '');
  if (raw.startsWith('result=')) {
    const data = decodeResult(raw);
    state.resultHash = location.hash;
    if (data && data.p && data.s) showResult(data.s, data.p, { fromShare: true, skipTrack: true });
    return;
  }
  if (!raw) {
    go('home', 'fade', { skipHashSync: true });
    return;
  }
  applyHashRoute();
});

window.addEventListener('load', () => {
  initLgpdBanner();
  ensureAnalyticsLoaded();
  renderAreaComparisons();
  renderHonestyFilters();
  renderStructuredData();
  atualizarBadgeAnalytics();
  if (sessionStorage.getItem(EASY_READ_KEY) === '1') {
    document.body.classList.add('easy-read');
    const btn = document.getElementById('easy-read-toggle');
    if (btn) {
      btn.textContent = 'Aa ✓';
      btn.style.borderColor = 'var(--purple)';
      btn.style.color = 'var(--purple)';
    }
  }
  initBackToTop();
  const resultadoParam = getQueryResultParam();
  if (resultadoParam && showResultFromQueryParam(resultadoParam)) {
    syncSugestaoContext();
    syncFreeOnlyUi();
    saveAppState();
    return;
  }
  const raw = (location.hash || '').replace(/^#/, '');
  if (raw.startsWith('result=')) {
    const data = decodeResult(raw);
    state.resultHash = location.hash;
    if (data && data.p && data.s) showResult(data.s, data.p, { fromShare: true, skipTrack: true });
  } else if (raw) {
    applyHashRoute();
  } else if (restoredState.currentScreen === 'result' && restoredState.resultHash) {
    const data = decodeResult(restoredState.resultHash);
    if (data && data.p && data.s) {
      history.replaceState(null, '', restoredState.resultHash);
      showResult(data.s, data.p, { restoreState: true, skipTrack: true });
    }
  } else if (restoredState.currentScreen && restoredState.currentScreen !== 'home') {
    go(restoredState.currentScreen, 'fade', { skipHashSync: true, keepListState: true, preserveScroll: true });
    if (restoredState.currentScreen === 'roadmap' && state.openPhaseId) {
      setTimeout(() => openRoadmapPhase(state.openPhaseId, { skipNav: true }), 40);
    }
  }
  syncSugestaoContext();
  syncFreeOnlyUi();
  saveAppState();
});
