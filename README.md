# DevLinks

Aplicação **DevLinks** desenvolvida com **React + TypeScript + Vite**, inspirada em páginas de agregação de links (estilo Linktree). O projeto exibe perfil, lista de links externos e redes sociais, com suporte a **tema claro/escuro**, persistência da preferência e layout responsivo.

## Tecnologias e linguagens utilizadas

### Linguagens
- **TypeScript** (`.ts`, `.tsx`) — tipagem estática e implementação dos componentes/lógicas.
- **JavaScript/ESM** — base de configuração e tooling do ecossistema.
- **HTML** — estrutura da aplicação (`index.html`).
- **CSS** — estilos globais, tokens de tema e ajustes complementares (`src/index.css`, `src/App.css`).

### Frameworks e bibliotecas
- **React 19** — construção da interface com componentes funcionais.
- **React DOM** — renderização no navegador.
- **Vite 7** — ambiente de desenvolvimento, build e preview.
- **Tailwind CSS 4** (`tailwindcss`, `@tailwindcss/vite`) — estilização utilitária integrada ao Vite.
- **Phosphor Icons** (`@phosphor-icons/react`) — ícones do controle de alternância de tema.
- **React Icons / Ionicons** (`react-icons`, conjunto `io5`) — ícones das redes sociais.

### Ferramentas de qualidade e tipagem
- **TypeScript** — checagem de tipos (`tsc -b` no build).
- **ESLint** — análise estática de código (`eslint`, `@eslint/js`, `typescript-eslint`, plugins para React Hooks e React Refresh).

### APIs/recursos do navegador
- **localStorage** — persistência da preferência de tema (`light`/`dark`).

## Funcionalidades atuais
- Exibição de perfil (avatar, nome e identificador/contato).
- Lista de links externos em botões (abertura em nova aba com `rel="noopener noreferrer"`).
- Seção de redes sociais com ícones.
- Alternância entre **modo claro e escuro** com controle acessível.
- Persistência e restauração do tema via `localStorage`.
- Aplicação de tema no elemento raiz (`data-theme`) e tokens CSS centralizados.
- Uso de imagens de fundo/avatar por tema e adaptação responsiva (mobile/desktop).

## Estrutura do projeto

```text
src/
├── assets/              # Imagens e arquivos estáticos
├── components/
│   ├── features/        # Componentes de funcionalidades (Profile, LinkButton, SocialLinks)
│   └── ui/              # Componentes de UI reutilizáveis (ThemeToggle)
├── data/                # Dados e tipos (perfil, links, redes sociais)
├── hooks/               # Hooks personalizados (useTheme)
├── App.tsx              # Composição da página
├── App.css              # Ajustes específicos
├── index.css            # Estilos globais, tokens e Tailwind
└── main.tsx             # Ponto de entrada
```

## Como executar

### Pré-requisitos
- **Node.js** (recomendado: versão compatível com as dependências do Vite em uso; o projeto foi validado em ambiente com Node 22.x, podendo haver avisos de engine dependendo da versão exata).
- **npm**

### Instalação
```bash
npm install
```

### Ambiente de desenvolvimento
```bash
npm run dev
```

### Build de produção
```bash
npm run build
```

### Preview do build
```bash
npm run preview
```

### Lint
```bash
npm run lint
```

> No Windows/PowerShell, se houver restrição de execução de scripts (`npm.ps1`), utilize `cmd /c npm run <script>`.

## Observações
- Parte dos conteúdos (textos, URLs e medidas visuais) ainda é **provisória** e deve ser ajustada conforme o Figma/Style Guide e os destinos oficiais do projeto.
- As imagens de fundo e avatar são alternadas conforme o tema selecionado.

## Repositório
- https://github.com/CaueRls/Dev-Links
