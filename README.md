# Hellenic Space Agency

This repo contains all work related to the public facing website of the Hellenic Space Agency

## Running locally

To run this project locally, simply:

```
git clone https://github.com/3nvi/hellenic-space-agency
cd hellenic-space-agency
npm run start
```

## Creating & Testing a production build

To create a local production build all you need to do is run:

```
npm run build
```

This will create a set of HTML, JS, CSS assets in the `/public` folder. These are fully portable,
so you can move them anywhere and just serve them as is.

---

To serve them locally - for testing - purposes, run:

```
npm run serve
```

and a production-like server will serve your production files in your localhost.

## Deploying Changes

This repo is connected to Netlify through webhooks. Every new push to the `master` branch will
automatically result in a new build and a new deployment.
