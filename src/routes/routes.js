import Controller from "../controller/homeConttroller";
import express from "express";

const router = express.Router();

const routes = (app) => {
    router.get("/", Controller.homePage);
    return app.use("/", router);
};

module.exports = routes;
