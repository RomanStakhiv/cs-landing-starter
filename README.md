<p align="center">
  <img src="https://user-images.githubusercontent.com/26466516/141659551-d7ba5630-7200-46fe-863b-87818dae970a.png" alt="Next.js TypeScript Starter">
</p>

<br />

<div align="center"><strong>Non-opinionated TypeScript starter for Next.js</strong></div>
<div align="center">Highly scalable foundation with the best DX. All the tools you need to build your next project.</div>

<br />

<div align="center">
  <img src="https://img.shields.io/static/v1?label=PRs&message=welcome&style=flat-square&color=5e17eb&labelColor=000000" alt="PRs welcome!" />

  <img alt="License" src="https://img.shields.io/github/license/jpedroschmitz/typescript-nextjs-starter?style=flat-square&color=5e17eb&labelColor=000000">

  <a href="https://twitter.com/intent/follow?screen_name=jpedroschmitz">
    <img src="https://img.shields.io/twitter/follow/jpedroschmitz?style=flat-square&color=5e17eb&labelColor=000000" alt="Follow @jpedroschmitz" />
  </a>
</div>

<div align="center">
  <sub>Created by <a href="https://twitter.com/jpedroschmitz">JoÃ£o Pedro</a> with the help of many <a href="https://github.com/jpedroschmitz/typescript-nextjs-starter/graphs/contributors">wonderful contributors</a>.</sub>
</div>

<br />

### ð´ï¸ Important! Node.js version should be more than 17.5.0 or equal

## Features

- â¡ï¸ Next.js 12
- âï¸ React 18
- â TypeScript
- ð ESLint â To find and fix problems in your code
- ð Prettier â Code Formatter for consistent style
- ð¶ Husky â For running scripts before committing
- ð Commitlint â To make sure your commit messages follow the convention
- ð Renovate â To keep your dependencies up to date
- ð« lint-staged â Run ESLint and Prettier against staged Git files
- ð· PR Workflow â Run Type Check & Linters on Pull Requests
- âï¸ EditorConfig - Consistent coding styles across editors and IDEs
- ð Path Mapping â Import components or images using the `@` prefix

## Quick Start

The best way to start with this template is using [Create Next App](https://nextjs.org/docs/api-reference/create-next-app).

```
# yarn
yarn create next-app -e https://github.com/jpedroschmitz/typescript-nextjs-starter
# npm
npx create-next-app -e https://github.com/jpedroschmitz/typescript-nextjs-starter
# pnpm
pnpm create next-app -e https://github.com/jpedroschmitz/typescript-nextjs-starter
```

### Development

To start the project locally, run:

```bash
pnpm dev
```

Open `http://localhost:3000` with your browser to see the result.

## Testimonials

> [**âThis starter is by far the best TypeScript starter for Next.js. Feature packed but un-opinionated at the same time!â**](https://github.com/jpedroschmitz/typescript-nextjs-starter/issues/87#issue-789642190)<br>
> â Arafat Zahan

> [**âI can really recommend the Next.js Typescript Starter repo as a solid foundation for your future Next.js projects.â**](https://corfitz.medium.com/create-a-custom-create-next-project-command-2a6b35a1c8e6)<br>
> â Corfitz

> [**âBrilliant work!â**](https://github.com/jpedroschmitz/typescript-nextjs-starter/issues/87#issuecomment-769314539)<br>
> â Soham Dasgupta

## Showcase

List of websites that started off with Next.js TypeScript Starter:

- [dowhile.io](https://dowhile.io)
- [hygraph.com](https://hygraph.com)
- [mobg.com.br](https://mobg.com.br)
- [nextlevelweek.com](https://nextlevelweek.com)
- [rocketseat.com.br](https://www.rocketseat.com.br)
- [unfork.vercel.app](https://unfork.vercel.app)
- [Add yours](https://github.com/jpedroschmitz/typescript-nextjs-starter/edit/main/README.md)

## Documentation

### Requirements

- Node.js >= 12.22.0
- pnpm 7

### Directory Structure

- [`.github`](.github) â GitHub configuration including the CI workflow.<br>
- [`.husky`](.husky) â Husky configuration and hooks.<br>
- [`public`](./public) â Static assets such as robots.txt, images, and favicon.<br>
- [`src`](./src) â Application source code, including pages, components, styles.

### Scripts

- `pnpm dev` â Starts the application in development mode at `http://localhost:3000`.
- `pnpm build` â Creates an optimized production build of your application.
- `pnpm start` â Starts the application in production mode.
- `pnpm type-check` â Validate code using TypeScript compiler.
- `pnpm lint` â Runs ESLint for all files in the `src` directory.
- `pnpm format` â Runs Prettier for all files in the `src` directory.

### Path Mapping

TypeScript are pre-configured with custom path mappings. To import components or files, use the `@` prefix.

```tsx
import { Button } from '@/components/Button';

// To import images or other files from the public folder
import avatar from '@/public/avatar.png';
```

### Switch to Yarn/npm

This starter uses pnpm by default, but this choice is yours. If you'd like to switch to Yarn/npm, delete the `pnpm-lock.yaml` file, install the dependencies with Yarn/npm, change the CI workflow, and Husky Git hooks to use Yarn/npm commands.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for more information.
