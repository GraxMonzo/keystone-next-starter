require("dotenv").config();

const withCSS = require("@zeit/next-css");

const serverUrl = process.env.SERVER_URL || "http://localhost:3000";

module.exports = withCSS({
  publicRuntimeConfig: {
    serverUrl
  }
});
