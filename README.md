# devguia.dev

Guia vocacional estático para TI, publicado no GitHub Pages, feito com HTML, CSS e JavaScript puro.

O projeto existe para ajudar quem está começando, mudando de carreira ou tentando entender em qual trilha de tecnologia faz mais sentido investir tempo. Não há backend, build step nem dependência de npm. Estado e progresso vivem no navegador via `localStorage` e `sessionStorage`.

## Escopo atual

Hoje o projeto entrega:

- Diagnóstico vocacional com `25` perguntas em `4` blocos
- `14` perfis vocacionais com resultado compartilhável
- `4` mini testes por área
- Roadmap em `4` fases com checklist, critérios de conclusão, armadilhas e ideias de projeto
- `34` FAQs
- `118` termos no glossário
- `17` mitos e verdades com link direto por item

## URL pública

`https://nathaliagf.github.io/devguia/`

Se o projeto migrar para domínio próprio, atualize `canonical`, Open Graph, `robots.txt` e `sitemap.xml`.

## Navegação e URLs

Sem backend, a aplicação usa hash routing para navegação interna:

| Destino | Exemplo |
| --- | --- |
| Quiz | `#quiz` |
| Roadmap | `#roadmap` |
| FAQ | `#faq` |
| Glossário | `#glossario` |
| Mitos | `#mitos` |
| Fase do roadmap | `#roadmap/fase2` |
| FAQ aberto | `#faq/f-logica` |
| Verbete aberto | `#glossario/api` |
| Mito aberto | `#mitos/m5` |

O resultado completo do diagnóstico pode ser restaurado internamente via `#result=...`. Para compartilhamento público, o projeto usa `?resultado=<perfil>&dados=<payload>`.

## O que o frontend faz

Mesmo sendo estático, a SPA já cobre bastante comportamento:

- Salva progresso do quiz por até 7 dias
- Salva resultado do diagnóstico para reabrir roadmap e CTAs contextuais
- Persiste checklist do roadmap
- Troca `document.title` dinamicamente por seção com `IntersectionObserver`
- Injeta FAQ schema (`FAQPage`) dinamicamente no `<head>`
- Gera links diretos para FAQ, roadmap, glossário e mitos
- Exibe recursos filtráveis por gratuitos

## Estrutura

```text
devguia/
├── index.html
├── js/
│   ├── app.js
│   └── data/
│       ├── catalog.js
│       ├── faq.js
│       ├── profiles.js
│       ├── questions.js
│       └── roadmap.js
├── faq/
├── glossario/
├── mitos/
├── scripts/
│   ├── generate-static-pages.js
│   └── validate-data.js
├── 404.html
├── privacidade.html
├── sitemap.xml
├── robots.txt
└── README.md
```

## Arquivos principais

- `index.html`: estrutura da SPA e todo o CSS do projeto
- `js/app.js`: navegação, quiz, resultado, roadmap, FAQ, glossário, mitos e SEO dinâmico
- `js/data/questions.js`: perguntas e blocos do diagnóstico
- `js/data/profiles.js`: perfis vocacionais
- `js/data/roadmap.js`: fases, critérios, armadilhas, projetos e recursos
- `js/data/faq.js`: base completa do FAQ
- `js/data/catalog.js`: glossário, mitos, quick tests, recursos e constantes editoriais

## Como rodar localmente

Basta abrir `index.html` no navegador:

```bash
git clone https://github.com/NathaliaGF/devguia.git
cd devguia
open index.html
```

Alternativas:

- Linux: `xdg-open index.html`
- Windows: `start index.html`

Não precisa subir servidor local para a aplicação funcionar.

## Scripts úteis

```bash
node scripts/validate-data.js
node scripts/generate-static-pages.js
```

- `validate-data.js`: valida referências internas, IDs e consistência entre datasets
- `generate-static-pages.js`: recria as páginas estáticas indexáveis de FAQ, glossário e mitos

## Persistência no navegador

As principais chaves usadas hoje são:

- `quiz_progress_v2`: progresso temporário do diagnóstico
- `devguia_state_v1`: estado geral da navegação
- `devguia_checklist_v1`: checklist do roadmap
- `devguia_free_only_v1`: filtro de recursos gratuitos
- `devguia_diagnostic_result_v1`: resumo persistido do resultado final

## Contribuição

Veja [CONTRIBUTING.md](CONTRIBUTING.md).

O fluxo mais comum é editar os datasets em `js/data/`. Exemplo de item do FAQ:

```js
{
  id: 'f-minha-pergunta',
  cat: 'carreira',
  q: 'Texto da pergunta?',
  answer: `
    <p>Resposta principal aqui.</p>
    <div class="dica"><strong>Dica:</strong> Dica prática opcional.</div>
    <div class="atencao"><strong>Atenção:</strong> Aviso importante opcional.</div>
  `,
}
```

## Analytics

O projeto suporta GoatCounter de forma opcional.

Para ativar, troque `SEU-CODIGO` no `index.html` pelo subdomínio correto do GoatCounter.

Notas:

- O contador público foi removido do frontend por segurança
- Nenhum evento deve ser enviado antes do consentimento LGPD
- Se o placeholder continuar como `SEU-CODIGO`, nenhum tracking será disparado
