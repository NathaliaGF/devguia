# devguia.dev

Guia vocacional e educacional para pessoas iniciando em TI, em transição de carreira ou tentando entender onde se encaixam na área de tecnologia.

## O que é

Um site estático 100% frontend com três ferramentas:

- **Diagnóstico vocacional** — 15 perguntas divididas em 4 blocos que identificam seu perfil entre 7 categorias
- **Roadmap** — 4 fases de aprendizado com o porquê de cada habilidade, não só o quê
- **FAQ** — 16 respostas diretas para dúvidas que ninguém responde honestamente

## URL base (GitHub Pages)

O site público usa normalmente `https://nathaliagf.github.io/devguia/`. Meta tags (`canonical`, Open Graph) e `sitemap.xml` / `robots.txt` apontam para essa URL. Se você usar domínio próprio, atualize esses arquivos para o endereço final.

## Links diretos (hash)

Sem backend, a navegação entre telas atualiza o fragmento da URL para facilitar favoritos e compartilhamento:

| Destino | Exemplo |
|--------|---------|
| Telas | `#quiz`, `#roadmap`, `#faq`, `#glossario`, `#mitos` |
| FAQ aberto | `#faq/f-logica` (use o `id` do item no array `FAQS`) |
| Glossário aberto | `#glossario/api` (id do verbete em `GLOSSARIO`) |
| Mito aberto | `#mitos/m5` |
| Fase do roadmap | `#roadmap/fase2` |

O resultado do diagnóstico continua em `#result=…` (payload codificado).

## Páginas estáticas indexáveis

Além da SPA principal, o projeto expõe páginas estáticas para buscadores em:

- `https://nathaliagf.github.io/devguia/faq/`
- `https://nathaliagf.github.io/devguia/glossario/`
- `https://nathaliagf.github.io/devguia/mitos/`

Elas existem para SEO e descoberta orgânica. A experiência interativa completa continua centralizada no `index.html`.

## Como usar localmente

Baixe ou clone o repositório e abra `index.html` direto no navegador:

```bash
git clone https://github.com/seu-usuario/devguia.git
cd devguia
open index.html        # macOS
xdg-open index.html   # Linux
start index.html       # Windows
```

Não precisa de servidor, npm, build ou qualquer dependência. Funciona offline.

## Como contribuir

Veja [CONTRIBUTING.md](CONTRIBUTING.md) para as instruções completas.

A forma mais comum de contribuição é adicionar perguntas ao FAQ. As perguntas ficam em `js/data/faq.js`. Cada item segue esta estrutura:

```javascript
{
  id: 'f-minha-pergunta',  // identificador único, prefixo f-
  cat: 'carreira',         // fundamentos | ferramentas | linguagens | carreira | educação | mercado
  q: 'Texto da pergunta?',
  answer: `
    <p>Resposta principal aqui.</p>
    <div class="dica"><strong>Dica:</strong> Dica prática opcional.</div>
    <div class="atencao"><strong>Atenção:</strong> Aviso importante opcional.</div>
  `,
}
```

## Estrutura do projeto

```text
devguia/
├── index.html            ← HTML e CSS da SPA
├── js/
│   ├── app.js            ← lógica da aplicação
│   └── data/
│       ├── questions.js  ← blocos e perguntas do diagnóstico
│       ├── profiles.js   ← perfis vocacionais
│       ├── roadmap.js    ← fases e hints do roadmap
│       ├── faq.js        ← FAQ
│       └── catalog.js    ← glossário, mitos, recursos e conteúdo editorial
├── scripts/
│   ├── generate-static-pages.js
│   └── validate-data.js
├── faq/
├── glossario/
├── mitos/
├── og.svg
├── robots.txt
├── sitemap.xml
├── README.md
└── CONTRIBUTING.md
```

O HTML e o CSS continuam simples e diretos no `index.html`, mas os dados e a lógica agora foram separados para reduzir risco de regressão e facilitar manutenção. Não há build step, transpiler ou dependência externa para a aplicação em si.

## Scripts úteis

```bash
node scripts/validate-data.js
node scripts/generate-static-pages.js
```

- `validate-data.js` valida IDs duplicados e referências internas entre FAQ, roadmap, glossário e perguntas.
- `generate-static-pages.js` recria `faq/`, `glossario/` e `mitos/` a partir da mesma base de dados usada pela SPA.

## Créditos

Feito com HTML5, CSS3 e JavaScript puro. Zero frameworks, zero dependências.

## GoatCounter (opcional)

O projeto suporta tracking anônimo de eventos via GoatCounter.

No `index.html`, substitua apenas:

- `SEU-CODIGO` (subdomínio do GoatCounter)

Importante:

- Não exponha token de leitura da API no frontend. O contador público diário foi removido por segurança.
- Se você quiser exibir métricas agregadas na interface, faça isso por função serverless/edge ou backend intermediário.
- Se não quiser configurar o GoatCounter, mantenha o placeholder `SEU-CODIGO`; o tracking não será disparado.
