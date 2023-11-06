# Issue Tracker App

A Fullstack App with Next.js, Prisma, and Postgres.

## Getting Started

Install dependencies:

```bash
npm install
# or
yarn
```

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech Stack

<a href="https://react.dev/" target="_blank" rel="noreferrer"> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a>
<a href="https://nextjs.org/" target="_blank" rel="noreferrer"> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" alt="nextjs" width="40" height="40"/> </a>
<a href="https://tailwindcss.com/" target="_blank" rel="noreferrer"> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" alt="tailwind" width="40" height="40"/> </a>
<a href="https://www.postgresql.org/" target="_blank" rel="noreferrer"> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain-wordmark.svg" alt="postgresql" width="40" height="40"/>
<a href="https://www.prisma.io/" target="_blank" rel="noreferrer"> <img src="https://prismalens.vercel.app/header/logo-dark.svg" alt="prisma" width="40" height="40"/>

## Authors

- [@Asif Munshi](https://www.github.com/asif-munshi)

## Notes

```bash
dotenv -e .env.local npx prisma db push

dotenv -e .env.local npx prisma studio
```

```bash
npx prisma init --datasource-provider postgresql

dotenv -e .env.local npx prisma migrate dev --name init0

npm install @prisma/client
```
