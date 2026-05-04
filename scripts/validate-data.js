const { BLOCKS, QUESTIONS } = require('../js/data/questions.js');
const { PROFILES } = require('../js/data/profiles.js');
const { PHASES } = require('../js/data/roadmap.js');
const { FAQS } = require('../js/data/faq.js');
const { GLOSSARIO, MITOS } = require('../js/data/catalog.js');

let hasError = false;

function fail(message) {
  hasError = true;
  console.error(`ERROR: ${message}`);
}

function checkUnique(items, field, label) {
  const seen = new Set();
  items.forEach(item => {
    const value = item[field];
    if (!value) fail(`${label} item sem ${field}`);
    else if (seen.has(value)) fail(`${label} com ${field} duplicado: ${value}`);
    else seen.add(value);
  });
  console.log(`${label}: ${items.length} itens, ${seen.size} ids únicos`);
}

function validateQuestions() {
  checkUnique(QUESTIONS, 'id', 'QUESTIONS');
  QUESTIONS.forEach(question => {
    if (!BLOCKS[question.block]) fail(`QUESTION ${question.id} usa bloco inexistente: ${question.block}`);
    if (!Array.isArray(question.options) || question.options.length < 2) fail(`QUESTION ${question.id} precisa de pelo menos 2 opções`);
  });
}

function validateRoadmap() {
  checkUnique(PHASES, 'id', 'PHASES');
  const faqIds = new Set(FAQS.map(item => item.id));
  PHASES.forEach(phase => {
    phase.skills.forEach(skill => {
      if (skill.faqId && !faqIds.has(skill.faqId)) fail(`PHASE ${phase.id} referencia faqId inexistente: ${skill.faqId}`);
    });
  });
}

function validateGlossary() {
  checkUnique(GLOSSARIO, 'id', 'GLOSSARIO');
  const glossaryIds = new Set(GLOSSARIO.map(item => item.id));
  GLOSSARIO.forEach(item => {
    (item.relacionados || []).forEach(rel => {
      const match = GLOSSARIO.find(entry => entry.id === rel || entry.termo.toLowerCase() === String(rel).toLowerCase());
      if (!match && !glossaryIds.has(rel)) fail(`GLOSSARIO ${item.id} referencia relacionado inexistente: ${rel}`);
    });
  });
}

function validateProfiles() {
  const keys = Object.keys(PROFILES);
  const unique = new Set(keys);
  if (unique.size !== keys.length) fail('PROFILES com chaves duplicadas');
  console.log(`PROFILES: ${keys.length} perfis`);
}

checkUnique(FAQS, 'id', 'FAQS');
checkUnique(MITOS, 'id', 'MITOS');
validateQuestions();
validateRoadmap();
validateGlossary();
validateProfiles();

if (hasError) process.exit(1);
console.log('Validation passed');
