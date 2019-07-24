This is initial struture for Frugl api server. There is diagram to illustrate the different layers of structure that can be found here:

https://ngndev.atlassian.net/wiki/spaces/FRUG/pages/727646212/Client+Front+End+High+Level+Design

### Dependencies

- Express
  Robust, minimal over native NodeJS http module, provide easy routing composition

- Tedious
  NodeJS MS SQL driver, mandotory to interact with MS SQL server.

- Sequelize
  ORM libary to abstract away DB interaction, allow us to swap underlying DB without changing code significantly.

### Run and dev locally

Install NodeJS 10.x here https://nodejs.org/en

Install yarn for package managment (install / upgrade NodeJS dependencies)

Clone the source repo / pull latest changes

Put the proper .env file in the root of the project. All DB connection and other credentials (e.g, RabbitQ, Redis cache) will be configured here

```sh
$ cd YOU_PROJECT
$ yarn install
# bootstrap based on .env configuration
$ yarn start
```
This allows us to easily config the external resouces and deploy anywhere without changing the code.
