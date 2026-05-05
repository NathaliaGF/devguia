# CHANGES

Data: 2026-05-04

## Recursos externos mapeados

O projeto não carrega fontes externas, CSS externo, scripts de analytics nem bibliotecas de terceiros.

## Alterações realizadas

### `index.html`

- Adicionada `Content-Security-Policy` via `<meta http-equiv>` compatível com GitHub Pages.
- Atualizados metadados Open Graph para usar `og.png` com `type`, `width` e `height`.
- Adicionado `FAQPage` JSON-LD com as 10 primeiras perguntas reais do FAQ.
- Adicionados estilos globais de `:focus-visible`.
- Adicionado `aria-live="polite"` ao container dinâmico do quiz.
- Adicionados `aria-label` descritivos aos botões de navegação do quiz.
- Removidos os `max-width` que restringiam os parágrafos descritivos das seções e da comparação, para que o texto use toda a largura útil do container.
- Tags e badges de FAQ/glossário foram rebaixadas visualmente: menos contraste, padding menor e posicionamento no rodapé do conteúdo para não competir com título, descrição e exemplo.
- Atualizada a copy da home para refletir o estado atual do produto: 25 perguntas, 13 perfis vocacionais, glossário com 118 termos e resultado com caminho principal/secundário.
- Adicionados na home:
  - banner de progresso global
  - comparador expandido com Segurança, QA, Produto e Suporte
  - seção de mini testes por área
- Adicionado CSS de impressão para exportação visual do resultado.

### `js/app.js`

- Endurecida a persistência do quiz com `try/catch`, TTL de 7 dias e fallback seguro quando `localStorage` falha.
- Mantida a experiência de retomar o diagnóstico em andamento sem quebrar a URL nem o fluxo atual.
- Ajustado o schema dinâmico para limitar o FAQ a 10 itens, alinhado com rich snippets.
- Movidos os metadados de FAQ e glossário para o final dos cards renderizados, preservando a leitura natural do conteúdo principal.
- Adicionado banner de progresso global com:
  - status do diagnóstico
  - fase aberta do roadmap
  - total de itens marcados
- Adicionados mini testes por área (`dados`, `segurança`, `produto` e `infra`) com resultado imediato na home.
- Adicionado botão de exportação visual do resultado via impressão/PDF.
- Ajustado o estado do roadmap aberto para persistir corretamente quando aberto a partir do resultado.

### `privacidade.html`

- Criada nova página estática com política de privacidade.
- Atualizada para refletir o estado atual sem analytics e com armazenamento apenas local no navegador.
- Reutiliza a linguagem visual dark do projeto e inclui CSP, foco visível e metadados sociais.

### `404.html`

- Adicionada CSP via `<meta http-equiv>`.
- Adicionados estilos globais de `:focus-visible`.
- Mantido layout estático e compatível com GitHub Pages.

### `faq/index.html`, `glossario/index.html`, `mitos/index.html`

- Regeneradas com CSP via meta tag.
- Atualizadas para usar `og.png`.
- Adicionados estilos globais de `:focus-visible`.

### `scripts/generate-static-pages.js`

- Atualizado para emitir CSP nas páginas estáticas geradas.
- Atualizado para emitir metadados Open Graph baseados em `og.png`.
- Atualizado para incluir estilos globais de `:focus-visible`.

### `sitemap.xml`

- Ajustado para incluir:
  - `https://nathaliagf.github.io/devguia/`
  - `https://nathaliagf.github.io/devguia/privacidade.html`

### `robots.txt`

- Criado/ajustado para permitir indexação total e apontar para o sitemap.

### `og.png`

- Gerado arquivo PNG `1200x630` para compatibilidade com WhatsApp, Telegram e LinkedIn.

## Observações

- A CSP mantém `'unsafe-inline'` em `script-src` e `style-src` porque o projeto ainda usa scripts e estilos inline.
- O site continua 100% estático, sem backend e compatível com GitHub Pages.

