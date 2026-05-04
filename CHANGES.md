# CHANGES

Data: 2026-05-04

## Recursos externos mapeados

- `https://gc.zgo.at`
  Script do GoatCounter (`count.js`), agora carregado apenas após consentimento LGPD.
- `https://*.goatcounter.com`
  Endpoint de coleta anônima do GoatCounter, usado pelo script de analytics.

O projeto não carrega fontes externas, CSS externo ou bibliotecas de terceiros além do GoatCounter.

## Alterações realizadas

### `index.html`

- Adicionada `Content-Security-Policy` via `<meta http-equiv>` compatível com GitHub Pages.
- Atualizados metadados Open Graph para usar `og.png` com `type`, `width` e `height`.
- Adicionado banner de consentimento LGPD visível por padrão, com link para a política de privacidade.
- Adicionado script inline mínimo para esconder o banner imediatamente quando o consentimento já existe no `localStorage`.
- Adicionado `FAQPage` JSON-LD com as 10 primeiras perguntas reais do FAQ.
- Adicionados estilos globais de `:focus-visible`.
- Adicionado `aria-live="polite"` ao container dinâmico do quiz.
- Adicionados `aria-label` descritivos aos botões de navegação do quiz.
- Removido o carregamento automático do GoatCounter no HTML; ele agora é carregado sob demanda via JavaScript após consentimento.
- Removidos os `max-width` que restringiam os parágrafos descritivos das seções e da comparação, para que o texto use toda a largura útil do container.

### `js/app.js`

- Adicionado fluxo de consentimento LGPD com persistência em `localStorage`.
- Adicionado carregamento condicional do GoatCounter apenas após consentimento.
- Adicionado `Subresource Integrity` ao script externo do GoatCounter:
  `sha384-OLBgp1GsljhM2TJ+sbHjaiH9txEUvgdDTAzHv2P24donTt6/529l+9Ua0vFImLlb`
- Endurecida a persistência do quiz com `try/catch`, TTL de 7 dias e fallback seguro quando `localStorage` falha.
- Mantida a experiência de retomar o diagnóstico em andamento sem quebrar a URL nem o fluxo atual.
- Ajustado o schema dinâmico para limitar o FAQ a 10 itens, alinhado com rich snippets.

### `privacidade.html`

- Criada nova página estática com política de privacidade.
- Inclui os 7 pontos obrigatórios: coleta, finalidade, compartilhamento, bloqueio, direitos LGPD, contato e última atualização.
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
