# Como contribuir para o devguia.dev

## Como rodar localmente

Abra `index.html` diretamente no navegador. Sem servidor, sem npm, sem build.

```bash
open index.html        # macOS
xdg-open index.html   # Linux
start index.html       # Windows
```

Para testar edições, salve o arquivo e recarregue a aba do navegador.

---

## Como adicionar uma pergunta ao FAQ

1. Abra `js/data/faq.js`
2. Encontre o array `FAQS`
3. Adicione um novo objeto seguindo o template abaixo
4. Abra o PR com título: `FAQ: [título da pergunta]`

### Template de pergunta FAQ

```javascript
{
  id: 'f-minha-pergunta',     // obrigatório — único, prefixo f-, kebab-case
  cat: 'carreira',            // obrigatório — uma das categorias abaixo
  q: 'Texto da pergunta?',    // obrigatório — frase interrogativa direta
  answer: `
    <p>Resposta principal. Seja direto — sem enrolação.</p>
    <div class="dica"><strong>Dica:</strong> Dica prática e acionável.</div>
    <div class="atencao"><strong>Atenção:</strong> Aviso importante, se necessário.</div>
  `,
}
```

### Categorias disponíveis

| Valor       | Uso                                        |
|-------------|---------------------------------------------|
| fundamentos | Matemática, lógica, conceitos básicos       |
| ferramentas | Terminal, Git, IDEs, IA                     |
| linguagens  | Escolha de linguagem, frameworks            |
| carreira    | Portfólio, emprego, open source, soft skills|
| educação    | Faculdade, cursos, formas de aprender       |
| mercado     | Salário, CLT x PJ, networking, mercado de trabalho |

---

## Como adicionar um perfil vocacional

Os perfis ficam no objeto `PROFILES` em `js/data/profiles.js`. Template:

```javascript
meu_perfil: {
  key: 'meu_perfil',
  icon: '🔧',                           // emoji representativo
  name: 'Nome do Perfil',
  color: 'var(--teal)',                 // use uma das variáveis CSS do design system
  desc: `Descrição honesta do perfil em 2-3 frases.`,
  attention: [
    'Primeiro ponto de atenção específico.',
    'Segundo ponto de atenção.',
  ],
  steps: [
    'Primeiro próximo passo concreto.',
    'Segundo passo.',
    'Terceiro passo.',
  ],
},
```

Para que o perfil seja retornado, adicione uma condição no início da função `calcularPerfil()` em `js/app.js` seguindo a lógica existente. As dimensões disponíveis para scoring estão documentadas nos dados de `QUESTIONS` em `js/data/questions.js`.

---

## Regras de qualidade do conteúdo

**Sem promessas falsas.** Não escreva "você vai aprender X em Y semanas" ou "garantia de emprego". O projeto é explicitamente sobre honestidade vocacional.

**Respostas diretas.** Dê a resposta na primeira frase. Contexto vem depois, não antes.

**Exemplos concretos.** "Contador → BI e dados financeiros" é melhor que "use sua experiência anterior".

**Sem evangelismo de tecnologia.** Não defenda linguagem, framework ou empresa. Dê critérios para o leitor decidir.

**Sem julgamento moral.** Perfis que indicam que TI pode não ser o caminho certo devem ser apresentados com honestidade, não com pessimismo.

---

## Abrindo o PR

- Título: `FAQ: [pergunta]` ou `Perfil: [nome]` ou `Fix: [descrição]`
- Teste abrindo `index.html` localmente antes de submeter
- Rode `node scripts/validate-data.js` se você alterou arquivos em `js/data/`
- Rode `node scripts/generate-static-pages.js` se você alterou FAQ, glossário ou mitos
- PRs com erros de JavaScript que quebrem o quiz ou a navegação serão fechados sem revisão
