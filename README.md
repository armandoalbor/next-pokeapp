Pokeapp is a [Next.js](https://nextjs.org/) project bootstrapped with
[`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Start dev server

1. Install nested dependencies

```bash
$ yarn install
# or
$ npm install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
```

## Dockerize app

1. Run `yarn docker:buildimg` this script execute the following command:

```bash
$ docker build -t nextjs-initial .
```

2. Run `yarn docker:run` this script execute the following command:

```bash
$ docker run --name=next-app -p 3000:3000 nextjs-initial
```

3. Access to app in your browser tipying `https://localhost:3000`

# Relevant functionality

## Incremental Static Regeneration (ISR)

### Create static pages with data retrieved from api

1. `getStaticProps`: We use it to generate the data that is provided to the
   static pages at the server level.
2. `getStaticPaths`: With this we managed to generate 151 static pages to search
   for pokemons by name or id.

## Incremental Static Generation (ISG)

### Regenerate static pages every determined time or on demand

3. `getStaticProps [revalidate]`: It is used to tell next how long it takes to
   regenerate the static pages, this time is indicated in seconds. For example,
   if we want to do it every 24 hours, the value should be 86400

```
getStaticPaths
...
    fallback: 'blocking', // Allow fallback to render component without pre loaded data
...


getStaticProps
...
if (!pokemon) {
    return {
        redirect: {
        destination: '/',
        permanent: false,
        }
    };
}

return {
    props: {
      pokemon,
    },
    revalidate: 86400, // 60 * 60 * 24
};
...
```
