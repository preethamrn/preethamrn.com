# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# bun
bun dev -o
```

NOTE: When bun is running, if you try to build for production, it will cause the posts page to not show up (probably because the .ouput folder is in use and can't be probably updated).

## Production

Deploy the build to production (or optionally staging). If deploying to production, it will prompt for user to input y/N to continue the deployment.

```bash
./deploy.sh [staging]
```

Locally preview production build:

```bash
# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
