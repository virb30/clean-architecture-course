# Clean-architecture, TDD, SOLID, DDD with Typescript

Repository to store projects of study.

## Use Case

Development of a survey application (with signIn and signup) using techniques like:

- TDD
- DDD
- SOLID
- Clean Architecture
- Conventional Commits
- Style guide (standard)
- and others

### Libraries

- Typescript
- Express
- Bcrypt
- MongoDb
- Jest
- Eslint
- git (add, commit, stash, log, status)
- @shef/jest-mongodb
- supertest
- sucrase

## Updates

This is a project under construction.
Updates on this project will be added in time.

## Directory explanation

- **data**: directory that represents application data layer
  - _protocols_: directory containing protocol interfaces
  - _usecases_: directory that holds the implementations of domain usecases
- **domain**: directory that represents the application domain, is composed by:
  - _models_: directory containing the application `entities`
  - _usecases_: directory that holds the interface for manipulating the models
- **presentation**: directory that represents the applications's presentation layer through which the user will interact
  - _controllers_: directory that holds the handlers and protocols of user interactions
  - _errors_: directory that centralizes the application errors
  - _helpers_: directory containing application helpers
  - _protocols_: directory containing protocol interfaces
- **utils**: directory that holds general adapters
- **infra**: directory containing implementations that uses external libraries
- **main**: directory that represents the application main layer
  - _adapters_: directory containing adapters wich will isolate application of framework dependency
  - _config_: contains configuration files
  - _factories_: directory containing the controllers factories files
  - _middlewares_: contains middlewares of application routes
  - _routes_: directory containing application routes
  - _server.ts_: main application file that starts the server

## Layers

### Main Layer

Layer that instanciates all the other layers. This layer is highly coupled and knows all the others layers

### Data Layer

Layer responsible to interface presentation and infra layers with the `persistence mechanism` (such as databases)

### Domain Layer

Application core layer that holds all `business rules`

### Presentation Layer

Layer responsible to `handle` user interactios

### Utils Layer

Layer containing generic `utility files`

### Infra Layer

Layer responsible to communicate with the proper external world dependencies (such criptography library, database engine)
