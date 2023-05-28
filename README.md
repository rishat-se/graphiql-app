# graphiql-app

GraphiQL is a playground/IDE for graphQL requests. RS School React 2023Q1 Final Team Task.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Prerequisites

- Git - [Download & Install Git](https://git-scm.com/downloads).
- Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager.

## Downloading and installing

```
git clone https://github.com/rishat-se/graphiql-app.git
```

```
cd graphiql-app
```

```
git checkout develop
```

```
npm install
```

## Configure

create .env.local in the root directory and put your Firebase credentials inside this file under as following variables:

```
NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY=xxx
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=xxx
NEXT_PUBLIC_FIREBASE_PROJECT_ID=xxx
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=xxx
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=xxx
NEXT_PUBLIC_FIREBASE_APP_ID=xxx
```

## Running application in dev mode

```
npm run dev
```

After starting the app on port (3000 as default) you can open
it in your browser by typing http://localhost:3000

## Build application for production

```
npm run build
```
