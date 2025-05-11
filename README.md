# Template i18n Next.js

Este projeto é um template pronto para desenvolvimento de aplicações Next.js com suporte completo a internacionalização (i18n) usando [next-intl](https://github.com/amannn/next-intl).

## Recursos

- **Internacionalização (i18n)** com carregamento dinâmico de mensagens.
- **Estrutura modular** para traduções por página e seção.
- **Middleware para detecção automática de idioma**.
- **Pronto para produção** com TypeScript, TailwindCSS e ESLint.

---

## Começando

### 1. Instalação

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/Jonhvmp/template-i18n.git
cd template-i18n
npm install
```

### 2. Rodando o projeto

```bash
npm run dev
```

O projeto estará disponível em `http://localhost:6020`.

---

## Estrutura de Pastas

```text
locales/
  ├── en/
  │   ├── common.json
  │   └── pages/
  │       └── home/
  │           ├── hero.json
  │           └── features.json
  └── pt/
      ├── common.json
      └── pages/
          └── home/
              ├── hero.json
              └── features.json
src/
  ├── app/
  │   ├── [locale]/
  │   │   ├── layout.tsx
  │   │   └── page.tsx
  │   └── globals.css
  ├── i18n/
  │   ├── request.ts
  │   └── routing.ts
  └── hooks/
      └── usePageTranslations.ts
middleware.ts
next.config.ts
```

---

## Como adicionar novos idiomas

1. Crie uma nova pasta em `locales/` com o código do idioma (ex: `es` para espanhol).
2. Adicione os arquivos de tradução necessários, seguindo o padrão das pastas existentes.
3. Atualize o array de idiomas suportados em `src/i18n/routing.ts`:

```typescript
export const routing = {
  locales: ['en', 'pt', 'es'],
  defaultLocale: 'en'
};
```

---

## Como adicionar traduções para novas páginas/seções

1. Crie o arquivo de tradução correspondente em `locales/{idioma}/pages/{pagina}/{secao}.json`.
2. No componente, utilize o hook `useTranslations` ou o custom hook `usePageTranslations`:

```typescript
import { usePageTranslations } from '@/hooks/usePageTranslations';

const t = usePageTranslations('home', 'hero');
t('title'); // Busca a chave "title" em pages.home.hero
```

---

## Convenções

- **common.json**: Traduções globais.
- **pages/**: Traduções específicas por página e seção.
- **Chaves**: Use nomes descritivos e evite duplicidade.

---

## Middleware e Detecção de Idioma

O arquivo `middleware.ts` garante que o idioma do usuário seja detectado automaticamente e que as rotas estejam sempre prefixadas pelo locale (`/en`, `/pt`, etc).

---

## Dicas de Desenvolvimento

- Sempre adicione novas chaves de tradução em todos os idiomas suportados.
- Utilize o ESLint para manter a qualidade do código: `npm run lint`.
- Para componentes reutilizáveis, prefira usar traduções do `common.json`.

---

## Deploy

Para build de produção:

```bash
npm run build
npm start
```

---

## Referências

- [Next.js](https://nextjs.org/)
- [next-intl](https://github.com/amannn/next-intl)
- [TailwindCSS](https://tailwindcss.com/)

---

## Licença

MIT
