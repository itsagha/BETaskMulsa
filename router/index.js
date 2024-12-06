const express = require("express");
const noteRoutes = require("./noteRouter/noteRoutes");

const Router = express();
const api = "/api/v1";
Router.use(api, noteRoutes);

module.exports = Router;
