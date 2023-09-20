import SkyeAPI from "./lib/skyeapi";
import Docs from "./pages/docs";
import React from "react";

const server = new SkyeAPI;

server.get("/", function (query: any) {
    return query.message
});

server.react_page("/docs", <Docs message="yo"/>)

server.start();