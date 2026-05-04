# devguia.dev

Guia vocacional e educacional para pessoas iniciando em TI, em transição de carreira ou tentando entender onde se encaixam na área de tecnologia.

## O que é

Um site estático 100% frontend com três ferramentas:

- **Diagnóstico vocacional** — 15 perguntas divididas em 4 blocos que identificam seu perfil entre 7 categorias
- **Roadmap** — 4 fases de aprendizado com o porquê de cada habilidade, não só o quê
- **FAQ** — 16 respostas diretas para dúvidas que ninguém responde honestamente

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

A forma mais comum de contribuição é adicionar perguntas ao FAQ. As perguntas ficam no array `FAQS` dentro do `index.html`. Cada item segue esta estrutura:

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

```
devguia/
├── index.html       ← aplicação inteira (HTML + CSS + JS inline)
├── README.md
└── CONTRIBUTING.md
```

Toda a aplicação vive em um único arquivo `index.html` autocontido. O CSS está em `<style>` no `<head>` e o JavaScript no final do `<body>`. Não há build step, transpiler ou dependência externa.

## Créditos

Feito com HTML5, CSS3 e JavaScript puro. Zero frameworks, zero dependências.

## GoatCounter (opcional)

O projeto suporta contador anônimo de diagnósticos via GoatCounter.

No `index.html`, substitua os placeholders:

- `SEU-CODIGO` (subdomínio do GoatCounter)
- `SEU-TOKEN-API` (token de leitura da API para o badge diário)

Importante:

- Não commite token real em repositório público.
- Se não quiser configurar, mantenha os placeholders; o badge da home é ocultado automaticamente.
