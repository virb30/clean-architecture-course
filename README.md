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

## Updates

This is a project under construction.
Updates on this project will be added in time.

## Directory explanation

- data: directory that represents application data layer
  - protocols: directory containing protocol interfaces
  - usecases: directory that holds the implementations of domain usecases
- domain: directory that represents the application domain, is composed by:
  - models: directory containing the application `entities`
  - usecases: directory that holds the interface for manipulating the models
- presentation: directory that represents the applications's presentation layer through which the user will interact
  - controllers: directory that holds the handlers and protocols of user interactions
  - errors: directory that centralizes the application errors
  - helpers: directory containing application helpers
  - protocols: directory containing protocol interfaces
- utils: directory that holds general adapters
