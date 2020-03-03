# GraphQL + React => Subscriptions workshop

Workshop to explore GraphQL basic concepts and subscriptions, a take on sockets that works with queries.

## Index

- [Index](#index)
- [Objective](#objective)
- [Who can participate?](#who-can-participate)
- [Friends that will help us](#friends-that-will-help-us)
- [A little background of the UI client](#a-little-background-of-the-UI-client)
- [What the Fork is GraphQL?](#what-the-fork-is-graphql)
- [Set up the stage](#set-up-the-stage)
- [First Time Run](#first-time-run)
- [Resources](#resources)

## Objective

After the workshop, you should be able to identify GraphQL files and explain what it does and how it compares with a normal REST API.

You will learn about subscriptions and you will be able to work with everything on a entry-level basis.

## Who can participate?

Everyone with basic understanding of the following topics can participate:

- Javascript
- Node.js
- Express
- React

## Friends that will help us

- [Prisma](https://www.prisma.io/)
- [GraphQL Yoga](https://github.com/prisma-labs/graphql-yoga)
- [MongoDB](https://www.mongodb.com/)
- [Docker](https://www.docker.com/) 🐳
- [VsCode](https://code.visualstudio.com/)
- [Our API](https://github.corp.globant.com/luca-sartori/workshop-graphql-subscriptions-api) 😁

## A little background of the UI client

It was generated using [create-react-app](https://github.com/facebook/create-react-app).

For the styles, we are using CSS in JS, with [styled-components](https://styled-components.com/).

We ♥ [react hooks](https://reactjs.org/docs/hooks-intro.html), so be sure to know the basis about them.

## What the Fork is GraphQL?

According to the [official GraphQL docs](https://graphql.org/)

> GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.

_so... what does that mean?_

`ONE ENDPOINT` that rules them all, which only gives you the `INFORMATION YOU ASKED FOR` and nothing else. No postprocessing, no multiple calls, nothing extra.

_and what about subscriptions? Why did you mention sockets?_

Again, let's quote [the official docs](https://www.apollographql.com/docs/react/data/subscriptions/)

> GraphQL subscriptions are a way to push data from the server to the clients that choose to listen to real time messages from the server. Subscriptions are similar to queries in that they specify a set of fields to be delivered to the client, but instead of immediately returning a single answer, a result is sent every time a particular event happens on the server.

so, does that ring any bells? Let's look at what our friends at [MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) think about sockets

> The WebSocket API is an advanced technology that makes it possible to open a two-way interactive communication session between the user's browser and a server. With this API, you can send messages to a server and receive event-driven responses without having to poll the server for a reply.

## Set up the stage

- [Node.js](https://nodejs.org/en/download/)

## First Time Run

- `npm i`

## Resources

- https://www.apollographql.com/docs/react/data/subscriptions/
- https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API
- https://reactjs.org/docs/hooks-intro.html
- https://www.prisma.io/docs/understand-prisma/
- https://github.com/prisma-labs/graphql-yoga
- https://www.mongodb.com/
- https://www.docker.com/