## Remoção de analytics

- Removidas integrações e referências visuais relacionadas a analytics do frontend.
- Removidos banner de consentimento voltado a tracking, badge informativo e lógica de carregamento do GoatCounter.
- Atualizados `README.md`, `privacidade.html` e CSPs para refletir a ausência de analytics.

## Atualizações de quiz e glossário

### `js/app.js`

- Corrigidos os botões de cópia do resultado:
  - `Copiar resultado em TXT` agora gera texto plano com perfil, caminhos, subperfis, áreas recomendadas e próximos passos.
  - `Copiar link` agora copia URL pública com `?resultado=` e payload serializado para abrir o resultado direto.
- Adicionado feedback visual de `Copiado!` por 2 segundos nos dois botões, com fallback para `Falhou` em erro de clipboard.
- Adicionada leitura do parâmetro `resultado` na carga da página, com restauração direta do resultado compartilhado.
- Mantida compatibilidade com links antigos em `#result=...` e com quizzes em andamento no `localStorage`.
- Expandido o resumo do resultado para mostrar caminho principal, caminho secundário e subperfis sugeridos.

### `js/data/questions.js`

- Quiz expandido de 15 para 25 perguntas.
- Mantidos os 15 IDs antigos para preservar compatibilidade com progresso salvo.
- Adicionadas 10 novas perguntas cobrindo:
  - ambiguidade vs processo definido
  - segurança e ameaças
  - automação e infraestrutura
  - dados, métricas e estatística
  - liderança, produto e advocacy
  - risco, estabilidade e perfil investigativo

### `js/data/profiles.js`

- Perfis existentes foram enriquecidos com metadados para compartilhamento e recomendação.
- Novos perfis adicionados:
  - `seguranca`
  - `qa_teste`
  - `produto`
  - `tech_lead`
  - `developer_advocate`
  - `suporte`

### `js/data/roadmap.js`

- Adicionado encaixe de roadmap e hint específico para os novos perfis, evitando fallback genérico no resultado.

### `js/data/catalog.js`

- Glossário expandido para 118 termos, mantendo ordem alfabética no retorno dos dados.
- Mantidos os IDs antigos usados por FAQ e links internos.
- Adicionadas categorias novas de glossário:
  - `seguranca`
  - `dados`
  - `cloud`
  - `qa`
  - `produto`
- Ajustados metadados de cor e área para suportar os novos filtros e a área de Segurança no resultado.
- Comparador de áreas expandido de 4 para 8 trilhas:
  - front-end
  - back-end
  - dados
  - infra/cloud
  - segurança
  - QA
  - produto
  - suporte
- Adicionados 4 mini testes por área para triagem rápida na home.
- Recursos específicos adicionados para:
  - `seguranca`
  - `qa_teste`
  - `produto`
  - `tech_lead`
  - `developer_advocate`
  - `suporte`
- Mitos por especialidade adicionados:
  - segurança
  - dados
  - DevOps
  - produto
  - suporte

### `js/data/faq.js`

- FAQ expandido de 16 para 34 perguntas.
- Novos tópicos adicionados:
  - QA
  - base para segurança
  - pentest
  - SOC
  - PM/PO
  - suporte/help desk
  - dados no início
  - BI vs ciência de dados
  - cloud
  - DevOps júnior
  - tech lead
  - developer advocate
  - entrevistas em dados e segurança
  - salário em dados
  - freelance como entrada

### `index.html`

- Filtros do glossário atualizados para incluir `Segurança`, `Dados`, `Cloud`, `QA` e `Produto`.

### `README.md`

- Atualizada a descrição do diagnóstico para refletir 25 perguntas, caminhos principal/secundário e compartilhamento por query string.

### `faq/index.html`, `glossario/index.html`, `mitos/index.html`

- Regeneradas a partir da base atualizada após a expansão do glossário.
