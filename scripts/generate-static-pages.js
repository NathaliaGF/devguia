const fs = require('fs');
const path = require('path');

const { FAQS } = require('../js/data/faq.js');
const { GLOSSARIO, MITOS } = require('../js/data/catalog.js');

const ROOT = path.resolve(__dirname, '..');

function stripHtml(html) {
  return html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

function normalizeText(value) {
  return String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
}

const CSP = "default-src 'self'; script-src 'self' 'unsafe-inline' https://gc.zgo.at; style-src 'self' 'unsafe-inline'; img-src 'self' data: https://*.goatcounter.com; connect-src 'self' https://*.goatcounter.com; font-src 'self'; frame-ancestors 'none'; base-uri 'self';";

function shell(title, description, canonical, body, extraHead = '') {
  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="Content-Security-Policy" content="${CSP}">
  <meta name="description" content="${description}">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${description}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:type" content="website">
  <meta property="og:locale" content="pt_BR">
  <meta property="og:image" content="https://nathaliagf.github.io/devguia/og.png">
  <meta property="og:image:type" content="image/png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <link rel="canonical" href="${canonical}">
  <title>${title}</title>
  ${extraHead}
  <style>
    :root {
      --bg: #0f1117;
      --bg2: #161b27;
      --bg3: #1e2535;
      --border: #2a3347;
      --purple: #a78bfa;
      --blue: #60a5fa;
      --teal: #34d399;
      --amber: #fbbf24;
      --coral: #f87171;
      --text: #e8edf5;
      --text2: #a1aec4;
      --text3: #6f7d95;
    }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      font-family: system-ui, -apple-system, sans-serif;
      background: linear-gradient(180deg, var(--bg) 0%, #141a27 100%);
      color: var(--text);
      line-height: 1.7;
    }
    :focus-visible {
      outline: 2px solid currentColor;
      outline-offset: 3px;
    }
    :focus:not(:focus-visible) {
      outline: none;
    }
    .wrap {
      max-width: 980px;
      margin: 0 auto;
      padding: 40px 20px 72px;
    }
    .chip {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 6px 12px;
      border-radius: 999px;
      border: 1px solid var(--border);
      background: var(--bg3);
      color: var(--text3);
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }
    h1 {
      font-size: clamp(2rem, 6vw, 3.2rem);
      line-height: 1.08;
      margin: 16px 0 14px;
    }
    .lead {
      color: var(--text2);
      max-width: 70ch;
      margin: 0 0 22px;
    }
    .actions {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
      margin-bottom: 28px;
    }
    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-height: 44px;
      padding: 10px 18px;
      border-radius: 10px;
      border: 1px solid var(--border);
      text-decoration: none;
      color: var(--text);
      background: var(--bg2);
      font-weight: 700;
    }
    .btn.primary {
      background: var(--purple);
      border-color: var(--purple);
      color: #fff;
    }
    .grid {
      display: grid;
      gap: 16px;
    }
    .card {
      background: var(--bg2);
      border: 1px solid var(--border);
      border-radius: 14px;
      padding: 20px;
    }
    .card h2, .card h3 {
      margin: 10px 0;
      line-height: 1.3;
    }
    .card p { margin: 0 0 12px; color: var(--text2); }
    .card p:last-child { margin-bottom: 0; }
    .badge {
      display: inline-flex;
      align-items: center;
      border-radius: 999px;
      padding: 5px 10px;
      font-size: 11px;
      font-weight: 700;
      border: 1px solid var(--border);
      background: var(--bg3);
      color: var(--text2);
    }
    .answer p, .answer div { margin-bottom: 12px; }
    .answer .dica, .answer .atencao, .example {
      background: var(--bg3);
      border-left: 3px solid var(--purple);
      border-radius: 0 8px 8px 0;
      padding: 12px 14px;
      color: var(--text2);
    }
    .muted { color: var(--text3); font-size: 13px; }
  </style>
</head>
<body>
  <main class="wrap">
    ${body}
  </main>
</body>
</html>`;
}

function write(relativePath, contents) {
  const target = path.join(ROOT, relativePath);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, contents);
  console.log(`generated ${relativePath}`);
}

function renderFaqPage() {
  const entities = FAQS.map(item => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: stripHtml(item.answer),
    },
  }));
  const body = `
    <span class="chip">FAQ indexável</span>
    <h1>Perguntas frequentes sobre entrar e crescer em TI</h1>
    <p class="lead">Versão estática do FAQ do devguia.dev, gerada a partir da mesma base de dados da aplicação principal.</p>
    <div class="actions">
      <a class="btn primary" href="../#faq">Abrir FAQ interativo</a>
      <a class="btn" href="../">Voltar para a home</a>
    </div>
    <div class="grid">
      ${FAQS.map(item => `
        <article class="card" id="${item.id}">
          <span class="badge">${item.cat}</span>
          <h2>${item.q}</h2>
          <div class="answer">${item.answer}</div>
        </article>
      `).join('')}
    </div>
  `;
  const extraHead = `<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: entities })}</script>`;
  write('faq/index.html', shell('FAQ | devguia.dev', 'FAQ do devguia.dev com respostas diretas sobre carreira em TI, estudo, ferramentas e mercado.', 'https://nathaliagf.github.io/devguia/faq/', body, extraHead));
}

function renderGlossaryPage() {
  const sortedGlossary = [...GLOSSARIO].sort((a, b) => normalizeText(a.termo).localeCompare(normalizeText(b.termo), 'pt-BR'));
  const body = `
    <span class="chip">Glossário indexável</span>
    <h1>Glossário tech em português claro</h1>
    <p class="lead">Termos de tecnologia explicados de forma direta, usando a mesma base do glossário interativo do devguia.dev.</p>
    <div class="actions">
      <a class="btn primary" href="../#glossario">Abrir glossário interativo</a>
      <a class="btn" href="../">Voltar para a home</a>
    </div>
    <div class="grid">
      ${sortedGlossary.map(item => `
        <article class="card" id="${item.id}">
          <span class="badge">${item.categoria}</span>
          <h2>${item.termo}</h2>
          <p>${item.curta}</p>
          <p>${item.longa}</p>
          <div class="example"><strong>Exemplo:</strong> ${item.exemplo}</div>
        </article>
      `).join('')}
    </div>
  `;
  write('glossario/index.html', shell('Glossário | devguia.dev', 'Glossário tech do devguia.dev com termos de tecnologia explicados em linguagem direta.', 'https://nathaliagf.github.io/devguia/glossario/', body));
}

function renderMythsPage() {
  const body = `
    <span class="chip">Mitos indexáveis</span>
    <h1>Mitos e verdades sobre carreira em tecnologia</h1>
    <p class="lead">Afirmações populares sobre TI separadas de realidade, usando a mesma base de conteúdo da aplicação principal.</p>
    <div class="actions">
      <a class="btn primary" href="../#mitos">Abrir seção interativa</a>
      <a class="btn" href="../">Voltar para a home</a>
    </div>
    <div class="grid">
      ${MITOS.map(item => `
        <article class="card" id="${item.id}">
          <span class="badge">${item.veredicto}</span>
          <h2>${item.afirmacao}</h2>
          <p>${item.curta}</p>
          <p>${item.explicacao}</p>
          ${item.fonte ? `<div class="muted">Fonte: ${item.fonte}</div>` : ''}
        </article>
      `).join('')}
    </div>
  `;
  write('mitos/index.html', shell('Mitos e Verdades | devguia.dev', 'Mitos e verdades sobre mercado, salário, faculdade, IA e trabalho em tecnologia.', 'https://nathaliagf.github.io/devguia/mitos/', body));
}

renderFaqPage();
renderGlossaryPage();
renderMythsPage();
