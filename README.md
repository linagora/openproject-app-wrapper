# OpenProject app wrapper

A Twake Workplace "shell" web application that embeds an
[OpenProject](https://www.openproject.org) instance inside an iframe.

The application is a thin wrapper: it renders the Twake bar (through the
`cozy-bar` React components, **not** an inline script) and an iframe pointing to
the OpenProject service.

## Configuration — the embedded URL flag

The URL of the embedded OpenProject service is **not** hardcoded. It is read at
runtime from the Twake flag:

```
openproject.embedded-app-url
```

Set this flag (per instance, or globally) to the URL of the OpenProject service,
e.g. `https://openproject.example.org`. When the flag is absent the wrapper
displays a "not configured" screen instead of an iframe.

You can set the flag with the stack CLI, for example:

```sh
cozy-stack instances modify <instance> --flag openproject.embedded-app-url=https://openproject.example.org
```

## Development

This project uses [Rsbuild](https://rsbuild.dev) through the shared
`rsbuild-config-cozy-app` preset. Node version is pinned in `.nvmrc`.

```sh
nvm use
yarn install
yarn start     # dev server served through a local Twake stack
yarn build     # production build into ./build
yarn lint      # eslint + stylint
yarn test      # jest
```

## Publication

Publication to the Twake application registry is automated through GitHub
Actions (`.github/workflows/ci-cd.yml`):

- a **push to `master`** publishes to the `dev` channel,
- a **tag `X.Y.Z`** publishes to the `stable` channel,
- a **tag `X.Y.Z-beta.N`** publishes to the `beta` channel.

Publication relies on `cozy-app-publish` and requires the following repository
secrets:

| Secret | Purpose |
| --- | --- |
| `REGISTRY_TOKEN` | Twake registry editor token |
| `DOWNCLOUD_SSH_KEY` | SSH key used to upload the build to downcloud |

To bump the version, run the **Create Bump PR** workflow
(`.github/workflows/create-bump-pr.yml`) which updates `package.json` and
`manifest.webapp` and opens a pull request.

## License

[AGPL-3.0](./LICENSE)
