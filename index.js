require("dotenv").config();

const { Keystone } = require("@keystonejs/keystone");
const { KnexAdapter } = require("@keystonejs/adapter-knex");
const { GraphQLApp } = require("@keystonejs/app-graphql");
const { AdminUIApp } = require("@keystonejs/app-admin-ui");
const { NextApp } = require("@keystonejs/app-next");
const { Text, Decimal } = require("@keystonejs/fields");

const knexOptions = {
  client: "postgres",
  connection: process.env.DB_URI
};

const keystone = new Keystone({
  name: "Keystone Nextjs Starter",
  adapter: new KnexAdapter({ knexOptions })
});

keystone.createList("Post", {
  fields: {
    title: { type: Text, isRequired: true },
    content: { type: Text, isRequired: true },
    created: { type: Decimal, isRequired: true }
  }
});

module.exports = {
  keystone,
  apps: [
    new GraphQLApp(),
    new AdminUIApp({
      adminPath: "/admin"
    }),
    new NextApp({ dir: "site" })
  ]
};
