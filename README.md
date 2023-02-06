# Hellenic Space Agency

This repo contains all work related to the public facing website of the Hellenic Space Center

## Running locally

To run this project locally:

1. Install [`nvm`](https://github.com/nvm-sh/nvm) which helps you switch between different
   Node runtimes. Simply follow the instructions [here](https://github.com/nvm-sh/nvm#install--update-script) and validate that it's installed correctly:

```bash
$ nvm -v
> 0.39.2
```

2. Install Node12, use it & make sure it works:

```bash
$ nvm install 12
$ nvm use 12
$ node -v
> v12.22.12
```

3. Download the project, install the requirements and run it:

```
git clone https://github.com/3nvi/hellenic-space-agency
cd hellenic-space-agency

npm i
npm run start
```

4. Visit http://localhost:8000 to see your site

## Creating & Testing a production build

To create a local production build all you need to do is replace `npm run start` above with:

```
npm run build
```

This will create a set of HTML, JS, CSS assets in the `/public` folder. These are fully portable,
so you can move them anywhere and just serve them as is.

---

To serve the production files locally for testing purposes, run:

```
npm run serve
```

and a production-like server will serve your production files in your localhost.

## Deploying Changes

This repo is connected to Netlify through webhooks. Every new push to the `master` branch will
automatically result in a new build and a new deployment.
