<p align="center">
  <img src="https://github.com/gilamran/fullstack-typescript/raw/master/assets/images/logo.png" width="120">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>
<p align="center">Fullstack React/Typescript/NestJs starter, heavily based off of <a href="https://github.com/gilamran/fullstack-typescript" target="blank">fullstack-typescript</a> by <a href="https://github.com/gilamran" target="blank">gilamran</a>.</p>

---

### Quick Start

Just fork the repo and then clone your forked repository into your own project folder.

```
git clone <YourRepoUrl> <YourProjectName>
cd <YourProjectName>
npm install
cp .env.example .env
docker-compose up
npm start
```

If you want, you can just clone and detach from this repository into your own repository do this:

```
git clone https://github.com/heuristicAL/fullstack-ts-react-nest.git <YourProjectName>
cd <YourProjectName>
git remote remove origin
git remote add origin YOUR_REPO_URL
git push -u origin master
```

## Why

- **Simple** to jump into, **Fast** because it is simple.
- Separate `tsconfig.json` for client and server.
- Client and server can share code (And types).
- The client is bundled using [Webpack](https://webpack.github.io/) because it goes to the browser.
- The server is emitted by [TypeScript](https://github.com/Microsoft/TypeScript) because node 6 supports es6.

<p align="center"> 
<img src="https://github.com/gilamran/fullstack-typescript/raw/master/assets/images/flow.png" width="500">
</p>

---

### Directory Layout

```
.
├── /node_modules/                  # 3rd-party libraries and utilities
├── /dist/                          # All the generated files will go here, and will run from this folder
├── /assets/                        # images, css, jsons etc.
├── /client/                        # React app
├── /server/                        # Express server app.
    ├── /spa/                       # Global path that loads the client React app.
    ├── /api/                       # Api REST endpoints.
├── /shared/                        # The shared code between the client and the server
├── /views/                         # the views for the server (currently only loads the react app)
├── .babelrc                        # babel configuration
├── .gitignore                      # ignored git files and folders
├── .nvmrc                          # Force nodejs version
├── .env                            # (ignored) Can be used to override environment variables
├── docker-compose.build.yml        # docker-compose for building prod image
├── docker-compose.yml              # docker-compose for running dependencies locally
├── package.json                    # The list of 3rd party libraries and utilities
└── tslint.json                     # TypeScript linting configuration file
└── tsconfig.json                   # TypeScript configuration file
└── tsconfig.webpack-config.json    # TypeScript configuration file
├── README.md                       # This file
```

### What's included

- [React v16](https://facebook.github.io/react/)
- [React router v5](https://github.com/ReactTraining/react-router)
- [Ant Design](https://ant.design/)
- [Jest](https://github.com/facebook/jest)
- [Css modules](https://github.com/css-modules/css-modules)
- [Axios-Observable](https://github.com/zhaosiyang/axios-observable) (For Client/Server communication)
- [NestJs](https://github.com/nestjs/nest)

### Usage
> Before running any of the following commands, you should cope `.env.example` to `.env` in the root directory, substituting in your own variables.<br/>
> **Read the docker commands below to setup a local DB for the server.**

- `npm start` - Client and server are in watch mode with source maps, opens [http://localhost:3000](http://localhost:3000)
- `npm run test` - Runs jest tests
- `npm run build` - `dist` folder will include all the needed files, both client (Bundle) and server.
- `npm run prod` - Just runs `node ./dist/server/server.js`, run `npm run build` before this.

#### Docker commands

- `docker-compose up` - Spins up a local Postgres image, reading environment variables from the root `.env` file.
- `docker-compose -f ./docker-compose.build.yml build` - Builds a production docker image for the app. **Run the npm build script first**
- `docker-compose -f ./docker-compose.build.yml up` - Spins up the production docker container. Builds it first if it has not been built yet.

### Config

All applications require a config mechanism, for example, `SLACK_API_TOKEN`. Things that you don't want in your git history, you want a different environment to have different value (dev/staging/production). This repo uses the file `config.ts` to access and setup all pre-nest init app variables. And a `.env` file to override variable in dev environment. This file is ignored from git.
Once Nest is up and running, there is a [ConfigService](https://github.com/heuristicAL/fullstack-ts-react-nest/blob/master/server/src/config/config.service.ts) which can be injected on-demand.

---

#### What's not included

- Universal (Server side rendering)
- Redux/MobX (State management)

#### Requirements

- Node 6+

---

#### Licence

This code is released as is, under MIT licence. Feel free to use it for free for both commercial and private projects. No warranty provided.
