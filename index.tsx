import SkyeAPI from "./lib/skyeapi";
import React from "react";
import Docs from "./src/pages/docs";

const server = new SkyeAPI;

server.get("/", function (query: any) {
    return query.message
});

server.react_page("/docs", <Docs message="yo"/>)

server.start();