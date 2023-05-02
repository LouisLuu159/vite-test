# vite-react-docker

Demo repo showing how to Dockerize a Vite React app and run as a static website using NGINX.

## Dependencies

Make sure you have the following installed:

- [Node](https://nodejs.org/en/)
- [Docker](https://docs.docker.com/get-docker/)

The React app was bootstrapped using [Vite](https://vitejs.dev/).

## Installation and running locally

```sh
yarn install
yarn dev
```

## Building and running in Docker

# development environment

```sh
docker-compose -f docker-compose.dev -d
```

Exposed in: http://locahost:3000

# production environment

```sh
docker-compose up -d
```

Exposed in: http://localhost
